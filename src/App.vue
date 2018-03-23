<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" class="title-logo">
      <h1 class="title">{{ msg }}</h1>
    </div>

    <!-- データバインディング -->
    <a :href="url">My GitHub</a>
    <!-- イベントハンドリング -->
    <p @click="countUp" class="event-button">Count Event</p>
    <p class="counter">Count is <span class="count-num">{{ counter }}</span>.</p>

    <!-- vue links -->
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: 'https://github.com/NAKKA-K',
      counter: 1
    }
  },
  methods: {
    countUp() {
      this.counter++;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.header {
  position: relative;
  height: 25vh;
  margin-bottom: 5vh;
  .title-logo {
    position: absolute;
    display: inline-block;
    padding: 10px;
    width: 10vw;
    left: 30vw;
  }
  .title {
    position: absolute;
    display: inline-block;
    padding: 10px;
    padding-top: 50px;
    left: 40vw;
  }
}

.event-button {
  position: relative;
  font-size: 2vw;
  border: 5px solid #888;
  width: 10vw;
  left: 44vw;
  background-color: silver;
}

.counter {
  font-size: 1.5vw;
  .count-num {
    font-size: 1.7vw;
    color: #42b983;
    text-shadow: 1px 1px 3px #888;
  }
}
</style>
