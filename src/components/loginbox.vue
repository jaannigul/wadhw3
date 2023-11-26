<template>
    <div class="login_box" id="login_box">
        <form>
           <div class="form-row">
             <h3>Email</h3>
             <input type="text" id="eMail" name="Email" class="form-control" placeholder="Email">
           </div>
           <div class="form-row">
             <h3>Password</h3>
             
             <!--
                The version where password is NOT visible 
                <input type="password" id="password" name="Password" class="form-control" placeholder="Password" v-model="password">
             -->

             <input type="text" id="password" name="Password" class="form-control" placeholder="Password" v-model="password">

           </div>
           <div class="error-message" v-if="errorMsg">{{ errorMsg }}</div>
           <button v-on:click="submitForm" type="submit" class="btn btn-primary">Signup</button>
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
      password: '',
      errorMsg: ''
    }
  },
  methods:{
    submitForm(event) {
        event.preventDefault(); // Prevent page reload
        this.errorMsg = this.validatePassword();
        if (this.errorMsg === '') {
            console.log("errormessage: " + this.errorMsg);
            console.log("password: " + this.password);
            this.$router.push('/post'); // If there is no error, redirect to the post page
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
 .login_box {
  font-size: 25px;
  border: 2px solid;
  padding-bottom: 30px;
  padding-top: 40px;
  background-color: #86A789;
  margin-top: 15ch;
  margin-bottom: 15ch;
  text-align: center;
  border-radius: 25px;
  display: flex;
  justify-content: center;
 }
 
 .form-row {
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
  margin-top: 30px;
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