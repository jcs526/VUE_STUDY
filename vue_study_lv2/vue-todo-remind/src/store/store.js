import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function fetch(){
    const arr= [];
    if (localStorage.length > 0) {
        for (let i = 0; i<localStorage.length; i++){
            arr.push(JSON.parse(localStorage[localStorage.key(i)]))
        }
    }
    console.log(arr)
    return arr;
}

export const store = new Vuex.Store({
    state: {
        todoItems: fetch(),
        headerText : "To do Item It!!"
    },
    mutations: {
        addTodoItem(state, newTodoItem) {
            const obj ={completed : false, item : newTodoItem}
            localStorage.setItem(newTodoItem, JSON.stringify(obj));
            state.todoItems.push(obj)
        },
        removeTodoItem(state,{todoItem,index}){
            localStorage.removeItem(todoItem.item);
            state.todoItems.splice(index,1);
        },
        clearAllItems(state){
            localStorage.clear();
            state.todoItems=[];
        },
        toggleCompleted(state,{todoItem}){
            todoItem.completed = !todoItem.completed
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
        }
    }
});