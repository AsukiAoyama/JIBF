
/*****************************************Variables***********************************************/ 
let CloseSettingsButton = document.querySelector(".CloseSettingsButton");
let OpenSettingsButton = document.querySelector(".OpenSettingsButton");
let SwitchContainer = document.querySelector(".Switch-Container");

let ModeElement1 = document.querySelector("#Mode-Element-1");
let ModeElement2 = document.querySelector("#Mode-Element-2");
let ModeElement3 = document.querySelector("#Mode-Element-3");
let ModeElement4 = document.querySelector("#Mode-Element-4");
let ModeElement5 = document.querySelector("#Mode-Element-5");

let Settings = document.querySelector(".Settings-Container");

let ModeSettings = document.querySelector(".Mode-Settings");
let OpenModeSttings = document.querySelector("#Settings-Element-2");

/*****************************************Detect-Clicks********************************************/ 
OpenSettingsButton.addEventListener("click", OpenSettings);
CloseSettingsButton.addEventListener("click", CloseSettings);

OpenModeSttings.addEventListener("click", OpenModeSettings);



ModeElement1.addEventListener('click', SetET);
ModeElement2.addEventListener('click', SetZT);
ModeElement3.addEventListener('click', SetES);
ModeElement4.addEventListener('click', SetZS);
ModeElement5.addEventListener('click', SetKS);

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

    function SetET() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetET', true);
        xhr.send();
        ModeSettings.style.left = "0%";
      }

      function SetZT() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetZT', true);
        xhr.send();
        ModeSettings.style.left = "0%";
      }

      function SetES() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetES', true);
        xhr.send();
        ModeSettings.style.left = "0%";
      }

      function SetZS() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetZS', true);
        xhr.send();
        ModeSettings.style.left = "0%";
      }

      function SetKS() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetKS', true);
        xhr.send();
        ModeSettings.style.left = "0%";
      }

      setInterval(function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            UpdateModeText(xhr.responseText);
          }
        };
        xhr.open('GET', '/CheckMode', true);
        xhr.send();
      }, 200);
    
      function UpdateModeText(state) {
        document.getElementById('Mode').innerHTML = state;
      }