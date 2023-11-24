<template>
  <div>
    <post-item v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <button v-on:click="DeleteLike" class="delete"> Delete Likes </button>
</template>

<script>
import { mapState } from 'vuex';
import PostItem from '@/components/PostItem.vue';

export default {
  name: 'PostView',
  components: {
    PostItem
  },
  computed: {
    ...mapState(['posts'])
  },
  created() {
    this.$store.dispatch('fetchPosts');
  },
  methods: {
    DeleteLike: function(){
      this.$store.commit("DeleteLikes")
    }
  }
};
</script>
<style scoped>
.delete{
  border-radius: 30px;
  background-color: #86A789;
  border: none;
  width: 100px;
  height: 50px;
}
.delete:hover{
  background-color: #a1efa8;
}
</style>