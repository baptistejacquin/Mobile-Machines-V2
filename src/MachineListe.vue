<template>
    <div>
      <machine v-for="machine in listeMachines" :machine="machine" :key="machine.id"></machine>
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
</style>
