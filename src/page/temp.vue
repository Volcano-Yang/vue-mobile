<template>
  <div id="temp">
    <div class="temp-info">
      所有路由导航
    </div>
    <div class="temp-link">
      <router-link :to="{ path: '/home' }">
        home<br>
      </router-link>
      <router-link :to="{ path: '/404' }">
        404<br>
      </router-link>
      <router-link :to="{ path: '/login' }">
        login<br>
      </router-link>
    </div>
    <div class="temp-font">
      所有字体预览
      <div>
        <div class="fontxs">
          xs:16px;
        </div>
        <div class="fonts">
          s:20px;
        </div>
        <div class="fontm">
          m:24px;
        </div>
        <div class="fontl">
          l:28px;
        </div>
        <div class="fontxl">
          xl:32px;
        </div>
        <div class="fontxxl">
          xxl:36px;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Temp"
};
</script>

<style lang="less" scope>
 @import "../assets/css/base.less";
.fontxs {
  // .font_size(@font_xs);
  .font-xs();
}

.fonts {
  // .font_size(@font_s);
  .font-s();
}

.fontm {
  // .font_size(@font_m);
  .font-m();
}

.fontl {
  // .font_size(@font_l);
  .font-l();
}

.fontxl {
  // .font_size(@font_xl);
  .font-xl();
}

.fontxxl {
  // .font_size(@font_xxl);
  .font-xxl();
}
</style>
