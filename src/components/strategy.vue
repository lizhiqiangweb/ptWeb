<!-- 定制攻略页面 -->
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
              tit: '不同年龄选购衣柜有什么区别？',
              sj: '2019.07.30',
              content1: '衣柜是卧室必备家具之一',
              content2: '不同年龄阶层人群，因为生活习惯不同或者身体状况差异等因素，他们的衣柜设计也是有所差别的.'
            },
            {
              imgUrl: require('@/assets/img/strategy/img2.jpg'),
              tit: '定制橱柜保养的方法及攻略',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img3.jpg'),
              tit: '定制家具应该如何做清洁工作？',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img4.jpg'),
              tit: '家居装修，如何去除甲醛君？',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img5.jpg'),
              tit: '家装光线差该如何解决？',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img6.jpg'),
              tit: '梅雨季节的到来，定制家具如何做好防范工作？',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img7.jpg'),
              tit: '衣柜发霉如何处理？',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img8.jpg'),
              tit: '衣柜这样收纳不易乱？',
              sj: '2019.07.30',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img9.jpg'),
              tit: '远离噪音烦恼，家居防噪技巧有哪些？',
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

  mounted() {},

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
      width: 350px;
      img {
        display: block;
        width: 350px;
        height: 184px;
      }
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
