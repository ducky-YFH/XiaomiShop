<template>
  <div id="Category">
    <NavBar title="手机分类"></NavBar>
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
// import NavBar from "@/components/NavBar"

export default {
  name: 'Category',
  data(){
    return {
      phoneList: [],
      phoneType:[],
      phoneData:{}
    }
  },
  methods:{
    getPhoneData(){
      this.$axios.get('/api/category').then(res => {
        this.phoneList = res.data
        this.phoneList.forEach((item)=>{
          this.phoneType.push(item.type)
        })
        this.phoneData = this.phoneList[0];
      })
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
  }
}
</script>

<style lang="scss" scoped>
section {
  background: #ffffff;
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
    background: #ffffff;
  }
}
</style>