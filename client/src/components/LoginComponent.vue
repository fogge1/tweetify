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
            email: '1@gmail.com',
            password: '1'
        }
    },
    methods: {
        login : function () {
            const params = new URLSearchParams();
            params.append('email', this.email);
            params.append('password', this.password);

            this.$axios.post("http://localhost:3000/users", params)
                .then((response) => {
                    console.log("hej")
                    console.log(response)
                })
                .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>