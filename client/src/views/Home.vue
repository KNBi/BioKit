<template>
  <div class="home">
    <h1>{{ serverData }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    serverData: null,
  }),
  methods: {
    async getServerData() {
      try {
        await this.$store.dispatch('getServerData');
        this.serverData = this.$store.state.serverData;
      } catch(err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.getServerData();
  }
}
</script>
