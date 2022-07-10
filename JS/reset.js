let getResetButton = document.querySelector("#btn_reset");

getResetButton.addEventListener("click", clearAllDatas);

function clearAllDatas()
{
    let getInput = document.querySelectorAll(".input");

    for(i = 0 ; i < getInput.length ; i++)
    {
        getInput[i].value = "";
    }
};