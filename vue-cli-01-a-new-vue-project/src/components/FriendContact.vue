<template>
    <li>
        <h2>{{ name }}{{ isFavorite ? ' (Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">{{ isFavorite ? 'Unfavorite' : 'Favorite' }}</button>
        <button @click="toggleDetails">{{ isDetailVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="isDetailVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: {
        'toggle-favorite': function(id) {
            if (id) {
                return true;
            } else {
                console.warn('Id is missing');
            }
        },
        'delete-friend': function(id) {
            if (id) {
                return true;
            } else {
                console.warn('Id is missing');
            }
        }
    },
    data() {
        return {
            isDetailVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.isDetailVisible = !this.isDetailVisible;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite');
        },
        deleteFriend() {
            this.$emit('delete-friend');
        }
    }
}
</script>