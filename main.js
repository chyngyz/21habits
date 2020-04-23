// Open and Close POP-UP WINDOW 
var displayPopUp = function(){
    document.querySelector('.modal_window_background').style.display = 'block';
}
const popupWindow = function(){
    document.querySelector('.button__popup').addEventListener('click', displayPopUp);
};
popupWindow();
