<template>
    <div>
    
             <!----------------Login form-->
             <div class="login-container" id="login">
                <div class="top">
                    <span class="">Don't have an account?<a href="#" @click="register()">Sign Up</a></span>
                    <header>Login</header>
                </div>
            
                <div class="input-box">
                    <input type="text" class="input-field" placeholder="Username or Email">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="input-box">
                    <input type="password" class="input-field" placeholder="Password">
                    <!-- <i class="fa-light fa-user"></i>-->
                    <i class="fa-solid fa-lock"></i>
                    <!-- <i class="box bx-lock-alt"></i> -->
                </div>
                <div class="input-box">
                    <input type="submit" class="submit" value="Sign In">
                   
                </div>
                <div class="two-col">
                    <div class="one">
                        <input type="checkbox" id="login-check" class="">
                        <label for="login-check"> Remember Me</label>
                    </div>
                    <div class="two">
                        <label for=""><a href="#" class="">Forgot Password?</a></label>
                    </div>
                </div>
           
            <!-- <form>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control"/>
                </div>
                <div class="my-3">
                    <button type="submit" class="btn btn-primary">
                        Login

                    </button>
                </div>
            </form> -->
        </div>
    </div>
</template>
<script>
export default{
 methods:{
    register(){
        this.$emit("register")
    }
 }
  }
</script>