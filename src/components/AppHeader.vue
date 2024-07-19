<script>
export default {
  name: 'AppHeader',
};
</script>

<template>
  <header>
    <section class="row justify-content-between">
      <div class="col-2">Logo</div>
      <nav class="col-2">
        <router-link :to="{ name: 'home' }" class="nav-link">
          Home
        </router-link>
        <router-link :to="{ name: 'projects' }" class="nav-link">
          PROGETTI
        </router-link>
      </nav>
    </section>
  </header>
</template>

<style scoped>
section {
  width: 100%;
  height: 2rem;
  background-color: rgb(46, 46, 46);
}
</style>
