<template>
    <div class="sign-up">
        <p>Let's create a new account !</p>
        <input type="text" v-model="email" placeholder="Email"><br />
        <input type="password" v-model="password" placeholder="Password"><br />
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">login</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp_old: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(function() {
                fetch('https://httpbin.org/get').then(r => r.json()).then(response => console.log(response))
            }, (err) => alert('Oops. ' + err.message))
            // .then(() => alert('Your account has been created !', (err) => alert('Oops. ' + err.message)))
        },
        signUp: async function() {
            let response = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            console.log(response)
            let result = await fetch('https://httpbin.org/get')
            result = await result.json()
            console.log(result)
        }
    }
}
</script>

<style scoped>
.signUp {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>