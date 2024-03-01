const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",
      todoList: [],
      newMust: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    fetchTodoList() {
      axios.get("../backend/api/get-list.php").then((response) => {
        this.todoList = response.data;
      });
    },

    fetchAddMust() {
      const data = {
        text: this.newMust.text,
        done: false,
      };
      const param = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post("../backend/api/store-must.php", data, param)
        .then((response) => {
          this.todoList = response.data;
        });
    },
  },

  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
