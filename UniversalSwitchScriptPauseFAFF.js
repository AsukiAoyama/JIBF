/*****************************************Variables***********************************************/ 
let X = 0;

let XX = 0;
let YY = 0;
let ZZ = 0;

let Acount = 0;
let Bcount = 0;
let Ccount = 0;
let Dcount = 0;

let Relay1State = 0;
let Relay2State = 0;

let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");
let E = document.querySelector("#E");

let ModeElement1 = document.querySelector("#Mode-Element-1");
let ModeElement2 = document.querySelector("#Mode-Element-2");
let ModeElement3 = document.querySelector("#Mode-Element-3");
let ModeElement4 = document.querySelector("#Mode-Element-4");
let ModeElement5 = document.querySelector("#Mode-Element-5");

let TouchAreaLeft = document.querySelector("#Touch-Area-L");
let TouchAreaRight = document.querySelector("#Touch-Area-R");

let Settings = document.querySelector(".Settings-Container");
let ModeSettings = document.querySelector(".Mode-Settings");
let OpenModeSttings = document.querySelector("#Settings-Element-2");

let LeftSwitch = document.querySelector("#Left-Switch-Container"); 
let RightSwitch = document.querySelector("#Right-Switch-Container");

let LeftButton = document.querySelector("#Left-Button-Container");
let RightButton = document.querySelector("#Right-Button-Container");

let CenterSwitch = document.querySelector("#Center-Switch-Container");
let CenterButton = document.querySelector("#Center-Button-Container");
let CenterCross = document.querySelector("#Center-Cross-Container");

let CloseSettingsButton = document.querySelector(".CloseSettingsButton");
let OpenSettingsButton = document.querySelector(".OpenSettingsButton");
let SwitchContainer = document.querySelector(".Switch-Container");

let Touchcounter = 0;

let Melon = 0;

/*****************************************Detect-Clicks********************************************/ 
ModeElement1.addEventListener('click', SetET);
ModeElement2.addEventListener('click', SetZT);
ModeElement3.addEventListener('click', SetES);
ModeElement4.addEventListener('click', SetZS);
ModeElement5.addEventListener('click', SetKS);

CenterSwitch.addEventListener("click", ACount);
CenterCross.addEventListener("click", BCount);
LeftSwitch.addEventListener("click", CCount);
RightSwitch.addEventListener("click", DCount);

OpenModeSttings.addEventListener("click", OpenModeSettings);

OpenSettingsButton.addEventListener("click", OpenSettings);
CloseSettingsButton.addEventListener("click", CloseSettings);

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

/*****************************************Handle-Mode-Settings************************************/ 
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

/*****************************************Check-Mode**********************************************/ 
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

/*****************************************Handle-Mode-Style***************************************/ 
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
     else if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter")) {
        A.style.display = "none"; 
        B.style.display = "block"; 
        C.style.display = "block"; 
        D.style.display = "block"; 
        E.style.display = "block"; 
        X = 2;
        }
    else{
        A.style.display = "none"; 
        B.style.display = "none"; 
        C.style.display = "none"; 
        D.style.display = "none"; 
        E.style.display = "none"; 
        X = 3;
        }


    if(stateString === "Einfach-Taster"){
        LeftSwitch.style.display = "none"; 
        RightSwitch.style.display = "none"; 
        LeftButton.style.display = "none"; 
        RightButton.style.display = "none"; 
        CenterSwitch.style.display = "none"; 
        CenterButton.style.display = "block"; 
        CenterCross.style.display = "none"; 
        }
    else if(stateString === "Einfach-Schalter"){
        LeftSwitch.style.display = "none"; 
        RightSwitch.style.display = "none"; 
        LeftButton.style.display = "none"; 
        RightButton.style.display = "none"; 
        CenterSwitch.style.display = "block"; 
        CenterButton.style.display = "none"; 
        CenterCross.style.display = "none"; 
        }
    else if(stateString === "Zweifach-Taster"){
        LeftSwitch.style.display = "none"; 
        RightSwitch.style.display = "none"; 
        LeftButton.style.display = "block"; 
        RightButton.style.display = "block"; 
        CenterSwitch.style.display = "none"; 
        CenterButton.style.display = "none"; 
        CenterCross.style.display = "none"; 
        }
    else if(stateString === "Zweifach-Schalter"){
        LeftSwitch.style.display = "block"; 
        RightSwitch.style.display = "block"; 
        LeftButton.style.display = "none"; 
        RightButton.style.display = "none"; 
        CenterSwitch.style.display = "none"; 
        CenterButton.style.display = "none"; 
        CenterCross.style.display = "none"; 
        }
    else if(stateString === "Kreuzschalter"){
        LeftSwitch.style.display = "none"; 
        RightSwitch.style.display = "none"; 
        LeftButton.style.display = "none"; 
        RightButton.style.display = "none"; 
        CenterSwitch.style.display = "none"; 
        CenterButton.style.display = "none"; 
        CenterCross.style.display = "block"; 
        }
    else{
        LeftSwitch.style.display = "none"; 
        RightSwitch.style.display = "none"; 
        LeftButton.style.display = "none"; 
        RightButton.style.display = "none"; 
        CenterSwitch.style.display = "none"; 
        CenterButton.style.display = "none"; 
        CenterCross.style.display = "none"; 
        }
      }

