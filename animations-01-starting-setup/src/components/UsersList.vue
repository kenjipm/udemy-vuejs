<template>
    <TransitionGroup tag="ul" name="user-list">
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </TransitionGroup>
    <input type="text" ref="inputUserName" />
    <button @click="addUser">Add User</button>
</template>

<script>
export default {
    data() {
        return {
            users: ["Abe", "Bambo", "Cici", "David", "Erwin", "Friska"]
        };
    },
    methods: {
        addUser() {
            this.users.unshift(this.$refs.inputUserName.value);
        },
        removeUser(user) {
            this.users = this.users.filter(u => u !== user);
        }
    }
}
</script>

<style>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px #aaa solid;
    text-align: center;
    padding: 1rem;
}

.user-list-enter-active {
    animation: list-add 1s ease-out;
}

.user-list-leave-active {
    animation: list-remove 1s ease-in;
    position: absolute;
}

.user-list-move {
    transition: transform 1s ease;
}

@keyframes list-add {
    from {
        transform: translateX(-30px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes list-remove {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(30px);
        opacity: 0;
    }
}
</style>