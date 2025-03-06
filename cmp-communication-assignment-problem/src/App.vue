<template>
    <div class="container">
        <div>
            <ActiveUser :name="name" :age="age" />
        </div>
        <div>
            <UserData @save-user="setActiveUser"/>
        </div>
    </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

export default {
    data() {
        return {
            name: '',
            age: 0,
        };
    },
    methods: {
        setActiveUser(name, age) {
            this.name = name;
            this.age = age;
        }
    },
    components: {
        ActiveUser,
        UserData,
    }
}
</script>

<style>
div.container {
    display: flex;
    justify-content: space-around;
}
</style>