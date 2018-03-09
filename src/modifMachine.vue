<template>
     <span>
    <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#modifModal'+modification.id">
      Modifier une Machine
    </button>

       <!-- Modal -->
    <div class="modal fade" :id="'modifModal'+modification.id" tabindex="-1" role="dialog" aria-labelledby="ajoutModalCenterTitle"
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
                <input type="text" class="form-control" id="nomMachineAjout" required placeholder="Entrez un nom" v-model="modification.name" >
              </div>
              <div class="form-group">
                <label for="latitudeMachineAjout">Latitude</label>
                <input type="text" class="form-control" id="latitudeMachineAjout" placeholder="45.1856964" v-model="modification.latitude" >
                <label for="longitudeMachineAjout">Longitude</label>
                <input type="text" class="form-control" id="longitudeMachineAjout" placeholder="5.7287321" v-model="modification.longitude">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="statusMachineAjout" true-value="true" false-value="false" v-model="modification.status">
                <label class="form-check-label" for="statusMachineAjout">Activée</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
              <button type="submit" @click="modif" class="btn btn-primary" >Enregistrer</button>
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
        name: "modif-machine",
      props:['modification'],
      data(){
        return{
        }
      },
      methods:{
        modif() {
          if (this.modification.name != "" ) {
            axios.put(`https://machine-api-campus.herokuapp.com/api/machines/` + this.modification.id, this.modification)
              .then(response => {
                // JSON responses are automatically parsed.
                $('#modifModal'+this.modification.id).modal('hide')
                this.$emit('reload')
                console.log('test ok')
              })
              .catch(e => {
                console.log('Error')
              })
          }
        },
      }
    }
</script>

<style scoped>

</style>
