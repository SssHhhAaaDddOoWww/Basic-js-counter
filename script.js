let count = 0;
function increase(){
    count += 1;
document.getElementById('zero').innerHTML =  count;
}
function decrease(){
    count -= 1;
    document.getElementById('zero').innerHTML =  count;
}
function reset(){
    count  = 0;
    document.getElementById('zero').innerHTML =  count;
}