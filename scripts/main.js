Data = {
    'CABOCHARD': ['FR', 'KC', 'LFL', 'TOP'], '113': ['TR', 'KC', 'LFL', 'JGL'], 'SAKEN': ['FR', 'KC', 'LFL', 'MID'], 'REKKLES': ['SE', 'KC', 'LFL', 'ADC'], 'HANTERA': ['FR', 'KC', 'LFL', 'SUP'], 'DJOKO': ['FR', 'SLY', 'LFL', 'JGL'], 'STEELBACK': ['FR', 'SLY', 'LFL', 'SUP'], 'EIKA': ['FR', 'LDLC', 'LFL', 'MID'], 'VETHEO': ['FR', 'MSF', 'LEC', 'MID'], 'ODOAMNE': ['ROU', 'RGE', 'LEC', 'TOP'], 'TOUCOUILLE': ['FR', 'FLY', 'LCS', 'MID'], 'CINKROFF': ['POL', 'BDS', 'LEC', 'JGL'], 'FAKER': ['KOR', 'T1', 'LCK', 'MID'], 'KERIA': ['KOR', 'T1', 'LCK', 'SUP'], 'CZEKOLAD': ['POL', 'GW', 'LFL', 'MID'], 'RONALDO': ['ROU', 'GO', 'LFL', 'MID'], 'RANGJUN': ['KOR', 'ME', 'LFL', 'MID'], 'CZAJEK': ['POL', 'MSFP', 'LFL', 'MID'], 'SCARLET': ['AUT', 'SLY', 'LFL', 'MID'], 'XICO': ['PRT', 'BDSA', 'LFL', 'MID'], 'PENG': ['SE', 'OPL', 'LFL', 'MID'], 'DIPLEX': ['DEU', 'VITB', 'LFL', 'MID'], 'BADLULU': ['FR', 'ME', 'LFL', 'TOP'], 'MELONIK': ['POL', 'GW', 'LFL', 'TOP'], 'RAGNER': ['TR', 'LDLC', 'LFL', 'TOP'], 'VIZICSACSI': ['HUN', 'GO', 'LFL', 'TOP'], 'IRRELEVANT': ['DEU', 'MSFP', 'LFL', 'TOP'], 'KIO': ['SVK', 'SLY', 'LFL', 'TOP'], 'SZYGENDA': ['DNK', 'VITB', 'LFL', 'TOP'], 'AGRESIVOO': ['POL', 'BDSA', 'LFL', 'TOP'], 'SKEANZ': ['FR', 'VITB', 'LFL', 'JGL'], 'TYNX': ['DNK', 'MSFP', 'LFL', 'JGL'], 'BRUNESS': ['POL', 'OPL', 'LFL', 'JGL'], 'SHEO': ['FR', 'BDSA', 'LFL', 'JGL'], 'MEMENTO': ['SE', 'ME', 'LFL', 'JGL'], 'YIKE': ['SE', 'LDLC', 'LFL', 'JGL'], 'AKABANE': ['FR', 'GW', 'LFL', 'JGL'], 'KARIMKT': ['FR', 'GO', 'LFL', 'JGL'], 'ENJAWVE': ['FR', 'GO', 'LFL', 'SUP'], 'SMILEY': ['SE', 'GO', 'LFL', 'ADC'], 'INNAXE': ['BGR', 'GW', 'LFL', 'ADC'], 'KAMILIUS': ['SVK', 'GW', 'LFL', 'SUP'], 'DOSS': ['DNK', 'LDLC', 'LFL', 'SUP'], 'EXAKICK': ['FR', 'LDLC', 'LFL', 'ADC'],
    'CODY SUN': ['CAN', 'ME', 'LFL', 'ADC'], 'RAXXO': ['POL', 'ME', 'LFL', 'SUP'], 'WOOLITE': ['POL', 'MSFP', 'LFL', 'ADC'], 'VANDER': ['POL', 'MSFP', 'LFL', 'SUP'], 'ASZA': ['NLD', 'SLY', 'LFL', 'ADC'], 'CROWNSHOT': ['SVN', 'BDSA', 'LFL', 'ADC'], 'ERDOTE': ['POL', 'BDSA', 'LFL', 'SUP'], 'TIGER': ['FR', 'OPL', 'LFL', 'ADC'], 'XICOR': ['TUN', 'OPL', 'LFL', 'ADC'], 'ABSOLUTE': ['TR', 'OPL', 'LFL', 'SUP'], 'JESKLA': ['SE', 'VITB', 'LFL', 'ADC'], 'JACTROLL': ['POL', 'VITB', 'LFL', 'SUP']
}
    ;
