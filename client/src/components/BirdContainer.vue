<template>
    <div class="birds-container">
        <div v-for="bird in birds" :key="bird.id" class="bird-container">
            <p class="message">
                {{bird.message}}
            </p>
            <button class="remove-bird" @click="removeBird(bird._id)" ></button>

        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            birds: []
        }
    },
    methods :{
        removeBird : function(id) {
            this.$axios.delete("http://localhost:3000/birds/" + id)
                .then()
                .catch((err) => {
                    console.log(err)
                })
            this.getBirds()
        },
        getBirds : function () {
            this.$axios.get("http://localhost:3000/birds")
            .then((result) => {
                this.birds = result.data;
                // console.log(this.birds)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted () {
        this.getBirds();
    }
}
</script>

<style>

.birds-container {
    /* border: 1px solid gray; */
    /* border-radius: 3px; */
    width: 100%;
}

.bird-container {
    border: 1px solid gray;
    border-radius: 3px;
}

.message {
    display: inline-block;
}

.remove-bird {
    width: 10px;
    height: 10px;
    background-color: black;
    display: inline-block;
}

</style>