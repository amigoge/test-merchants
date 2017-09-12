<!--用於顯示招商訊息清單component的template-->
<!--<template id="listPost">-->
<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="post in list">
          <div class="card mt-4 m-card" v-on:click="displayDetail(post.id)">
            <img class="card-img-top" alt="Card image cap"
                 src="/images/default.png">
            <div class="card-block">
              <p class="card-text">{{post.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ['list', 'showDetail'],
    data: function () {
      return {}
    },
    methods: {
      displayDetail: function (postId) {
        this.$emit('show-detail', postId);
      }
    },
    watch: {
      list: function (val) {
        var i = 0;
      }
    }
  }
</script>

<style>
  /*@import 'bootstrap-vue/dist/bootstrap-vue.css';*/
  /*@import '../../../../styles/bootstrap.css';*/
  /*@import '../../../../styles/app.css';*/
</style>
