<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>

      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { dbMenuRef, dbOrdersRef } from "./firebase.config";

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  },
  created() {
    this.$store.dispatch("setMenuRef", dbMenuRef);
    this.$store.dispatch("setOrdersRef", dbOrdersRef);
  }
};
</script>

<style>
header,footer{

  padding: 40px 0;
  font-size:1.2em;
}
.card {

  margin: 20px 0;
  border-radius: 5px ;
}
</style>
