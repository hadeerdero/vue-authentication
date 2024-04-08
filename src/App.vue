<template>
  <div>
    <NavbarView></NavbarView>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavbarView from './components/NavbarView.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
    NavbarView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
