import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "./default-board";
import { saveStatePlugin, uuid } from "./utils";

Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem("board")) || defaultBoard;

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board
  },
  mutations: {
    CREATE_COLUMN(state, { name }) {
      state.board.columns.push({
        name: name,
        tasks: []
      })
    },
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name: name,
        id: uuid(),
        description: "",
        userAssigned: null
      });
    },
    UPDATE_TASK(state, { task, key, value }) {
      Vue.set(task, key, value);
    },
    MOVE_TASK(state, { fromColumn, toColumn, taskIndex, toTaskIndex }) {
      let taskToMove = fromColumn.tasks.splice(taskIndex, 1)[0];
      // toColumn.tasks.push(taskToMove);
      toColumn.tasks.splice(toTaskIndex, 0, taskToMove);
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex}) {
      const columnList = state.board.columns;
      const columnToMove = state.board.columns.splice(fromColumnIndex, 1)[0];
      columnList.splice(toColumnIndex, 0, columnToMove);
    }
  },
  getters: {
    getTask(state) {
      return id => {
        for (let column of state.board.columns) {
          for (let task of column.tasks) {
            if (task.id === id) return task;
          }
        }
      };
    }
  }
});
