<template>
    <div>
        
             <!-------------regisrtation form------------->
             <div class="register-container" id="register">
                <div class="top">
                    <span class="">Have an account?<a href="#" @click="login()">Login</a></span>
                    <header>Sign Up</header>
                </div>
                <div class="two-forms">
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Firstname">
                        <i class="fa-solid fa-user"></i>
                        <!-- <i class="box bx-user"></i> -->
                        <!-- <i class="fa-light fa-user"></i> -->
                    </div>
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Lastname">
                        <i class="fa-solid fa-user"></i>
                        <!-- <i class="box bx-user"></i> -->
                        <!-- <i class="fa-light fa-user"></i> -->
                    </div>
                </div>
                <div class="input-box">
                    <input type="text" class="input-field" placeholder="Email">
                    <i class="fa-regular fa-envelope"></i>
                    <!-- <i class="box bx-envelope"></i> -->
                </div>
                <div class="input-box">
                    <input type="password" class="input-field" placeholder="Password">
                    <i class="fa-solid fa-lock"></i>
                    <!-- <i class="box bx-lock-alt"></i> -->
                </div>
                <div class="input-box">
                    <input type="submit" class="submit" value="Register">
                   
                </div>
                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="register-check" class="">
                        <label for="register-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label for=""><a href="#" class="">Terms & Condition</a></label>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
export default{
    methods:{
    login(){
        this.$emit("login")
    }
 }
}
</script>