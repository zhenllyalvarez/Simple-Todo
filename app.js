const arrData = [];
storeData();
function storeData() {
    let tableData = '';
    
    for(let i = 0; i < arrData.length; i++) {
        const todo = arrData[i];
        let htmlElement = `
            <table>
                <tr>
                    <td>
                        ${todo}
                        <button class="done">Done</button>
                        <button class="remove">
                             <svg class="  text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>                          
                        </button>
                    </td>
                </tr>
            </table>`
        tableData += htmlElement;

        document.querySelector('.tableData').innerHTML = tableData;
        console.log(htmlElement);
    }

}

function addTodo() {
    let inputElement = document.querySelector(".inputfield");

    const data = inputElement.value;

    if(data) {
        arrData.push(data);
        storeData();
        inputElement.value = "";
    } else {
        alert("Empty input field!");
    }
    console.log(arrData);

}
