<template>
  <div id="Me">
    <TabBar></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/index'
export default {
  name: 'me',
  data(){
    return{}
  },
  components:{
    TabBar
  }
}
</script>

<style lang="scss" scoped>
#Me{
  background: #f5f5f5;
}
</style>