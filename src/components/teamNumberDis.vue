<!--  -->
<template>
<div>
  <div v-for="(item, dataIndex) in dataList" :key="dataIndex">
    <p v-if="item.numberId==showItem">{{item.content}}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      showItem: '',
      dataList: [{
          numberId: 'num1',
          content: '1'
        },
        {
          numberId: 'num2',
          content: '2222'
        }
      ]
    };
  },

  components: {},

  computed: {},

  methods: {},

  created() {
    var id = this.$route.query.teamNumber;
    this.showItem = id;
    console.log("id :", this.showItem);
  },
}
</script>

<style lang="scss" scoped>

</style>
