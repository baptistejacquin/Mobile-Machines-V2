<template>
    <div>
        <br/><br/>
        <H1>Machine {{test.name}}</H1>
        <h3 v-if="test.status === true" class="green"> Statut OK</h3>
        <h3 v-else class="red">Statut KO</h3><br/>
        <h5>Last time checked : {{test.checkedAt.toLocaleString()}}</h5>
    </div>
</template>

<script>
    export default {
        name: "machine",
        props: ["name", "statut"],
        data: function () {
            return {
                test: {
                    name: 'What else ?',
                    status: false,
                    checkedAt: new Date(),
                }
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
</style>