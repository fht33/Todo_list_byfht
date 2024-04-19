#! /usr/bin/env node
import inquirer from "inquirer";
let todos:string[] = []
let condition = true;

//Message/Welcome To todolist(bucket) app
console.log("Welcome! to your own todo list application");

while(condition) {
let todoOptions = await inquirer.prompt({
    name: "option",
    type: "list",
    message:"Select Your Option for todo list to perform",
    choices:["Add","Read","Update","Delete"]
})

    if(todoOptions.option === "Add") {
       let add = await inquirer.prompt({
        name: "additems",
        type: "input",
        message:"Add whatever you want to save in your todo list"
       })
       todos.push(add.additems)
       console.log(todos)
}

if(todoOptions.option === "Read"){
    console.log(todos)
}

if(todoOptions.option === "Update"){
    let update = await inquirer.prompt({
        type:"list",
        name:"updatelist",
        message:"Do you want to update your list? Add items!",
        choices:todos

    })
    let updated = await inquirer.prompt({
        type:"input",
        name:"updatemore",
        message:"Update more things",
    })
    let newtodos = todos.filter(value => value != update.updatelist)
    todos = [...newtodos,updated.updatemore]
}
if(todoOptions.option === "Delete"){
    let remove = await  inquirer.prompt({
        name:"deletethings",
        type:"list",
        message:"What you want to remove from your todo list? Select: ",
        choices: todos.map(item => item)
    })
    let newtodos = todos.filter(value => value != remove.deletethings)
    todos = [...newtodos]
    console.log(todos)
}
let task = await inquirer.prompt({
    name:"moretask",
    type:"confirm",
    message:"Do you want to add more things in your todo list?",
    default:"false",
});
condition = task.moretask
}
console.log("Your Todos: ",todos)
