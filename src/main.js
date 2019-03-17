// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  created(){ initPCSS() }
})

function initPCSS(){
  let PCSS = `
  #define LIGHT_WORLD_SIZE 0.005
  #define LIGHT_FRUSTUM_WIDTH 3.75
  #define LIGHT_SIZE_UV (LIGHT_WORLD_SIZE / LIGHT_FRUSTUM_WIDTH)
  #define NEAR_PLANE 25.0
  #define NUM_SAMPLES 6
  #define NUM_RINGS 1
  #define BLOCKER_SEARCH_NUM_SAMPLES NUM_SAMPLES
  #define PCF_NUM_SAMPLES NUM_SAMPLES
  vec2 poissonDisk[NUM_SAMPLES];
  void initPoissonSamples( const in vec2 randomSeed ) {
  float ANGLE_STEP = PI2 * float( NUM_RINGS ) / float( NUM_SAMPLES );
  float INV_NUM_SAMPLES = 1.0 / 10.0;
  float angle = rand( randomSeed ) * PI2;
  float radius = INV_NUM_SAMPLES;
  float radiusStep = radius;
  for( int i = 0; i < NUM_SAMPLES; i ++ ) {
  poissonDisk[i] = vec2( cos( angle ), sin( angle ) ) * pow( radius-0.025, 2.0 );
  radius += radiusStep;
  angle += ANGLE_STEP;
  }
  }
  float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
  return (zReceiver - zBlocker) / zBlocker;
  }
  float findBlocker( sampler2D shadowMap, const in vec2 uv, const in float zReceiver ) {
  // This uses similar triangles to compute what
  // area of the shadow map we should search
  float searchRadius = LIGHT_SIZE_UV * ( zReceiver - NEAR_PLANE ) / zReceiver;
  float blockerDepthSum = 0.0;
  int numBlockers = 0;
  for( int i = 0; i < BLOCKER_SEARCH_NUM_SAMPLES; i++ ) {
  float shadowMapDepth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[i] * searchRadius));
  if ( shadowMapDepth < zReceiver ) {
  blockerDepthSum += shadowMapDepth;
  numBlockers ++;
  }
  }
  if( numBlockers == 0 ) return -1.0;
  return blockerDepthSum / float( numBlockers );
  }
  float PCF_Filter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius ) {
  float sum = 0.0;
  for( int i = 0; i < PCF_NUM_SAMPLES; i ++ ) {
  float depth = unpackRGBAToDepth( texture2D( shadowMap, uv + poissonDisk[ i ] * filterRadius ) );
  if( zReceiver <= depth ) sum += 1.0;
  }
  for( int i = 0; i < PCF_NUM_SAMPLES; i ++ ) {
  float depth = unpackRGBAToDepth( texture2D( shadowMap, uv + -poissonDisk[ i ].yx * filterRadius ) );
  if( zReceiver <= depth ) sum += 1.0;
  }
  return sum / ( 2.0 * float( PCF_NUM_SAMPLES ) );
  }
  float PCSS ( sampler2D shadowMap, vec4 coords ) {
  vec2 uv = coords.xy;
  float zReceiver = coords.z; // Assumed to be eye-space z in this code
  initPoissonSamples( uv );
  // STEP 1: blocker search
  float avgBlockerDepth = findBlocker( shadowMap, uv, zReceiver );
  //There are no occluders so early out (this saves filtering)
  if( avgBlockerDepth == -1.0 ) return 1.0;
  // STEP 2: penumbra size
  float penumbraRatio = penumbraSize( zReceiver, avgBlockerDepth );
  float filterRadius = penumbraRatio * LIGHT_SIZE_UV * NEAR_PLANE / zReceiver;
  // STEP 3: filtering
  //return avgBlockerDepth;
  return PCF_Filter( shadowMap, uv, zReceiver, filterRadius );
  }
  `
    // overwrite shadowmap code
    var shader = THREE.ShaderChunk.shadowmap_pars_fragment;
    // console.log('#ifdef USE_SHADOWMAP' +
    //     document.getElementById('PCSS').textContent)
    shader = shader.replace(
        '#ifdef USE_SHADOWMAP',
        '#ifdef USE_SHADOWMAP' +
        PCSS
    );
  
    let PCSSGetShadow = `return PCSS( shadowMap, shadowCoord );
    `
    
    shader = shader.replace(
        '#if defined( SHADOWMAP_TYPE_PCF )',
        PCSSGetShadow +
        '#if defined( SHADOWMAP_TYPE_PCF )'
    );
    // console.log(document.getElementById('PCSSGetShadow').textContent +
    //     '#if defined( SHADOWMAP_TYPE_PCF )')
    THREE.ShaderChunk.shadowmap_pars_fragment = shader;
}