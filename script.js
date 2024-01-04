const form = document.querySelector('form');
const emptyDiv = document.querySelector('.empty');
let Count = 0;
const todoSpanCount = document.getElementById('main-row12');
// Create the new div
const newDiv = document.createElement('div');
newDiv.className = "main-row13"; // always above the main-row12
newDiv.style.display = 'flex';
newDiv.style.flexDirection = 'column';
newDiv.style.alignItems = 'center';
newDiv.style.justifyContent = 'space-between';
newDiv.style.overflowY = 'auto';
newDiv.style.maxHeight = '300px';

const mainRow2 = document.querySelector('.main-row2');
const mainRow21 = document.querySelector('.main-row21');

// Insert newDiv before mainRow21
mainRow2.insertBefore(newDiv, mainRow21);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementsByClassName('e1')[0];
    const inputValue = input.value.trim();

    if (inputValue !== '') {
        emptyDiv.style.display = 'none';
        createTodoElement(inputValue); // create a new div
        Count++; // Incrementing the Todo count
        todoSpanCount.innerText = Count;
    }
    // Clear the input field
    input.value = '';
});

function createTodoElement(todoText) {
    const childDiv1 = document.createElement('div');
    childDiv1.className="childEle";
    const pTag = document.createElement('p');
    pTag.innerText = todoText;

    pTag.style.fontFamily = 'inter';
    pTag.style.fontSize = '18px';
    pTag.style.color = 'white';
    pTag.style.fontWeight = '500';
    pTag.style.textAlign = 'left';
    pTag.style.margin = '0px';

    childDiv1.style.width = '400px';
    childDiv1.style.marginBlock = '3.4px';
    childDiv1.style.border = '1px solid rgba(51, 51, 51, 1)';
    childDiv1.style.borderRadius = '5px';
    childDiv1.style.padding = '10px';
    childDiv1.style.backgroundColor = '#262626';
    childDiv1.style.display = 'flex';
    childDiv1.style.justifyContent = 'space-between';
    childDiv1.style.alignItems = 'center';

    childDiv1.appendChild(pTag);

    const deleteButton = document.createElement('button');
    deleteButton.style.backgroundColor = 'transparent';
    deleteButton.style.border = 'none';
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  
    childDiv1.appendChild(deleteButton);


    deleteButton.addEventListener('click', () => {
        childDiv1.remove(); // Corrected from childDiv.remove() to childDiv1.remove()
        Count--;
        todoSpanCount.innerText = Count;
        saveTodosToLocalStorage();
    });
    
    
   
}