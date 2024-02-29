const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",
      todoList: [
        "Fare la spesa",
        "Cambiare filtro olio",
        "Andare in palestra",
        "Portare fuori il cane",
      ],
    };
  },
});

app.mount("#app");
