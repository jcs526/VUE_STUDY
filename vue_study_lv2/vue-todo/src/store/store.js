import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

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
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state){
            return state.todoItems;
        }
    },
    mutations: {
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
            localStorage.removeItem(state.todoItems[index].item);
            localStorage.setItem(state.todoItems[index].item, JSON.stringify(state.todoItems[index]));
          },
          clearAllItems  (state) {
            localStorage.clear();
            state.todoItems = [];
          }
    },

})