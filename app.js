//alert("hello world")
let todo = [];
let addtodo = () => {

    let inputdata = document.querySelector('#input');
    let showdata = document.getElementById('render');
    if (inputdata.value === "") {
        alert("Enter SomeThing in Input Field")
    }
    else {
        inputdata = inputdata.value
        todo.push(inputdata)
        console.log(todo);

        showdata.innerHTML =
            todo.map((element, index) => {
                return (

                    `<div class="d-flex justify-content-around  bg-light m-2 rounded">
        
        <span  >${index + 1}</span>
        <b     key= ${index} >${element} </b>
        <button  class="btn btn-success m-1" >Edit</button> <button onclick="deleteIndexTodo(e)" class="btn btn-danger m-1 ">Delete</button>
        </div>`
                )
                
            })
            
inputdata.value = " ";            
    }


}

let deleteAllTodo = () => {
    todo = [];
    console.log(todo);
    let deletedata = document.getElementById('render');
    deletedata.innerHTML = "<h3 class='text-light bg-danger  p-4  rounded text-center my-4'>NO TODO IN LIST</h3>"


}