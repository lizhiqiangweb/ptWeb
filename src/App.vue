<template>
<div>
  <Header></Header>
  <transition name="fade">
    <router-view />
  </transition>
</div>
</template>

<script>
import Header from "@/components/assembly/Header";

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {};
  },

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  background: #000;
}

.content {
  width: 1200px;
  margin: 58px auto 0;
}

.el-pager li {
  background-color: #fff !important;
}

.el-pagination .el-pager .active {
  background-color: #000 !important;
}
/* 过渡动画css */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.banner {
  margin: -58px 0 0 0;
}
</style>
