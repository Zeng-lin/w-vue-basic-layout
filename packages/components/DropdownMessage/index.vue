<template>
    <div class="w-dropdown-message">
      <el-dropdown trigger="click" v-for="(item, index) in dropdownItemList" :key="index" @command="toChildPath">
        <span class="el-dropdown-link">
          <svg-icon :icon-class="item.icon" /> {{item.itemName}}
        </span>
        <el-dropdown-menu slot="dropdown" v-if="item.itemChild">
          <el-dropdown-item class="clearfix" v-for="(_item, _index) in item.itemChild" :key="_index" :command="_item">
            {{_item.itemChildName}}
            <el-badge class="mark" :value="_item.itemChildNum" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
export default {
  props: {
    dropdownItemList: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    toChildPath (item) {
      if (item.path) {
        this.$router.push(item.path)
      } else if (item.link) {
        window.location = item.link
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.w-dropdown-message {
  display: inline-block;
  position: absolute;
  right: 85px;
  .el-dropdown-link {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding: 0 10px;
    margin-left: 5px;
  }
}
</style>
