const arrData = [];
storeData();
function storeData() {
    let tableData = '';
    
    for(let i = 0; i < arrData.length; i++) {
        const todo = arrData[i];
        let htmlElement = document.querySelector(".thisTH").innerHTML = todo;;
        // tableData += htmlElement;

        // document.querySelector('.thisTH').innerHTML = todo;
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
