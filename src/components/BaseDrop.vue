<template>
  <div @drop.stop="onDrop" @dragenter.prevent @dragover.prevent>
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    onDrop(event) {
      const transferData = JSON.parse(event.dataTransfer.getData("payload"));
      this.$emit("drop", transferData);
    },
  },
};
</script>

<style lang="css" scoped>
</style>