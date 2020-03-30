import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => { 
    new Vue({
        el: '#app',
        data: {
            todo: [{
                name: "Beef",
                priority: "normal"},
                 {
                     name:"Pasta",
                    priority: "high"}],
            newTodo: "",
            newPriority: ""
        },

        methods: {
            saveNewTodo: function(){
                this.todo.push({
                    name: this.newTodo,
                    priority: this.newPriority})
                this.newTodo = "";
                
            }
         }
    })
})