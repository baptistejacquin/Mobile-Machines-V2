<template>
    <div>
        <br/><br/>
            <div v-for="machine in machines" class="col-lg-12 liste" >
                <h4>id n° {{machine.id}}</h4>
                <h1> {{machine.name}}</h1>
                <h3 v-if="machine.status===true" class="green"> Status OK</h3>
                <h3 v-if="machine.status===false" class="red"> Status KO</h3>
                <h5>Last time checked : {{machine.checkedAt.toLocaleString()}}</h5>
                <br/><br/>
            </div>
    </div>
</template>

<script>
    export default {
        name: "machine-liste",
        data: function () {
            return {
                machines: [{
                    id: 1,
                    name: 'What else ?',
                    status: true,
                    checkedAt: new Date(),
                }, {
                    id: 2,
                    name: 'Broken',
                    status: false,
                    checkedAt: new Date(),
                }]
            }

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
    .liste{
        border: 1px solid black ;
        margin: 10px;
    }
</style>