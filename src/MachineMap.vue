<template>
    <div>
      <gmap-map
        :center="{lat:10, lng:10}"
        :zoom="7"
        style="width: 80%; height: 650px; margin: auto"
      >
        <gmap-marker v-for="machine in machines"
          :position="{lat:machine.latitude, lng:machine.longitude}"
        ></gmap-marker>
      </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "machine-map",
      data: function () {
        return {
          machines: [{
            id: 1,
            latitude: 10,
            longitude: 10,
          },
            {
              id: 2,
              latitude: 11,
              longitude: 9.6,
            }]
        }

      }
    }
</script>

<style scoped>

</style>
