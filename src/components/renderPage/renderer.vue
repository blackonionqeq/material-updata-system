<template>
  <div class="renderer-container">
    <div>
      <!-- <h1>This is content</h1> -->
      <div class="canvas-container">
        <div id="canvas-frame" @dblclick="onClickShoe"></div>
        <div class="model-info-container" :class="{ hidden: iconShowFlag === 0 }">
          <!-- Tips of how to use -->
          <img src="@/../static/imgs/icons/icon_18.png" @click="showOperationTips()">
          <span></span>
          <div>
            <img src="@/../static/imgs/icons/icon_14.png">
            <div>12/1/19</div>
          </div>
          <div>
            <img src="@/../static/imgs/icons/icon_15.png">
            <div>1/2/19</div>
          </div>
          <img src="@/../static/imgs/icons/icon_13.png" @click="showModelInfo()">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // Renderer
      group: null,
      lights: null,
      scene: null,
      camera: null,
      container: null,
      stats: null,
      controls: null,
      renderer: null,
      model: null,
      // Frame large scale
      windowWidth: null,
      windowHeight: null,
      // Animate
      fpsInterval: 1000/15,
      now: null,
      then: Date.now(),
      elapsed: null,
      // Render pointer
      // pointer: null
      gui: null,
      // Flag set on show or hide tips_icon
      iconShowFlag: 0,
    }
  },
  methods: {
    showOperationTips() {
      this.$store.dispatch('setShowFlag', 2)
    },
    showModelInfo() {
      this.$store.dispatch('setShowFlag', 1)
    },
    TriPhongMaterial() {
      var myPhongVertex = [
          
                "#define PHONG										 ",
                "varying vec3 vViewPosition;		",
                "#ifndef FLAT_SHADED					 ",
                "	varying vec3 vNormal;					 ",
                "#endif																 ",
                " varying vec4 myWorldPos;																				",
                " varying vec3 myWorldNormal;																		",
                THREE.ShaderChunk["common"],
                // THREE.ShaderChunk["uv_pars_vertex"],
                "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP ) ",
                "	varying vec2 vUv;								    ",
                "	varying mat3 uvTransformFrag;								    ",
                "	uniform mat3 uvTransform;		  ",
                "#endif																   ",
                THREE.ShaderChunk["uv2_pars_vertex"],
                THREE.ShaderChunk["displacementmap_pars_vertex"],
                THREE.ShaderChunk["envmap_pars_vertex"],
                THREE.ShaderChunk["color_pars_vertex"],
                THREE.ShaderChunk["fog_pars_vertex"],
                THREE.ShaderChunk["morphtarget_pars_vertex"],
                THREE.ShaderChunk["skinning_pars_vertex"],
                THREE.ShaderChunk["shadowmap_pars_vertex"],
                THREE.ShaderChunk["logdepthbuf_pars_vertex"],
                THREE.ShaderChunk["clipping_planes_pars_vertex"],
                "void main() {",
                "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP ) ",
                "uvTransformFrag = uvTransform;",
                "#endif																			    ",
                " myWorldPos = vec4( position, 1.0 );													",
                " myWorldNormal = normal;																				",
                THREE.ShaderChunk["uv_vertex"],
                THREE.ShaderChunk["uv2_vertex"],
                THREE.ShaderChunk["color_vertex"],
                THREE.ShaderChunk["beginnormal_vertex"],
                THREE.ShaderChunk["morphnormal_vertex"],
                THREE.ShaderChunk["skinbase_vertex"],
                THREE.ShaderChunk["skinnormal_vertex"],
                THREE.ShaderChunk["defaultnormal_vertex"],
                "#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED	 ",
                "	vNormal = normalize( transformedNormal );																								 ",
                "#endif																																																	 ",
                THREE.ShaderChunk["begin_vertex"],
                THREE.ShaderChunk["morphtarget_vertex"],
                THREE.ShaderChunk["skinning_vertex"],
                THREE.ShaderChunk["displacementmap_vertex"],
                THREE.ShaderChunk["project_vertex"],
                THREE.ShaderChunk["logdepthbuf_vertex"],
                THREE.ShaderChunk["clipping_planes_vertex"],
                "vViewPosition = - mvPosition.xyz;",
                THREE.ShaderChunk["worldpos_vertex"],
                THREE.ShaderChunk["envmap_vertex"],
                THREE.ShaderChunk["shadowmap_vertex"],
                THREE.ShaderChunk["fog_vertex"],
                "}"
      ].join("\n");
      var myPhongFragment = [
                "#define PHONG						",
                "uniform vec3 diffuse;			",
                "uniform vec3 emissive;	",
                "uniform vec3 specular;	",
                "uniform float shininess;	",
                "uniform float opacity;			",
                "uniform float myScale;												   ",
                "uniform float triBlend;											  ",
                " varying vec4 myWorldPos;																				",
                " varying vec3 myWorldNormal;																		",
                THREE.ShaderChunk["common"],
                THREE.ShaderChunk["packing"],
                THREE.ShaderChunk["dithering_pars_fragment"],
                THREE.ShaderChunk["color_pars_fragment"],
                //THREE.ShaderChunk["uv_pars_fragment"],
                "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP ) ",
                "	varying vec2 vUv;												 ",
                "	varying mat3 uvTransformFrag;			 ",
                "#endif																			    ",

                "vec4 triTexture2D(sampler2D map, vec2 vuv, mat3 uvTrans){ ",
                "//#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP ) ",
                " vec4 outMap = texture2D(map, vuv); ",

                "vec2 xUV = myWorldPos.yz / myScale;			   ",
                "vec2 yUV = myWorldPos.xz / myScale;			   ",
                "vec2 zUV = myWorldPos.xy / myScale;			   ",
                " xUV = (uvTrans * vec3(xUV, 1)).yx;       ",
                " yUV = (uvTrans * vec3(yUV, 1)).xy;       ",
                " zUV = (uvTrans * vec3(zUV, 1)).xy;       ",

                "vec4 xDiff = texture2D(map, xUV);		",
                "vec4 yDiff = texture2D(map, yUV);		",
                "vec4 zDiff = texture2D(map, zUV);		",

                "   #ifdef TRIPLANAR_THREEMAPS																						   ",
                "       float x = abs(myWorldNormal.x);				",
                "       float y = abs(myWorldNormal.y);				",
                "       float z = abs(myWorldNormal.z);				",
                "       if(x > y && x > z)															",
                "       {																								",
                "        outMap = xDiff;												",
                "       }																								",
                "       if(y > x && y > z)															",
                "       {																								",
                "         outMap = yDiff;												",
                "       }																								",
                "       if(z > y && z > x)															",
                "       {																								",
                "        outMap = zDiff;												",
                "       }																								",
                "   #endif																													",

                "   #ifdef TRIPLANAR_BLEND																						   ",
                " //vec3 blendWeights = normalize(pow(abs(myWorldNormal), triBlend));											  ",
                " //blendWeights = blendWeights / (blendWeights.x + blendWeights.y + blendWeights.z);			",
                " vec3 blendWeights = abs(myWorldNormal);																													   ",
                " blendWeights = blendWeights / (blendWeights.x + blendWeights.y + blendWeights.z);			   ",
                " outMap = xDiff * blendWeights.x + yDiff * blendWeights.y + zDiff * blendWeights.z;			 ",
                "   #endif			",

                " return outMap; ",
                "//#endif																													",
                " } ",

                THREE.ShaderChunk["uv2_pars_fragment"],
                THREE.ShaderChunk["map_pars_fragment"],
                THREE.ShaderChunk["alphamap_pars_fragment"],
                THREE.ShaderChunk["aomap_pars_fragment"],
                THREE.ShaderChunk["lightmap_pars_fragment"],
                THREE.ShaderChunk["emissivemap_pars_fragment"],
                THREE.ShaderChunk["envmap_pars_fragment"],
                THREE.ShaderChunk["gradientmap_pars_fragment"],
                THREE.ShaderChunk["fog_pars_fragment"],
                THREE.ShaderChunk["bsdfs"],
                THREE.ShaderChunk["lights_pars_begin"],
                THREE.ShaderChunk["lights_phong_pars_fragment"],
                THREE.ShaderChunk["shadowmap_pars_fragment"],
                THREE.ShaderChunk["bumpmap_pars_fragment"],
                //THREE.ShaderChunk["normalmap_pars_fragment"],
                "#ifdef USE_NORMALMAP								 ",
                "	uniform sampler2D normalMap;			  ",
                "	uniform vec2 normalScale;							",
                "	#ifdef OBJECTSPACE_NORMALMAP   ",
                "		uniform mat3 normalMatrix;					 ",
                "	#else																				  ",
                "		// Per-Pixel Tangent Space Normal Mapping																													   ",
                "		// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html  ",
                "		vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {																				",
                "			// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988																			  ",
                "			vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );												  ",
                "			vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );												   ",
                "			vec2 st0 = dFdx( vUv.st );																																									   ",
                "			vec2 st1 = dFdy( vUv.st );																																										",
                "			float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude						",
                "			vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );					  ",
                "			vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );			   ",
                "			vec3 N = normalize( surf_norm );															   ",
                "			mat3 tsn = mat3( S, T, N );																					  ",

                "			vec3 mapN =triTexture2D( normalMap, vUv,  uvTransformFrag).xyz * 2.0 - 1.0;	 ",

                "			mapN.xy *= normalScale;																					",
                "			mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );								",
                "			return normalize( tsn * mapN );																	 ",
                "		}",
                "	#endif",
                "#endif",
                THREE.ShaderChunk["specularmap_pars_fragment"],
                THREE.ShaderChunk["logdepthbuf_pars_fragment"],
                THREE.ShaderChunk["clipping_planes_pars_fragment"],

                "void main() {",
                THREE.ShaderChunk["clipping_planes_fragment"],
                "vec4 diffuseColor = vec4( diffuse, opacity );																																	 ",
                "ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );	  ",
                "vec3 totalEmissiveRadiance = emissive;																																			 ",
                THREE.ShaderChunk["logdepthbuf_fragment"],
                //THREE.ShaderChunk["map_fragment"],
                "#ifdef USE_MAP																						   ",
                "	vec4 texelColor = triTexture2D( map, vUv,  uvTransformFrag);						   ",
                "	texelColor = mapTexelToLinear( texelColor );			   ",
                "	diffuseColor *= texelColor;																",
                "#endif																													",
                THREE.ShaderChunk["color_fragment"],
                THREE.ShaderChunk["alphamap_fragment"],
                THREE.ShaderChunk["alphatest_fragment"],
                //THREE.ShaderChunk["specularmap_fragment"],
                "float specularStrength;",
                "#ifdef USE_SPECULARMAP																	   ",
                "	vec4 texelSpecular =triTexture2D(  specularMap, vUv,  uvTransformFrag)	;	   ",
                "	specularStrength = texelSpecular.r;												 ",
                "#else																															  ",
                "	specularStrength = 1.0;																				  ",
                "#endif																															 ",
                THREE.ShaderChunk["normal_fragment_begin"],
                THREE.ShaderChunk["normal_fragment_maps"],
                THREE.ShaderChunk["emissivemap_fragment"],
                "// accumulation",
                THREE.ShaderChunk["lights_phong_fragment"],
                THREE.ShaderChunk["lights_fragment_begin"],
                THREE.ShaderChunk["lights_fragment_maps"],
                THREE.ShaderChunk["lights_fragment_end"],
                "// modulation",
                THREE.ShaderChunk["aomap_fragment"],
                "vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;",
                THREE.ShaderChunk["envmap_fragment"],
                "gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
                THREE.ShaderChunk["tonemapping_fragment"],
                THREE.ShaderChunk["encodings_fragment"],
                THREE.ShaderChunk["fog_fragment"],
                THREE.ShaderChunk["premultiplied_alpha_fragment"],
                THREE.ShaderChunk["dithering_fragment"],
                "}"
      ].join("\n");
      let defines = {};
      var uniforms = THREE.UniformsUtils.merge([
          THREE.ShaderLib.phong.uniforms,
          {
              myScale: { value: 150 },
              triBlend: { value: 1.0 }
          }
      ]);
      var material = new THREE.ShaderMaterial({
          lights: true,
          defines: defines,
          uniforms: uniforms,
          vertexShader: myPhongVertex,
          fragmentShader: myPhongFragment,
          side: THREE.DoubleSide,
          name: "TriPhong",
      });
      return material;
    },
    initScene(){
      let scene = new THREE.Scene({antialias: true})
      scene.add(this.group)
      this.scene = scene
    },
    initCamera(){
        let camera = new THREE.PerspectiveCamera( 30, this.windowWidth / this.windowHeight, 1, 2000 );
        camera.position.set(0, 110, 800)
        this.camera = camera
    },
    initRender(){
        let renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.windowWidth, this.windowHeight);
        renderer.setClearColor(0xFFFFFF, 1.0);

        renderer.shadowMap.enabled = true;

        let container = document.getElementById('canvas-frame');
        container.appendChild(renderer.domElement);
        let canvasTarget = container.childNodes[0]
        canvasTarget.style.borderRadius = '.375em'

        // let stats = new Stats();
        // container.appendChild(stats.dom);

        //orbit control
        let controls = new THREE.OrbitControls(this.camera, renderer.domElement, this.group);
        controls.enableZoom = true    //使缩放
        //controls.minDistance = 400    //摄像机缩放最小距离
        controls.maxDistance = 1150    //摄像机缩放最大距离
        controls.enableRotate = true;    //使旋转
        controls.rotateSpeed  = 1;    //旋转速度
        controls.enablePan = true;     //使移动
        controls.panSpeed = 0.8;     //移动速度


        this.container = container
        // this.stats = stats
        this.controls = controls
        this.renderer = renderer
    },
    initLight(){
        let light = new THREE.AmbientLight(0xffffff, 0.735);
        this.scene.add(light);

        let dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.421);
        dirLight.position.set(57, 133, 80);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 300;
        dirLight.shadow.camera.bottom = -300;
        dirLight.shadow.camera.left = -300;
        dirLight.shadow.camera.right = 300;
        dirLight.shadow.camera.far = 1000;
        dirLight.shadow.bias = - 0.005;
        let shadowSize = 2048;
        dirLight.shadow.mapSize.width = shadowSize;
        dirLight.shadow.mapSize.height = shadowSize;

        let lightTarget = new THREE.Object3D();
        lightTarget.position.set(0, 0, 0);
        this.scene.add(lightTarget);

        dirLight.target = lightTarget;
        this.scene.add(dirLight);

            let lightTarget1 = new THREE.Object3D();
            lightTarget1.position.set(-430, 1000, 230);
            this.scene.add(lightTarget1);
            let dirLight1 = new THREE.DirectionalLight(0x919191, 0.15);   //设置颜色和强度
            dirLight1.position.set(0, -100, 100);
            dirLight1.target = lightTarget1;   //平行光投射焦点
            this.scene.add(dirLight1);

        let potLight = new THREE.PointLight(0xFFFFFF, 0.10, 110, 0.54);
        potLight.position.set(70, 54, 110);
        this.scene.add(potLight);

        potLight = new THREE.PointLight(0xFFFFFF, 0.1,150, 0.65);
        potLight.position.set(-80, 38, 114);
        this.scene.add(potLight);
      
    },
    initModel(){
        
        var ground = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshLambertMaterial({ color: 0xFFFFFF, depthWrite: false }));
        ground.rotation.x = - Math.PI / 2;
        ground.position.set(0, -50, 0)            
        ground.receiveShadow = true;
        this.scene.add( ground );

    },
      // var i=1
    loadCTM(model, furID){
        var URL = model.componentURL
        var name = model.componentName
        var position = new THREE.Vector3( 0, -50, 0 );
        var scale = new THREE.Vector3( 1, 1, 1 );

        var loader = new THREE.CTMLoader();
        let that = this

        loader.load( URL , function ( geometry ) {
          try{
            var meshMaterial = that.onChangeFur(name, furID)
          }
          catch(err){
            console.log('onChangeFur ERROR')
          }

            var mesh = new THREE.Mesh(geometry, meshMaterial);

            mesh.name = name

            mesh.position.copy(position);
            mesh.scale.copy(scale);
            // mesh.rotation.x = - Math.PI / 2;
            mesh.castShadow = true
            mesh.receiveShadow = true
                if (model.color != undefined) that.changeColor(mesh, model.color)
                if (model.tile != undefined) that.changeTile(mesh, model.tile)
            that.group.add(mesh);
        })
        
    },
      // var repeatNum = 8
    loadTexture(imageURL, tileNum) {
        var loader = new THREE.TextureLoader()
        loader.crossOrigin=''
        var texture = loader.load(imageURL)
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(tileNum, tileNum)
        texture.updateMatrix();
        return texture
    },
    onChangeFur(componentName, furID){
        this.closeGUI()
        let materials = this.materialList
        for(let i in materials){
            if(materials[i].furID == furID){
                var materialInput = materials[i]
            }
        }
        if (materialInput.materialType == "basic") {
            var material = new THREE.MeshBasicMaterial({
                color: materialInput.color,
                transparent: materialInput.transparent,
                opacity: materialInput.opacity
            })
        }
        if (materialInput.materialType == "lambert") {
            var material = new THREE.MeshLambertMaterial({
                color: materialInput.color,
                emissive: materialInput.emissiveColor,
                transparent: materialInput.transparent,
                opacity: materialInput.opacity
            })
        }
        if (materialInput.materialType == "phong") {
            var material = new THREE.MeshPhongMaterial({
                color: materialInput.color,
                emissive: materialInput.emissiveColor,
                specular: materialInput.specularColor,
                shininess: materialInput.shininess,
                transparent: materialInput.transparent,
                opacity: materialInput.opacity,
                side: THREE.DoubleSide
            })
        }
        if (materialInput.materialType == "standard") {
            var material = new THREE.MeshStandardMaterial({
                color: materialInput.color,
                emissive: materialInput.emissiveColor,
                metalness: materialInput.metalness,
                roughness: materialInput.roughness,
                opacity: materialInput.opacity,
                transparent: materialInput.transparent,
                premultipliedAlpha: materialInput.premultipliedAlpha,
                side: THREE.DoubleSide
            })
        }
        if (materialInput.materialType == "triPhong") {
            var material = new this.TriPhongMaterial()
        }
        let that = this
        //load map
        if (materialInput.materialType != "triPhong") {
            if (materialInput.diffuseMap != undefined) {
                var texture1 = this.loadTexture(materialInput.diffuseMap, materialInput.tileNum)
                material.map = texture1
            }
            if (materialInput.specularMap != undefined) {
                var texture2 = this.loadTexture(materialInput.specularMap, materialInput.tileNum)
                material.specularMap = texture2
            }
            if (materialInput.normalMap != undefined) {
                var texture3 = this.loadTexture(materialInput.normalMap, materialInput.tileNum)
                material.normalMap = texture3
            }
            if (materialInput.envMap != undefined) {
                if (materialInput.envMap.search(/hdrCubeMap/) == -1) {
                    var texture4 = this.loadTexture(materialInput.envMap, materialInput.tileNum)
                    texture4.mapping = THREE.SphericalReflectionMapping;
                    material.envMap = texture4
                } else {
                  
                    var prefix = "../../static/cubeMap/", postfix = ".hdr"
                    var hdrUrls = [
                        prefix + 'px' + postfix, prefix + 'nx' + postfix,
                        prefix + 'py' + postfix, prefix + 'ny' + postfix,
                        prefix + 'pz' + postfix, prefix + 'nz' + postfix
                    ];
                    new THREE.HDRCubeTextureLoader().load(THREE.UnsignedByteType, hdrUrls, function (hdrCubeMap) {
                        //extra pixel around each side to avoid cube map  seams
                        
                        var pmremGenerator = new THREE.PMREMGenerator(hdrCubeMap);
                        pmremGenerator.update(that._data.renderer);
                        var pmremCubeUVPacker = new THREE.PMREMCubeUVPacker(pmremGenerator.cubeLods);
                        pmremCubeUVPacker.update(that._data.renderer);
                        var hdrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;
                        //set envMap
                        material.envMap = hdrCubeRenderTarget.texture;
                        material.envMapIntensity = 5
                        material.needsUpdate = true;
                        hdrCubeMap.dispose();
                        pmremGenerator.dispose();
                        pmremCubeUVPacker.dispose();
                    });
                }
              }
            }
        else {
                var tex
                if (materialInput.diffuseMap != undefined || materialInput.specularMap != undefined || materialInput.normalMap != undefined || materialInput.displacementMap != undefined) {
                    if (materialInput.tileNum == undefined) materialInput.tileNum = 1

                    if (materialInput.displacementMap != undefined) {
                        materialInput.textureType = " basic"
                        material.defines["USE_DISPLACEMENTMAP"] = "";
                        material.uniforms.displacementMap.value = this.loadTexture(materialInput.displacementMap, materialInput.tileNum);
                        material.uniforms.displacementScale.value = 1
                        material.uniforms.displacementBias.value = 0
                    }

                    switch (materialInput.textureType) {
                        case 'basic':
                            material.defines["TRIPLANAR_THREEMAPS"] = false;
                            material.defines["TRIPLANAR_BLEND"] = false;
                            break;
                        case 'threeMaps':
                            material.defines["TRIPLANAR_THREEMAPS"] = "";
                            material.defines["TRIPLANAR_BLEND"] = false;
                            break;
                        case 'blend':
                            material.defines["TRIPLANAR_THREEMAPS"] = false;
                            material.defines["TRIPLANAR_BLEND"] = "";
                            break;
                    }

                    material.defines["USE_MAP"] = "";
                    var tex = this.loadTexture("../../../static/fur/map.jpg", materialInput.tileNum)
                    material.uniforms.map.value = tex
                    material.uniforms.uvTransform.value = tex.matrix;

                    if (materialInput.diffuseMap != undefined) {
                        material.uniforms.map.value = this.loadTexture(materialInput.diffuseMap, materialInput.tileNum)
                    }
                    if (materialInput.specularMap != undefined) {
                        material.defines["USE_SPECULARMAP"] = "";
                        material.uniforms.specularMap.value  = this.loadTexture(materialInput.specularMap, materialInput.tileNum)
                    }
                    if (materialInput.normalMap != undefined) {
                        material.defines["USE_NORMALMAP"] = "";
                        material.uniforms.normalMap.value = this.loadTexture(materialInput.normalMap, materialInput.tileNum)
                    }
                    if (materialInput.alphaMap != undefined) {
                        material.transparent = true
                        material.defines["USE_ALPHAMAP"] = "";
                        material.uniforms.alphaMap.value = this.loadTexture(materialInput.alphaMap , materialInput.tileNum);
                    }
                   
                }
                //enviromentMap
                if (materialInput.envMap != undefined) {
                    material.defines["USE_ENVMAP"] = "";
                    material.uniforms.envMap.value = this.loadTexture(materialInput.envMap, materialInput.tileNum);
                }

                material.defines["USE_COLOR"] = "";
                material.uniforms.specular.value = new THREE.Color(0xFFFFFF);
                material.uniforms.diffuse.value = new THREE.Color(0xFFFFFF);
                material.uniforms.shininess.value = 1
                if (materialInput.shininess != undefined)
                    material.uniforms.shininess.value = materialInput.shininess;
                if (materialInput.color != undefined)
                    material.uniforms.diffuse.value.setHex(materialInput.color);
                if (materialInput.opacity != undefined) {
                    material.transparent = true
                    material.uniforms.opacity.value = materialInput.opacity;
                }
                material.uniforms.shadowSide = THREE.DoubleSide;
                material.extensions.derivatives = true;
        }
        var object = this.scene.getObjectByName(componentName)
        if (object) {
            object.material = material
            object.material.needsUpdate = true
        }
        else {
            return material
        }
    },
    onWindowResize() {
        this.camera.aspect = this.windowWidth / this.windowHeight;
        this.camera.updateProjectionMatrix();
        let that = this
        that.renderer.setSize( this.windowWidth, this.windowHeight );
        // insetWidth = window.innerHeight / 4; // square
        // insetHeight = window.innerHeight / 4;

    },
    onChangeModel(model, materials) {
        this.closeGUI()
        //remove the children of the group previous.
        var previous = this.scene.getObjectByName("previous")
        for (let i = previous.children.length - 1; i >= 0; i--) {
            let object = previous.children[i];
            previous.remove(object);
        }
        // this.material = materials
        for (let i in model) {
            for (let j in materials) {
                if (materials[j].furID == model[i].fur) {
                    this.loadCTM(model[i], materials[j].furID)

                }
            }
        }

    },
    //改变颜色
    changeColor(target, value){
        if (target.material.name == 'TriPhong') {
            // target.material.uniforms.diffuse.value = new THREE.Color(value)
            target.material.uniforms.diffuse.value.setHex(value)
        } else {
            // target.material.color = new THREE.Color(value)
            target.material.color.setHex(value)
        }
    },
    //改变平铺
    changeTile(target, value) {
        var dm, sm, nm, am
        if (target.material.name == 'TriPhong') {
            if (target.material.uniforms.map.value) dm = target.material.uniforms.map.value.repeat.x
            if (target.material.uniforms.specularMap.value) sm = target.material.uniforms.specularMap.value.repeat.x
            if (target.material.uniforms.normalMap.value) nm = target.material.uniforms.normalMap.value.repeat.x
            if (target.material.uniforms.alphaMap.value) am = target.material.uniforms.alphaMap.value.repeat.x
            //console.log(dm + '\n' + sm + '\n' + nm + '\n' + am)
        }
        else {
            if (target.material.map) dm = target.material.map.repeat.x
            if (target.material.specularMap) sm = target.material.specularMap.repeat.x
            if (target.material.normalMap) nm = target.material.normalMap.repeat.x
            if (target.material.alphaMap) am = target.material.alphaMap.repeat.x
            //console.log(dm + '\n' + sm + '\n' + nm + '\n' + am)
        }
        if (dm || sm || nm || am) {
            var tile, mat
            if (dm) tile = dm
            if (sm) tile = sm
            if (nm) tile = nm
            if (am) tile = am
            if (target.material.name == 'TriPhong') {
                if (dm) {
                    target.material.uniforms.map.value.repeat.set(value, value)
                    target.material.uniforms.map.value.updateMatrix()
                    mat = target.material.uniforms.map.value.matrix
                }
                if (sm) {
                    target.material.uniforms.specularMap.value.repeat.set(value, value)
                    target.material.uniforms.specularMap.value.updateMatrix()
                    mat = target.material.uniforms.specularMap.value.matrix
                }
                if (nm) {
                    target.material.uniforms.normalMap.value.repeat.set(value, value)
                    target.material.uniforms.normalMap.value.updateMatrix()
                    mat = target.material.uniforms.normalMap.value.matrix
                }
                if (am) {
                    target.material.uniforms.alphaMap.value.repeat.set(value, value)
                    target.material.uniforms.alphaMap.value.updateMatrix()
                    mat = target.material.uniforms.alphaMap.value.matrix
                }
                target.material.uniforms.uvTransform.value = mat;
            } else {
                if (dm) {
                    target.material.map.repeat.set(value, value)
                    target.material.map.updateMatrix()
                }
                if (sm) {
                    target.material.specularMap.repeat.set(value, value)
                    target.material.specularMap.updateMatrix()
                }
                if (nm) {
                    target.material.normalMap.repeat.set(value, value)
                    target.material.normalMap.updateMatrix()
                }
                if (am) {
                    target.material.alphaMap.repeat.set(value, value)
                    target.material.alphaMap.updateMatrix()
                }
                target.material.needsUpdate = true
            }
        }
    },
    animate() {
        let that = this
        requestAnimationFrame(that.animate);
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            // this.stats.update()
            that.renderer.render(this.scene, this.camera);
        }
        
    },
    onClickShoe(event) {
      let x = ((event.clientX - 32)/this.windowWidth)*2 - 1
      let y = -((event.clientY - 160)/this.windowHeight)*2 + 1
      var vector = new THREE.Vector3(x, y, 1)
      vector.unproject(this.camera)
      var ray = new THREE.Raycaster(this.camera.position, vector.sub(this.camera.position).normalize())
      var intersects = ray.intersectObjects(this.group.children)
      if(intersects.length > 0) {
          console.log(intersects[0].object.name)
          
          if (this.gui != null) {
              this.gui.destroy() //清除gui及其监听事件
              this.gui = null
          }
          //console.log('1')
          //console.log(this.gui)
          this.gui = new dat.GUI(); //新建根UI

          //----获取UI的domElement改变格式，这里仅做示例---
        //   this.gui.domElement.style.position = 'absolute'
        //   this.container.appendChild(this.gui.domElement)
          //使用网址https://github.com/dataarts/dat.gui
          //--------------------------------------------------
          var targetUI = document.getElementsByClassName('ac')[0]
          targetUI.style.width = 200 + 'px'
          targetUI.style.top = event.clientY + 'px'
          targetUI.style.left = event.clientX + 100 + 'px'
          console.log(targetUI)

          //以点击对象为target，但我们菜单一开始就出现，可以一开始就定taget为其中一个部件
          var target = intersects[0].object  
          if (target.material.name == 'TriPhong') {
              var p = { color: "#" + target.material.uniforms.diffuse.value.getHexString() }
            //   console.log(`color p is ${p}`)
              let tmp = p.color.toString()
              var col = this.gui.addColor(p, 'color').name("Color").listen(); //在根UI添加改变颜色的子菜单
              let that = this
              let type = 'color'
              let componentName = target.name
              col.onChange(function (value) { 
                  target.material.uniforms.diffuse.value.setHex(value.replace("#", "0x"))
              })
              col.onFinishChange(function (value) { 
                //   target.material.uniforms.diffuse.value.setHex(value.replace("#", "0x"))
                that.$store.dispatch('judge_if_push_tmp_operation', componentName)
                that.$store.dispatch('pushOperation', {tmp, componentName, type})
                tmp = value
                that.$store.dispatch('overwrite_tmp_operation', {tmp, componentName, type})
              });
          } else {
              var p = { color: "#" + target.material.color.getHexString() }
              let tmp = p.color.toString()
              var col = this.gui.addColor(p, 'color').name("Color").listen();
              let type = 'color'
              let componentName = target.name
            //   this.$store.dispatch('pushOperation', tmp)
              let that = this
              col.onChange(function (value) { 
                target.material.color.setHex(value.replace("#", "0x"))
              })
              col.onFinishChange(function (value) { 
                //   target.material.color.setHex(value.replace("#", "0x"))
                that.$store.dispatch('judge_if_push_tmp_operation', componentName)
                that.$store.dispatch('pushOperation', {tmp, componentName, type})
                tmp = value
                that.$store.dispatch('overwrite_tmp_operation', {tmp, componentName, type})
              });
          }
        //改变目标部件材质贴图平铺数
        var dm, sm, nm, am, tileUI
        if (target.material.name == 'TriPhong') {
            if (target.material.uniforms.map.value) dm = target.material.uniforms.map.value.repeat.x
            if (target.material.uniforms.specularMap.value) sm = target.material.uniforms.specularMap.value.repeat.x
            if (target.material.uniforms.normalMap.value) nm = target.material.uniforms.normalMap.value.repeat.x
            if (target.material.uniforms.alphaMap.value) am = target.material.uniforms.alphaMap.value.repeat.x
            //console.log(dm + '\n' + sm + '\n' + nm + '\n' + am)
        }
        else {
            if (target.material.map) dm = target.material.map.repeat.x
            if (target.material.specularMap) sm = target.material.specularMap.repeat.x
            if (target.material.normalMap) nm = target.material.normalMap.repeat.x
            if (target.material.alphaMap) am = target.material.alphaMap.repeat.x
            //console.log(dm + '\n' + sm + '\n' + nm + '\n' + am)
        }
        if (dm || sm || nm || am) {
            var tile, mat
            if (dm) tile = dm
            if (sm) tile = sm
            if (nm) tile = nm
            if (am) tile = am
            var p = { tile: tile }
            let tmp = p.tile.toString()
            // console.log('tile is ')
            // console.log(p)
            tileUI = this.gui.add(p, 'tile').min(0.01).max(50).step(0.01).name("tile").listen();
            tileUI.onChange(function (value) {
                if (target.material.name == 'TriPhong') {
                    if (dm) {
                        target.material.uniforms.map.value.repeat.set(value, value)
                        target.material.uniforms.map.value.updateMatrix()
                        mat = target.material.uniforms.map.value.matrix
                    }
                    if (sm) {
                        target.material.uniforms.specularMap.value.repeat.set(value, value)
                        target.material.uniforms.specularMap.value.updateMatrix()
                        mat = target.material.uniforms.specularMap.value.matrix
                    }
                    if (nm) {
                        target.material.uniforms.normalMap.value.repeat.set(value, value)
                        target.material.uniforms.normalMap.value.updateMatrix()
                        mat = target.material.uniforms.normalMap.value.matrix
                    }
                    if (am) {
                        target.material.uniforms.alphaMap.value.repeat.set(value, value)
                        target.material.uniforms.alphaMap.value.updateMatrix()
                        mat = target.material.uniforms.alphaMap.value.matrix
                    }
                    target.material.uniforms.uvTransform.value = mat;
                } else {
                    if (dm) {
                        target.material.map.repeat.set(value, value)
                        target.material.map.updateMatrix()
                    }
                    if (sm) {
                        target.material.specularMap.repeat.set(value, value)
                        target.material.specularMap.updateMatrix()
                    }
                    if (nm) {
                        target.material.normalMap.repeat.set(value, value)
                        target.material.normalMap.updateMatrix()
                    }
                    if (am) {
                        target.material.alphaMap.repeat.set(value, value)
                        target.material.alphaMap.updateMatrix()
                    }
                    target.material.needsUpdate = true
                }
            })
            let type = 'tile'
            let componentName = target.name
            // let that = this
            tileUI.onFinishChange(value => {
              that.$store.dispatch('judge_if_push_tmp_operation', componentName)
              this.$store.dispatch('pushOperation', {tmp, componentName, type})
              tmp = value
              this.$store.dispatch('overwrite_tmp_operation', {tmp, componentName, type})
            })
        } 
      }
      else {
          
          this.closeGUI()
          //console.log('2')
          //console.log(this.gui)
      }
    },
    clearThree(obj){ 
      while(obj.children.length > 0){ 
      this.clearThree(obj.children[0])
      obj.remove(obj.children[0]); 
      } 
      if(obj.geometry) obj.geometry.dispose() 
      if(obj.material) obj.material.dispose() 
      if(obj.texture) obj.texture.dispose() 
    },
    async waitingRender() {
      let model = this.selectedModel
      let materials = this.materialList
      this.model = model
      this.onChangeModel(model, materials)
    },
    closeGUI() {
      if (this.gui != null) {
        this.gui.destroy()
        this.gui = null
      }
    },
  },
  computed: {
    ...mapGetters([
      'selectedModelID',
      'selectedModel',
      'materialList',
      'targetComponent',
      'targetFurID',
      'goBackFlag',
      'targetOperation',
      'closeGUIFlag',
    ])
  },
  watch: {
    async selectedModelID(id) {
      this.pointer = id
      await this.waitingRender()
      this.iconShowFlag = 1
    },
    targetFurID(newID) {
      this.onChangeFur(this.targetComponent, newID)
    },
    goBackFlag(newVal) {
      console.log('InRenderer')
      if(newVal == 1) {
        this.closeGUI()
      }
      this.$store.dispatch('resetGoBackFlag')
    },
    targetOperation(newOp) {
      if(newOp.type == 'color') {
        let target = this.scene.getObjectByName(newOp.componentName)
        let color = newOp.tmp.replace('#','0x')
        // console.log('target is ')
        // console.log(target)
        // console.log('color is ')
        // console.log(color)
        this.changeColor(target, color)
      }
      else if(newOp.type == 'tile') {
        let target = this.scene.getObjectByName(newOp.componentName)
        let tile = newOp.tmp
        this.changeTile(target, tile)
      }
    },
    closeGUIFlag(newVal) {
      if(newVal == 1) {
        this.closeGUI()
        this.$store.dispatch('reset_close_flag')
      }
    }
  },
  mounted() {
        this.group = new THREE.Group()
        this.group.name = "previous"
        this.lights = new THREE.Group()
        this.lights.name = "lights"
        let tempObject = document.getElementsByClassName('canvas-container')[0]
        tempObject.style.height = screen.availHeight - 240 + 'px'
        this.windowWidth = document.getElementById('canvas-frame').clientWidth
        this.windowHeight = document.getElementById('canvas-frame').clientHeight

        // if (!Detector.Detector.webgl) Detector.Detector.addGetWebGLMessage();
        // this.initPCSS()
        this.initScene()
        this.initCamera()
        this.initModel()
        this.initLight()
        this.initRender()
        this.animate()

        // this.initUI()
        // console.log(this.$route.query.id)
        let id = parseInt(this.$route.query.id)
        this.$store.dispatch('getModelInfo', id)
        this.$store.dispatch('setModelInfo', id)
  },
  beforeDestroy() {
    this.clearThree(this.scene)
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none!important;
}
.renderer-container {
//   height: calc(100vh - 15px);
  // height: 600px;
  width: 90%;
  height: calc(100vh - 12em)!important;
  // width: 600px;
  div {
    
  border-radius: 1em;
  }
}
.canvas-container {
  width: 100%;
  height: calc(100vh - 8em);

  border-radius: 1em;
}
#canvas-frame {
  height: 95%;
  width: 100%;
  border-radius: 1em;
  canvas {
    width: 100%;
    height: 100%;
  // border-radius: 1em!important;
  }
}
.model-info-container {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  position: relative;
  bottom: 2.5em;

  background: transparent;

  > div {
    display: flex;
    margin-left: 1em;
    > div {
      margin-left: .5em;

      font-size: .9em;
      color: #999;
    }
  }

  > img {
    margin-left: 1em;
    margin-right: 1em;
    cursor: pointer;
  }

  span {
    flex-grow: 1;
  }
}
</style>
