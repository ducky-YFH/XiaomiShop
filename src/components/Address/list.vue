<template>
  <div class="addList">
    <NavBar title='地址列表'></NavBar>
    <van-address-list
      v-model="addrOpt.chosenAddressId"
      :list="addrOpt.list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: 'addrList',
  data(){
    return {
      addrOpt:{
        flag: false,
        title: '选择地址',
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ]
      },
    }
  },
  methods:{
    onAdd(){
      this.$router.push('/address/editaddr')
    },
    onEdit(item, index) {
      window.console.log('编辑地址',item,index)
      
    }
  }
}
</script>

<style>
</style>