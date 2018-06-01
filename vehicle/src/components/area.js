import VueRouter from 'vue-router';
var component = {
  name: "Area",
  data: function () {
    return {
      floor: 'B1',
      seat: '8888',
      time: (new Date()).toLocaleString(),
      price: 6,
      plate: '粤A BG8888'
    }
  },
  methods: {}
}
var _page = {
  getData: function() {

  }
}
export default component
