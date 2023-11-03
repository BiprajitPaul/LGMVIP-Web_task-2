let result = document.querySelector('#result');
function display(number){
    result.value += number;
}
function calculate(){
    let final_number = result.value;
    let final_result = eval(final_number);
    result.value = final_result;
}
function clearScreen(){
    result.value = "";
    document.querySelector('.outline').style.backgroundImage = "none";
}
function delet(){
    result.value = result.value.slice(0,-1);
    document.querySelector('.outline').style.backgroundImage = "none";

}
const alrt = document.querySelector(".alrt");
document.querySelector('#cheak').addEventListener('click' , ()=>{
    alrt.style.display = "block";
    setTimeout(() => {
        alrt.style.display = "none";
    }, 2000);
    
});
document.querySelector(".prfpic").addEventListener('click' , ()=>{
    document.location.href = 'http://www.google.com';
});