Joueurs = ['CABOCHARD', '113', 'SAKEN', 'REKKLES', 'HANTERA', 'DJOKO', 'STEELBACK', 'EIKA', 'VETHEO', 'ODOAMNE', 'TOUCOUILLE', 'CINKROFF', 'FAKER', 'KERIA', 'CZEKOLAD', 'RONALDO', 'RANGJUN', 'CZAJEK', 'SCARLET', 'XICO', 'PENG', 'DIPLEX', 'BADLULU', 'MELONIK', 'RAGNER', 'VIZICSACSI', 'IRRELEVANT', 'KIO', 'SZYGENDA', 'AGRESIVOO', 'SKEANZ', 'TYNX', 'BRUNESS', 'SHEO', 'MEMENTO', 'YIKE', 'AKABANE', 'KARIMKT', 'ENJAWVE', 'SMILEY', 'INNAXE', 'KAMILIUS', 'DOSS', 'EXAKICK',
    'CODY SUN', 'RAXXO', 'WOOLITE', 'VANDER', 'ASZA', 'CROWNSHOT', 'ERDOTE', 'TIGER', 'XICOR', 'ABSOLUTE', 'JESKLA', 'JACTROLL'];

var myTitle = document.getElementById('title')
var myImage = document.querySelector('img')
var image_nationalité = document.querySelector('#nationalité')
var image_equipe = document.querySelector('#equipe')
var image_ligue = document.querySelector('#ligue')
var image_role = document.querySelector('#role')
var myButton = document.querySelector('button')
var myTentatives = document.querySelector('#tentatives')

window.onload = delimg()


function delimg() {
    compteur = 0
    document.getElementById("nationalité1").setAttribute('src', "images\\nationalité.png");
    document.getElementById("equipe1").setAttribute('src', "images\\equipe.png");
    document.getElementById("ligue1").setAttribute('src', "images\\ligue.png");
    document.getElementById("role1").setAttribute('src', "images\\role.png");
    document.getElementById("imgjoueur").setAttribute('src', 'images\\unknown.png');
    document.getElementById("row2").style.display = "none";
    document.getElementById("row3").style.display = "none";
    document.getElementById("row4").style.display = "none";
    document.getElementById("row5").style.display = "none";
    document.getElementById("row6").style.display = "none";
    document.getElementById("row7").style.display = "none";
    document.getElementById("row8").style.display = "none";
}

function next() {
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
    delimg()
}
function toAll() {
    Joueurs = ['CABOCHARD', '113', 'SAKEN', 'REKKLES', 'HANTERA', 'DJOKO', 'STEELBACK', 'EIKA', 'VETHEO', 'ODOAMNE', 'TOUCOUILLE', 'CINKROFF', 'FAKER', 'KERIA', 'CZEKOLAD', 'RONALDO', 'RANGJUN', 'CZAJEK', 'SCARLET', 'XICO', 'PENG', 'DIPLEX', 'BADLULU', 'MELONIK', 'RAGNER', 'VIZICSACSI', 'IRRELEVANT', 'KIO', 'SZYGENDA', 'AGRESIVOO', 'SKEANZ', 'TYNX', 'BRUNESS', 'SHEO', 'MEMENTO', 'YIKE', 'AKABANE', 'KARIMKT'];
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
    delimg()
}

function toTopTeams() {
    Joueurs = ['CABOCHARD', '113', 'SAKEN', 'REKKLES', 'HANTERA', 'EIKA', 'VETHEO', 'ODOAMNE', 'FAKER', 'KERIA', 'CZAJEK', 'XICO', 'DIPLEX', 'RAGNER', 'IRRELEVANT', 'SZYGENDA', 'AGRESIVOO', 'SKEANZ', 'TYNX', 'SHEO', 'YIKE']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
    delimg()
}

