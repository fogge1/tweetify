<template>
  <div id="app">
    <div class="posting-container">
      <PostBird></PostBird>
      <BirdContainer ></BirdContainer>
      <LoginComponent ></LoginComponent>
      
    </div>
    
  </div>
</template>

<script>

import PostBird from './components/PostBird.vue'
import BirdContainer from './components/BirdContainer.vue'
import LoginComponent from './components/LoginComponent.vue'

export default {
  name: 'App',
  components: {
    PostBird,
    BirdContainer,
    LoginComponent
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
  display: flex;
  justify-content: center;
}

.posting-container {
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding:  1% 1% 1% 1%;
  border-radius: 3px;
}
</style>
