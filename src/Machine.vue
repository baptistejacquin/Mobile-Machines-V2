<template>
    <div>
        <br/><br/>
        <H1>Machine {{machine.name}}</H1>
        <h3 v-if="machine.status === 'true'" class="green"> Statut OK</h3>
        <h3 v-else class="red">Statut KO</h3>
      <button class="btn btn-warning" @click="supression" >Supprimer</button>
      <!--<toggle-button :sync='true' :color="{checked: '#41d100',unchecked: '#cb0c70'} " v-model="machine.status"/>-->
      <h5>Last time checked : {{test.checkedAt.toLocaleString()}}</h5>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "machine",
        props: ['machine'],
        data: function () {
            return {
                test: {
                    name: 'What else ?',
                    status: false,
                    checkedAt: new Date(),
                }
            }
        },
      methods:{
          supression(){
            axios.delete(`https://machine-api-campus.herokuapp.com/api/machines/`+ this.machine.id)
            .then(response => {
              // JSON responses are automatically parsed.
              console.log('reussit')
            })
            .catch(e => {
              console.log('pas reussit')
            })
      },
      }
    }
</script>

<style scoped>
    .green {
        color: #00fe00;
    }

    .red {
        color: #ff0000;
    }
</style>
