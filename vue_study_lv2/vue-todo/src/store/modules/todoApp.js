const storage = {
    fetch() {
        let arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(
                        JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                    // this.todoItems.push(localStorage.key(i));
                }
            }
        }
        return arr;
    }
};

const state = {
    todoItems: storage.fetch(),
    headerText : "TODO it!",
};
const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};
const mutations = {
    addOneItem (state,todoItem) {
        let obj = { completed: false, item: todoItem };
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
      },
      removeOneItem(state,{todoItem,index}) {
        console.log(todoItem)
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index, 1);
      },
      toggleOneItem (state, index) {
        state.todoItems[index].completed = !state.todoItems[index].completed;
        // localStorage.removeItem(state.todoItems[index].item);
        localStorage.setItem(state.todoItems[index].item, JSON.stringify(state.todoItems[index]));
      },
      clearAllItems  (state) {
        localStorage.clear();
        state.todoItems = [];
      }
};

export default{
    state,
    getters,
    mutations
}