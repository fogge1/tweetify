<template>
  <div class="post-bird-container">
      <input v-model="input" placeholder="Write something"/>
      <button class="post-bird-btn" @click="publish" >Post</button>
      
  </div>
</template>

<script>
export default {
    data () {
        return {
            input: '',
        }
    },
    methods: {
        publish() {
            if (this.input != '') {
                let bird = {message: this.input, user:"testuser"}
                this.$axios.post("http://localhost:3000/birds", bird)
                    .then(response => console.log(response))
                    .catch((err) => {
                        console.log(err)
                    })
                this.input = '';
            }
            else {
                alert("Add message to bird");
            }
        }
    }
}
</script>

<style>

.post-bird-container {
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1% 0 1% 0;
    width: 100%;
    margin: 1%;
}

</style>