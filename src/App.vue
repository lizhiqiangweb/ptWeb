<template>
<div>
  <Header></Header>
  <transition name="fade">
    <router-view />
  </transition>
  <Footer></Footer>
</div>
</template>

<script>
import Header from "@/components/assembly/Header";
import Footer from "@/components/assembly/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
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
  transition: opacity 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
