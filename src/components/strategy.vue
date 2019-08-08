<!--  -->
<template>
<div class="content strategy">
  <div class="tabList">
    <span v-for="(item, index) in tabList" :key="index" @click="cur=index" :class="cur==index?'active':''">{{item.name}}</span>
  </div>
  <div class="contentList">
    <div class="content-item" v-for="(item, index) in tabList[cur].contentList" :key="index">
      <img :src="item.imgUrl" alt="">
      <h3>{{item.tit}}</h3>
      <span>{{item.sj}}</span>
      <p>{{item.content1}}</p>
      <p>{{item.content2}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      tabList: [{
          name: '定制攻略',
          contentList: [{
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            }
          ]
        },
        {
          name: '活动信息',
          contentList: [{
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            }
          ]
        },
        {
          name: '企业新闻',
          contentList: [{
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            }
          ]
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.strategy {
  position: relative;

  .tabList {
    background: #fff;
    padding: 64px 32px;
    width: 760px;
    margin: 0 auto;
    position: relative;
    top: -188px;
    z-index: 999;

    span {
      display: inline-block;
      font-size: 24px;
      border-right: 1px solid #000;
      width: 252px;
      height: 136px;
      line-height: 136px;
      text-align: center;
    }

    span:last-child {
      border-right: none;
    }

    span:hover {
      cursor: pointer;
    }
  }

  .contentList {
    display: flex;
    flex-wrap: wrap;
    margin: -94px 0 0 0;

    .content-item {
      background: #fff;
      padding: 12px 14px 22px;
      margin: 0 22px 30px 0;

      h3 {
        margin: 26px 0 0 0;
        padding: 0 0 26px 0;
        border-bottom: 1px solid #666;
      }

      p {
        color: #333;
        line-height: 1.6;
        font-size: 14px;
      }

      span {
        margin: 22px 0;
        display: block;
        color: #555;
        font-size: 14px;
      }
    }
  }
}

.active::after {
  content: '';
  display: block;
  width: 62px;
  height: 2px;
  background: #000;
  position: relative;
  top: -38px;
  margin: 0 auto;
}
</style>
