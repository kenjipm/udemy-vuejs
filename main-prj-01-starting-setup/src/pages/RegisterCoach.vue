<template>
    <section>
        <BaseCard>
            <h2>Register Coach</h2>
            <CoachForm @data-submitted="saveData" />
        </BaseCard>
    </section>
</template>

<script>
import BaseCard from '../components/ui/BaseCard.vue';
import CoachForm from '../components/coaches/CoachForm.vue';

export default {
    components: {
        BaseCard, CoachForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
}
</script>