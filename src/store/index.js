import Vue from 'vue'
import Vuex from 'vuex'
import createPersisedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
    plugins:[createPersisedState({
        reducer(val){
            return{
                islogin:val.islogin
            }
        }
    })],
    state:{
        islogin:false,
        userlist:{
            image:'/image/12.jpg',
            nickname:'zhuhui',
            sex:'男',
            birthday:'2001/3/24',
            signature:'想学前端',
            school:'湖南文理学院'
        },
        tabs:[{
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
          }]
    },
    actions:{
        
    },
    mutations:{
        changeislogin(state){
            state.islogin=!state.islogin
        },
        changeuserlist(state,data){
            state.userlist.nickname=data.nickname
            state.userlist.signature=data.signature
            state.userlist.image=data.image
			state.userlist.birthday=data.birthday
			state.userlist.school=data.school
			state.userlist.sex=data.sex
        },
        changetabs(state,data){
            state.tabs=data
        }
    },
    getters:{
    }
})