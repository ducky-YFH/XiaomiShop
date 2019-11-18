<template>
  <div id="editAddr">
    <van-nav-bar
      title="添加地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
export default {
  name:'editAddr',
  data() {
    return {
      areaList:{},
      searchResult: []
    }
  },

  methods: {
    onSave() {
      window.console.log('save');
    },
    onDelete() {
      window.console.log('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    },
    onClickLeft() {
      this.$router.back(-1);
    },
  }
}
</script>

<style>
</style>