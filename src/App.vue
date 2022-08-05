<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
//document.documentElement.style.fontSize=document.documentElement.clientWidth/375 * 16 +"px"
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
  body{
	  margin: 0;
	  padding: 0;
    box-sizing: border-box;
    background-color: #f4f4f4;
  }
</style>
