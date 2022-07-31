const getAllInput = document.querySelectorAll(".input");

const getSendBtn = document.querySelector("#btn_send");

getSendBtn.addEventListener("click", searchEmptyField);

function searchEmptyField()
{
    for (i = 0 ; i < getAllInput.length ; i ++)
    {
        if( getAllInput[i] = "")
        {
            alert("un champ est vide" + " " + getAllInput.length)
        }
    }
}


// console.log("All inputs : " + " " + getAllInput);