import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import indexComponent from './vue/index.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.component('list-post',indexComponent);
// the parent instance
var app = new Vue({
    el: '#app',
    mounted: function () {
      this.getPost();
    },
    data: {
      merchantPost: [],
      locationData:{},
      postDetail: {}
    },
    methods: {
      // 取得招商資訊清單
      getPost: function () {
        var promise = getMerchantPost();
        promise.then(function (data) {
          app.merchantPost = data;
        }, function (err) {
          console.log(err);
        })
        // 取得超商資訊
        function getMerchantPost() {
          return $.get('/api/fakeData');
        }
      },
      // 顯示指定的招商文資訊
      showDetail: function (postId) {
        this.postDetail = _.find(this.merchantPost, function (item) {
          return item.id == postId
        });
        
        this.$refs.merchantDetailModal.show();
        // $('#merchantDetailModal').modal('show');
      }
    },
    filters: {
      
    },
    watch: {
      
    }
  }
);
