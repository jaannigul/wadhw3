<template>
    <div class="Post">
        <label class="pealkiri">A post</label>
        <div class="body">
            <h3>Body</h3>
            <textarea required v-model="post.content"></textarea>
        </div>
        <div class="buttons">
            <button @click="updatePost" class="nupud">Update</button>
            <button @click="deletePost" class="nupud">Delete</button> 
        </div>
    </div>
    </template>
    <script>
    export default {
        name: 'certainPostView',
        computed: {
          post() {
            return this.$store.getters.getPostById(this.$store.state.currentPostId) || { content: ''}
          },
        },
        methods: {
          updatePost() {
            this.$store.dispatch('updatePost', {
              id: this.post.id,
              content: this.post.content,
            });
            this.$router.push('/post');
          },
          deletePost() {
              this.$store.dispatch('deletePost', this.post.id);
              this.$router.push('/post');
          },
        },
      }
        
    </script>
    <style>
    textarea{
        height: 118px;
        width: 200px;
    }
    .Post{
      max-width: 420px;
      margin: 30px auto;
      background-color: #86A789;
      text-align: center;
      padding: 40px;
      border-radius: 10px;
    }
    .pealkiri{
        padding-top: 20px;
        padding-bottom: 50px;
        font-size: 30px;
    }
    .body{
      display: flex; /* Use flexbox to create a horizontal layout */
      justify-content: space-between; 
    }
    .buttons{
      padding-top: 30px;
      display: flex; /* Use flexbox to create a horizontal layout */
      justify-content: space-between; 
    }
    .nupud{
        
        text-align: center;
        border-radius: 30px;
        background-color: #6f9572;
        border: none;
        width: 100px;
        height: 70px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
   .nupud:hover{
      background-color: #a1efa8;
    }
    </style>