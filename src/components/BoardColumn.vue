<template>
  <BaseDrop @drop="putTaskOrColumn">
    <BaseDrag
      class="column"
      :transferData="{
        type: 'column',
        fromColumnIndex: columnIndex,
      }"
    >
      <div class="flex items-center mb-2 font-bold">
        {{ column.name }}
      </div>

      <div class="list-reset">
        <ColumnTask
          v-for="(task, $taskIndex) of column.tasks"
          :key="$taskIndex"
          :task="task"
          :taskIndex="$taskIndex"
          :columnIndex="columnIndex"
          :board="board"
        />
      </div>

      <input
        type="text"
        class="block p-2 w-full bg-transparent"
        placeholder="+ Enter new task"
        style="outline: 0"
        @keyup.enter="createTask($event, column.tasks)"
      />
    </BaseDrag>
  </BaseDrop>
</template>

<script>
import BaseDrag from "@/components/BaseDrag.vue";
import BaseDrop from "@/components/BaseDrop.vue";
import ColumnTask from "@/components/ColumnTask.vue";
import putTasksAndColumnsMixin from "@/mixins/putTasksAndColumnsMixin.js";

export default {
  components: {
    BaseDrag,
    BaseDrop,
    ColumnTask,
  },
  mixins: [putTasksAndColumnsMixin],
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
  methods: {
    createTask(event, tasks) {
      this.$store.commit("CREATE_TASK", {
        tasks,
        name: event.target.value,
      });
      event.target.value = "";
    },
  },
};
</script>

<style lang="css">
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>