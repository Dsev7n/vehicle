import VueRouter from 'vue-router';
var component = {
  name: 'bgBack',
  data () {
    
    return {
        
    }
  },
  methods: {
    goBack:function() {
        history.go(-1);
    }
  },
	
}

export default component;
