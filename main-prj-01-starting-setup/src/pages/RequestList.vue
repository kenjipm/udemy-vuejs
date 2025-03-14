<template>
    <section>
        <BaseCard>
            <h3>Request List</h3>
            <p v-if="!hasRequests">No requests registered yet</p>
            <ul v-else>
                <RequestItem v-for="request in requests" :key="request.id" :request="request"/>
            </ul>
        </BaseCard>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseCard from '../components/ui/BaseCard.vue';
import RequestItem from '../components/requests/RequestItem.vue';

export default {
    components: {
        BaseCard, RequestItem
    },
    computed: {
        ...mapGetters('requests', ['requests', 'hasRequests'])
    }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>