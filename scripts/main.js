Data = { 'CABOCHARD': ['FR', 'KC', 'LFL', 'TOP'],'113' : ['TR','KC','LFL','JGL'], 'SAKEN' : ['FR','KC','LFL','MID'], 'REKKLES' : ['SE','KC','LFL','ADC'], 'HANTERA' : ['FR','KC','LFL','SUP'], 'DJOKO' : ['FR','SLY','LFL','JGL'], 'STEELBACK' : ['FR','SLY','LFL','SUP'], 'EIKA' : ['FR','LDLC','LFL','MID'], 'VETHEO' : ['FR','MSF','LEC','MID'], 'ODOAMNE' : ['ROU','RGE','LEC','TOP'],'TOUCOUILLE' : ['FR','FLY','LCS','MID'],'CINKROFF' : ['POL','BDS','LEC','JGL'],'FAKER' : ['KOR','T1','LCK','MID'],'KERIA' : ['KOR','T1','LCK','SUP'],'CZEKOLAD' : ['POL','GW','LFL','MID'],'RONALDO' : ['ROU','GO','LFL','MID'], 'RANGJUN' : ['KOR','ME','LFL','MID'],'CZAJEK' : ['POL','MSFP','LFL','MID'],'SCARLET' : ['AUT','SLY','LFL','MID'],'XICO' : ['PRT','BDSA','LFL','MID'],'PENG' : ['SE','OPL','LFL','MID'],'DIPLEX' : ['DEU','VITB','LFL','MID'],'BADLULU' : ['FR','ME','LFL','TOP'], 'MELONIK' : ['POL','GW','LFL','TOP'], 'RAGNER' : ['TR','LDLC','LFL','TOP'], 'VIZICSACSI' : ['HUN','GO','LFL','TOP'], 'IRRELEVANT' : ['DEU','MSFP','LFL','TOP'],'KIO' : ['SVK','SLY','LFL','TOP'], 'SZYGENDA' : ['DNK','VITB','LFL','TOP'], 'AGRESIVOO' : ['POL','BDSA','LFL','TOP'],'SKEANZ' : ['FR','VITB','LFL','JGL'],'TYNX' : ['DNK','MSFP','LFL','JGL'],'BRUNESS' : ['POL','OPL','LFL','JGL'],'SHEO' : ['FR','BDSA','LFL','JGL'],'MEMENTO' : ['SE','ME','LFL','JGL'],'YIKE' : ['SE','LDLC','LFL','JGL'], 'AKABANE' : ['FR','GW','LFL','JGL'],'KARIMKT' : ['FR','GO','LFL','JGL']}
;
Joueurs = ['CABOCHARD','113', 'SAKEN','REKKLES', 'HANTERA', 'DJOKO', 'STEELBACK', 'EIKA','VETHEO', 'ODOAMNE','TOUCOUILLE','CINKROFF','FAKER','KERIA','CZEKOLAD','RONALDO', 'RANGJUN','CZAJEK','SCARLET','XICO','PENG','DIPLEX','BADLULU', 'MELONIK', 'RAGNER', 'VIZICSACSI', 'IRRELEVANT','KIO', 'SZYGENDA', 'AGRESIVOO','SKEANZ','TYNX','BRUNESS','SHEO','MEMENTO','YIKE', 'AKABANE','KARIMKT'];

var myTitle = document.getElementById('title')
var myImage = document.querySelector('img')
var image_nationalité = document.querySelector('#nationalité')
var image_equipe = document.querySelector('#equipe')
var image_ligue = document.querySelector('#ligue')
var image_role = document.querySelector('#role')
var myButton = document.querySelector('button')
var myTentatives = document.querySelector('#tentatives')



/*myButton.addEventListener('click', function() {
    var num = Math.floor(Math.random() * ImgArray.length)
    myImage.setAttribute('src', 'images/'+ ImgArray[num]);
    myImage.setAttribute('alt', ImgArray[num]);
});*/


