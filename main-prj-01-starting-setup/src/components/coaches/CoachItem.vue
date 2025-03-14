<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ coach.hourlyRate }}/hour</h4>
        <div>
            <BaseBadge v-for="area in coach.areas" :key="area" :type="area" :title="area" />
        </div>
        <div class="actions">
            <BaseButton :link="true" :to="`coaches/${coach.id}/contact`" mode="outline">Contact</BaseButton>
            <BaseButton :link="true" :to="`coaches/${coach.id}`">View Details</BaseButton>
        </div>
    </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';
export default {
    components: {
        BaseButton, BaseBadge
    },
    props: ['coach'],
    computed: {
        fullName() {
            return `${this.coach.firstName} ${this.coach.lastName}`
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>