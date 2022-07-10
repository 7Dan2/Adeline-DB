let getSendButton = document.querySelector("#btn_send");

getSendButton.addEventListener("click", getDatas);

function getDatas()
{
    // document.getElementById("C1_30_1_manual").value
    // document.getElementById("C1_30_1_pneumatik").value
    // document.getElementById("C1_30_2_manual").value
    // document.getElementById("C1_30_2_pneumatik").value
    // document.getElementById("C3_20_manual").value
    // document.getElementById("C3_20_electronik").value
    // document.getElementById("C4_60_pneumatik").value
    // document.getElementById("C4_60_electronik").value
    // document.getElementById("C5_V_40_pneumatik").value

    let datasArray =[{"C1_30_1_manual":C1_30_1_manual.value, 
    "C1_30_1_pneumatik":C1_30_1_pneumatik.value,
    "C1_30_2_manual":C1_30_2_manual.value,
    "C1_30_2_pneumatik":C1_30_2_pneumatik.value,
    "C3_20_manual":C3_20_manual.value,
    "C3_20_electronik":C3_20_electronik.value,
    "C4_60_pneumatik":C4_60_pneumatik.value,
    "C4_60_electronik":C4_60_electronik.value,
    "C5_V_40_pneumatik":C5_V_40_pneumatik.value
    }];

    console.log (datasArray);
}