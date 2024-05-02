<script setup lang="ts">
</script>

<template>
  <div>
    <div class="theme-plugin">
      This is theme plugin, that renders external MenuPlugin
      <MenuPlugin></MenuPlugin>
    </div>
  </div>
</template>

<style scoped>
.theme-plugin {
  background-color: purple;
  color: white;
  border: 1px solid gainsboro;
  padding: 1rem;
}

.menu-plugin {
  background-color: red;
  color: white;
}
</style>
