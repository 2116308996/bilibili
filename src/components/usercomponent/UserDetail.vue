<template>
  <div class="userdetail">
    <div class="userimg">
        <img :src="this.$store.state.userlist.image" alt="">
    </div>
    <div class="useredit">
        <div>
            <p>
                <span>5</span>
                <span>粉丝</span>
            </p>
            <p>
                <span>56</span>
                <span>关注</span>
            </p>
            <p>
                <span>88</span>
                <span>获赞</span>
            </p>
        </div>
        <div>
            <div @click="$router.push('/edit')">编辑资料</div>
        </div>
    </div>
    <div class="usermess">
        <div>{{userinfo.nickname}}</div>
        <div v-if="userinfo.signature">{{userinfo.signature}}</div>
        <div v-else>这个人很神秘，什么都没写</div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          userinfo:{
              nickname:'zhuhui',
              signature:'想学前端'
          }
      };
    },

    components: {},

    computed: {},

    created() {},

    mounted() {
        this.userinfo=this.$store.state.userlist
        
    },

    methods: {},

  }

</script>
<style lang='less' scoped>
    .userdetail{
        background-color: white;
        height: 150px;
        width: 100%;
        padding: 0 12px;
        box-sizing: border-box;
        >div{
            float: left;
        }
        .userimg{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 50px;
            position: relative;
            top: -5px;
			img{
				width: 80px;
				height: 80px;
				object-fit: cover;
				object-position: 50% 20%;
			}
        }
        .useredit{
            width: calc(100% - 24px - 80px - 50px);
            >div:nth-child(1){
                height: 50px;
                display: flex;
                p:nth-child(1) span{
                    width: 100%;
                    text-align: center;
                    border-right: grey solid 1px;
                }
                p:nth-child(2) span{
                    width: 100%;
                    text-align: center;
                    border-right: grey solid 1px;
                }
            }
             >div:nth-child(2){
                height: 30px;
            }
            >div:nth-child(1) p{
                float: left;
                height: 50px;
                margin: 0;
                display: flex;
                flex: 1;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-size: 13px;
                span:nth-child(2n){
                    color: gray;
                }
            }
            >div:nth-child(2) div{
                height: 30px;
                border: 1px solid #fb7299;
                line-height: 30px;
                text-align: center;
                border-radius: 5px;
            }
        }
        .usermess{
            div:nth-child(1){
                margin: 10px 0;
            }
            div:nth-child(2){
                font-size: 12px;
                color: gray;
            }
        }
    }
</style>