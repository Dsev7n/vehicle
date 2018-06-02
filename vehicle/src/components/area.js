import VueRouter from 'vue-router';
var component = {
  name: "Area",
  data: function () {
    return {
      floor: 'B1',
      seat: '8888',
      time: (new Date()).toLocaleString(),
      price: 6,
      plate: '粤A BG8888',
      isShow: false
    }
  },
  methods: {
    showPrice() {
      this.isShow = true;
    },
    hidePrice() {
      this.isShow = false;
    },
    getData() {
      _page.getData();
    }
  }
}
var _page = {
  getData: function () {
    var url = "http://localhost:3000";
    var options = {
      hostname: 'localhost',
      port: 3000,
      path: '/',
      method: 'POST',
      body: "{'text': '粤123456'}"
    };
    var myRequest = new Request(url, options);
    // var myRequest = new Request(url, options);
    fetch(myRequest).then(function(res) {
      return res.text();
    }).then(function(data) {
      console.log(data);
    })
  }
}
export default component
