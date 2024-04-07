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

let X = 0;


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
      }, 1000);

    
      function UpdateModeText(state) {

        var stateString = String(state);

        document.getElementById('Mode').innerHTML = state;

        if ((stateString === "Einfach-Taster") || (stateString === "Einfach-Schalter") || (stateString === "Kreuzschalter")) {
          A.style.display = "block"; 
          B.style.display = "none"; 
          C.style.display = "none"; 
          D.style.display = "none"; 
          E.style.display = "none"; 
           X = 1;
      }
     if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter")) {
        A.style.display = "none"; 
        B.style.display = "block"; 
        C.style.display = "block"; 
        D.style.display = "block"; 
        E.style.display = "block"; 
        X = 2;
    }if(stateString === "Kein Modus wurde gewählt"){
        A.style.display = "none"; 
        B.style.display = "none"; 
        C.style.display = "none"; 
        D.style.display = "none"; 
        E.style.display = "none"; 
        X = 3;
    }
      }





        
   
   

      setInterval(function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            UpdateTouchAreaL(xhr.responseText);
          }
        };
        xhr.open('GET', '/CheckTouchL', true);
        xhr.send();
      }, 1000);


      function UpdateTouchAreaL(state){
        var statee = String(state);
     
       
        if (X === 1 && (statee === "CLR100" || statee === "CLR010" || statee === "CLR001" || statee === "CLR110" || statee === "CLR011" || statee === "CLR101" || statee === "CLR111")) {
            TouchAreaLeft.style.display = "block";
            TouchAreaRight.style.display = "block";
        } else {
            TouchAreaLeft.style.display = "none";
            TouchAreaRight.style.display = "none";
        }

        if (X === 2 && (statee === "CLR010" || statee === "CLR011" || statee === "CLR110" || statee === "CLR111")) {
            TouchAreaLeft.style.display = "block";
        } else {
            TouchAreaLeft.style.display = "none";
        }
        if (X === 2 && (statee === "CLR001" || statee === "CLR011" || statee === "CLR101" || statee === "CLR111")) {
            TouchAreaRight.style.display = "block";
        } else {
            TouchAreaRight.style.display = "none";
        }
      }