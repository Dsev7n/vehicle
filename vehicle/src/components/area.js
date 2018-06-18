import VueRouter from 'vue-router';
import bgBack from './bgBack.vue';

var component = {
  name: "Area",
  components:{
		'bgBack':	bgBack
	},
  data: function () {
    return {
      floor: localStorage.getItem('floor'),
      time: (new Date()).toLocaleString(),
      price: 0,
      plate: localStorage.getItem('verticle'),
      isShow: false
    }
  },
  methods: {
    showPrice() {
      this.isShow = true;
      var beginTime = localStorage.getItem('datatime');
      var date = beginTime.split(" ")[0];
      var time = beginTime.split(" ")[1];
      // 获取车进入的时间，月份，日期， 小时
      var month = date.split(':')[1];
      var day = date.split(':')[2];
      var hour = time.split(':')[0];
      // 获取车离开的时间， 即当前时间
      var currentDate = new Date();
      var currentMonth = currentDate.getMonth() + 1;
      var currentDay = currentDate.getDate();
      var currentHour = currentDate.getHours();

      var lastTime = (currentHour - hour) + (currentDay - day) * 24 + (currentMonth - month) * 30 * 24;
      this.price = lastTime * 5;
    },
    hidePrice() {
      this.isShow = false;
    },
    getData() {
      _page.getData();
    },
    onPayTap: function() {
      var url = "http://localhost:3000/payment";
      var data = {
        marker: this.floor
      };
      var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/',
        method: 'POST',
        body: JSON.stringify(data)
      };
      fetch(url,options).then(function(res) {
        return res.text();
      }).then(function(data) {
        console.log(JSON.parse(data));
      })
    },
  }
}
var _page = {
  getData: function () {
    var url = "http://localhost:3000/users";
    var data = {
      verticle: localStorage.getItem('verticle')
    };
    var options = {
      hostname: 'localhost',
      port: 3000,
      path: '/',
      method: 'POST',
      body: JSON.stringify(data)
    };
  },
  formatDate: function () {　　
    var year = now.getFullYear(),
      　　month = now.getMonth() + 1,
      　　date = now.getDate(),
      　　hour = now.getHours(),
      　　minute = now.getMinutes(),
      　　second = now.getSeconds();

    　　
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
  }
}
export default component
