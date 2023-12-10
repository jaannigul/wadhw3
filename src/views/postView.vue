<template>
  <div>
    <button @click="logout">Logout</button>
    <post-item v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <div class="button-container">
    <button @click="addPost">Add post</button>
    
    <button @click="deleteAll">Delete all</button>
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
  },
  methods: {
    deleteAll: function(){
      this.$router.push("/certainPostView")
    },
    addPost: function(){
      this.$router.push("/addPostView")
    },
    logout: function(){
      fetch('http://localhost:3000/auth/logout', {
        method: 'GET',
        credentials: 'include'
      })
          .then(response => response.json())
          .then(data => {
            console.log(data.Msg);
            this.$router.push('/'); // redirect to login page
          })
          .catch(error => {
            console.error('Logout failed:', error);
          });
    },
    DeleteLike: function(){
      this.$store.commit("DeleteLikes")
    }
  }
};
</script>
<style scoped>
.button-container{
  display: flex; /* Use flexbox to create a horizontal layout */
  justify-content: space-between; 
}

button{
  border-radius: 30px;
  background-color: #86A789;
  border: none;
  width: 100px;
  height: 80px;
  margin-top: 5px;
  margin-bottom: 5px;
}
button:hover{
  background-color: #a1efa8;
}
</style>