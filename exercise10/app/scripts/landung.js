
function simulation() {

    var v = -10;
    var s = 700;
    var fuel = 1000;
    var schub = false;

    function switchOn() {
        schub = true;
        update();
    }

    function switchOff() {
        schub = false;
        update();
    }

    function a() {
        if (schub === false || fuel <= 0)
            return -1.63;
        else {
            fuel = fuel -100;
            return  10.37;
        }
    }

    function update (){
        v = v + a();
        s = s + v;
        $("#height").html("Höhe: " + s + "m");
        $("#speed").html("Geschwindigkeit: " + v + "m/s");
        $("#fuel").html("Treibstoffvorrat: " + fuel + " l");
        checkGameOver()
    }

    function checkGameOver() {
        if (s <= 0)
            if (v<= 80 && v>= -80)
                return alert("Hast du gut gemacht, du darfst jetzt ins Wochenende!");
            else {
                return alert("Gehe ins Gefängnis");
            }
        
        else {
            return
        }
        

    }

    

    //$("body").append("<div id='height'>Höhe:</div>");
    //$("body").append("<div id='speed'>Geschwindigkeit:</div>");
    //$("body").append("<div id='fuel'>Treibstoffvorrat:</div>");
    $("#content").html("<h2>Mondlandung</h2>");
    $("#content").append("<div id='height'></div>");
    $("#content").append("<div id='speed'></div>");
    $("#content").append("<div id='fuel'></div>");

    //Buttons
    $("#content").append("<button id='energy' class='btn-style'>Triebwerk an</button>");
    $("#content").append("<button id='no-energy' class='btn-style'>Triebwerk aus</button>");

    $('#energy').click(switchOn);
    $('#no-energy').click(switchOff);
    update();
}

