
const test_button = document.getElementById ("test");

test_button.addEventListener('click', runTest);

function runTest() {
    alert("Open " + test_button.getAttribute ("alt"));
    
}