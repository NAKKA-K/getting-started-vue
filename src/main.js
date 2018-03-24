import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

const Foo = { template: '<div>Foo</div>' }
import ExampleComponent from './Example.vue'
import Post from './Post.vue'

Vue.use(Router)
var router = new Router({
  routes: [
    { path: '/example', component: ExampleComponent },
    { path: '/foo', component: Foo },
    { path: '/post/:id', component: Post }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
