let getSendButton = document.querySelector("#btn_send");

getSendButton.addEventListener("click", getDatas);

function getDatas()
{
    // let datasArrayJson = 
    // {
    //     "C1_30_1_manual": C1_30_1_manual.value, 
    //     "C1_30_1_pneumatik":C1_30_1_pneumatik.value,
    //     "C2_30_2_manual":C2_30_2_manual.value,
    //     "C2_30_2_pneumatik":C2_30_2_pneumatik.value,
    //     "C3_20_manual":C3_20_manual.value,
    //     "C3_20_electronik":C3_20_electronik.value,
    //     "C4_60_pneumatik":C4_60_pneumatik.value,
    //     "C4_60_electronik":C4_60_electronik.value,
    //     "C5_V_40_pneumatik":C5_V_40_pneumatik.value,
    //     "user":C5_V_40_electronik.value
    // }

    let datasArray = ["C1_30_1_manual :",C1_30_1_manual.value, 
    "C1_30_1_pneumatik :",C1_30_1_pneumatik.value,
    "C2_30_2_manual :",C2_30_2_manual.value,
    "C2_30_2_pneumatik :",C2_30_2_pneumatik.value,
    "C3_20_manual :",C3_20_manual.value,
    "C3_20_electronik :",C3_20_electronik.value,
    "C4_60_pneumatik :",C4_60_pneumatik.value,
    "C4_60_electronik :",C4_60_electronik.value,
    "C5_V_40_pneumatik :",C5_V_40_pneumatik.value,
    "user :",C5_V_40_electronik.value
    ];

    
    let uri = "mailto:unic.norton@gmail.com?&subject=";
    let date = new Date();
    let subject = "Releves" + " " + date.getDate() + (date.getMonth()+1) + date.getFullYear();
    // let email = "unic.norton@gmail.com?";
        // uri += encodeURIComponent(email);
        uri += "&subject="
        uri += encodeURIComponent(subject);
        uri += "&body=";
        uri += encodeURIComponent(datasArray);
        window.open(uri);

        // console.log (datas);
}              