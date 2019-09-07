<!-- 晒家分享页面 -->
<template>
<div class="content share">
  <div class="tabList">
    <span v-for="(item, shareTabNum) in tabList" :key="shareTabNum" @click="cur=shareTabNum" :class="cur==shareTabNum?'active':''">{{item.name}}</span>
  </div>
  <div class="contentList">
    <div class="content-item" v-for="(item, shareCaseNum) in tabList[cur].contentList" :key="shareCaseNum">
      <img :src="item.imgUrl" alt="">
      <h3>{{item.tit}}</h3>
      <p>{{item.content1}}</p>
      <div class="btn">
        <el-button type="text" @click="dialogVisible1 = true">我也要定做</el-button>
        <el-button type="text" @click="dialogVisible2 = true">我也要分享</el-button>
      </div>

      <el-dialog title="快速预约" width="36%" :visible.sync="dialogVisible1" :before-close="handleClose">
        <!-- form -->
        <el-form action="" ref="form" :model="form" label-width="108px">
          <el-form-item label="您的姓名：">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input v-model="form.contact"></el-input>
          </el-form-item>
          <div class="item">
            <el-form-item label="省份：">
              <el-select v-model="form.sf" placeholder="请选择省份">
                <el-option label="区域一" value="1"></el-option>
                <el-option label="区域二" value="2"></el-option>
              </el-select>
              <el-select v-model="form.cs" placeholder="请选择市">
                <el-option label="区域一" value="3"></el-option>
                <el-option label="区域二" value="4"></el-option>
              </el-select>
              <el-select v-model="form.qy" placeholder="请选择区域">
                <el-option label="区域一" value="5"></el-option>
                <el-option label="区域二" value="6"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="item">
            <el-form-item label="需求：">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="全屋定制" name="type"></el-checkbox>
                <el-checkbox label="橱柜" name="type"></el-checkbox>
                <el-checkbox label="衣柜" name="type"></el-checkbox>
                <el-checkbox label="木门" name="type"></el-checkbox>
                <el-checkbox label="卫浴" name="type"></el-checkbox>
                <el-checkbox label="其他需求" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button @click="dialogVisible1 = false">提交申请</el-button>
        </span>
      </el-dialog>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cur: 0,
      dialogVisible1: false,
      dialogVisible2: false,
      form: {
        sf: '',
        qy: '',
        cs: '',
        type: [],
        name: '',
        contact: ''
      },
      tabList: [{
          name: '全部晒家',
          contentList: [{
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            },
            {
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            },
            {
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            },
            {
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            },
            {
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            },
            {
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            }
          ]
        },
        {
          name: '本月晒家',
          contentList: [{
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            },
            {
              imgUrl: require('@/assets/img/share/img1.jpg'),
              tit: '定制橱柜',

              content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

            }
          ]
        },
        {
          name: '精选晒家',
          contentList: [{
            imgUrl: require('@/assets/img/share/img1.jpg'),
            tit: '定制橱柜',

            content1: '不管颜色还是款式，都是我喜欢的。因为都是我自己选的， 特别是设计方案，经过设计师的精心设计，最终达到......',

          }]
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
}
</script>

<style lang="scss" scoped>
.share {
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

      h3 {
        margin: 26px 0 0 0;
        border: 1px solid #666;
        border-radius: 10px;
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        width: 108px;
        height: 26px;
        line-height: 26px;
      }

      p {
        color: #333;
        line-height: 1.6;
        font-size: 14px;
        width: 350px;
        margin: 16px 0 26px 0;
      }

      span {
        margin: 22px 0;
        display: block;
        color: #555;
        font-size: 14px;
      }

      .btn {
        display: flex;
        justify-content: center;

        button {
          width: 122px;
          height: 42px;
          text-emphasis: center;
          background: #000;
          color: #fff;
          border: none;
          outline-style: none;
          margin: 0 24px 0 0;
        }

        button:last-child {
          margin: 0 0 0 0;
        }
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

// button
.el-button {
  background: #000;
  color: #fff;

}

// dialog
.el-dialog__title {
  margin: 0 auto;
  width: 200px;
}

.el-dialog__body {
  form {
    .item {
      display: flex;
      margin: 16px 0;

      label {
        font-size: 16px;
        height: 38px;
        line-height: 38px;
        width: 98px;
        color: #000;
      }

      input {
        width: 90%;
        height: 38px;
        border: 1px solid #000;
        padding-left: 12px;
      }
    }

  }
}

// select
.el-select {
  width: 120px;
  // border: 1px solid #000;
  outline-style: none;
  border-radius: 0;
}

.el-input {
  border: none;
}
</style>
