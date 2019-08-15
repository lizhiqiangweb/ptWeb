<!-- 头部组件 -->
<template>
<div class="Header">
  <div class="logo">
    <h1>PROTI 璞缇</h1>
  </div>

  <div class="top" :class="fixedNavTop == true ? 'fixedNavTop':''">
    <div class="slider">
      <h3 v-on:click="show = !show">所有空间分类</h3>
      <transition name="show">
        <ul v-show="show">
          <li v-for="(item, sliderNum) in sliderList" :key="sliderNum">
            <div class="tit">
              <img :src="item.iconUrl" alt="">
              <p>{{item.tit}}</p>
            </div>
            <span v-for="(item1, typeNum) in item.type" :key="typeNum">{{item1}}</span>
          </li>
        </ul>
      </transition>
    </div>

    <div class="navList">
      <ul>
        <li v-for="(item, navListNum) in navList" :key="navListNum" @click="cur=navListNum" :class="cur == navListNum ? 'active' : ''">
          <router-link :to="{ path : item.path}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>

  </div>

  <div class="swiper" v-if="bannerShow">
    <el-carousel :interval="5000" arrow="always" :height="bannerH +'px'">
      <el-carousel-item v-for="(item, swiperNum) in bannerList" :key="swiperNum">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="btnBox">
    <div class="btn-item wx">
      <div class="wx-content">
        <img class="wx_icon" src="../../assets/img/home/wx_img1.jpg" alt="">
      </div>
      <img class="wx_icon" src="../../assets/img/home/wx_icon.png" alt="">
    </div>
    <div class="btn-item phone">
      <div class="phone-content">
        <p>8888-8888</p>
      </div>
      <img class="wx_icon" src="../../assets/img/home/phone_icon.png" alt="">
    </div>
    <!-- v-show="showBtnTop" :class="showBtnTop==true?'showBtn':''" -->
    <div @click="goTop()" class="goTop btn-item">
      <img src="../../assets/img/home/top_icon.png" alt="">
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      bannerH: 750,
      cur: 0,
      show: false,
      bannerShow: true,
      showBtnTop: false,
      fixedNavTop: false,
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
          id: 2,
          imgUrl: require('@/assets/img/home/banner1.jpg')
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {
    // scroll监听
    window.addEventListener('scroll', this.showBtn);
    window.addEventListener('scroll', this.fixedNav);
  },

  methods: {
    showList: function () {
      this.show = true;
    },
    goTop: function () {
      let distance = document.documentElement.scrollTop || document.body.scrollTop;
      //获得当前高度
      let step = distance / 50;
      //每步的距离
      (function jump() {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 8)
        }
      })();
    },
    showBtn: function () {
      if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 600) {
        this.showBtnTop = true;
      } else {
        this.showBtnTop = false
      }
    },
    fixedNav: function () {
      if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 300) {
        this.fixedNavTop = true;
        this.show = false;
      } else {
        this.fixedNavTop = false
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.showBtn);
  },
  watch: {
    $route(to, from) {
      if (this.$route.path === "/activity" || "/team" || "/aboutUs") {
        this.bannerShow = false;
      }
      if (this.$route.path === "/" || this.$route.path === "/familyCase" || this.$route.path === "/strategy" || this.$route.path === "/share" || this.$route.path === "/strategyContent") {
        this.bannerShow = true;
      }
    }
  }

}
</script>

<style lang="scss">
// transition
.show-enter-active,
.show-leave-active {
  transition: opacity .3s ease-in;

}

.show-enter,
.show-leave-active {
  opacity: 0;
}

.Header {
  position: relative;

  .logo {
    height: 120px;
    line-height: 120px;
    width: 100%;
    background: #1f2121;

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

  // 滚动条滚动的时候固定导航
  .fixedNavTop {
    position: fixed !important;
    top: 0 !important;
    background: rgba(0, 0, 0, .9) !important;
    z-index: 1997;
    width: 100% !important;
    display: flex;
    justify-content: center;
    height: 55px !important;
    border-bottom: 1px solid #999;
  }

  .top {
    transition: all .3s ease-in;
    height: 59px;
    display: flex;
    justify-content: center;

    .slider {
      background: #fff;
      width: 200px;

      h3 {
        text-align: center;
        padding: 16px 0;
        font-weight: 500;
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
    img {
      display: block;
    }
  }

}

// goTop  btn
.btn-item:hover {
  cursor: pointer;
}

.btnBox {
  position: fixed;
  bottom: 5%;
  right: 1%;
  z-index: 2;

  .btn-item:last-child {
    border-bottom: none;
  }

  .wx:hover .wx-content {
    opacity: 1;
    right: 65px;
  }

  .phone:hover .phone-content {
    opacity: 1;
    right: 65px;
  }

  .phone {
    position: relative;

    .phone-content {
      position: absolute;
      right: 45px;
      top: 0;
      opacity: 0;
      transition: all .2s ease-in;

      p {
        width: 120px;
        height: 52px;
        line-height: 52px;
        background: #fff;
        text-align: center;
        letter-spacing: 1px;
      }
    }
  }

  .wx {
    position: relative;

    .wx-content {
      position: absolute;
      right: 45px;
      top: 0;
      opacity: 0;
      transition: all .2s ease-in;

      img {
        width: 120px;
        height: 120px;
      }
    }
  }

  .btn-item {
    padding: 6px 6px;
    background: #666;
    transition: all 2s ease-in;
    border-bottom: 1px solid #aaa;
    width: 40px;
    height: 40px;

    img {
      width: 36px;
      height: 36px;
      display: block;
    }
  }
}

// showGoTopbtn
.showBtn {
  opacity: .8;
}

// nav click
.active {
  border-bottom: 2px solid #fff;
}
</style>
