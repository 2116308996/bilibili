<template>
  <div>
    <nav-bar></nav-bar>
    <van-tabs v-model="active">
      <van-tab v-for="item in tabs" :title="item.title" :key='item.id'>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div v-for="page in item.list" class="pagediv">
            <div v-for="data in page" class="datadiv">
              <div class="top" @click="$router.push('/detail/'+data.id)">
                <img :src="data.image" alt="">
                <div>
                  <van-icon name="video-o" />
                  <span>{{ computedcount(data.playback) }}</span>
                  <span style="width: 15px;display: inline-block;"></span>
                  <span class="iconfont icon-icon-3 "></span>
                  <span>{{ computedcount(data.comment) }}</span>
                  <span style="width: 15px;display: inline-block;"></span>
                  <span>{{data.time}}</span>
                </div>
              </div>
              <div class="bottom">
                {{ data.name }}
              </div>
            </div>
          </div>
        </van-pull-refresh>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import tab1 from '@/util/tab1.js'
import NavBar from '@/components/common/Navbar.vue'
export default {
  data() {
    return {
      tabs: [{
        id: 1,
        title: '推荐'
      }, {
        id: 2,
        title: '动画'
      }, {
        id: 3,
        title: '番剧'
      }, {
        id: 4,
        title: '国创'
      }, {
        id: 5,
        title: '音乐'
      }, {
        id: 6,
        title: '舞蹈'
      }, {
        id: 7,
        title: '游戏'
      }, {
        id: 8,
        title: '科技'
      }, {
        id: 9,
        title: '数码'
      }, {
        id: 10,
        title: '生活'
      }, {
        id: 11,
        title: '鬼畜'
      }, {
        id: 12,
        title: '时尚'
      }],
      active: 0,
      count: 0,
      isLoading: false,
    };
  },
  mounted() {
    this.tabs=this.$store.state.tabs
    if(this.tabs[this.active].list==undefined){
       this.changetabs()
    }
    this.changelist()
  },
  components: {
    NavBar
  },
  methods: {
    changetabs() {
      this.tabs = this.tabs.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 4
        return item
      })
    },
    changelist() {
      if (this.tabs[this.active].page == 0) {
        this.tabs[this.active].list.push(this.randomlist(4, tab1))
        this.tabs[this.active].page++
        this.$store.commit('changetabs',this.tabs)
      }
    },
    randomlist(n, listabc) {
      var list = []
      for (var i = 0; i < n; i++) {
        list.push(listabc[Math.floor(Math.random() * listabc.length)])
      }
      return list
    },
    onRefresh() {
      setTimeout(() => {
        this.tabs[this.active].list.unshift(this.randomlist(4, tab1))
        this.tabs[this.active].page++
        this.isLoading = false;
        this.count++;
        this.$store.commit('changetabs',this.tabs)
      }, 1000);
    },
    computedcount(data){
      if(data/10000>=1){
        return (data/10000).toFixed(1)+'万'
      }else{
        return data
      }
    }
  },
  watch: {
    active() {
      this.changelist()
    }
  },
  computed: {
    
  }
}

</script>
<style lang='less' scoped>
.pagediv {
  width: 100%;
  height: 260px;
  box-sizing: border-box;
  padding: 5px;

  .datadiv {
    width: 50%;
    height: 130px;
    box-sizing: border-box;
    float: left;
    padding: 5px;
    color: white;

    .top {
      position: relative;

      img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        object-position: 50% 20%;
        border-radius: 3px;
      }

      div {
        position: absolute;
        top: 85px;
        font-size: 12px;
        padding-left:5px ;
      }
    }

    .bottom {
      color: black;
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>