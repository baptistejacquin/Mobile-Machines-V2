<template>
    <div>
      <transition-group name="fade">
        <machine v-for="machine in listeMachines" :machine="machine" :key="machine.id" v-on:reload="$emit('reload')"></machine>
      </transition-group>
    </div>
</template>

<script>
    import Machine from "./Machine";

    export default {
      components: {Machine},
      name: "machine-liste",
      props:["listeMachines"],
    }
</script>

<style scoped>
    .green {
        color: #00d84d;
    }

    .red {
        color: #ff0000;
    }
    .liste{
        border: 1px solid black ;
        margin: 10px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      transition: opacity .5s;
      opacity: 0;
    }
</style>
