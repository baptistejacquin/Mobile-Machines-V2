<template>
    <div>
      <gmap-map
        :center="{lat:45.1841602, lng:5.750523}"
        :zoom="13"
        style="width: 80%; height: 650px; margin: auto"
      >
      </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "machine-map"
    }
</script>

<style scoped>

</style>
