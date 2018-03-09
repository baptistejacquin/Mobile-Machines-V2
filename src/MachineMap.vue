<template>
    <div>
      <br/>
      <gmap-map
        mapTypeId="satellite"
        :center="{lat:parseFloat(userposition.coords.latitude), lng:parseFloat(userposition.coords.longitude)}"
        :zoom="7"
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
      props:['listeMachines'],
      data(){
          return {
            userposition: {
              coords:{
                latitude: "0",
                longitude : "0"
              }
            }
          }
      },
      methods:{
        geo(){
          navigator.geolocation.getCurrentPosition((position)=> {
          this.userposition = position
            console.log(position)

        },error => {
            console.log('erreur')
          }
        );
        }
      },
      created(){
          this.geo()
      }
    }

</script>

<style scoped>

</style>
