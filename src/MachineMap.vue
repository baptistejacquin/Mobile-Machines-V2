<template>
    <div>
      <br/>
      <gmap-map
        mapTypeId="satellite"
        :center="{lat:10, lng:10}"
        :zoom="3"
        style="width: 80%; height: 650px; margin: auto"
      >
        <gmap-marker v-for="machine in listeMachines" :key="machine.id"
          :position="{lat:parseFloat(machine.latitude), lng:parseFloat(machine.longitude)}"
                     :label="machine.name"
        ></gmap-marker>
      </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "machine-map",
      props:['listeMachines']
    }
</script>

<style scoped>

</style>