function toLFL() {
    Joueurs = ['CABOCHARD', '113', 'SAKEN', 'REKKLES', 'HANTERA', 'DJOKO', 'STEELBACK', 'EIKA', 'CZEKOLAD', 'RONALDO', 'RANGJUN', 'CZAJEK', 'SCARLET', 'XICO', 'PENG', 'DIPLEX', 'BADLULU', 'MELONIK', 'RAGNER', 'VIZICSACSI', 'IRRELEVANT', 'KIO', 'SZYGENDA', 'AGRESIVOO', 'SKEANZ', 'TYNX', 'BRUNESS', 'SHEO', 'MEMENTO', 'YIKE', 'AKABANE', 'KARIMKT', 'ENJAWVE', 'SMILEY', 'INNAXE', 'KAMILIUS', 'DOSS', 'EXAKICK', 'CODY SUN', 'RAXXO', 'WOOLITE', 'VANDER', 'ASZA', 'CROWNSHOT', 'ERDOTE', 'TIGER', 'XICOR', 'ABSOLUTE', 'JESKLA', 'JACTROLL']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
    delimg()
}

function toLEC() {
    Joueurs = ['VETHEO', 'ODOAMNE', 'CINKROFF']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}

function toLCK() {
    Joueurs = ['FAKER', 'KERIA']
    var size = Joueurs.length
    var rand = Math.floor(Math.random() * size)
    aDeviner = Joueurs[rand]
    compteur = 0
}

function search(ele) {
    if (event.key === 'Enter') {
        if (compteur === 8) {
            alert("8 tentatives, t'es finito pipo ratio mon grand. C'était " + aDeviner)
        } else {

            var nom = ele.value
            var NOM = nom.toString().toUpperCase()
            var nat = 'false'
            var equipe = 'false'
            var ligue = 'false'
            var role = 'false'
            if (NOM in Data) {
                compteur++
                if (Data[NOM][0] === Data[aDeviner][0]) {
                    var nat = 'true'
                }

                if (Data[NOM][1] === Data[aDeviner][1]) {
                    var equipe = 'true'
                }

                if (Data[NOM][2] === Data[aDeviner][2]) {
                    var ligue = 'true'
                }

                if (Data[NOM][3] === Data[aDeviner][3]) {
                    var role = 'true'
                }

                j = compteur.toString()
                document.getElementById("nationalité" + j).setAttribute('src', 'images/' + Data[NOM][0] + nat + '.png');
                document.getElementById("equipe" + j).setAttribute('src', 'images/' + Data[NOM][1] + equipe + '.png');
                document.getElementById("ligue" + j).setAttribute('src', 'images/' + Data[NOM][2] + ligue + '.png');
                document.getElementById("role" + j).setAttribute('src', 'images/' + Data[NOM][3] + role + '.png');

                document.getElementById("row" + j).style.display = "block";


                if (NOM === aDeviner) {
                    myImage.setAttribute('src', 'images/' + NOM + '.jpg')
                    myTitle.innerHTML = "Bravo!"; /* marche pas*/
                } else {
                    var stgcompteur = compteur.toString()
                    document.getElementById("tries-value").innerHTML = stgcompteur;
                }
            } else {
                alert("Le joueur " + NOM + " n'existe pas.");
            }
        }
    }
}

function ac(value) {
    document.getElementById('datalist').innerHTML = '';
    //setting datalist empty at the start of function
    //if we skip this step, same name will be repeated
    var n = Joueurs.length;
    l = value.length;
    //input query length
    for (var i = 0; i < n; i++) {
        if (((Joueurs[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
            //comparing if input string is existing in tags[i] string

            var node = document.createElement("option");
            var val = document.createTextNode(Joueurs[i]);
            node.appendChild(val);

            document.getElementById("datalist").appendChild(node);
            //creating and appending new elements in data list
        }
    }
}

/*'Nationalité :' + (Data[NOM][0] === Data[aDeviner][0])+ ', Equipe :' + (Data[NOM][1] === Data[aDeviner][1])+ ', Ligue :' + (Data[NOM][2] === Data[aDeviner][2])+ ', Role :' + (Data[NOM][3] === Data[aDeviner][3])*/