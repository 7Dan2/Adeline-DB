let getLogButton = document.querySelector("#btn_log");

getLogButton.addEventListener("click", displayLog);

function displayLog()
{
    const requestUrl = "./JSON/db.json";
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {

    datas = JSON.parse(xhttp.responseText);
    datasDisplay = "";

    // document.getElementById("message").innerHTML = datas;

    var myDataLength = datas.datas.length;
    const h = document.createElement("h3");
    h.innerText = myDataLength + " " + "entrées enregistrées";
    document.getElementById("message").appendChild(h);

    for (i in datas.datas)
    {
        datasDisplay += "<table>"
        datasDisplay += "<th>" + "Id" + "</th>";
        datasDisplay += "<th>" + "Date" + "</th>";
        datasDisplay += "<th>" + "C1_30_1_manual" +"</th>"; 
        datasDisplay += "<th>" + "C1_30_1_pneumatik" +"</th>"; 
        datasDisplay += "<th>" + "C2_30_2_manual" +"</th>"; 
        datasDisplay += "<th>" + "C2_30_2_pneumatik" +"</th>"; 
        datasDisplay += "<th>" + "C3_20_manual" +"</th>"; 
        datasDisplay += "<th>" + "C3_20_electronik" +"</th>"; 
        datasDisplay += "<th>" + "C4_60_pneumatik" +"</th>"; 
        datasDisplay += "<th>" + "C4_60_electronik" +"</th>"; 
        datasDisplay += "<th>" + "C5_V_40_pneumatik" +"</th>"; 
           
           
            

        datasDisplay += "<tr><td>" + datas.datas[i].id;
        datasDisplay += "</td></tr>" + datas.datas[i].date;
        datasDisplay += "</table>"

    }

    document.getElementById("datasArea").innerHTML = datasDisplay;

    console.log(datas.datas)
    }
    xhttp.open("GET", requestUrl, true);
    xhttp.send();
    
    // if(log)
    // {
    //     const text = "Pas de log à afficher"
    //     const h = document.createElement("h3");
    //     h.innerText = myDataLength;
    //     document.getElementById("message").appendChild(h);
    // }
   
    
}
// Autre approche

//Données
const datas = 
	[
	{"":"", "id": 1, "name": "tata", "surname": "yoyo", "birthday": "13-09-1999"},
	{"":"", "id": 2, "name": "Castafiore", "surname": "bIanca", "birthday": "25-12-1959"},
		{"":"", "id": 3, "name": "Hagen", "surname": "Nina", "birthday": "01-04-1969"}
	];

let table = document.querySelector("table");
let data = Object.keys(datas[1]);

//Création des en-têtes (TH)
function generateTableHead(table)
{
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) 
    {
        let th = document.createElement("th");
		
		let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
	}
}

//Création de la table
function generateTable(table, data)
{
	//Pour chaque groupe de données
    for (let element of data)
    {
		//Ajout d'une ligne (TR)
		let row = table.insertRow();
		row.setAttribute("class", "testRow");
		
		//Création de la case à cocher
		var check = document.createElement("INPUT");
		check.setAttribute("type", "checkbox");

		//Itération dans les valeurs
		for (key in element)
        {
			//Pour chaque ligne, insertion des cellules
			let cell = row.insertCell();
			cell.setAttribute("class", "testCell");
			
			
			
			//Et de la case à cocher
			//let cellForCheckBox = row.insertCell();
			//cellForCheckBox.appendChild(check);
			
			//Insertion des valeurs dans les cellules
			let text = document.createTextNode(element[key]);
	
			cell.appendChild(text);
			
        }
    }
}




//Auto appel des fonctions
generateTableHead(table);
generateTable(table, datas);
