<script>
import axios from 'axios';
export default {
  name: 'AppProjects',
  data() {
    return {
      projects: [],
      newProjects: [],
      page: 1,
      loading: false,
    };
  },
  methods: {
    getData() {
      this.loading = true;
      this.newProjects = [];
      axios
        .get(`http://127.0.0.1:8000/api/projects?page=${this.page}`)
        .then((response) => {
          console.log(response.data.projects.data);

          for (let i = 0; i < response.data.projects.data.length; i++) {
            this.newProjects.push(response.data.projects.data[i]);
          }
        })
        .finally(() => {
          this.projects = this.newProjects;
          this.loading = false;
        });
    },
    changePage(x) {
      this.page = x;
      this.getData();
    },
  },
  mounted() {
    this.getData();
    console.log('funziona');
  },
};
</script>
<template>
  <h1>Welcome again VueJS</h1>

  <ul v-if="!loading">
    <li v-for="(project, i) in projects" :key="i">
      {{ project.title }}
      <img
        v-if="project.img.startsWith('http')"
        width="50px"
        :src="project.img"
        alt=""
      />
      <img
        v-else
        width="50px"
        :src="'http://127.0.0.1:8000/storage/' + project.img"
        alt=""
      />
    </li>
  </ul>

  <div v-else>Loading...</div>
  <div>
    <button @click="changePage(1)">pagina 1</button>
    <button @click="changePage(2)">pagina 2</button>
    <button @click="changePage(3)">pagina 3</button>
  </div>
</template>
<style scoped></style>
