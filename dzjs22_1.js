'use strict';

function enterMessege() {
    let inputName = document.getElementById('inputName');
    inputName = inputName.value;
    let inputMessege = document.getElementById('inputMessege');
    inputMessege = inputMessege.value;
    let newBlock = document.getElementById('divMessege');
    newBlock.innerHTML += `<div class="Child1">
    <p>${inputName}</p> 
 <p> ${inputMessege}</p></div>
</div>`
    reset();
}
function reset() {
    inputName.value = '';
    inputMessege.value = '';
}
