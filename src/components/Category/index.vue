<template>
  <div id="Category">
    <NavBar></NavBar>
    <section>
      <div class="phone-type" @click="switchPhone" ref="phoneType">
        <a
          v-for="(item,index) in phoneType"
          :key="index"
          :class="{'active':index==0}"
          :data-index="index"
          href="javascript:;"
        >{{item}}</a>
      </div>
      <div class="phone-show">
        <van-grid :column-num="3" :border="false" :icon-size="90">
          <van-grid-item
            v-for="item in phoneData.list"
            :key="item.id"
            :icon="item.src"
            :text="item.name"
            :to="{name:'detail',params:{id:item.id}}"
          />
        </van-grid>
      </div>
    </section>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar"
import NavBar from "@/components/NavBar"

export default {
  name: 'Category',
  data(){
    return {
      phoneList: [
        {
          type: '小米手机',
          list: [
            { id:1, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ee8b3b156837eecc9ae9660e1b869b.png?thumb=1&w=120&h=120'},
            { id:2, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ee8b3b156837eecc9ae9660e1b869b.png?thumb=1&w=120&h=120'},
            { id:3, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ee8b3b156837eecc9ae9660e1b869b.png?thumb=1&w=120&h=120'},
            { id:4, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ee8b3b156837eecc9ae9660e1b869b.png?thumb=1&w=120&h=120'},
            { id:5, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15ee8b3b156837eecc9ae9660e1b869b.png?thumb=1&w=120&h=120'},
          ]
        },
        {
          type: '红米手机',
          list: [
            { id:6, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/99022ce28f145ff5a521c848596295ec.gif'},
            { id:7, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/99022ce28f145ff5a521c848596295ec.gif'},
            { id:8, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/99022ce28f145ff5a521c848596295ec.gif'},
            { id:9, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/99022ce28f145ff5a521c848596295ec.gif'},
            { id:10, name: '小米9CC Pro',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/99022ce28f145ff5a521c848596295ec.gif'},
          ]
        },
        {
          type: '黑鲨手机',
          list: [
            { id:11, name: '小米9CC Pro', to:'',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6c8a112abab1c03285aa915d731f6c3.png?thumb=1&w=120&h=120'},
            { id:12, name: '小米9CC Pro', to:'',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6c8a112abab1c03285aa915d731f6c3.png?thumb=1&w=120&h=120'},
            { id:13, name: '小米9CC Pro', to:'',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6c8a112abab1c03285aa915d731f6c3.png?thumb=1&w=120&h=120'},
            { id:14, name: '小米9CC Pro', to:'',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6c8a112abab1c03285aa915d731f6c3.png?thumb=1&w=120&h=120'},
            { id:15, name: '小米9CC Pro', to:'',src:'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6c8a112abab1c03285aa915d731f6c3.png?thumb=1&w=120&h=120'},
          ]
        }
      ],
      phoneType:[],
      phoneData:{}
    }
  },
  methods:{
    getPhoneData(){
      this.phoneList.forEach((item)=>{
        this.phoneType.push(item.type)
      })
      this.phoneData = this.phoneList[0];
    },
    switchPhone(e){
      if(e.target.nodeName.toLowerCase() === 'a'){
        const index = e.target.dataset.index;
        this.phoneData = this.phoneList[index];
        this.$refs.phoneType.children.forEach((item)=>{
          item.className = ''
          item.style.color = '#000'
        })
        e.target.className = "active"
        e.target.style.color = '#fb833d'
      }
    }
  },
  created(){
    this.getPhoneData();
  },
  components: {
    TabBar,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
section {
  .phone-type {
    display: flex;
    justify-content: space-around;
    color: #000;
    padding: 0.3rem 0;
    font-size: 0.4rem;
    a {
      padding-bottom: 8px;
      box-sizing: border-box;
      color: #000;
    }
    .active {
      border-bottom: 1px solid #fb8946;
    }
  }
  .phone-show {
  }
}
</style>