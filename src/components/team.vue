<!-- 设计团队页面 -->
<template>
<div class="activity">
  <div class="banner">
    <img src="@/assets/img/home/banner3.jpg" alt="">
  </div>
  <div class="content content1">
    <h3>你是否也遇到过这些烦恼？</h3>
    <p>Have you ever had these troubles?</p>
  </div>
  <div class="content content1Dis">
    <div class="content1Dis-item" v-for="(item, teamTitNum) in content1List" :key="teamTitNum">
      <p>{{item.tit}}</p>
      <p>{{item.dis}}</p>
    </div>
  </div>

  <div class="content content2">
    <div class="content2-item" v-for="(item, teamTypeNum) in content2List" :key="teamTypeNum">
      <h3>{{item.tit}}</h3>
      <img :src="item.imgUrl" alt="">
      <p>{{item.dis}}</p>
    </div>
  </div>

  <div class="content content3">
    <h3 class="content">design team | 设计团队</h3>
    <div class="content3-item" v-for="(item, teamNum) in content3List" :key="teamNum">
      <div class="item-left">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="item-right">
        <h2>{{item.name}}</h2>
        <p>擅长风格：{{item.style}}</p>
        <p>{{item.linian}}</p>
        <button>立即预约</button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      content1List: [{
          tit: '不敢买',
          dis: '不知道装在家里什么效果？'
        },
        {
          tit: '不会搭',
          dis: '花钱买了软装，却搭不出效果'
        },
        {
          tit: '费用高',
          dis: '找设计公司花费太高'
        }
      ],
      content2List: [{
          tit: '1对1服务',
          imgUrl: require('@/assets/img/team/icon_img1.jpg'),
          dis: '配专属设计师配套服务'
        },
        {
          tit: '7天内出方案',
          imgUrl: require('@/assets/img/team/icon_img2.jpg'),
          dis: '7天方案呈上'
        }
      ],
      content3List: [{
          imgUrl: require('@/assets/img/home/hj.jpg'),
          name: '胡静',
          style: '现代、简约',
          linian: '以女性特有的细致服务客户，通过精打细算设计出更适合的家具。家具设计不是堆积，如何有序、 有层次地摆放是设计师需要解决的问题， 客户的满意将是我的动力。 '
        },
        {
          imgUrl: require('@/assets/img/home/zyt.jpg'),
          name: '周玉婷',
          style: '现代、简约',
          linian: '以女性特有的细致服务客户，通过精打细算设计出更适合的家具。家具设计不是堆积，如何有序、 有层次地摆放是设计师需要解决的问题， 客户的满意将是我的动力。 '
        },
        {
          imgUrl: require('@/assets/img/home/yll.jpg'),
          name: '袁玲玲',
          style: '现代、简约',
          linian: '以女性特有的细致服务客户，通过精打细算设计出更适合的家具。家具设计不是堆积，如何有序、 有层次地摆放是设计师需要解决的问题， 客户的满意将是我的动力。 '
        },
        {
          imgUrl: require('@/assets/img/home/lym.jpg'),
          name: '刘益明',
          style: '现代、简约',
          linian: '以女性特有的细致服务客户，通过精打细算设计出更适合的家具。家具设计不是堆积，如何有序、 有层次地摆放是设计师需要解决的问题， 客户的满意将是我的动力。 '
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
.activity {
  .content1 {

    h3,
    p {
      color: #fff;
      text-align: center;
    }

    h3 {
      font-size: 24px;
      margin: 0 0 6px 0;
    }

    p {
      font-size: 18px;
    }
  }

  .content1Dis {
    display: flex;

    .content1Dis-item {
      width: 370px;
      height: 220px;
      border: 4px solid #fff;
      margin: 0 30px 0 0;

      p {
        color: #fff;
        text-align: center;
      }

      p:first-child {
        margin: 76px 0 28px 0;
        font-size: 20px;
      }

      p:last-child {
        color: #d4d4d4;
      }
    }

    .content1Dis-item:last-child {
      margin: 0 0 0 0;
    }

  }

  .content2 {
    background: url('../assets/img/team/bg_img1.jpg');
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;

    .content2-item {
      background: #fff;
      width: 350px;
      height: 430px;
      margin: 35px 135px 0 0;

      h3 {
        margin: 42px 0 0 0;
        font-size: 24px;
      }

      h3,
      p {
        text-align: center;
      }

      p {
        color: #333;
      }

      img {
        display: block;
        margin: 48px auto;
      }
    }

    .content2-item:last-child {
      margin: 35px 0 0 0;
    }
  }

  .content3 {
    h3 {
      text-align: center;
      color: #fff;
      font-size: 24px;
      margin: 0 0 48px 0;
    }

    .content3-item {
      background: #fff;
      display: flex;
      padding: 26px 26px;
      margin: 0 0 30px 0;
      .item-left {
        margin: 0 52px 0 0;
        img {
          display: block;
          width: 316px;
          height: 316px;
        }
      }
      .item-right {
        padding: 0 24px 0 0;
        h2 {
          margin: 88px 0 0 0;
        }
        p {
          margin: 24px 0 0 0;
          line-height: 1.6;
        }
        button {
          width: 210px;
          height: 48px;
          border: none;
          background: #000;
          outline-style: none;
          color: #fff;
          float: right;
          font-size: 18px;
        }
        button:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
