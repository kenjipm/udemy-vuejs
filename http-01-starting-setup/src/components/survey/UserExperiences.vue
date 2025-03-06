<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="errorMessage">{{ errorMessage }}</div>
      <div v-else-if="results.length === 0">No user experiences found.</div>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorMessage: "",
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.errorMessage = "";
      fetch('https://vue-http-demo-3a157-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json').then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        this.results = [];
        for (const id in data) {
          const survey = data[id];
          const newSurvey = {
            id: id,
            name: survey.name,
            rating: survey.rating,
          };
          this.results.push(newSurvey);
        }
      }).catch((err) => {
        this.errorMessage = err.message;
      }).finally(() => {
        this.isLoading = false;
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>