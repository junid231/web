function onClickCreateButton(){
    const titleInputElement = document.querySelector('#input-title');

    console.log(titleInputElement.value);
    const todoListElement = document.querySelector('.todo-list');
    const item = createTodoItem(titleInputElement.value);
    todoListElement.appendChild(item);
    titleInputElement.value = '';
}

function createTodoItem(title){
    const item = document.createElement('div');
    item.className = 'item';

    const titleElement = document.createElement('div');
    const removeElement = document.createElement('div');

    titleElement.innerText = title;

    titleElement.className = 'title';
    removeElement.className = 'remove';


    item.appendChild(titleElement);
    item.appendChild(removeElement);

    removeElement.addEventListener('click', function(){item.remove();})

    // const properties = {
    //     priority: false
    // }

/*     item.addEventListener('dblclick', function(){
        console.log('chek');
        const r = Math.floor(Math.random()*255);
        const g = Math.floor(Math.random()*255);
        const b = Math.floor(Math.random()*255);
        console.log(`${r}, ${g}, ${b}`);
        item.style.backgrounColor = `rgb(${r}, ${g}, ${b})`;

    }) */
    item.addEventListener('dblclick',function(){

        const r= Math.floor(Math.random()*255);
        const g= Math.floor(Math.random()*255);
        const b= Math.floor(Math.random()*255);
        item.style.backgroundColor= `rgb(${r},${g},${b})`;

    })

    return item;
}

function createRemoveButton(item){

}