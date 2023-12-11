<template>
  <div class="login_box" id="login_box">
    <label>Register</label>
    <form>
      <div class="form-row">
        <h3>Email</h3>
        <input type="text" id="email" name="Email" class="form-control" placeholder="Email" v-model="email">
      </div>
      <div class="form-row">
        <h3>Password</h3>
        <input type="text" id="password" name="Password" class="form-control" placeholder="Password" v-model="password">

      </div>
      <div class="error-message" v-if="errorMsg">{{ errorMsg }}</div>
      <button v-on:click="submitForm" type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'loginBox',
  props: {},
  computed: {},
  data() {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault(); // Prevent page reload
      this.errorMsg = this.validatePassword();
      if (this.errorMsg === '') {// if the password is valid to use
        console.log("password is valid");
        console.log("password: " + this.password);
        var data = {
          email: this.email,
          password: this.password
        };
        fetch("http://localhost:3000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data), // the data (email and password) are sent to the server
        })
            .then(response => {
              console.log(response);
              return response.json();
            })
            .then((data) => {
              console.log(data);
              this.$router.push('/post'); //If there is no error, redirect to the post page
            })
            .catch((e) => {
              console.log(e);
              console.log("error");
            })
      }
      console.log("errormessage: " + this.errorMsg);
      console.log("password: " + this.password);
    },

    validatePassword() {
      let errorMsg = '';

      // validate password requirements
      if (this.password.length < 8) {
        errorMsg = 'Password must be at least 8 characters';
      } else if (!/^(?=.*[A-Z]).*$/.test(this.password)) {
        errorMsg = 'Password must include at least one uppercase alphabet character';
      } else if (!/^(?=.*[a-z]).{2,}$/.test(this.password)) {
        errorMsg = 'Password must include at least two lowercase alphabet characters';
      } else if (!/^(?=.*\d).*$/.test(this.password)) {
        errorMsg = 'Password must include at least one numeric value';
      } else if (!/^(?=.*_).*$/.test(this.password)) {
        errorMsg = 'Password must include the character "_"';
      } else if (!/^.{8,14}$/.test(this.password)) {
        errorMsg = 'Password must have a specific length (at least 8 chars and less than 15 chars)';
      }
      return errorMsg;
    }
  }
}

</script>


<style scoped>
label {
  font-size: 30px;
  text-align: center;
  color: rgb(8, 110, 110);
}

.login_box {
  max-width: 420px;
  height: 435px;
  margin: 30px auto;
  background-color: #86A789;
  padding: 40px;
  border-radius: 10px;
}

.form-row {
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.login_box input {
  margin-left: 40px;
  border-radius: 15px;
  width: 60%;
}

.login_box button {
  background: rgb(8, 110, 110);
  color: white;
  margin-top: 80px;
  width: 30%;
  border-radius: 15px;
 }
  .login_box h3{
  width: 40%;
  text-align: right;
}

input::placeholder {
  text-align: center;
}
</style>