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

        showdata.innerHTML =
            todo.map((element, index) => {
                return (

                    `<div class="d-flex justify-content-around  bg-light m-2 rounded">
        
        <span  >${index + 1}</span>
        <b     key= ${index} >${element} </b>
        <button  class="btn btn-success m-1" onclick="editTodo(${index})" >Edit</button> <button onclick="deleteItemTodo(${index})" class="btn btn-danger m-1 ">Delete</button>
        </div>`
                )

            })

        
    }
     inputdata = document.querySelector('#input').value = ' ';  
     console.log(todo)

};

let deleteAllTodo = () => {
    todo = [];
    console.log(todo);
    let deletedata = document.getElementById('render');
    deletedata.innerHTML = "<h3 class='text-light bg-danger  p-4  rounded text-center my-4'>NO TODO IN LIST</h3>"


}

let editTodo = (index) => {
    inputdata = document.querySelector('#input');  
 updateTodo = inputdata.value
 todo.splice(index,1,todo(updateTodo))


    

}
  

let deleteItemTodo = (index) => {
    todo.splice(index, 1)
    let showdata = document.getElementById('render');

    showdata.innerHTML = todo.map((element, index) => {
        return (

            `<div class="d-flex justify-content-around  bg-light m-2 rounded">

<span  >${index + 1}</span>
<b     key= ${index} >${element} </b>
<button  class="btn btn-success m-1" onclick="editTodo(${index})" >Edit</button> <button onclick="deleteItemTodo(${index})" class="btn btn-danger m-1 ">Delete</button>
</div>`
        )

    })

}






