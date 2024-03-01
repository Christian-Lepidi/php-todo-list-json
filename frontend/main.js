const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",
      todoList: [],
    };
  },

  methods: {
    fetchTodoList() {
      axios.get("../backend/api/get-list.php").then((response) => {
        this.todoList = response.data;
      });
    },
  },

  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
