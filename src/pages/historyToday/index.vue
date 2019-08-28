<template>
  <div class="bg">
    <div class="title">历史上的今天</div>
    <div class="date">{{today}}</div>
    <div>
      <div class="item" v-for="item in data">
        <!--{{item._id}}-->
        <div>
          <img :src="item.pic" style="width: 30vw" mode="widthFix"/>
        </div>
        <div class="item-right">
          <div style="font-size: 40rpx; padding-bottom: 3vw">
            {{item.year}}年{{item.month}}月{{item.day}}日
          </div>
          <div>
            {{item.title}}
          </div>
          <div style="color: #ababab">
            {{item.des}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getNowFormatDate } from "../../utils/getTime";

  export default {
    components: {},
    data () {
      return {
        data: [],
        today: '',
        url: 'https://106.15.189.106/wepyBook/api/getToday'
      }
    },
    created () {

    },
    onLoad () {
      this.getData()
      this.getToday()
    },
    methods: {
      getData() {
        this.$http.get(this.url).then((res) => {
          if (res.data.code == 0) {
            //ok
            this.data = res.data.data
          }else{
            wx.showModal({
              title: '提示',
              content: res.data.message
            })
          }
        })
      },
      getToday() {
        this.today = getNowFormatDate()
      }
    }
  }

</script>

<style>
  .title {
    text-align: center;
    font-size: 30px;
  }
  .date {
    font-size: 30rpx;
    color: #ababab;
    text-align: center;
    padding-bottom: 5vw;
  }

  .item {
    padding: 3vw;
    min-height: 50vw;
    border-top: 1px solid #eeeeee;
    position: relative;
  }

  .item-right {
    width: 50vw;
    position: absolute;
    right: 10vw;
    top: 3vw;
    font-size: 30rpx;
  }
</style>
