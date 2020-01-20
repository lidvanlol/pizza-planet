<template>
  <header class="row">
<nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
      <a class="navbar-brand" href="/">Pizza Planet</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav">
        <router-link :to="homeLink" tag="li">
          <a class="nav-link">Home</a>
        </router-link>

        <router-link :to="menuLink" tag="li">
          <a class="nav-link">Menu</a>
        </router-link>
      </ul>
  </div>
</nav>





  </header>
</template>

<script>
export default {
  data() {
    return {
      homeLink: "/",
      menuLink: "/menu"
    };
  }
};
</script>

<style scoped>
header {
  margin-bottom: 20px;
}
.navbar-brand {
  font-size: 1.5em;
}
</style>
