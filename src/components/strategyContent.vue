<!--  -->
<template>
<div class="strategyContent">
  <div class="content" v-for="(item, index) in dataList" v-show="item.id==showItem" :key="index">
    <h2 class="tit">{{item.tit}}</h2>
    <div class="authorDis">
      <p><span>{{item.sj}}</span>{{item.author}}</p>
    </div>
    <p class="contentDis">{{item.contentDis}}</p>
    <img :src="item.imgUrl" alt="">
    <div class="content-item" v-for="(item, index) in item.contentList" :key="index">
      <h3>{{index+1}}、{{item.tit}}</h3>
      <p>{{item.content}}</p>
    </div>
  </div>
  <div class="pageRouter content">
    <div class="pageArrow">
      <i class="el-icon-arrow-left"></i>
      <span>上一篇</span>
    </div>
    <div class="pageNext">
      <span>下一篇</span>
      <i class="el-icon-arrow-right"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      showItem: '',
      dataList: [{
          id: 'dz1',
          author: 'PROTI 璞缇',
          sj: '2019-8-15',
          tit: '不同年龄选购衣柜有什么区别？',
          imgUrl: require('@/assets/img/strategy/img1.jpg'),
          contentDis: '衣柜是卧室必备家具之一，在一个家庭里面，有老人、有小孩，几乎每个人对待定做衣柜的需求都是不一样的，这就衍生出了定制衣柜有年龄阶段的说法.不同年龄阶层人群，因为生活习惯不同或者身体状况差异等因素，他们的衣柜设计也是有所差别的.那么衣柜设计的讲究在哪里?不同年龄层衣柜该怎么设计呢?',
          contentList: [{
              tit: '儿童衣柜',
              content: '儿童正处生长阶段，衣服更换快、玩具越堆越多，所以童用衣柜要有强大的收纳和多功能的分区，儿童叠放衣物较少，但孩子成长迅速，所以设计时要把未来5-10年的使用习惯和身高变化等因素考虑进去，叠放区与挂放区的比例要适当搭配,这样才能满足孩子的收纳需求。'
            },
            {
              tit: '成年人衣柜',
              content: '女性可在衣柜设置饰品柜，适当增加层板;男性可增设西裤架、适当增多挂衣区;小夫妻则可将衣柜内部空间按照5:5或者6:4的比例划分设计，双方各占一边。内部设计主要依照两个人的穿衣、使用习惯来确定。内衣、领带和袜子可用专用的小格子，既有利于衣物保养，取物也更直观方便；毛衣可放在较深的抽屉里；裤子则悬挂在挂架区，也省去了熨烫的时间，注意要分男女，这样在寻找的时候也很方便。柜体内的挂衣架通常分为长短两层分别储存大衣和上装，衬衫也可以放置于独立的小抽屉或搁板，不会因过多衣物挤压在一起而皱折难看。'
            },
            {
              tit: '老年人衣柜',
              content: '老年父母叠放衣物较多，通常挂件较少，因此在设计衣柜时可以考虑多做些衣柜层板和衣柜抽屉，而老年人因身体状况，应该在离地面1米高左右，长辈总会有些念旧情结，所以纪念性物品会较多，建议在设计衣柜时要考虑长辈房衣柜的收纳容量。'
            }
          ]
        },
        {
          id: 'dz2',
          content: ''
        }
      ]
    }
  },

  components: {},

  computed: {},

  methods: {},

  created() {
    var id = this.$route.query.strategy;
    this.showItem = id;
    console.log(this.showItem);
  },
}
</script>

<style lang="scss" scoped>
P {
  color: #333;
  text-indent: 2em;
}

h3 {
  color: #333;
}

.strategyContent {
  background: #fff;
  padding: 0 0 88px 0;

  .content {
    margin: 0 auto 0;

    h2 {
      text-align: center;
      padding: 48px 0 0 0;
    }

    .authorDis {
      p {
        padding: 12px 0;
        font-size: 14px;
        text-align: center;
        color: #666;

        span {
          margin: 0 24px 0 0;
        }
      }
    }

    img {
      display: block;
      margin: 0 auto;
    }

    .contentDis {
      margin: 24px 0 12px 0;
    }

    .content-item {
      h3 {
        margin: 24px 0 12px 0;
      }

      p {
        line-height: 2;
      }
    }
  }

  .pageRouter {
    margin: 48px auto 0;

    .pageArrow {
      float: left;
    }

    .pageNext {
      float: right;
    }

    span {
      font-size: 14px;
      color: #333;
      transition: all .2s ease-in;
    }

    span:hover {
      color: #0c9de0;
      cursor: pointer;
    }
  }
}
</style>
