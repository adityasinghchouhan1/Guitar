var numberofbutton=document.querySelectorAll(".bttn").length;

for(var i=0;i<numberofbutton;i++){
    document.querySelectorAll(".bttn")[i].addEventListener("click",function () {
        var buttoninnerhtml=this.innerHTML;

        makeSound(buttoninnerhtml);
        makeanimation(buttoninnerhtml);
    });
}

document.addEventListener("keypress",function (event) {
    makeSound(event.key);
    makeanimation(event.key);
});

function makeSound(key) {
    switch(key){
        case "a":
            var guitar1=new Audio('sound/a.mp3');
            guitar1.play();
            break;
         case "b":
            var guitar2=new Audio('sound/b.mp3');
            guitar2.play();
            break;

            case "c":
            var guitar3=new Audio('sound/c.mp3');
            guitar3.play();
            break;

            case "d":
                var guitar4=new Audio('sound/d.mp3');
                guitar4.play();
                break;

                case "e":
                    var guitar5=new Audio('sound/e.mp3');
                    guitar5.play();
                    break;

                    case "f":
                        var guitar6=new Audio('sound/f.mp3');
                        guitar6.play();
                        break;

                        default:console.log(key);
    }
}

function buttonanimation(currentkey){
    var activeButton=Document.querySelectorAll("."+currentkey)
activeButton.classList.add("pressed");

   setTimeout(function() {
    activeButton.classList.remove("pressed");
   },100);
}