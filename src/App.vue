<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1><br/>
    <div>
      <router-link to="/liste" class="btn btn-primary">Consulter la liste des machines</router-link>
      <router-link to="/Map" class="btn btn-primary">Voir la Carte</router-link>
      <ajout-machine v-on:reload="refresh"></ajout-machine>
      <button class="btn btn-success" @click="refresh">reload</button>
      <router-view v-on:reload="refresh" :listeMachines="posts"></router-view>

    </div>
    <div>
      <!--<machine-liste v-if="listemachine === true"></machine-liste>-->
      <!--<machine-map v-if="carte === true"></machine-map>-->
      <!--<machine name="Nespresso" statut="En marche" ></machine>-->
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ajoutMachine from './ajoutMachine';

  export default {
    name: 'app',
    components: {'ajout-machine': ajoutMachine},
    data() {
      return {
        msg: 'Welcome to the future',
        listemachine: false,
        carte: false,
        posts: [],
        errors: [],
      }
    },
    created() {
      axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      setInterval(this.refresh,10 * 1000)
    },

    methods: {
      refresh() {
        axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
          .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      listeok: function () {
        this.carte = false
        if (this.listemachine === false) {
          this.listemachine = true
        }
      },
      carteok: function () {
        this.listemachine = false
        if (this.carte === false) {
          this.carte = true
        }
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  img {
    width: 200px;
    height: 200px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
  }
</style>
