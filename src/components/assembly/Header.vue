<!--  -->
<template>
<div class="Header">
  <div class="logo">
    <h1>PROTI 璞缇</h1>
  </div>

  <div class="line"></div>
  <div class="content top">
    <div class="slider">
      <h3 v-on:click="showList()">所有空间分类</h3>
      <ul v-show="show">
        <li v-for="(item, index) in sliderList" :key="index">
          <div class="tit">
            <img :src="item.iconUrl" alt="">
            <p>{{item.tit}}</p>
          </div>
          <span v-for="(item1, index1) in item.type" :key="index1">{{item1}}</span>
        </li>
      </ul>
    </div>

    <div class="navList">
      <ul>
        <li v-for="(item, index) in navList" :key="index" @click="cur=index" :class="cur == index ? 'active' : ''">
          <router-link :to="{ path : item.path}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>

  <div class="swiper">
    <el-carousel :interval="5000" arrow="always" :height="750+'px'">
      <el-carousel-item v-for="item in bannerList" :key="item">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      show: false,
      navList: [{
          name: '首页',
          path: '/'
        },
        {
          name: '专题活动',
          path: '/activity'
        },
        {
          name: '设计团队',
          path: '/team'
        },
        {
          name: '美家案例',
          path: '/familyCase'
        },
        {
          name: '定制攻略',
          path: '/strategy'
        },
        {
          name: '晒家分享',
          path: '/share'
        },
        {
          name: '实体门店',
          path: '/aboutUs'
        }
      ],
      sliderList: [{
          tit: '客厅',
          iconUrl: require('@/assets/img/home/icon_img3.jpg'),
          type: ['电视柜', '收纳柜', '入户柜']
        },
        {
          tit: '餐厅',
          iconUrl: require('@/assets/img/home/icon_img2.jpg'),
          type: ['餐边柜', '酒柜']
        },
        {
          tit: '卧室',
          iconUrl: require('@/assets/img/home/icon_img3.jpg'),
          type: ['床头柜', '电视柜', '飘窗组合']
        },
        {
          tit: '厨房',
          iconUrl: require('@/assets/img/home/icon_img4.jpg'),
          type: ['L型橱柜', 'U型橱柜', '一字型']
        },
        {
          tit: '书房',
          iconUrl: require('@/assets/img/home/icon_img5.jpg'),
          type: ['书柜组合', '转角书桌', '榻榻米']
        },
        {
          tit: '卫生间',
          iconUrl: require('@/assets/img/home/icon_img6.jpg'),
          type: ['台盆柜', '洗衣柜', '洗脸柜']
        }
      ],
      bannerList: [{
          id: 1,
          imgUrl: require('@/assets/img/home/banner1.jpg')
        },
        {
          id: 1,
          imgUrl: require('@/assets/img/home/banner1.jpg')
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    showList: function () {
      this.show = true;
    }
  }
}
</script>

<style lang="scss">
.Header {
  position: relative;

  .logo {
    height: 120px;
    line-height: 120px;
    width: 100%;
    background: #1f2121;
    padding: 0 0 58px 0;

    h1 {
      color: #fff;
      text-align: center;
      font-size: 28px;
    }
  }

  .line {
    border: 1px solid rgba(0, 0, 0, .7);
    position: relative;
    top: -58px;
  }

  .top {
    display: flex;
    position: relative;
    top: -58px;

    .slider {
      background: #fff;
      width: 200px;
      margin: -59px 0 0 0;

      h3 {
        text-align: center;
        padding: 16px 0;
        font-weight: 500;
        border-bottom: 1px solid #999;
      }

      h3:hover {
        cursor: pointer;
      }

      ul {
        padding: 18px 14px;
        position: absolute;
        z-index: 99;
        background: #fff;

        li {
          height: 120px;

          .tit {
            position: relative;
            display: flex;
            padding: 18px 12px;

            img {
              position: relative;
              width: 40px;
              height: 46px;
              margin: 0 18px 0 0;
            }

            p {
              display: block;
              height: 46px;
              line-height: 46px;
            }
          }

          span {
            margin: 0 0 0 6px;
            font-size: 14px;
            color: #333;
          }

        }
      }
    }

    .navList {
      ul {
        display: flex;
        margin: -58px 0 0 0;

        li {
          height: 54px;
          line-height: 58px;
          margin: 0 44px;
          transition: all 0.4s ease-in;

          a {
            color: #fff;
            font-size: 16px;
          }
        }

        li:last-child {
          margin: 0 0 0 44px;
        }
      }
    }
  }

  .swiper {
    margin: -58px 0 0 0;

    img {
      display: block;
    }
  }

}

.active {
  border-bottom: 2px solid #fff;
}
</style>
