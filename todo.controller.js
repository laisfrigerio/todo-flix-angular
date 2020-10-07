(function() {
    "use strict";

    // Modulo
    angular.module("todo-list", []);

    // Controller
    angular.module("todo-list")
        .controller("todo-controller", todoController);

    todoController.$inject = ['$scope'];

    function todoController() {
        var todoList = this;

        todoList.todos = [
            { task: 'Todo one', done: false },
            { task: 'Todo two', done: true },
            { task: 'Todo three', done: true },
            { task: 'Todo four', done: false },
            { task: 'Todo five', done: false }
        ];

        todoList.quantityPedding = 3;
        todoList.task = "";

        todoList.add = add;
        todoList.check = check;
        todoList.pedding = pedding;
        todoList.remove = remove;

        function add() {
            todoList.todos.push({
                task: todoList.task,
                done: false
            });
            todoList.task = "";
            checkPeddingTodos();
        }

        function check(index) {
            todoList.todos = todoList.todos.map((item, key) => {
                if (index === key) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                
                return item;
            });
            checkPeddingTodos();
        }

        function checkPeddingTodos() {
            todoList.quantityPedding = todoList.todos.filter((item) => !item.done).length;
        }

        function pedding() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                if (!todo.done) count++;
            });
            return count;
        }

        function remove(index) {
            console.log(`index ${index}`);
            todoList.todos = todoList.todos.filter((item, key) => index !== key);
            checkPeddingTodos();
        }
    }
})();