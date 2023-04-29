const inputText = document.querySelector('.input_text')
const btnAdd = document.querySelector('.btnAdd')
const result = document.querySelector('.result')

// Solution One :
btnAdd.addEventListener('click', () => {
    let value = inputText.value
    
       let item = document.createElement('li')
       item.className = 'item_content'
       item.innerText = `${value}`

       let div = document.createElement('div')
       div.classList.add('icons')
    
       let checked = document.createElement('button')
       checked.className = 'checked'
       checked.innerHTML = '<i class="fa-solid fa-check"></i>'
       div.appendChild(checked)
    
       let btnDelete = document.createElement('button')
       btnDelete.className = 'delete'
       btnDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
       div.appendChild(btnDelete)

       item.appendChild(div)
    
    if(inputText.value === '') {
        alert('Please Insert Item!')
    } else {
       result.appendChild(item)
       inputText.value = ''
    }

    checked.addEventListener('click', () => {
       item.classList.toggle('throught')
    })

    btnDelete.addEventListener('click', (e) => {
       let target = e.currentTarget
       target.parentElement.parentElement.remove()
    })

})


// solution Two : 
/*let dataArray = []

btnAdd.addEventListener('click', () => {
    let value = inputText.value
    if(value === '') {
        alert('Please Insert Item!')
    } else {
        dataArray.push(value)
        AddItem(dataArray)
        inputText.value = ''
    }
})

function AddItem(dataArray) {
        let listeItem = ''
        for(let item of dataArray) {
          listeItem += `<div class="item_content">
              <p class="item">${item}</p>
              <div class="icons">
                <button class="checked" onclick="lineThrought()"><i class="fa-solid fa-check"></i></button>
                <button class="delete" onclick="deleteItem()"><i class="fa-solid fa-trash"></i></button>
              </div>
          </div>`
        }
    
        result.innerHTML = listeItem
}

function lineThrought() {
    document.querySelectorAll('.item_content').forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('throught')
        })
    })
}

function deleteItem() {
    document.querySelectorAll('.item_content').forEach(el => {
        el.addEventListener('click', (e) => {
            e.currentTarget.remove()
            dataArray = []
        })
    })
}*/


