<!--用於顯示招商訊息清單component的template-->
<!--<template id="listPost">-->
<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="3" v-for="post in list" :key="post.id">
          <b-card class="mt-4 m-card" v-on:click="displayDetail(post.id)"
                  img-src="/images/default.png" img-alt="Card image cap"
                  img-top>
            <p class="card-text">{{post.title}}</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