/*****************************************Handle-Relay1-State*************************************/ 
setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            UpdateRelay1State(xhr.responseText);
          }
        };
        xhr.open('GET', '/CheckRelay1State', true);
        xhr.send();
      }, 1000);

function UpdateRelay1State(state){

    var stateString = String(state);

    if (stateString === "R10"){
        Relay1State = 0;
        }

    if (stateString === "R11"){
        Relay1State = 1;
        }

    if(Relay1State == 1){
        CenterSwitch.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
        LeftSwitch.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
        LeftButton.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
        CenterButton.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
    }else{
        CenterSwitch.style.backgroundColor = "transparent";
        LeftSwitch.style.backgroundColor = "transparent";
        LeftButton.style.backgroundColor = "transparent";
        CenterButton.style.backgroundColor = "transparent";
    }  
}

/*****************************************Handle-Relay2-State*************************************/ 
setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            UpdateRelay2State(xhr.responseText);
         }
        };
    xhr.open('GET', '/CheckRelay2State', true);
    xhr.send();
  }, 1000);


function UpdateRelay2State(state){

var stateString = String(state);

if (stateString === "R20"){
    Relay2State = 0;
    }

if (stateString === "R21"){
    Relay2State = 1;
    }

    if(Relay2State == 1){
        RightButton.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
        RightSwitch.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
        CenterCross.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
    }
    if(Relay2State == 0){
        RightButton.style.backgroundColor = "transparent";
        RightSwitch.style.backgroundColor = "transparent";
        CenterCross.style.backgroundColor = "transparent";
    } 
}

/*****************************************Count-Relay1*******************************************/ 
function ACount(){
    Acount++;
 
     if (Acount % 2 === 0) {
        if(Relay1State == 0) {
            SwitchRelay1ON(); 
            }
        if(Relay1State == 1) {
            SwitchRelay1OFF(); 
            }
        }

        else{
         if(Relay1State == 0) {
            SwitchRelay1ON(); 
            }
        if(Relay1State == 1) {
            SwitchRelay1OFF(); 
            }
        }

        if (Acount === 3) {
            Acount = 1;
        }
}


function CCount(){
    Ccount++;
     
     if (Ccount % 2 === 0) {
        if(Relay1State == 0) {
            SwitchRelay1ON();   
        }
        
        if(Relay1State == 1) {
            SwitchRelay1OFF(); 
        }   
      } 

     else{
         if(Relay1State == 0) {
            SwitchRelay1ON(); 
            }

        if(Relay1State == 1) {
            SwitchRelay1OFF(); 
            }
        }

     if (Ccount === 3) {
        Ccount = 1;
    }
}

/*****************************************Count-Relay2*******************************************/ 
function DCount(){
    Dcount++;
     
     if (Dcount % 2 === 0) {
        if(Relay2State == 0) {
            SwitchRelay2ON();
        }
        
        if(Relay2State == 1) {
            SwitchRelay2OFF();
        }
    }
     
     else{
         if(Relay2State == 0) {
            SwitchRelay2ON();
        }
    
        if(Relay2State == 1) {
            SwitchRelay2OFF();
        }
     }

     if (Dcount === 3) {
        Dcount = 1;
    }
}

