<template>
  <div class="login-page-bg">
    <loading :active="isLoading"></loading>
    <div class="login-bg-2">
      <div class="login-board-container">
        <img src="@/../static/imgs/login_logo.png">
        <h2>Login</h2>
        <span>Welcome!</span>
      </div>
      <div class="login-board-container-2">
        <div class="login-board">
          <ul class="user-type-selector">
            <li>Designer</li>
            <li>Brand</li>
            <li>Manufacturer</li>
          </ul>
          <div class="input-container">
            <label for="username">
            </label>
            <input name="username" id="username" placeholder="phone/username">
          </div>
          <div class="input-container">
            <label for="password">
            </label>
            <input type="password" name="password" id="password" placeholder="password"  @keyup.enter="login()">
          </div>
          <div class="checkbox-container">
            <div class="checkbox">
              <input type="checkbox" id="remenber_password">
              <label for="remenber_password">Remember password</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="auto_login">
              <label for="auto_login">Auto login</label>
            </div>
          </div>
          <button class="login-button" @click="login()">
            <div>Login</div>
          </button>
          <div class="label-group-container">
            <div>Sign In</div>
            <div>Find Password</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-template'
import Cookies from 'js-cookie'
export default {
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    login() {
      this.isLoading = true
      let loginForm = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      }
      this.$store.dispatch('LoginByUsername', loginForm).then(() => {
        Cookies.set('username', document.getElementById('username').value)
        this.$router.push({ path: '/models'})
      }).catch(reject => {
        console.log(reject)
      })
    },
  },
  computed: {
    ...mapGetters([
      'token',
    ])
  },
  mounted() {
    if(this.token) {
      this.$router.push({ path: '/models'})
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-input-placeholder { /* WebKit browsers */
    color:    #fff;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #fff;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #fff;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #fff;
}
input {
  outline: none;
}
.login-page-bg {
  background-image: url('~@/../static/imgs/login_bg.png');
  // min-width: 1920;
  width: 100%;
  height: 100vh;
  // min-height: 1080px;
}
.login-bg-2{
  display: flex;
  flex-flow: row nowrap;
  
  position: relative;
  top: 20vh;
  margin: auto; 

  background-image: url('~@/../static/imgs/login_bg_2.png');
  background-repeat: no-repeat;

  // login_bg_2.png's scale
  height: 550px;
  width: 780px;

  // sub container display setting
  .login-board-container, .login-board-container-2{
    display: flex;
    flex-flow: column nowrap;
  }

  .login-board-container {
    img {
      margin-top: 11.2vh;
      margin-left: 8em;
    }
    h2,span {
      color: #fff;
    }
    h2 {
      margin-left: 5em;
    }
    span {
      margin-left: 7.5em;
    }
  }

  .login-board-container-2 {
    .login-board {
      display: flex;
      flex-flow: column nowrap;

      position: relative;
      top: 5vh;
      left: 2em;

      background-image: url('~@/../static/imgs/login_bg_4.png');
      background-repeat: no-repeat;
      // opacity: .95;

      width: 400px;
      height: 440px;

      .user-type-selector {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        padding-left: 6em;
        padding-top: 5em;

        width: 240px;

        list-style: none;

        li {
          color: #fff;
          cursor: pointer;
        }
        li:nth-of-type(1) {
          border-bottom: 4px solid #08ADFF;
        }
      }

      .input-container {
        position: relative;
        margin-left: 5em;

        width: 280px;
        height: 2.5em;

        background-color: #222;
        opacity: .75;

        border-radius: 25px;

        text-align: left;
        label[for='username'] {
          background-image: url('~@/../static/imgs/login_icon_1.png');
        }
        label[for='password'] {
          background-image: url('~@/../static/imgs/login_icon_2.png')
        }
        // public lable settings
        label {
          background-repeat: no-repeat;
          background-position: 10px;
          padding-left: 2.3em;
          line-height: 2.5em;
          text-align: left;
        }
        input {
          position: relative;
          background-color: transparent;
          line-height: 1.5em;
          width: 220px;

          border: 0;
          border-left: 1px solid #fff;

          padding-left: 10px;

          color: #fff;
        }
      }
      .input-container:nth-of-type(1) {
        margin-bottom: 1.5em;
      }
      .checkbox-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        margin-top: 1em;
        margin-left: 6.6em;

        width: 240px;

        color: #fff;

        font-size: .9em;
        checkbox {

        }
      }
      .login-button {
        margin-top: 1em;
        margin-left: 6em; 

        height: 3em;
        width: 280px;

        border-radius: 25px;
        border: 0;

        background-image: url('~@/../static/imgs/icon_date_light.png');
        background-size: 170% 145%;
        background-position: -100px -10px;

        outline: none;

        color: #fff;

        cursor: pointer;
        div {
          font-size: 1.2em;
          letter-spacing: .2em;
        }
      }
      .label-group-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        margin-top: 1em;
        margin-left: 7em;

        width: 240px;

        color: #fff;

        font-size: .9em;
        div:nth-of-type(1) {
          color: #09adfd;
        }
      }
    }
  }
}
</style>
