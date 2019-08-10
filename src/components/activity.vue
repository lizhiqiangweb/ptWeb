<!--  -->
<template>
<div class="activity">
  <div class="discount">
    <div class="discount-item" v-for="(item, index) in discountList" :key="index">
      <h1>{{item.number}}<span>元</span></h1>
      <h3>{{item.tit}}</h3>
      <p>{{item.dis}}</p>
      <button>立即领取</button>
    </div>
  </div>
  <div class="content-main">
    <div class="content1">
      <img class="img-left" src="@/assets/img/activity/dis_img1.jpg" alt="">
      <div class="content1-right">
        <img src="@/assets/img/activity/img1.jpg" alt="">
        <div class="dis">
          <p><a></a></p>
          <span>￥4999</span>
        </div>
        <button>立即购买</button>
      </div>
    </div>

    <div class="content2">
      <div class="bg"></div>
      <div class="bg1"></div>
      <div class="content1-right">
        <img src="@/assets/img/activity/img2.jpg" alt="">
        <div class="dis">
          <p><a></a></p>
          <span>￥4999</span>
        </div>
      </div>
      <img class="img-left" src="@/assets/img/activity/dis_img2.jpg" alt="">
    </div>

    <div class="content3">
      <div class="bg"></div>
      <div class="bg1"></div>
      <div class="content3-item" style="margin: 0 95px 0 0;">
        <img src="@/assets/img/activity/img3.jpg" alt="">
        <div class="dis">
          <p><a href=""></a></p>
          <span>￥4999</span>
        </div>
        <button>立即购买</button>
      </div>
      <div class="content3-item">
        <img src="@/assets/img/activity/img3.jpg" alt="">
        <div class="dis">
          <p><a href=""></a></p>
          <span>￥4999</span>
        </div>
        <button>立即购买</button>
      </div>

    </div>

    <div class="content4">
      <img class="tit" src="@/assets/img/activity/dis_img3.jpg" alt="">
      <div class="content content4List">
        <div class="content4-item" v-for="(item, index) in content4List" :key="index">
          <img :src="item.imgUrl" alt="">
          <div class="dis">
            <p><a href=""></a></p>
            <span>￥{{item.prince}}</span>
          </div>
          <button>立即购买</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      discountList: [{
          number: '50',
          tit: '优惠券',
          dis: '订单满499元使用'
        },
        {
          number: '100',
          tit: '优惠券',
          dis: '订单满2999元使用'
        },
        {
          number: '200',
          tit: '优惠券',
          dis: '订单满4999元使用'
        }
      ],
      content4List: [{
          imgUrl: require('@/assets/img/activity/img3.jpg'),
          prince: '4999'
        },
        {
          imgUrl: require('@/assets/img/activity/img3.jpg'),
          prince: '4999'
        },
        {
          imgUrl: require('@/assets/img/activity/img3.jpg'),
          prince: '4999'
        },
        {
          imgUrl: require('@/assets/img/activity/img3.jpg'),
          prince: '4999'
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
.activity {
  .discount {
    display: flex;
    justify-content: center;
    padding: 52px 0 0 0;
    width: 100%;
    height: 368px;
    background: #fff1e6;

    .discount-item {
      width: 260px;
      height: 320px;
      background: #d06618;
      margin: 0 165px 0 0;
      padding: 0 0 12px 28px;

      h1 {
        font-size: 102px;
        color: #f9e2d0;

        span {
          font-size: 24px;
          margin: 0 0 0 32px;
        }
      }

      h3 {
        font-size: 36px;
        color: #f9e2d0;
        margin: 6px 0 12px 0;
        font-weight: 500;
      }

      p {
        font-size: 24px;
        color: #f9e2d0;
        margin: 0 0 26px 0;
      }

      button {
        width: 235px;
        height: 56px;
        border: none;
        display: block;
        outline-style: none;
        background: #fff;
        color: #d06618;
        font-size: 24px;
      }

      button:hover {
        cursor: pointer;
      }
    }

    .discount-item:last-child {
      margin: 0 0 0 0;
    }
  }

  .content-main {
    background: url('../assets/img/activity/bg.jpg') no-repeat;
    width: 100%;
    height: 3860px;

    .content1 {
      display: flex;
      width: 80%;
      height: 820px;
      background: #6a6560;
      margin: 0 0 0 125px;

      .img-left {
        width: 403px;
        height: 497px;
        margin: 118px 20px 0 175px;
      }

      .content1-right {
        position: relative;
        margin: 118px 0 0 0;

        .dis {
          position: absolute;
          top: 16px;
          display: flex;
          right: 132px;

          p {
            width: 8px;
            height: 8px;
            display: block;
            border-radius: 50%;
            border: 2px solid #d06618;
            margin: 14px 12px 0 0;
            position: relative;

            a {
              width: 16px;
              height: 16px;
              display: block;
              border-radius: 50%;
              border: 2px solid #d06618;
              position: relative;
              left: -6px;
              top: -6px;
            }
          }

          span {
            font-size: 28px;
            color: #d06618;
            font-weight: 600;
          }

        }

        button {
          background: #fff;
          border: none;
          outline-style: none;
          color: #d06618;
          width: 820px;
          height: 82px;
          line-height: 82px;
          text-align: center;
          font-size: 38px;
          margin: 30px 0 0 0;
        }

        button:hover {
          cursor: pointer;
        }
      }
    }

    .content2 {
      display: flex;
      width: 1670px;
      height: 705px;
      background: #6a6560;
      margin: 410px 0 0 125px;
      position: relative;

      .bg {
        width: 1670px;
        height: 36px;
        background: #3d3d3d;
        position: absolute;
        left: 8px;
        top: -36px;
      }

      .bg1 {
        width: 8px;
        height: 136px;
        background: #3d3d3d;
        position: absolute;
        right: -8px;
      }

      .img-left {
        width: 403px;
        height: 497px;
        margin: 118px 0 0 20px;
      }

      .content1-right {
        position: relative;
        margin: 118px 0 0 238px;

        .dis {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;

          p {
            width: 8px;
            height: 8px;
            display: block;
            border-radius: 50%;
            border: 2px solid #d06618;
            margin: 14px 12px 0 0;
            position: relative;

            a {
              width: 16px;
              height: 16px;
              display: block;
              border-radius: 50%;
              border: 2px solid #d06618;
              position: relative;
              left: -6px;
              top: -6px;
            }
          }

          span {
            font-size: 28px;
            color: #d06618;
            font-weight: 600;
          }

        }
      }
    }

    .content3 {
      display: flex;
      margin: 106px auto 0;
      padding: 56px 0 52px 36px;
      background: #6a6560;
      width: 1156px;
      position: relative;

      .bg {
        width: 1194px;
        height: 36px;
        background: #3d3d3d;
        position: absolute;
        left: 8px;
        top: -36px;
      }

      .bg1 {
        width: 12px;
        height: 136px;
        background: #3d3d3d;
        position: absolute;
        right: -10px;
        top: 0;
      }

      .content3-item {
        position: relative;

        .dis {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;

          p {
            width: 8px;
            height: 8px;
            display: block;
            border-radius: 50%;
            border: 2px solid #d06618;
            margin: 14px 12px 0 0;
            position: relative;

            a {
              width: 16px;
              height: 16px;
              display: block;
              border-radius: 50%;
              border: 2px solid #d06618;
              position: relative;
              left: -6px;
              top: -6px;
            }
          }

          span {
            font-size: 28px;
            color: #d06618;
            font-weight: 600;
          }

        }

        button {
          width: 212px;
          height: 48px;
          background: #d06618;
          color: #f9e2d0;
          line-height: 48px;
          border: none;
          outline-style: none;
          font-size: 24px;
          position: absolute;
          right: -42px;
          bottom: 216px;
        }
      }
    }

    .content4 {
      .tit {
        display: block;
        margin: 140px auto 0;
      }

      .content4List {
        display: flex;
        flex-wrap: wrap;

        .content4-item {
          position: relative;
          margin: 0 20px 44px 0;
          background: url('../assets/img/activity/bg1.jpg');
          width: 580px;
          height: 365px;

          img {
            width: 402px;
            height: 292px;
            display: block;
            margin: 46px auto 0;
          }

          .dis {
            position: absolute;
            top: 56px;
            display: flex;
            right: 102px;

            p {
              width: 4px;
              height: 4px;
              display: block;
              border-radius: 50%;
              border: 2px solid #d06618;
              margin: 10px 12px 0 0;
              position: relative;

              a {
                width: 12px;
                height: 12px;
                display: block;
                border-radius: 50%;
                border: 2px solid #d06618;
                position: relative;
                left: -6px;
                top: -6px;
              }
            }

            span {
              font-size: 22px;
              color: #d06618;
              font-weight: 600;
            }

          }

          button {
            width: 175px;
            height: 40px;
            background: #d06618;
            color: #f9e2d0;
            line-height: 40px;
            border: none;
            outline-style: none;
            font-size: 18px;
            position: absolute;
            right: 62px;
            bottom: 46px;
          }
          button:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

}
</style>