function next(){
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}
function toAll(){
    Joueurs = ['CABOCHARD','113', 'SAKEN','REKKLES', 'HANTERA', 'DJOKO', 'STEELBACK', 'EIKA','VETHEO', 'ODOAMNE','TOUCOUILLE','CINKROFF','FAKER','KERIA','CZEKOLAD','RONALDO', 'RANGJUN','CZAJEK','SCARLET','XICO','PENG','DIPLEX','BADLULU', 'MELONIK', 'RAGNER', 'VIZICSACSI', 'IRRELEVANT','KIO', 'SZYGENDA', 'AGRESIVOO','SKEANZ','TYNX','BRUNESS','SHEO','MEMENTO','YIKE', 'AKABANE','KARIMKT'];
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}

function toTopTeams(){
    Joueurs = ['CABOCHARD', '113', 'SAKEN', 'REKKLES', 'HANTERA', 'EIKA', 'VETHEO', 'ODOAMNE', 'FAKER', 'KERIA', 'CZAJEK', 'XICO', 'DIPLEX', 'RAGNER', 'IRRELEVANT', 'SZYGENDA', 'AGRESIVOO', 'SKEANZ', 'TYNX', 'SHEO', 'YIKE']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}

function toLFL(){
    Joueurs = ['CABOCHARD', '113', 'SAKEN', 'REKKLES', 'HANTERA', 'DJOKO', 'STEELBACK', 'EIKA', 'CZEKOLAD', 'RONALDO', 'RANGJUN', 'CZAJEK', 'SCARLET', 'XICO', 'PENG', 'DIPLEX', 'BADLULU', 'MELONIK', 'RAGNER', 'VIZICSACSI', 'IRRELEVANT', 'KIO', 'SZYGENDA', 'AGRESIVOO', 'SKEANZ', 'TYNX', 'BRUNESS', 'SHEO', 'MEMENTO', 'YIKE', 'AKABANE', 'KARIMKT']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}

function toLEC(){
    Joueurs = ['VETHEO', 'ODOAMNE', 'CINKROFF']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}

function toLCK(){
    Joueurs = ['FAKER','KERIA']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}

function search(ele) {
    if(event.key === 'Enter') {
        var nom = ele.value
        var NOM = nom.toString().toUpperCase()
        if (NOM in Data){
            if (Data[NOM][0] === Data[aDeviner][0]){
                image_nationalité.setAttribute('src', 'images/' + Data[NOM][0] + 'true.png');
            }else{
                image_nationalité.setAttribute('src', 'images/' + Data[NOM][0] + 'false.png');
            }
            if (Data[NOM][1] === Data[aDeviner][1]){
                image_equipe.setAttribute('src', 'images/' + Data[NOM][1] + 'true.png');
            }else{
                image_equipe.setAttribute('src', 'images/' + Data[NOM][1] + 'false.png');
            }
            if (Data[NOM][2] === Data[aDeviner][2]){
                image_ligue.setAttribute('src', 'images/' + Data[NOM][2] + 'true.png');
            }else{
                image_ligue.setAttribute('src', 'images/' + Data[NOM][2] + 'false.png');
            }
            if (Data[NOM][3] === Data[aDeviner][3]){
                image_role.setAttribute('src', 'images/' + Data[NOM][3] + 'true.png');
            }else{
                image_role.setAttribute('src', 'images/' + Data[NOM][3] + 'false.png');
            }
            if (NOM === aDeviner){
                myImage.setAttribute('src','images/' + NOM + '.jpg')
                myTitle.innerHTML = "Bravo!"; /* marche pas*/
            }else{
                compteur += 1 /*marche po*/
            }
        } else {
            alert("Le joueur " + NOM + " n'existe pas.");
        }
        
    } 
}

var stgcompteur = compteur.toString()
document.getElementById("myTentatives").innerHTML = "New text!";/*'Nationalité :' + (Data[NOM][0] === Data[aDeviner][0])+ ', Equipe :' + (Data[NOM][1] === Data[aDeviner][1])+ ', Ligue :' + (Data[NOM][2] === Data[aDeviner][2])+ ', Role :' + (Data[NOM][3] === Data[aDeviner][3])*/