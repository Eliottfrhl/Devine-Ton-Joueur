DicNat = {'ALLEMAGNE': 'DEU', 'AUTRICHE': 'AT', 'ROUMANIE': 'ROU', 'POLOGNE': 'POL', 'COREE DU SUD': 'KOR', 'PORTUGAL': 'PRT',
          'SUEDE': 'SE', 'TURQUIE': 'TR', 'HONGRIE': 'HUN', 'SLOVAQUIE': 'SVK', 'DANEMARK': 'DNK', 'FRANCE': 'FR', 'BULGARIE': 'BGR', 'CANADA': 'CAN', 'PAYS-BAS': 'NLD', 'TUNISIE': 'TUN', 'SLOVENIE': 'SVN'}


def Profil(dict):
    print('Pseudo')
    pseudo = input()
    print('Nationalité')
    nationalite = input().upper()

    nationalité = DicNat[nationalite]
    print('Equipe')
    equipe = input()
    print('Ligue')
    ligue = input()
    print('Rôle')
    role = input()

    dict[pseudo.upper()] = [nationalité.upper(), equipe.upper(),
                            ligue.upper(), role.upper()]
    return dict


def Profils():
    bool = 'y'
    dict = {}
    while bool == 'y':
        dict = Profil(dict)
        print('y pour continuer')
        bool = input()
    print(dict)


Profils()
