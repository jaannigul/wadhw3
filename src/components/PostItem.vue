<template>
  <div v-if="post" class="postcontainer">
    <div class="post heading">
      <img :src="userPicture" @error="setDefaultImage" class="pfp" alt="pfp"/>
      <h4 class="username">{{ post.username }}</h4>
      <p class="date">{{ post.create_time }}</p>
    </div>
    <div class="post content">
      <p>{{ post.content }}</p>
      <img v-if="post.image_url" :src="post.image_url" alt="Post image"/>
    </div>
    <div class="post footer">
      <div class=" like-container">
        <button class="like" @click="incrementLike(post)">
          <i class="em em---1" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
        </button>
        <p>{{ post.likes }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    Loading post or post not found...
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object
  },
  computed: {
    userPicture() {
      return this.post.user_picture || this.defaultImage;
    },
    defaultImage() {
      return '/res/images/user.png';
    }
  },
  methods: {
    incrementLike(post) {
      post.likes = post.likes + 1;
    },
    setDefaultImage(event) {
      event.target.src = this.defaultImage;
    }
  }

};
</script>

<style scoped>


.postcontainer {
  background-color: #86A789;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
  padding: 10px;
}

.post.content {
  margin: 5px;
  text-align: left;
}

.post.content img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}

.post.heading {
  padding: 5px 5px 5px;
  border-bottom: 1px solid #adadad;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.post.heading > img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: 0;

}

.post.footer {
  margin-top: 10px;
  padding: 10px 10px 10px;
  display: flex;
  border-top: 1px solid #adadad;
}

.post.heading p.date {
  flex: 1;
  text-align: right;
  margin: 0;
}


.post.heading ~ .post.content p {
  margin: 0;
}

.like-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.like {
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
.like-container p {
  margin: 2px 0 0 7px;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
}
</style>