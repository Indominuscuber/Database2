class Form{
    constructor(){

    }

    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        var inputBox=createInput("Name");
        var button=createButton("Play");

        inputBox.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){

            inputBox.hide();
            button.hide();

            var name=inputBox.value();

            var greeting=createElement("h3");
            greeting.html("Hello "+name);
            greeting.position(130,160);
        })
    }
}