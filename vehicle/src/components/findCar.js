import VueRouter from 'vue-router';
import bgBack from './bgBack.vue';
var component = {
  components:{
		'bgBack':	bgBack
	},
  name: "FindCar",
  data: function () {
    return {
      verticle: '',
      selected: ''
    }
  },
  created: function() {
    var url = "http://120.77.150.28:80/seat";
    var options = {
      hostname: 'localhost',
      port: 3000,
      path: '/',
      method: 'GET',
      // body: JSON.stringify(data)
    };
    fetch(url,options).then(function(res) {
      return res.text();
    }).then(function(data) {
      console.log(JSON.parse(data));
    })
  },
  methods: {
    onSearchTap: function () {
      if (this.selected === '') {
        alert('请选择区域');
        return;
      }
      if (!this.verticle) {
        alert('请输入具体车牌号');
        return;
      }
      window.location.href = "http://localhost:8888/#/area";
    }
  }
}

export default component
