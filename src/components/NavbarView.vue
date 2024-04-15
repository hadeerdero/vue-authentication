<template>
    <div class="wrapper">
        <nav class="nav">
            <div class="nav-logo">
                <p>LOGO .</p>

            </div>
            <div class="nav-menu" :class="isResponsive ? 'responsive':''">
                <ul>
                    <li> <a href="#" class="link active">Home</a></li>
                    <li> <a href="#" class="link">Blog</a></li>
                    <li> <a href="#" class="link">Services</a></li>
                    <li> <a href="#" class="link">About</a></li>
                </ul>
            </div>
            <div class="nav-button">
                <button class="btn white-btn" id="loginBtn" @click="login()">Sign In</button>
                <button class="btn white-btn" id="registerBtn" @click="register()">Sign Up</button>
            </div>
            <div class="nav-menu-btn">
                <i class="bx bx-menu" @click="myMenuFunction()"></i>
                <!-- <box-icon name='menu'></box-icon> -->
            </div>
        </nav>
        <!--------------------Form Box----------------->
        <div class=" form-box">
           <Login v-show="displayLogin" class="animate__animated animate__backInLeft"></Login>
           <SingUp v-show="displayRegester" class="animate__animated animate__backInRight"></SingUp>
           
        </div>
    </div>
</template>

<script>
import Login from '@/pages/LoginView.vue';
import SingUp from '@/pages/SignupView.vue';
import 'animate.css';
export default{
components: {
    // HelloWorld
    Login,
    SingUp
  },
  data(){
    return{
        displayLogin : true,
        displayRegester : false,
        isResponsive : false,
        
    }
  },
   
  methods:{
    login(){
        this.displayRegester = false
        this.displayLogin = true
    },
    register(){
        this.displayRegester = true
        this.displayLogin = false
    },
    myMenuFunction(){
        this.isResponsive = !this.isResponsive
    }
  }
}
</script>