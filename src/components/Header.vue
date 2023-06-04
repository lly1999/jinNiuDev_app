<template>
  <!-- 导航栏 -->
  <el-header class="header">
    <!-- 商标栏-->
    <el-row>
      <!--商标-->
      <el-col :span="24">
        <div>
          <el-page-header class="page-header" @back="goback" :icon="null">
            <!-- <template #icon>
              <slot name="icon"></slot>
            </template> -->
            <template #title>
              <slot name="title"></slot>
            </template>

            <template #content>
              <slot name="content"></slot>
            </template>
          </el-page-header>
        </div>
      </el-col>
      <!-- 时间 -->

    </el-row>
  </el-header>
</template>

<script setup>
// 向父组件抛出事件，由父组件决定如何处理
const emit = defineEmits(['back'])
function goback() {
  emit('back');
}
</script>

<style scoped>
.header {
  font-size: 22px;
  background-color: #004B8C;
  color: #fff;
  height: 30px;
}

:deep(.page-header div::after) {
  content: none;
}

.el-menu {
  border-bottom: none;
}

.el-menu-item {
  line-height: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.userinfo {
  font-size: large;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

:deep(.userinfo .el-dropdown-link) {
  color: #fff;
  font-size: large;
}
</style>