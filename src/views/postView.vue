<template>
  <div>
    <post-item v-for="post in posts" :key="post.id" :post="post" />
  </div>
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
  }
};
</script>
<style scoped>

</style>