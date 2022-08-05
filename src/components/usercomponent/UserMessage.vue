<template>
  <div class="message">
    <div class="hr"></div>
    <div class="main">
        <p ref="maina" @click="maina">动态</p>
        <p ref="mainb" @click="mainb">视频</p>
    </div>
    <div class="hr"></div>
    <div class="section">
        <div v-show="isshow">111</div>
        <div v-show="!isshow">
            <div v-for="data in list" :key="data.id" class="videolist">
                <div class="left">
                    <img :src="data.image" alt="">
                    <p>{{data.time}}</p>
                </div>
                <div class="right">
                    <div>{{data.name}}</div>
                    <div>
                        <van-icon name="video-o" />
                        <span>{{data.playback}}</span>
                        <span style="width: 30px;display: inline-block;"></span>
                        <span class="iconfont icon-icon-3 "></span>
                        <span>{{data.comment}}</span>
                    </div>
                </div>
                <footer></footer>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
           isshow:true,
           list:[{
               id:1,
               image:'/image/14.jpg',
               playback:212,
               comment:13,
               time:'04:29',
               name:'pixiv图片'
           },
           {
               id:2,
               image:'/image/12.jpg',
               playback:42,
               comment:3,
               time:'02:23',
               name:'原神，雷电将军'
           },
           {
               id:3,
               image:'/image/13.jpg',
               playback:142,
               comment:7,
               time:'03:18',
               name:'明日方舟，白金'
           },
           {
               id:4,
               image:'/image/22.jpg',
               playback:82,
               comment:4,
               time:'01:29',
               name:'pixiv，护士'
           },
           {
               id:5,
               image:'/image/23.jpg',
               playback:402,
               comment:21,
               time:'04:09',
               name:'pixiv，护士'
           },
           {
               id:6,
               image:'/image/3.jpg',
               playback:2712,
               comment:135,
               time:'03:15',
               name:'原神，雷电将军'
           }
           ]
      };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {},

    methods: {
        maina(){
           this.$refs.maina.style.color='#Fb7299'
           this.$refs.mainb.style.color='#000000'
           this.isshow=true
        },
        mainb(){
           this.$refs.maina.style.color='#000000'
           this.$refs.mainb.style.color='#Fb7299'
           this.isshow=false
        }
    },

  }

</script>
<style lang='less' scoped>
  .message{
      .hr{
          width: 100%;
          height: 0px;
          border-top: 1px solid grey;
      }
      .main {
          background-color: white;
          height: 45px;
          width: 100%;
          p:nth-child(1){
              color: #Fb7299;
          }
          p{
             float: left;
             width: 50px;
             height: 45px;
             text-align: center;
             margin: 0;
             line-height: 45px;
          }
          
      }
      .section{
          .videolist{
              box-sizing: border-box;
              padding: 9px 0px 9px 12px;
              height: 90px;
              width: 100%;
              background-color: white;
              >div{
                  float: left;
              }
              .left{
                  position: relative;
                  width: 120px;
                  height: 72px;
                  overflow: hidden;
                  border-radius: 5px;
				  img{
					  width: 100%;
					  height: 100%;
					  object-fit: cover;
					  object-position: 50% 20%;
				  }
                  p{
                      position: absolute;
                      right: 5px;
                      bottom: 3px;
                      margin: 0;
                      color: white;
                      background-color: rgba(0,0,0,0.5);
                      font-size: 16px;
                      padding: 0 2px;
                  }
              }
              .right{
                 padding-left: 10px;
                 position: relative;
                 height: 72px;
                 width: calc(100% - 130px - 12px);
                 padding-right: 12px;
                 div:nth-child(2){
                     position: absolute;
                     bottom: 0;
                     color: grey;
                     font-size: 16px;
                 }
              }
              footer{
                  width: 100%;
				  
                  height: 0.5px;
                  background-color: gray;
                  margin-top: 80px;
              }
          }
      }
  }
</style>