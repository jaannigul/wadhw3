<template>
  <div>
     <h1>Register</h1>
     <div class="login_box" id="login_box">
       <form>
         <div class="form-row">
           <h3>Email</h3>
           <input type="text" id="eMail" name="Email" class="form-control" placeholder="Email" required>
         </div>
         <div class="form-row">
           <h3>Password</h3>
           <input type="password" id="password" name="Password" class="form-control" placeholder="Password" required>
         </div>
         <button type="submit" class="btn btn-primary">Signup</button>
       </form>
     </div>
  </div>
 </template>
 
 <script>
 export default {
  name: 'registerView',
  components: {}
 }
 </script>
 
 <style scoped>
 .login_box {
  font-size: 25px;
  border: 2px solid;
  transform: translate(-50%, -50%);
  padding: 30px;
  padding-top: 40px;
  background-color: #86A789;
  margin-top: 25ch;
  left: 50%;
  position: absolute;
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
 
 .login_box form {
  width: 100%;
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