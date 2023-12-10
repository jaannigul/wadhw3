<template>
  <div class="form">
    <form>
      <h3>Log in</h3>
      <label for="email">Email</label>
      <input type="email" name="email" v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password">
      <div class="container">
        <button @click='logIn' class="center">LogIn</button>
        <button @click='this.$router.push("/registerView")' class="center">Signup</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'loginComp',
  data: function () {
    return {
      email: '',
      password: '',
    } //maybe implement displaying an error message if the email/password is wrong
  },
  props: {},
  computed: {},
  methods: {
    logIn() {
      console.log("")
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', //  Don't forget to specify this if you need cookies
        body: JSON.stringify(data), // sends the data to the server
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/post");
            //location.assign("/post"); //redirect to posts
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }
}
</script>


<style>


.form {
  max-width: 420px;
  margin: 30px auto;
  background-color: #86A789;
  text-align: left;
  padding: 30px;
  border-radius: 10px;
  max-height: 460px;
}

h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}

label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color: blue;
}

button {
  background: rgb(8, 110, 110);
  border: 0;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  color: white;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%;
}

.container {
  display: flex;
  justify-content: center;
}
</style>