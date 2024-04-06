
/*****************************************Variables***********************************************/ 
let CloseSettingsButton = document.querySelector(".CloseSettingsButton");
let OpenSettingsButton = document.querySelector(".OpenSettingsButton");
let SwitchContainer = document.querySelector(".Switch-Container");

let ModeElement1 = document.querySelector("#Mode-Element-1");
let ModeElement2 = document.querySelector("#Mode-Element-2");
let ModeElement3 = document.querySelector("#Mode-Element-3");
let ModeElement4 = document.querySelector("#Mode-Element-4");
let ModeElement5 = document.querySelector("#Mode-Element-5");

let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let E = document.querySelector("#E");

let TouchAreaLeft = document.querySelector("#Touch-Area-L");
let TouchAreaRight = document.querySelector("#Touch-Area-R");

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
        Settings.style.left = "-51vw";
      }

      function SetZT() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetZT', true);
        xhr.send();
        ModeSettings.style.left = "0%";
        Settings.style.left = "-51vw";
      }

      function SetES() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetES', true);
        xhr.send();
        ModeSettings.style.left = "0%";
        Settings.style.left = "-51vw";
      }

      function SetZS() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetZS', true);
        xhr.send();
        ModeSettings.style.left = "0%";
        Settings.style.left = "-51vw";
      }

      function SetKS() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/SetKS', true);
        xhr.send();
        ModeSettings.style.left = "0%";
        Settings.style.left = "-51vw";
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
      }, 2000);

    
      function UpdateModeText(state) {

        var stateString = String(state);

        document.getElementById('Mode').innerHTML = state;

        if ((stateString === "Einfach-Taster") || (stateString === "Einfach-Schalter") || (stateString === "Kreuzschalter")) {
          A.style.display = "block"; 
          B.style.display = "none"; 
          C.style.display = "none"; 
          D.style.display = "none"; 
          E.style.display = "none"; 
      }
     if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter")) {
        A.style.display = "none"; 
        B.style.display = "block"; 
        C.style.display = "block"; 
        D.style.display = "block"; 
        E.style.display = "block"; 
    }if(stateString === "None"){
        A.style.display = "none"; 
        B.style.display = "none"; 
        C.style.display = "none"; 
        D.style.display = "none"; 
        E.style.display = "none"; 
    }
      }











      
      setInterval(function(state) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            UpdateTouchArea(xhr.responseText);
          }
        };
        xhr.open('GET', '/CheckTouch', true);
        xhr.send();
      }, 2000);


      function UpdateTouchArea(){
       
        var statee = String(state);

        if (((stateString === "Einfach-Taster") || (stateString === "Einfach-Schalter") || (stateString === "Kreuzschalter")) && ((statee === "L0") || (statee === "R0") || (statee === "C0"))) {
            TouchAreaLeft.style.display = "none"; 
            TouchAreaRight.style.display = "none"; 
        }
        if (((stateString === "Einfach-Taster") || (stateString === "Einfach-Schalter") || (stateString === "Kreuzschalter")) && ((statee === "L1") || (statee === "R1") || (statee === "C1"))) {
            TouchAreaLeft.style.display = "block"; 
            TouchAreaRight.style.display = "block"; 
        }
      



        if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter") && ((statee === "L0") || (statee === "R0"))) {
            TouchAreaLeft.style.display = "none"; 
            TouchAreaRight.style.display = "none"; 
        }
        if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter") && ((statee === "L1") || (statee === "R0"))) {
            TouchAreaLeft.style.display = "block"; 
            TouchAreaRight.style.display = "none"; 
        }
      
        if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter") && ((statee === "L0") || (statee === "R1"))) {
            TouchAreaLeft.style.display = "none"; 
            TouchAreaRight.style.display = "block"; 
        }
      
        if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter") && ((statee === "L1") || (statee === "R1"))) {
            TouchAreaLeft.style.display = "block"; 
            TouchAreaRight.style.display = "block"; 
        }
      
      
      }