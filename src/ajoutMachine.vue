<template>
  <span>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ajoutModal">
      Ajouter une Machine
    </button>

    <!-- Modal -->
    <div class="modal fade" id="ajoutModal" tabindex="-1" role="dialog" aria-labelledby="ajoutModalCenterTitle"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ajoutModalLongTitle">Ajouter une machine</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div class="modal-body">
              <div class="form-group">
                <label for="nomMachineAjout">Nom de la machine</label>
                <input type="text" class="form-control" id="nomMachineAjout" required placeholder="Entrez un nom" v-model="newMachine.name" >
              </div>
              <div class="form-group">
                <label for="latitudeMachineAjout">Latitude</label>
                <input type="text" class="form-control" id="latitudeMachineAjout" placeholder="45.1856964"  v-model="newMachine.latitude" >
                <label for="longitudeMachineAjout">Longitude</label>
                <input type="text" class="form-control" id="longitudeMachineAjout" placeholder="5.7287321"  v-model="newMachine.longitude">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="statusMachineAjout" true-value="true" false-value="false" v-model="newMachine.status">
                <label class="form-check-label" for="statusMachineAjout">Activée</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
              <button type="submit" @click="post" class="btn btn-primary" >Enregistrer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "ajout-machine",
    data(){
      return{
        newMachine: {
          checkedAt: new Date(),
          latitude:"45.1856964",
          longitude:"5.7287321",
          status : "false",
          name:"",

        }
      }
    },
    methods:{
      post() {
        axios.post(`https://machine-api-campus.herokuapp.com/api/machines`,this.newMachine)
          .then(response => {
            // JSON responses are automatically parsed.
            $('#ajoutModal').modal('hide')
          })
          .catch(e => {
            console.log('Error')
          })
      },
    }
  }
</script>

<style scoped>

</style>
