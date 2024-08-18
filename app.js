const arrData = JSON.parse(localStorage.getItem('todos')) || [];
console.log(arrData);
storeData();
function storeData() {
    let tableData = '';
    
    for(let i = 0; i < arrData.length; i++) {
        const todo = arrData[i];
        const { data, date, isDone } = todo;

        let htmlElement = `
            <table>
                <tr>
                    <td class="${isDone ? 'line-through text-gray-500': ''}">
                        ${data} ${date}
                        <button class="done" onclick="doneData(${i})">Done</button>
                        <button class="remove" onclick="removeData(${i});
                        ">
                             <svg class="  text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>                          
                        </button>
                    </td>
                </tr>
            </table>`;
        tableData += htmlElement;
    }

        const tableContainer = document.querySelector('.tableData');
        tableContainer.innerHTML = tableData

        if(arrData.length > 5) {
            tableContainer.style.height = "200px"
            tableContainer.style.overflowY = "scroll";
        } else {
            tableContainer.style.height = 'auto';
            tableContainer.style.overflowY = 'unset';
        }
        localStorage.setItem('todos', JSON.stringify(arrData));
}

function addTodo() {
    let inputElement = document.querySelector(".inputfield");
    let dateElement = document.querySelector(".date");

    const data = inputElement.value;
    const date = dateElement.value;
    

    if(data && date) {
        arrData.push({
            data,
            date,
            isDone: false
        });
        inputElement.value = "";
        dateElement.value = "";
        storeData();
    } else {
        alert("Empty input field or date!");
    }
    console.log(arrData);
}

function doneData(index) {
    arrData[index].isDone = !arrData[index].isDone;
    
    storeData();
}

function removeData(index) {
    arrData.splice(index, 1);
    storeData();
}
