<!-- 定制攻略页面 -->
<template>
<div class="content strategy">
  <div class="tabList">
    <span v-for="(item, strategyTitIndex) in tabList" :key="strategyTitIndex" @click="cur=strategyTitIndex" :class="cur==strategyTitIndex?'active':''">{{item.name}}</span>
  </div>
  <div class="contentList">
    <div class="content-item" v-for="(item, strategyContentIndex) in tabList[cur].contentList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="strategyContentIndex">
      <router-link :to="{ path : item.url, query: { strategy: item.id } }">
        <img :src="item.imgUrl" alt="">
      </router-link>
      <h3>{{item.tit}}</h3>
      <span>{{item.sj}}</span>
      <p>{{item.content1}}</p>
      <p>{{item.content2}}</p>
    </div>
  </div>

  <div class="page">
    <el-pagination :background="true" layout="prev, pager, next" :pager-count="11" :total="all" @current-change="current_change"></el-pagination>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      currentPage: '1', //第一页显示
      pagesize: '6', //当前页面显示的条数
      all: '0',
      tabList: [{
          name: '定制攻略',
          contentList: [{
              id: 'dz1',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '不同年龄选购衣柜有什么区别？',
              sj: '2019-8-15',
              content1: '衣柜是卧室必备家具之一',
              content2: '不同年龄阶层人群，因为生活习惯不同或者身体状况差异等因素，他们的衣柜设计也是有所差别的.'
            },
            {
              id: 'dz2',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img2.jpg'),
              tit: '定制橱柜保养的方法及攻略',
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              id: 'dz3',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img3.jpg'),
              tit: '定制家具应该如何做清洁工作？',
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              id: 'dz4',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img4.jpg'),
              tit: '家居装修，如何去除甲醛君？',
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              id: 'dz5',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img5.jpg'),
              tit: '家装光线差该如何解决？',
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              id: 'dz6',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img6.jpg'),
              tit: '梅雨季节的到来，定制家具如何做好防范工作？',
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              id: 'dz7',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img7.jpg'),
              tit: '衣柜发霉如何处理？',
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              id: 'dz8',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img8.jpg'),
              tit: '衣柜这样收纳不易乱？',
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              id: 'dz9',
              url: '/strategyContent',
              imgUrl: require('@/assets/img/strategy/img9.jpg'),
              tit: '远离噪音烦恼，家居防噪技巧有哪些？',
              sj: '2019-8-15',
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
              sj: '2019-8-15',
              content1: '门板材质一点通，橱柜挑选更轻松；',
              content2: '面对众多板材得心应手，再也不怕被忽悠。'
            },
            {
              imgUrl: require('@/assets/img/strategy/img1.jpg'),
              tit: '橱柜挑选更轻松',
              sj: '2019-8-15',
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
            sj: '2019-8-15',
            content1: '门板材质一点通，橱柜挑选更轻松；',
            content2: '面对众多板材得心应手，再也不怕被忽悠。'
          }]
        }
      ]
    };
  },
  components: {},

  computed: {},

  mounted() {
    setInterval(() => {
      var cur = this.cur;
      this.all = (this.tabList[cur].contentList.length) / 6 * 10;
    }, 1);
  },

  methods: {
    current_change(currentPage) { //改变当前页
      this.currentPage = currentPage
    },
  }
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

      a {
        width: 350px;
        height: 184px;
        display: block;
        overflow: hidden;
      }

      img {
        display: block;
        width: 350px;
        height: 184px;
        transition: all 2s ease-in;
      }

      img:hover {
        transform: scale(1.125);
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

//分页符
.page {
  display: flex;
  justify-content: center;
  padding: 50px 0 50px 0;

  .el-pager li {
    background-color: #fff !important;
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
