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

let LeftSwitch = document.querySelector("#Left-Switch-Container");
let RightSwitch = document.querySelector("#Right-Switch-Container");

let LeftButton = document.querySelector("#Left-Button-Container");
let RightButton = document.querySelector("#Right-Button-Container");

let CenterSwitch = document.querySelector("#Center-Switch-Container");
let CenterButton = document.querySelector("#Center-Button-Container");
let CenterCross = document.querySelector("#Center-Cross-Container");

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
     else if ((stateString === "Zweifach-Taster") || (stateString === "Zweifach-Schalter")) {
        A.style.display = "none"; 
        B.style.display = "block"; 
        C.style.display = "block"; 
        D.style.display = "block"; 
        E.style.display = "block"; 
        X = 2;
    }else{
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

      let Relay1State = 0;

function UpdateRelay1State(state){
    var stateString = String(state);


    if (stateString === "R10"){
        Relay1State = 0;
    }
    
    if (stateString === "R11"){
        Relay1State = 1;
    }
}

      let count = 0;


  
         

      CenterSwitch.addEventListener("click", Count);

function Count(){
    count++;
     // Check if the count is even or odd
     if (count % 2 === 0) {
        if(Relay1State == 0) {
            SwitchRelay1ON();
            CenterSwitch.style.backgroundColor = "rgba(0, 0, 0, 0)";
           
        }if(Relay1State == 1) {
            SwitchRelay1OFF();
            CenterSwitch.style.backgroundColor = "rgba(0, 0, 255, 0.233)";
        }
        
     }else{
         if(Relay1State == 0) {
            SwitchRelay1ON();
        }if(Relay1State == 1) {
            SwitchRelay1OFF();
        }
     }
     if (count === 3) {
       count = 1;}

}
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
    

    
    
    
      