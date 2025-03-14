<template>
    <BaseCard>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" value="frontend" v-model="areas" @change="updateFilter" />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" value="backend" v-model="areas" @change="updateFilter" />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" value="career" v-model="areas" @change="updateFilter" />
            <label for="career">Career</label>
        </span>
    </BaseCard>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';

export default {
    components: {
        BaseCard
    },
    emits: ["filter-updated"],
    data() {
        return {
            areas: ["frontend", "backend", "career"]
        };
    },
    methods: {
        updateFilter() {
            this.$emit("filter-updated", {
                areas: this.areas
            });
        }
    }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>