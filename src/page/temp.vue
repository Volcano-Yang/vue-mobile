<template>
  <div id="temp">
    <div class="temp-info">
      所有路由导航
    </div>
    <div class="temp-link">
      <router-link
        :to="{ path: '/home'}"
      >
        home<br>
      </router-link>
      <router-link
        :to="{ path: '/404'}"
      >
        404<br>
      </router-link>
      <router-link
        :to="{ path: '/login'}"
      >
        login<br>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Temp",
};
</script>

<style>

</style>
