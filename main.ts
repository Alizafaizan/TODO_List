#!/usr/bin/env node
import inquirer from "inquirer";

let todayTask: string[] = ["Aliza", "Faizan", "Faiz", "Rimsha"];
 let condition = true;
async function createTodo(todayTask: string[]) {
  do {
    let ans = await inquirer.prompt({
      name: "select",
      type: "list",
      message: " select an operation",
      choices: ["Add", "update", "view", "delete"],
    });
    if (ans.select == "Add") {
      let addTodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list",
        name: "todo",
      });
      todayTask.push(addTodo.todo);
      todayTask.forEach((todo) => console.log(todo));
      // console.log(todayTask);
    }
    if (ans.select == "update") {
      let uupdateTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name: "todo",
        choices: todayTask.map((item) => item),
      });
      let addTodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list",
        name: "todo",
      });
      let newTodo = todayTask.filter((val) => val != uupdateTodo.todo);
      todayTask = [...newTodo, addTodo.todo];
      console.log(todayTask);
    }
    if (ans.select == "view") {
      console.log("\t***TO DO LIST***");
      console.log(todayTask);
      console.log("\t**************");
    }
    if (ans.select == "delete") {
      let deleteTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name: "todo",
        choices: todayTask.map((item) => item),
      });
      let newTodo = todayTask.filter((val) => val != deleteTodo.todo);
      todayTask = [...newTodo];
      console.log(todayTask);
    }
  } while (true);
}
createTodo(todayTask);
if(todayTask.length > 0){
    console.log(`List of TODO's ${todayTask}`);
}
