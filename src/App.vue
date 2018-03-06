<template>
    <div id="app">
        <img src="http://vuejs.org/images/logo.png">
        <h1>{{ msg }}</h1><br/>
        <div>
            <router-link to="/liste" class="btn btn-primary" >Consulter la liste des machines</router-link>
            <router-link to="/Map" class="btn btn-primary" >Voir la Carte</router-link>
            <router-link to="/machine" class="btn btn-primary" >Voir Une Machine</router-link>
            <router-view></router-view>
        </div>
        <div>
            <!--<machine-liste v-if="listemachine === true"></machine-liste>-->
            <!--<machine-map v-if="carte === true"></machine-map>-->
            <!--<machine name="Nespresso" statut="En marche" ></machine>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to the future',
                listemachine: false,
                carte: false,
            }
        },
        methods: {
            listeok: function () {
                this.carte= false
                if(this.listemachine===false){
                    this.listemachine = true
                    }
            },
            carteok: function () {
                this.listemachine= false
                if(this.carte===false){
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
