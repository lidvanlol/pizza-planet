<template>
  <div>
    <p>Click on the links bellow for more info</p>
    <nav class="navbar navbar-expand-lg navbar navbar-toggleable-md navbar-light">
      <ul class="navbar-nav">
        <router-link to="/history" tag="li">
          <a class="nav-link">Our history</a>
        </router-link>

        <router-link to="/contact" tag="li">
          <a class="nav-link">Contact US</a>
        </router-link>
        <router-link to="/ordering-guide" tag="li">
          <a class="nav-link">Ordering Guide</a>
        </router-link>
        <router-link to="/delivery" tag="li">
          <a class="nav-link">Delivery</a>
        </router-link>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>
