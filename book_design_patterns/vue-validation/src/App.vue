<template>
  <div id="app">
    <div>
      <form class="form" @submit.prevent="onSubmit">

        <div class="input">
          <label for="email">Email</label>
          <input
          type="email"
          id="email"  
          :class="{ error: $v.email.$error }"
          @input="$v.email.$touch()"
          v-model.trim="email">
          <div v-if="$v.email.$dirty">
            <p class="error-message" v-if="!$v.email.email">Please enter a
            valid email address.</p>
            <p class="error-message" v-if="!$v.email.required">Email must not
            be empty.</p>
          </div>
        </div>

        <div class="input">
          <label for="firstName">First Name</label>
          <input
          type="text"
          id="firstName"
          :class="{ error: $v.firstName.$error }"
          @input="$v.firstName.$touch()"
          v-model.trim="firstName">
          <div v-if="$v.firstName.$dirty">
            <p class="error-message" v-if="!$v.firstName.required">First Name
            must not be empty.</p>
          </div>          
        </div>

        <div class="input">
          <label for="lastName">Last Name</label>
          <input
          type="text"
          id="lastName"
          :class="{ error: $v.lastName.$error}"
          @input="$v.lastName.$touch()"
          v-model.trim="lastName">
          <div v-if="$v.lastName.$dirty">
            <p class="error-message" v-if="!$v.lastName.required">Last Name
            must not be empty.</p>
          </div>
        </div>


        <div class="input">
          <label for="password">Password</label>
          <input
          type="password"
          id="password"
          :class="{ error: $v.password.$error }"
          @input="$v.password.$touch()"
          v-model.trim="password">
          <div v-if="$v.password.$dirty">
            <p class="error-message" v-if="!$v.password.required">Password must
            not be empty.</p>
            <p class="error-message" v-if="!$v.password.minLength">Password must
            be 6 caracter.</p>
          </div>          
        </div>

        <div class="input">
          <label for="repeatPassword">Repeat Password</label>
          <input
          :class="{ error: $v.repeatPassword.$error }"
          type="password"
          id="repeatPassword"
          v-model.trim="repeatPassword"
          @input="$v.repeatPassword.$touch()">
          <div v-if="$v.repeatPassword.$dirty">
            <p class="error-message" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be </p>
            <p class="error-message" v-if="!$v.repeatPassword.required">Password must not be empty.</p>
          </div>
        </div>

        <button type="submit" :disabled="$v.$invalid">Submit</button>
      </form>
    </div>
    <div class="validators">
      <pre>{{$v}}</pre>
    </div>    
  </div>
</template>

<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';

  export default {
    name: 'app',
    data () {
      return {
       user: {
        email: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
      }
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      minLength: minLength(6),
      sameAsPassword: sameAs('password'),
    },
  },    
  methods: {
    onSubmit(){
      if(!this.$v.$invalid) {
        const user = {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          password: this.password,
          repeatPassword: this.repeatPassword
        }
      }
    }
  },
}
</script>

<style>
.form {
  display: inline-block;
  text-align: center;
  width: 49%;
} 
.validators {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: top;
} 
.input {
  padding: 5px;
}
input:focus {
  outline: none;
} 
.error {
  border: 1px solid red;
}
.error-message {
  color: red;
}
</style>
