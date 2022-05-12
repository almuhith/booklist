
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const button = document.querySelector('#button');
const addlist = document.querySelector('#table-list')
const action = document.querySelector('#remove')

button.addEventListener('click', (e)=> {
    e.preventDefault()
    if(title.value == '' || author.value == '' || year.value == '') {
        alert('Please Enter the value!')
    }else{
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        const closeX = document.createElement('td');
        const button = document.createElement('button');
        button.setAttribute('id', 'btn');
        button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        closeX.appendChild(button);
        newRow.appendChild(closeX);
        

        addlist.appendChild(newRow);


        closeX.addEventListener('click', () => {
            closeX.parentElement.style.display = 'none';
        })
    }
})


