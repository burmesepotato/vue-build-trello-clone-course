<template>
  <BaseDrop @drop="putTaskOrColumn">
    <BaseDrag
      class="task"
      @click="goToTask(task)"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex,
      }"
    >
      <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
      <p v-if="task.description" class="w-full flex-no-shrink mt-1 text-sm">
        {{ task.description }}
      </p>
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import BaseDrag from "@/components/BaseDrag.vue";
import BaseDrop from "@/components/BaseDrop.vue";
import putTasksAndColumnsMixin from "@/mixins/putTasksAndColumnsMixin.js";

export default {
  components: {
    BaseDrag,
    BaseDrop,
  },
  mixins: [putTasksAndColumnsMixin],
  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    goToTask(task) {
      this.$router.push({ name: "task", params: { id: task.id } });
    },
    // pickupTask(event, taskIndex, fromColumnIndex) {
    //   event.dataTransfer.dropEffect = "move";
    //   event.dataTransfer.effectAllowed = "move";
    //   event.dataTransfer.setData("task-index", taskIndex);
    //   event.dataTransfer.setData("from-column-index", fromColumnIndex);
    //   event.dataTransfer.setData("type", "task");
    // },
  },
};
</script>

<style lang="css" scoped>
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
  cursor: pointer;
}
</style>