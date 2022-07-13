const getButtonArea =  document.querySelector("#fiveButtonsArea");

getButtonArea.addEventListener("click", raiseTheBArUp);

function raiseTheBArUp()
{
    getButtonArea.classList.toggle("raiseButtonsArea");
}