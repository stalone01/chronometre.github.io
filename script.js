//les variables :
var sp, btn_start, btn_stop, t, ms, s, mn, h;

//fonction pour initialiser les variables qd  la page se charge

window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0;
    s = 0;
    mn = 0;
    h = 0;
}

//mettre en place le compteur

function update_chrono(){
    ms+=1;
    if(ms==10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }

    //insertion des valeurs dans les spans
    sp[0].innerHTML = h +"h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

//faire fonctionner les bouton start, stop et reset

function start(){
    t = setInterval(update_chrono, 100); //mettre a jours tous les 100ms
    btn_start.disabled = true;
}

function stop(){
    clearInterval(t); //suppression de l'interval t 
    btn_stop.disabled = false;
    btn_start.disabled = false;
}

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms=0, s=0, mn=0, h=0;

    //inserer les nouvelles valeurs dans les spans
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";

}