
/*****************************************Variables***********************************************/ 
let CloseSettingsButton = document.querySelector(".CloseSettingsButton");
let OpenSettingsButton = document.querySelector(".OpenSettingsButton");
let SwitchContainer = document.querySelector(".Switch-Container");

let Settings = document.querySelector(".Settings-Container");

let ModeSettings = document.querySelector(".Mode-Settings");
let OpenModeSttings = document.querySelector("#Settings-Element-2");

/*****************************************Detect-Clicks********************************************/ 
OpenSettingsButton.addEventListener("click", OpenSettings);
CloseSettingsButton.addEventListener("click", CloseSettings);

OpenModeSttings.addEventListener("click", OpenModeSettings);

/*****************************************Handle-Settings*****************************************/ 
function OpenSettings(){
    Settings.style.left = "0vw";
    }

function CloseSettings(){
    Settings.style.left = "-51vw";
    ModeSettings.style.left = "0%";
    }

function OpenModeSettings(){
    ModeSettings.style.left = "100%";
    }