<!--  -->
<template>
<div class="aboutUs">
  <div class="banner">
    <img src="@/assets/img/aboutUs/banner.jpg" alt="">
  </div>
  <div class="content aboutDis">
    <div v-for="(item, index) in aboutUs" :key="index">
      <h2>{{item.tit}}</h2>
      <p>{{item.content1}}</p>
      <p>{{item.content2}}</p>
      <div class="contact">
        <p>联系方式：{{item.contact}}</p>
        <P>地址：{{item.address}}</P>
      </div>
    </div>
    <div class="imgList">
      <div class="imgList-left">
        <img src="@/assets/img/aboutUs/about_img1.jpg" alt="">
        <img src="@/assets/img/aboutUs/about_img6.jpg" alt="">
      </div>
      <div class="imgList-center">
        <img src="@/assets/img/aboutUs/about_img2.jpg" alt="">
        <img src="@/assets/img/aboutUs/about_img4.jpg" alt="">
      </div>
      <div class="imgList-right">
        <img src="@/assets/img/aboutUs/about_img3.jpg" alt="">
        <img src="@/assets/img/aboutUs/about_img5.jpg" alt="">
      </div>
    </div>

  </div>

  <div class="content process">
    <h2>发展历程 | DEVELOPMENT HISTORY</h2>
    <div class="process-top">
      <div class="process-item">
        <span>诞生</span>
        <p>1996年，璞缇创始人欧洲交流学习，奠定德式家居风格的基础。</p>
      </div>
      <div class="process-item">
        <span>筹谋</span>
        <p>2015年，落地于中国上海，积极探索德式精神与中国家居的结合点。</p>
      </div>
    </div>

    <div class="line"></div>
    <div class="process-bottom">
      <div class="process-item">
        <span>积淀</span>
        <p>2002年，传承德国古法工艺，延续欧洲艺术美学，以不拘一格的创意构思进行家具设计，赢得惊艳和赞叹，荣获大批拥护者。</p>
      </div>
      <div class="process-item">
        <span>锋芒</span>
        <p>2018年，打响德式“轻奢至简”的定制家居生活。</p>
      </div>
    </div>

    <div class="content linian">
      <h2>品牌理念 | BRAND IDEA</h2>

      <div class="linianDis">
        <div class="linian-item" v-for="(item, index) in linianList" :key="index" v-show="item.type==1">
          <img :src="item.imgUrl" alt="">
          <div class="item-right">
            <h2>{{item.tit1}}</h2>
            <h3>{{item.tit2}}</h3>
            <p>{{item.content}}</p>
          </div>
        </div>

        <div class="linian-item" v-for="(item, index) in linianList" :key="index" v-show="item.type==2">
          <div class="item-right" style="margin: 100px 82px 0 0;">
            <h2>{{item.tit1}}</h2>
            <h3>{{item.tit2}}</h3>
            <p>{{item.content}}</p>
          </div>
          <img :src="item.imgUrl" alt="">
        </div>

        <div class="linian-item" v-for="(item, index) in linianList" :key="index" v-show="item.type==3">
          <img :src="item.imgUrl" alt="">
          <div class="item-right">
            <h2>{{item.tit1}}</h2>
            <h3>{{item.tit2}}</h3>
            <p>{{item.content}}</p>
          </div>
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
      aboutUs: [{
        tit: '品牌故事 | BRAND STORY',
        content1: '1996年，璞缇创始人及团队欧洲交流学习，切身感受到欧洲文化的 魅力，领略到了德国严谨但不拘谨的地域文化。 强调“人文主义“，注重个体的感受，理性与感性并存于德式美学之 中。主要体现在艺术、环境、工业之中，因此催生出影响深远的艺术 设计风格。',
        content2: '璞缇企业被这种一方面追求严谨，注重对细节的把握，另一方面也追 求浪漫，倡导优雅简约的生活方式所吸引，决定将此引到中国，让更 多的人品味生活享受生活。',
        contact: '1234',
        address: ''
      }],
      linianList: [{
          tit1: '匠心设计',
          tit2: '形 简 而 意 不 简',
          type: 1,
          imgUrl: require('@/assets/img/aboutUs/img1.jpg'),
          content: '璞缇提倡化繁就简，削弱对物质的依赖，强调精神世界的 富饶，将匠心融会贯通于设计理念之中，以简洁的设计凸 显纯粹的质感，恒久不衰，经得起瞬息万变的潮流更迭， 也扛得住沧海桑田的时间考验。'
        },
        {
          tit1: '匠心设计',
          tit2: '形 简 而 意 不 简',
          type: 2,
          imgUrl: require('@/assets/img/aboutUs/img2.jpg'),
          content: '璞缇提倡化繁就简，削弱对物质的依赖，强调精神世界的 富饶，将匠心融会贯通于设计理念之中，以简洁的设计凸 显纯粹的质感，恒久不衰，经得起瞬息万变的潮流更迭， 也扛得住沧海桑田的时间考验。'
        },
        {
          tit1: '匠心设计',
          tit2: '形 简 而 意 不 简',
          type: 3,
          imgUrl: require('@/assets/img/aboutUs/img3.jpg'),
          content: '璞缇提倡化繁就简，削弱对物质的依赖，强调精神世界的 富饶，将匠心融会贯通于设计理念之中，以简洁的设计凸 显纯粹的质感，恒久不衰，经得起瞬息万变的潮流更迭， 也扛得住沧海桑田的时间考验。'
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
.aboutUs {
  .aboutDis {
    h2 {
      margin: 100px 0 48px 0 !important;
    }

    h2,
    p {
      color: #fff;
    }

    h2 {
      text-align: center;
      margin: 0 0 48px 0;
    }

    p {
      line-height: 2;
      text-indent: 2em;
    }

    .contact {
      margin: 28px 0 32px 0;
    }

    .imgList {
      display: flex;
      background: #fff;

      img {
        display: block;
      }

      .imgList-left {
        margin: 0 12px 0 0;

        img:first-child {
          margin: 0 0 10px 0;
        }
      }

      .imgList-right {
        img:first-child {
          margin: 0 0 10px 0;
        }
      }

      .imgList-center {
        margin: 0 13px 0 0;

        img:first-child {
          margin: 0 0 10px 0;
        }
      }
    }
  }

  .process {
    h2 {
      color: #fff;
      text-align: center;
      margin: 100px 0 48px 0;
    }

    .process-top {
      display: flex;
      margin: 0 0 0 95px;

      .process-item {
        display: flex;
        position: relative;
        margin: 0 175px 0 0;

        span {
          display: block;
          width: 110px;
          height: 110px;
          background: #fff;
          color: #333;
          line-height: 110px;
          border-radius: 50%;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
        }

        span::after {
          content: '';
          width: 1px;
          height: 110px;
          background: #fff;
          display: block;
          position: relative;
          left: 52px;
        }

        p {
          width: 200px;
          margin: 6px 0 0 20px;
          color: #fff;
        }
      }
    }

    .line {
      width: 1200px;
      margin: 0 auto;
      height: 2px;
      background: #fff;
      margin: 110px 0 0 0;
    }

    .process-bottom {
      display: flex;
      margin: 110px 0 0 285px;

      .process-item {
        display: flex;
        position: relative;
        margin: 0 175px 0 0;

        span {
          display: block;
          width: 110px;
          height: 110px;
          background: #fff;
          color: #333;
          line-height: 110px;
          border-radius: 50%;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
        }

        span::after {
          content: '';
          width: 1px;
          height: 110px;
          background: #fff;
          display: block;
          position: relative;
          left: 52px;
          top: -220px;
        }

        p {
          width: 200px;
          color: #fff;
          margin: 6px 0 0 20px;
        }
      }
    }
  }

  .linian {
    h2 {
      color: #fff;
      text-align: center;
      margin: 100px 0 48px 0;
    }

    .linianDis {
      .linian-item {
        padding: 15px 64px;
        display: flex;
        border: 1.5px solid #fff;
        margin: 0 0 30px 0;

        .item-right {
          margin: 100px 0 0 82px;

          h2 {
            margin: 0 0 28px 0;
            text-align: left;
          }

          h3 {
            margin: 0 0 28px 0;
            text-align: left;
            border-bottom: 1px solid #fff;
            padding: 0 0 36px 0;
            color: #fff;
            font-size: 24px;
          }

          p {
            color: #fff;
            margin: 34px 0 0 0;
            line-height: 1.6;
          }
        }
      }
    }
  }
}
</style>
