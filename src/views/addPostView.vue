<template>
<div class="addPost">
    <label class="pealkiri">Add post</label>
    <div class="body">
        <h3>Body</h3>
        <textarea required v-model="post.content"></textarea>
    </div>
    <div class="buttons">
        <button @click="addPost" class="nupp">Add post</button>
    </div>
</div>
</template>
<script>
export default {
      name: 'addPostView',
      data() {
       return {
          post: {
            content: "",
          },
        };
      },
      computed: {},
      created() {},
      methods: {
      addPost: function(){
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        var day = currentDate.getDate().toString().padStart(2, '0');
        var formattedDate = `${year}-${month}-${day}`;
      var data = {
        content: this.post.content,
        create_time: formattedDate,
      };
      fetch("http://localhost:3000/auth/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/post");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }
      }
      
    }
    
</script>
<style>
textarea{
    height: 118px;
    width: 200px;
}
.addPost{
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
    padding-left: 100px;
}
.nupp{
    text-align: center;
    border-radius: 30px;
    background-color: #6f9572;
    border: none;
    width: 100px;
    height: 70px;
  
}
.nupp:hover{
  background-color: #a1efa8;
}
</style>