<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  data() {
    return {
      teamName: "",
      members: [],
    };
  },
  inject: ['teams', 'users'],
  props: ['teamId'],
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId);
      if (selectedTeam) {
        this.teamName = selectedTeam.name;
        this.members = selectedTeam.members.map(userId => {
          const selectedUser = this.users.find(user => user.id === userId);
          return {
            id: userId,
            fullName: selectedUser.fullName,
            role: selectedUser.role
          }
        });
      }
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>