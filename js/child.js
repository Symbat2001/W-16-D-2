let addbutton = document.getElementById('add-button')
let list = document.getElementById('list-box')
let searchBTN = document.getElementById('search-button')

addbutton.addEventListener('click',function(event) {
    event.preventDefault()
    let toDoItem = document.getElementById('add-text') 
    //    alert(toDoItem.value)
    if (toDoItem.value && toDoItem.value !=null && toDoItem.value !=undefined) {
        let createItem = createItemToDo(toDoItem.value)
        // <div id="list-box">
            // <div>
            //      <p>Úi jumysyn jasaý</p>
            //      <button>óshir</button>
            //</div>
        // </div>
        list.appendChild(createItem)
    }else{
        alert("Siz ToDo task toltyrmadyńyz!")
    }

    toDoItem.value = ''

})

searchBTN.addEventListener('click',function (event) {
    event.preventDefault()
    let searchItem = document.getElementById('search-text')
    let items = list.querySelectorAll('div')
    items.forEach(item=>{
        let pItem = item.querySelector('p').textContent

        if (searchItem.value == '' || searchItem.value == null) {
            item.style.display = 'block'
        }else if (pItem.toLowerCase() == searchItem.value.toLowerCase()) {
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
        
        // console.log("Paragraph manderi: ", pItem);
    })
})



function createItemToDo(newToDoItem) {
    // <div>
    //      <p>Úi jumysyn jasaý</p>
    //      <button>óshir</button>
    //</div>
    let newDiv = document.createElement('div')
    let paragraph = document.createElement('p')
    let deleteButton = document.createElement('button')
    
    newDiv.className = "newDiv"
    deleteButton.textContent = "Óshir"
    paragraph.textContent = newToDoItem

    deleteButton.addEventListener('click',function () {
        list.removeChild(newDiv)
    })

    // úıde aıaqtaý kerek bolġan 
    newDiv.addEventListener('dblclick',event=> {
        let toDoItem = document.getElementById('add-text') 
        toDoItem.value=newDiv.textContent 
        list.removeChild(newDiv)
    })


    newDiv.appendChild(paragraph)
    newDiv.appendChild(deleteButton)

    return newDiv
}