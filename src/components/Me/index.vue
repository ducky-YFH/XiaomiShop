<template>
  <div id="Me">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from "@/components/TabBar"
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
</style>