<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" class="title-logo">
      <h1 class="title">{{ msg }}</h1>
    </div>

    <router-link to='/'><span class="link">top</span></router-link>
    <router-link to='/example'><span class="link">example</span></router-link>
    <router-link to='/foo'><span class="link">Foo</span></router-link>

    <div class="router-view">
      <h1>Router View</h1>
      <router-view />
    </div>

    <!-- componentの表示 -->
    <myComponent></myComponent>
    <!-- データバインディング -->
    <a :href="url">My GitHub</a>
    <!-- イベントハンドリング -->
    <p @click="countUp" class="event-button">Count Event</p>
    <p class="counter">Count is <span class="count-num">{{ counter }}</span>.</p>

    <p @click="toggle" class="event-button">Toggle Links</p>
    <!-- vue links -->
    <div v-if="showLinks">
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

  </div>
</template>

<script>
import ExampleComponent from './Example.vue'

export default {
  name: 'app',
  components: {
    myComponent: ExampleComponent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: 'https://github.com/NAKKA-K',
      counter: 1,
      showLinks: false
    }
  },
  methods: {
    countUp() {
      this.counter++;
    },

    toggle() {
      this.showLinks = !this.showLinks
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

a {
  .link {
    display: block;
    font-size: 2vw;
    font-family: serif;
    text-shadow: 1px 1px 3px #888;
  }
}

.router-view {
  border-top: 5px solid #DDD;
  border-bottom: 5px solid #DDD;
}
</style>
