<!-- 美家案例页面 -->
<template>
<div class="family">
  <div class="content list">
    <ul v-for="(item, caseTitNum) in list" :key="caseTitNum">
      <div class="list-left">
        <img :src="item.iconUrl" alt="">
        <p>{{item.tit}}</p>
      </div>
      <li v-for="(item1, flNum) in item.listItem1" :key="flNum" v-on:click="selected1(flNum)" @click="cur1=flNum" :class="cur1==flNum ? 'active':''">{{item1}}</li>
      <li v-for="(item2, gnNum) in item.listItem2" :key="gnNum" v-on:click="selected2(gnNum)" @click="cur2=gnNum" :class="cur2==gnNum ? 'active':''">{{item2}}</li>
      <li v-for="(item3, styleNum) in item.listItem3" :key="styleNum" v-on:click="selected3(styleNum)" @click="cur3=styleNum" :class="cur3==styleNum ? 'active':''">{{item3}}</li>
    </ul>
  </div>

  <div class="content imgList">
    <ul>
      <li v-for="(item, caseNum) in imgList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="caseNum" v-show="(typeId == item.type || typeId == 0) && (styleId1 == item.style || styleId1 == 0)">
        <router-link :to="{ path : item.url, query: { case: item.id } }">
          <img :src="item.imgUrl" alt="">
        </router-link>
        <h4>{{item.tit}}</h4>
        <button>立即预约</button>
      </li>
    </ul>
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
      cur1: 0,
      cur2: 0,
      cur3: 0,
      currentPage: 1, //当前页码
      all: 0, //默认数据总数
      totalPage: 0, //当前条数
      pagesize: 6, //每页的数据显示条数
      typeId: 0,
      styleId1: 0,
      styleId2: 0,
      list: [{ //tab
          iconUrl: require('@/assets/img/case/icon_img1.jpg'),
          tit: '空间分类',
          listItem1: ['全部', '客厅', '餐厅', '卧室', '书房', '玄关', '儿童房', '衣帽间']
        },
        {
          iconUrl: require('@/assets/img/case/icon_img2.jpg'),
          tit: '功能',
          listItem2: ['全部', '电视柜', '床', '酒柜', '飘窗', '入户柜', '书柜', '榻榻米', '衣柜', '餐边柜']
        },
        {
          iconUrl: require('@/assets/img/case/icon_img3.jpg'),
          tit: '风格',
          listItem3: ['全部', '北欧', '地中海', '简欧', '欧式别墅', '轻奢', '现代黑白灰', '美式', '新中式']
        }
      ],
      imgList: [{ //case数据
          id: 'fl1',
          imgUrl: require('@/assets/img/case/case_img1.jpg'),
          tit: '汇金城 | 124㎡ | 三室两厅',
          url: '/caseContent',
          type: 1,
          style: 1
        },
        {
          id: 'fl2',
          imgUrl: require('@/assets/img/case/case_img1.jpg'),
          tit: '汇金城 | 118㎡ | 三室两厅',
          url: '/caseContent',
          type: 1,
          style: 1
        },
        {
          id: 'fl3',
          imgUrl: require('@/assets/img/case/case_img1.jpg'),
          tit: '汇金城 | 108㎡ | 三室两厅',
          url: '/caseContent',
          type: 1,
          style: 1
        },
        {
          id: 'fl4',
          imgUrl: require('@/assets/img/case/case_img1.jpg'),
          tit: '汇金城 | 108㎡ | 三室两厅',
          url: '/caseContent',
          type: 1,
          style: 1
        },
        {
          id: 'fl5',
          imgUrl: require('@/assets/img/case/case_img1.jpg'),
          tit: '汇金城 | 108㎡ | 三室两厅',
          url: '/caseContent',
          type: 1,
          style: 1
        },
        {
          id: 'fl6',
          imgUrl: require('@/assets/img/case/case_img1.jpg'),
          tit: '汇金城 | 108㎡ | 三室两厅',
          url: '/caseContent',
          type: 1,
          style: 2
        },
        {
          id: 'fl7',
          imgUrl: require('@/assets/img/case/case_img1.jpg'),
          tit: '汇金城 | 101㎡ | 三室两厅',
          url: '/caseContent',
          type: 1,
          style: 2
        }

      ],
    };
  },
  created() {
    this.all = (this.imgList.length) / 6 * 10;
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    current_change(currentPage) { //改变当前页
      this.currentPage = currentPage
    },
    selected1: function (index) {
      if (index) {
        this.typeId = index;
      } else {
        this.typeId = 0;
      }
    },
    selected2: function (index) {
      if (index) {
        this.styleId1 = index;
      } else {
        this.styleId1 = 0;
      }
    },
    selected3: function (index) {
      if (index) {
        this.styleId2 = index;
      } else {
        this.styleId2 = 0;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.family {
  background: #000;

  .list {
    background: #fff;

    ul {
      display: flex;
      border-bottom: 1px solid #000;

      .list-left {
        background: #bdbdbd;
        width: 150px;
        height: 100px;
        margin: 0 32px 0 0;

        img {
          display: block;
          margin: 16px auto 6px;
        }

        p {
          color: #333;
          text-align: center;
          margin: 0 auto;
        }
      }

      li {
        margin: 30px 38px 0 0;
        display: block;
        height: 32px;
        line-height: 32px;
      }

      li:hover {
        cursor: pointer;
      }

      p {
        margin: 0 58px 0 0;
        display: block;
        width: 68px;
      }

    }
  }

  .imgList {
    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        background: #fff;
        padding: 18px 18px;
        margin: 0 14px 26px 0;

        img {
          width: 350px;
          height: 310px;
        }

        h4 {
          margin: 24px auto 18px;
          text-align: center;
        }

        button {
          border: none;
          background: #000;
          color: #fff;
          width: 210px;
          height: 48px;
          line-height: 48px;
          margin: 0 0 0 72px;
        }
      }

    }
  }

  .page {
    display: flex;
    justify-content: center;
    padding: 50px 0 50px 0;

    .el-pager li {
      background-color: #fff !important;
    }
  }
}

.active {
  background: #000;
  color: #fff;
  padding: 2px 16px;
  display: block;
  text-align: center;
}
</style>
