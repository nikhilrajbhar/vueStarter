<template>
<router-link to="/">Home</router-link><br/>
<router-link to="/profile">Profile</router-link><br/>
<router-link to="/login">Login</router-link><br/>
 <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HellonewWorldVue from './components/HellonewWorld .vue'

export default {
  name: 'App',
 
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