/*****************************************Count-Cross-Relays****************************************/ 
function BCount(){
    Bcount++;
    
     if (Bcount % 2 === 0) {
        if((Relay1State == 0) && (Relay2State == 0)) {
            SwitchRelay1ON();
            SwitchRelay2ON();
        }
        
        if((Relay1State == 1) && (Relay2State == 1)) {
            SwitchRelay1OFF();
            SwitchRelay2OFF();
        }
        
     }
     
     else{
         if((Relay1State == 0) && (Relay2State == 0)) {
            SwitchRelay1ON();
            SwitchRelay2ON();
        }if((Relay1State == 1) && (Relay2State == 1)) {
            SwitchRelay1OFF();
            SwitchRelay2OFF();
        }
     }

     if (Bcount === 3) {
        Bcount = 1;
    }
}

/*****************************************Switch-Relay1*******************************************/ 
function SwitchRelay1ON() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/SwitchRelay1ON', true);
    xhr.send();
}

function SwitchRelay1OFF() {
var xhr = new XMLHttpRequest();
xhr.open('GET', '/SwitchRelay1OFF', true);
xhr.send();
}


/*****************************************Switch-Relay2*******************************************/ 
function SwitchRelay2ON() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/SwitchRelay2ON', true);
    xhr.send();
}

function SwitchRelay2OFF() {
var xhr = new XMLHttpRequest();
xhr.open('GET', '/SwitchRelay2OFF', true);
xhr.send();
}
    
    
setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            UpdateTouchLayoutC(xhr.responseText);
          }
        };
        xhr.open('GET', '/CheckTouchC', true);
        xhr.send();
      }, 1000);

      setInterval(function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
              if (xhr.readyState == 4 && xhr.status == 200) {
                UpdateTouchLayoutL(xhr.responseText);
              }
            };
            xhr.open('GET', '/CheckTouchL', true);
            xhr.send();
          }, 1000);


          setInterval(function() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                  if (xhr.readyState == 4 && xhr.status == 200) {
                    UpdateTouchLayoutR(xhr.responseText);
                  }
                };
                xhr.open('GET', '/CheckTouchR', true);
                xhr.send();
              }, 1000);





      function UpdateTouchLayoutC(state){
        var stateString = String(state);

        if(stateString === "CT1" ){
       XX = 1;
       Apple();
         
           }
           if(stateString === "CT0"){
            XX = 0;Apple();
           }
          
        }

        function UpdateTouchLayoutL(state){
            var stateString = String(state);
    
            if(stateString === "LT1" ){
             YY = 1;Apple();
             
               }
               if(stateString === "LT0"){
                YY = 0;Apple();
               }
              
            }

            function UpdateTouchLayoutR(state){
                var stateString = String(state);
        
                if(stateString === "RT1" ){
                    
                    ZZ = 1;Apple();
                   }
                   if(stateString === "RT0"){
                    ZZ = 0;Apple();
                   }
                  
                }

                function Apple(){
                    if(((X === 1) && (XX == 1))  || ((X === 1) && (YY == 1)) || ((X === 1) && (ZZ == 1))){
                 TouchAreaLeft.style.display = "block";
                    TouchAreaRight.style.display = "block";
                    }
                   else if (((X === 2) && (XX == 1))){
                    TouchAreaLeft.style.display = "block"; 
                   }
                   else if(((X === 2) && (ZZ == 1))){
                
                    TouchAreaRight.style.display = "block";
                   }
                   else if(((X === 2) && (ZZ == 1)) && ((X === 2) && (XX == 1))){
                    TouchAreaLeft.style.display = "block";
                    TouchAreaRight.style.display = "block";
                   }
                   else{
                    TouchAreaLeft.style.display = "none";
                    TouchAreaRight.style.display = "none";
                   }

                }

                document.querySelector('#Center-Button-Container').addEventListener('mousedown', Buttonon);
                document.querySelector('#Center-Button-Container').addEventListener('mouseup', Buttonoff);
                document.querySelector('#Center-Button-Container').addEventListener('touchstart', Buttonon);
                document.querySelector('#Center-Button-Container').addEventListener('touchend', Buttonoff);
        
                function Buttonon(){
                   Touchcounter++;
                    OPO();
                }
        
                
                function Buttonoff(){
                    Touchcounter = 0;
                    OPO();
                }

       function OPO(){
        if(Touchcounter > 1){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/on', true);
            xhr.send();
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/off', true);
            xhr.send();
        }
       }
               
                


              