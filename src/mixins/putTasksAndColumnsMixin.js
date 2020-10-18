export default {
  props: {
    columnIndex: {
      type: [String, Number],
      required: true,
    },
    board: {
      type: Object,
      required: true,
    },
  },
  methods: {
    putTaskOrColumn(transferData) {

      if (transferData.type === "task") {
        this.putTask(transferData);
      } else if (transferData.type === "column") {
        this.putColumn(transferData);
      }
    },
    putTask({ fromColumnIndex, fromTaskIndex }) {
      // event, toColumnIndex, toTaskIndex

      this.$store.commit("MOVE_TASK", {
        fromColumn: this.board.columns[fromColumnIndex],
        toColumn: this.board.columns[this.columnIndex],
        taskIndex: fromTaskIndex,
        toTaskIndex: this.taskIndex
      });
    },
    putColumn({ fromColumnIndex }) {
      this.$store.commit("MOVE_COLUMN", {
        fromColumnIndex,
        columnIndex: this.columnIndex
      });
    },
  }
}