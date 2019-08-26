<!-- 主页 -->
<template>
<div class="home">
  <div class="content content1">
    <div class="tit wow animated fadeInLeft">
      <img src="@/assets/img/home/tit_img1.jpg" alt="">
      <div>
        <h3>0元设计</h3>
        <p>0 yuan design</p>
      </div>
    </div>

    <div class="content1-main wow animated fadeInDown">
      <div class="content-left">
        <h3>预约获取<span>0元设计</span></h3>
        <form action="">
          <input type="text" name="name" id="" placeholder="请输入您的姓名">
          <input type="text" name="phone" id="" placeholder="请输入您的电话号码">
          <input type="text" name="address" id="" placeholder="请输入您的住址">
          <button type="submit">免费预约</button>
        </form>
      </div>
      <div class="content-right">
        <img src="@/assets/img/home/img1.jpg" alt="">
      </div>
    </div>
  </div>

  <div class="process">
    <h3 class="wow animated fadeInDown">定制流程</h3>
    <div class="process-Content wow animated fadeInDown">
      <div class="content-item" v-for="(item, processNum) in processList" :key="processNum">
        <div class="content-tit">
          <p>{{item.name}}</p>
          <p>{{item.type}}</p>
        </div>
        <img v-if="processNum < 3" src="@/assets/img/home/arrow.png" alt="">
      </div>

    </div>
  </div>

  <div class="content content1 content2">
    <div class="tit wow animated fadeInLeft">
      <img src="@/assets/img/home/tit_img2.jpg" alt="">
      <div>
        <h3>今日优惠</h3>
        <p>Today's discount</p>
      </div>
    </div>
    <div class="content content2-main">
      <div class="imgList wow animated fadeInUp" data-wow-duration="500ms" v-for="(item, discountNum) in content2ImgList" :key="discountNum">
        <img :src="item.imgUrl" alt="">
        <h3>{{item.name}}</h3>
        <div class="dis">
          <h4>{{item.discount}}<span>折</span></h4>
          <div class="dis-content">
            <p>{{item.dis1}} 元/套</p>
            <p>￥{{item.dis2}} 元/套</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="content content1 content3">
    <div class="tit wow animated fadeInLeft">
      <img src="@/assets/img/home/tit_img3.jpg" alt="">
      <div>
        <h3>潮流风格</h3>
        <p>Fashion Style</p>
      </div>
    </div>

    <div class="content content3-main wow animated fadeInUp">
      <div class="content3-left">
        <h3>热卖风格排行榜</h3>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item, content3Num) in content3StyleList" :key="content3Num" :title="item.tit" :name="item.name">
            <img :src="item.imgUrl" alt="" @click="content3ImgShow=content3Num">
            <p>{{item.content}}</p>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div class="content3-right">
        <div class="right-content" v-for="(item, content3RightNum) in content3ImgList" :key="content3RightNum" v-show="content3ImgShow == content3RightNum">
          <div class="imgList1 demo-image__preview">
            <el-image class="content3-mainImg" :src="item.mainImg" :preview-src-list="item.srcList"></el-image>
            <el-image :src="item.rightImg" :preview-src-list="item.srcList"></el-image>
          </div>
          <div class="imgList2 demo-image__preview">
            <el-image class="content3-imgList" v-for="(item1, content3ImgListNum) in item.imgList" :key="content3ImgListNum" :src="item1" :preview-src-list="item.srcList" alt=""></el-image>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="content content1 content4">
    <div class="tit wow animated fadeInLeft">
      <img src="@/assets/img/home/tit_img4.jpg" alt="">
      <div>
        <h3>热销定制</h3>
        <p>Hot Selling Customization</p>
      </div>
    </div>

    <div class="content content4-main wow animated fadeInUp">
      <div class="content4-left">
        <h3>热销定制</h3>
        <div class="left-item" v-for="(item, content4Num) in content4Left" :key="content4Num">
          <img :src="item.imgUrl" alt="">
          <span>{{item.id}}</span>
          <p>{{item.tit}}</p>
        </div>
      </div>
      <div class="content4-right">
        <div class="right-content" v-for="(item, contentRight4Num) in content4Right" :key="contentRight4Num" v-show="content4ImgShow == contentRight4Num">
          <div class="imgList1 demo-image__preview">
            <el-image class="content4-mainImg" :src="item.mainImg" :preview-src-list="item.srcList"></el-image>
            <el-image :src="item.rightImg" :preview-src-list="item.srcList"></el-image>
          </div>
          <div class="imgList2 demo-image__preview">
            <el-image class="content4-imgList" v-for="(item1, content4ImgListNum) in item.imgList" :key="content4ImgListNum" :src="item1" :preview-src-list="item.srcList" alt=""></el-image>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="content content1 content5">
    <div class="tit wow animated fadeInLeft">
      <img src="@/assets/img/home/tit_img5.jpg" alt="">
      <div>
        <h3>大咖设计</h3>
        <p>Big Cafe Design</p>
      </div>
    </div>

    <div class="content content5-main wow animated fadeInUp">
      <div class="content5-left">
        <div class="left-item" v-for="(item, teamNum) in content5ImgList" :key="teamNum" :style="'background-image: url('+item.bgUrl+');'" @click="current=teamNum">
          <div class="teamList">
            <img :src="item.imgUrl" alt="">
            <p>{{item.name}}</p>
          </div>
          <div class="content5-icon" v-if="current==teamNum"></div>
        </div>
      </div>
      <div class="content5-right" v-for="(item, teamImgNum) in content5ImgList" :key="teamImgNum" v-show="current==teamImgNum" :style="'background-image: url('+item.mainBgUrl+');'">
        <transition name="show">
          <div class="team-view">
            <img :src="item.imgUrl" alt="">
            <h3>{{item.name}}</h3>
            <p>擅长风格：{{item.style}}</p>
            <p>{{item.motto}}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
      content3ImgShow: 0,
      content4ImgShow: 0,
      current: 0,
      styleCount: 0,
      processList: [{
          name: '网上预约',
          type: '（免费）'
        },
        {
          name: '上门量尺',
          type: '（免费）'
        },
        {
          name: '确定方案',
          type: ''
        },
        {
          name: '产品配送',
          type: '（免费）'
        }
      ],
      content2ImgList: [{
          imgUrl: require('@/assets/img/home/img2.jpg'),
          name: '高端简欧定制包 / 买全屋套餐送床和床垫',
          discount: '8',
          dis1: '103429',
          dis2: '59800'
        },
        {
          imgUrl: require('@/assets/img/home/img2.jpg'),
          name: '高端简欧定制包 / 买全屋套餐送床和床垫',
          discount: '8',
          dis1: '103429',
          dis2: '59800'
        },
        {
          imgUrl: require('@/assets/img/home/img2.jpg'),
          name: '高端简欧定制包 / 买全屋套餐送床和床垫',
          discount: '8',
          dis1: '103429',
          dis2: '59800'
        }
      ],
      content3StyleList: [{
          name: '1',
          tit: 'TOP1: 现代风格',
          imgUrl: require('@/assets/img/home/img3.jpg'),
          content: '原木的清新自然之气一览无余，吊柜不仅增加了厨房的储物空间，也让厨房更加丰富美观。'
        },
        {
          name: '2',
          tit: 'TOP2: 轻奢风格',
          imgUrl: require('@/assets/img/home/img4.jpg'),
          content: '原木的清新自然之气一览无余，吊柜不仅增加了厨房的储物空间，也让厨房更加丰富美观。'
        },
        {
          name: '3',
          tit: 'TOP3: 北欧风格',
          imgUrl: require('@/assets/img/home/img5.jpg'),
          content: '原木的清新自然之气一览无余，吊柜不仅增加了厨房的储物空间，也让厨房更加丰富美观。'
        },
        {
          name: '4',
          tit: 'TOP4: 中式风格',
          imgUrl: require('@/assets/img/home/img6.jpg'),
          content: '原木的清新自然之气一览无余，吊柜不仅增加了厨房的储物空间，也让厨房更加丰富美观。'
        },
        {
          name: '5',
          tit: 'TOP5: 美式风格',
          imgUrl: require('@/assets/img/home/img7.jpg'),
          content: '原木的清新自然之气一览无余，吊柜不仅增加了厨房的储物空间，也让厨房更加丰富美观。'
        }
      ],
      content3ImgList: [{
          mainImg: require('@/assets/img/home/img4.jpg'),
          rightImg: require('@/assets/img/home/img5.jpg'),
          srcList: [
            require('@/assets/img/home/img4.jpg'),
            require('@/assets/img/home/img5.jpg'),
            require('@/assets/img/home/img6.jpg'),
            require('@/assets/img/home/img7.jpg'),
            require('@/assets/img/home/img8.jpg')
          ],
          imgList: [
            require('@/assets/img/home/img6.jpg'),
            require('@/assets/img/home/img7.jpg'),
            require('@/assets/img/home/img8.jpg'),
          ]
        },
        {
          mainImg: require('@/assets/img/home/img5.jpg'),
          rightImg: require('@/assets/img/home/img5.jpg'),
          imgList: [
            require('@/assets/img/home/img6.jpg'),
            require('@/assets/img/home/img7.jpg'),
            require('@/assets/img/home/img8.jpg'),
          ]
        },
        {
          mainImg: require('@/assets/img/home/img5.jpg'),
          rightImg: require('@/assets/img/home/img5.jpg'),
          imgList: [
            require('@/assets/img/home/img6.jpg'),
            require('@/assets/img/home/img7.jpg'),
            require('@/assets/img/home/img8.jpg'),
          ]
        },
        {
          mainImg: require('@/assets/img/home/img4.jpg'),
          rightImg: require('@/assets/img/home/img5.jpg'),
          imgList: [
            require('@/assets/img/home/img6.jpg'),
            require('@/assets/img/home/img7.jpg'),
            require('@/assets/img/home/img8.jpg'),
          ]
        },
        {
          mainImg: require('@/assets/img/home/img4.jpg'),
          rightImg: require('@/assets/img/home/img5.jpg'),
          imgList: [
            require('@/assets/img/home/img6.jpg'),
            require('@/assets/img/home/img7.jpg'),
            require('@/assets/img/home/img8.jpg'),
          ]
        }
      ],
      content4Left: [{
          id: '1',
          imgUrl: require('@/assets/img/home/img9.jpg'),
          tit: '新实用主义卧房'
        },
        {
          id: '2',
          imgUrl: require('@/assets/img/home/img10.jpg'),
          tit: '新中式风格卧室'
        }
      ],
      content4Right: [{
        mainImg: require('@/assets/img/home/img11.jpg'),
        rightImg: require('@/assets/img/home/img12.jpg'),
        imgList: [
          require('@/assets/img/home/img13.jpg'),
          require('@/assets/img/home/img14.jpg'),
          require('@/assets/img/home/img15.jpg'),
        ],
        srcList: [
          require('@/assets/img/home/img11.jpg'),
          require('@/assets/img/home/img12.jpg'),
          require('@/assets/img/home/img13.jpg'),
          require('@/assets/img/home/img14.jpg'),
          require('@/assets/img/home/img15.jpg')
        ],
      }],
      content5ImgList: [{
          bgUrl: require('@/assets/img/home/bg_img1.jpg'),
          mainBgUrl: require('@/assets/img/home/bg_img4.jpg'),
          imgUrl: require('@/assets/img/home/hj.jpg'),
          name: '胡静',
          style: '现代、简约',
          motto: '贴近您的生活习惯，融合我无限的创意，给您一个温馨的家'
        },
        {
          bgUrl: require('@/assets/img/home/bg_img2.jpg'),
          mainBgUrl: require('@/assets/img/home/bg_img4.jpg'),
          imgUrl: require('@/assets/img/home/zyt.jpg'),
          name: '周玉婷'
        },
        {
          bgUrl: require('@/assets/img/home/bg_img3.jpg'),
          mainBgUrl: require('@/assets/img/home/bg_img4.jpg'),
          imgUrl: require('@/assets/img/home/yll.jpg'),
          name: '袁玲玲'
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
// 动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.home {
  .content1 {
    .tit {
      display: flex;
      justify-content: center;
      margin: 72px 0 0 0;

      img {
        margin: 0 22px 0 0;
      }

      h3 {
        color: #fff;
        text-align: center;
      }

      p {
        color: rgba(214, 214, 214, .8);
        font-size: 14px;
        text-align: center;
      }
    }
  }

  .content1-main {
    background: #fff;
    display: flex;
    height: 445px;
    margin: 48px 0 0 0;

    .content-right {
      img {
        width: 675px;
        height: 471px;
      }

    }

    .content-left {
      border-right: 1px solid #000;
      width: 606px;

      h3 {
        text-align: center;
        margin: 40px auto;
        font-size: 24px;

        span {
          margin: 0 0 0 16px;
        }
      }

      form {
        input {
          background: #000;
          border: none;
          outline-style: none;
          padding: 0 0 0 8px;
          display: block;
          height: 60px;
          line-height: 60px;
          width: 540px;
          margin: 0 30px 20px 30px;
        }

        button {
          width: 150px;
          height: 46px;
          line-height: 46px;
          background: #000;
          border: none;
          outline-style: none;
          color: #fff;
          margin: 34px auto 0;
          display: flex;
          justify-content: center;
        }

        button:hover {
          cursor: pointer;
        }
      }
    }
  }

  .process {
    display: flex;
    background: url('../assets/img/home/bg_img.jpg') no-repeat;
    margin: 58px 0 0 0;
    height: 36vh;
    width: 100%;
    justify-content: center;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;

    h3 {
      color: #fff;
      line-height: 36vh;
      margin: 0 6vw 0 0;
      font-size: 28px;
    }

    .process-Content {
      display: flex;
      margin: 8vh 0 0 0;

      .content-item {
        display: flex;

        img {
          width: 6vw;
          height: 4vh;
          margin: 7vh 0 0 0;
        }

        .content-tit {
          width: 6vw;
          height: 20vh;
          text-align: center;
          border: 1px solid #fff;
          margin: 0 28px 0 28px;
          padding: 0 2vw;

          p {
            color: #fff;
            line-height: 1.6;
          }

          p:first-child {
            margin: 6.5vh 0 0 0;
          }
        }

      }
    }
  }

  .content2 {
    .content2-main {
      display: flex;

      .imgList {
        margin: 0 30px 0 0;

        h3 {
          color: #fff;
          text-align: center;
          font-size: 16px;
          font-weight: 500;
          margin: 24px auto;
        }

        .dis {
          display: flex;
          margin: 0 0 0 46px;

          h4 {
            color: red;
            display: block;
            width: 100px;
            height: 58px;
            background: #fff;
            font-size: 42px;
            text-align: center;
            line-height: 58px;

            span {
              font-size: 16px;
              margin: 0 0 0 8px;
            }
          }

          .dis-content {
            margin: 0 0 0 16px;

            p {
              color: #fff;
            }

            p:first-child {
              margin: 0 0 16px 6px;
            }

            p:first-child::after {
              content: '';
              height: 1px;
              width: 114px;
              background: #fff;
              display: block;
              position: relative;
              top: -10px;
              left: -6px;
            }
          }
        }
      }

      .imgList:last-child {
        margin: 0 0 0 0;
      }
    }
  }

  .content3 {
    .content3-main {
      display: flex;

      .content3-left {
        width: 300px;
        background: #fff;

        h3 {
          font-size: 18px;
          padding: 16px 0;
          text-align: center;
        }

        .el-collapse {
          padding: 0 6px;
        }

        img {
          display: block;
          margin: 0 auto;
          width: 278px;
          height: 186px;
        }

        img:hover {
          cursor: pointer;
        }

        p {
          text-indent: 2em;
          line-height: 2;
          margin: 12px 0 0 0;
        }
      }

      .content3-right {

        .imgList1,
        .imgList2 {
          display: flex;
        }

        .imgList1 {
          margin: 0 0 0 10px;
          .content3-mainImg {
            width: 590px;
            height: 300px;
          }

          .el-image {
            margin: 0 10px 0 0;
          }
        }

        .imgList2 {
          margin: 0 0 0 10px;
          .content3-imgList {
            width: 290px;
            height: 300px;
          }

          .el-image {
            margin: 10px 10px 0 0;
          }
        }
      }
    }
  }

  .content4 {
    .content4-main {
      display: flex;

      .content4-left {
        background: #fff;
        width: 300px;

        h3 {
          font-size: 18px;
          padding: 16px 0;
          text-align: center;
        }

        .left-item {
          position: relative;

          img {
            display: block;
            margin: 0 auto;

          }

          span {
            display: block;
            width: 24px;
            height: 24px;
            color: #fff;
            background: #000;
            font-size: 14px;
            position: absolute;
            top: 0;
            left: 10px;
            text-align: center;
            line-height: 24px;
          }

          p {
            text-align: center;
            line-height: 2;
          }
        }
      }

      .content4-right {

        .imgList1,
        .imgList2 {
          display: flex;
        }

        .imgList1 {
          margin: 0 0 0 10px;
          .content4-mainImg {
            width: 590px;
            height: 300px;
          }

          .el-image {
            margin: 0 10px 0 0;
          }
        }

        .imgList2 {
          margin: 0 0 0 10px;
          .content4-imgList {
            width: 290px;
            height: 300px;
          }

          .el-image {
            margin: 10px 10px 0 0;
          }
        }
      }

    }
  }

  .content5 {
    .content5-main {
      display: flex;

      .content5-left:hover {
        cursor: pointer;
      }

      .content5-left {
        .left-item {
          width: 298px;
          height: 189px;
          margin: 0 10px 16px 0;
          position: relative;

          .content5-icon {
            background: #333;
            width: 36px;
            height: 36px;
            position: absolute;
            top: 70px;
            right: -17px;
            transform: rotate(45deg);
            z-index: -1;
          }

          .teamList {
            padding: 28px 0 0 0;
            position: relative;
            z-index: 100;

            img {
              border-radius: 50%;
              width: 105px;
              height: 105px;
              display: block;
              margin: 0 auto 22px;
            }

            p {
              color: #fff;
              text-align: center;
            }
          }

        }
      }

      .content5-right {
        width: 894px;
        height: 600px;
        position: relative;
        z-index: -2;

        .team-view {
          img {
            width: 270px;
            height: 270px;
            border-radius: 50%;
            display: block;
            margin: 106px auto 40px;
          }

          p,
          h3 {
            color: #fff;
            line-height: 2;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
