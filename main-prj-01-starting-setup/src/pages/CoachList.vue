<template>
    <section>
        <CoachFilter @filter-updated="updateFilteredCoaches" />
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline">Refresh</BaseButton>
                <BaseButton :link="true" to="/register" v-if="!isCoach">Register as Coach</BaseButton>
            </div>
            <h1>Coach List</h1>
            <h3 v-if="!hasCoaches">No coaches found.</h3>
            <ul v-else>
                <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :coach="coach" />
            </ul>
        </BaseCard>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../components/coaches/CoachItem.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import CoachFilter from '../components/coaches/CoachFilter.vue';
export default {
    components: {
        CoachItem, BaseCard, BaseButton, CoachFilter
    },
    data() {
        return {
            filteredCoaches: this.coaches
        };
    },
    computed: {
        ...mapGetters('coaches', ['coaches', 'hasCoaches', 'isCoach'])
    },
    created() {
        this.filteredCoaches = this.coaches;
    },
    methods: {
        updateFilteredCoaches(filter) {
            this.filteredCoaches = this.coaches
                .filter(coach => coach.areas.some(coachArea => filter.areas.findIndex(area => area === coachArea) >= 0))
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>