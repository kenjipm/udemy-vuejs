<template>
    <section>
        <BaseCard>
            <h2>{{ fullName }}</h2>
            <h3>${{ coach.hourlyRate }}/hour</h3>
        </BaseCard>
    </section>
    <section>
        <BaseCard>
            <header>
                <h2>Interested? Reach out now!</h2>
                <BaseButton link :to="`/coaches/${coach.id}/contact`">Contact</BaseButton>
            </header>
            <RouterView />
        </BaseCard>
    </section>
    <section>
        <BaseCard>
            <BaseBadge v-for="area in coach.areas" :key="area" :type="area" :title="area" />
            <p>{{ coach.description }}</p>
        </BaseCard>
    </section>
</template>

<script>
import { RouterView } from 'vue-router';
import BaseCard from '../components/ui/BaseCard.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import BaseBadge from '../components/ui/BaseBadge.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        RouterView, BaseCard, BaseButton, BaseBadge
    },
    props: ['id'],
    data() {
        return {
            coach: null,
        }
    },
    computed: {
        ...mapGetters('coaches', ['coaches']),
        fullName() {
            return `${this.coach.firstName} ${this.coach.lastName}`;
        }
    },
    created() {
        this.coach = this.coaches.find(c => c.id === this.id);
    }
}
</script>