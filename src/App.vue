<template>
<div>
  <Header></Header>
  <router-view />
</div>
</template>

<script>
import Header from '@/components/assembly/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: #000;
}

.content {
  width: 1200px;
  margin: 58px auto 0;
}
</style>
