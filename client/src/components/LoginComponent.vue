<template>
  <div>
    <!-- <form action=""> -->
        <input type="email" v-model="email" >
        <input type="password" v-model="password" >
        <button @click="login" >Log in</button>
    <!-- </form> -->
  </div>
</template>

<script>
export default {
    data () {
        return {
            email: 'hej@gmail.com',
            password: 'hej'
        }
    },
    methods: {
        login : function () {
            // const params = new URLSearchParams();
            // params.append('password', this.password);
            // params.append('email', this.email);
            
            this.$axios.post("http://localhost:3000/users/login", {params: {"password": this.password, "email": this.email}})
                .then((response) => {
                    console.log("test")
                    this.$store.dispatch('setUser', response.data)
                    console.log(this.$store.getters.getUser)
                })
                .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>