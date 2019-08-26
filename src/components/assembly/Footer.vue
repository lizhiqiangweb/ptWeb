<!-- 底部组件 -->
<template>
<div>
  <!-- <ul v-for="(book, booksNum) in filterBooks" :key="booksNum">
    <li>{{book.name}}</li>
    <li>{{book.author}}</li>
  </ul> -->
</div>
</template>

<script>
export default {
  data() {
    return {
      books: [{
          name: '1',
          author: 'books1'
        },
        {
          name: 'a1',
          author: 'books2'
        }
      ]
    };
  },

  components: {},

  computed: {
    filterBooks: function () {
      return this.books.filter(function (book) {
        return book.name.match(/a/);
      })
    }
  },

  mounted: {},

  methods: {

  }
}
</script>

<style lang="scss" scoped>
div {
  background: #fff;

  ul {
    display: flex;

    li {
      padding: 6px;
    }
  }
}
</style>
