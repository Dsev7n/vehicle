import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/home.vue';
import FindCar from '@/components/findCar.vue';
import Area from '@/components/area.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/findCar',
      name: 'FindCar',
      component: FindCar
    },
    {
      path: '/area',
      name: 'Area',
      component: Area
    }
  ]
})
