import { uuid } from "./utils";

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      tasks: [
        {
          description: "Building our Board",
          name: "first task",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "Open Tasks in Modal",
          name: "second task",
          id: uuid(),
          userAssigned: null
        },
        {
          description: "Adding and Editing Task",
          name: "and thrid",
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "in-progress",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "done",
      tasks: [
        {
          description: "",
          name: "first task",
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
};
