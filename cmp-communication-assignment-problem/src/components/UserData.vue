<template>
    <form @submit.prevent="saveUser">
        <h1>User Data</h1>
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName" />
        </div>
        <div>
            <label>Age</label>
            <input type="number" v-model="enteredAge" />
        </div>
        <button @click="saveUser">Save</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredAge: 0,
        }
    },
    emits: {
        'save-user': function(name, age) {
            if (name && age) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        saveUser() {
            this.$emit('save-user', this.enteredName, this.enteredAge);
        }
    }
}
</script>