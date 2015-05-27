var ordLista = ["mjauu", "malin", "banan"];
var valtOrd = ordLista[Math.floor(Math.random()*3)];

console.log(valtOrd);

var button = document.getElementsByTagName('button')[0]; //måste sätta index för tagName tar ut arrayer.
button.addEventListener("click", function(){
        var anvandarOrd = document.getElementsByTagName("input")[0].value; //hämtar och sparar ut värdet direkt.
        var rutor = document.getElementsByTagName('td');   
        for(var i = 0; i < 5; i++){
            rutor[i].innerHTML = anvandarOrd[i];
        }
    
        if (valtOrd === anvandarOrd){
            alert('Grattis!');
        }
        else {
            alert('Du skrev fel!');
        }

});