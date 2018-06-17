import VueRouter from 'vue-router';
import bgBack from './bgBack.vue';
var component = {
	components:{
		'bgBack':	bgBack
	},
  name: "Park",
  data () {
    
    
    return {
        isShow:-1,
        items:[
            {marker:"A", index:0, total:10, rest:5, src:"https://wx4.sinaimg.cn/mw690/abb4a10aly1frx9y7y21kj20i20n7afj.jpg"},
            {marker:"B", index:1, total:10, rest:5,src:"https://wx1.sinaimg.cn/mw690/abb4a10aly1frx9x7wh8ij20i20natey.jpg"},
            {marker:"C", index:2, total:10, rest:5,src:"https://wx3.sinaimg.cn/mw690/abb4a10aly1frx9xapuaxj20i20nj0zz.jpg"},
            {marker:"D", index:3, total:10, rest:5,src:"https://wx4.sinaimg.cn/mw690/abb4a10aly1frx9y7y21kj20i20n7afj.jpg"}
        ],
        // isCheck: 0
    }
  },
  methods: {
      display:function(index){
		  this.isShow = index;
        },
      close:function(index){
		event.stopPropagation();   //這裡因為冒泡， 如果不停止冒泡的話，會冒泡到父元素，同時觸發父元素的click事件
		this.isShow = -1;   
      }
  },
	created: function () {
		var url="http://120.77.150.28:80/seat";
      	var options={
				  method:'GET',
			  };
		var that = this;
			fetch(url,options).then(function(res){
				if(res.ok){
					res.text().then(function(data){
						var a = JSON.parse(data.trim());
						that.items = a.map(function(item) {
							return {
								marker: item.marker,
								total: item.total,
								rest: item.rest,
								src: item.src,
								// isShow: false
							}
						})
						console.log(that.items);
					})
				}});
	},
}

export default component
