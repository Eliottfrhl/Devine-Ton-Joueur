DicNat = {'ALLEMAGNE': 'DEU', 'AUTRICHE': 'AT', 'ROUMANIE': 'ROU', 'POLOGNE': 'POL', 'COREE DU SUD': 'KOR', 'PORTUGAL': 'PRT',
          'SUEDE': 'SE', 'TURQUIE': 'TR', 'HONGRIE': 'HUN', 'SLOVAQUIE': 'SVK', 'DANEMARK': 'DNK', 'FRANCE': 'FR', 'BULGARIE': 'BGR', 'CANADA': 'CAN', 'PAYS-BAS': 'NLD', 'TUNISIE': 'TUN', 'SLOVENIE': 'SVN', 'RUSSIE': 'RUS', 'FINLANDE': 'FIN', 'NORVEGE': 'NOR', 'REPUBLIQUE TCHEQUE': 'CZE', 'ESPAGNE': 'ESP', 'BELGIQUE': 'BEL', 'GRECE': 'GRC', 'ROYAUME-UNI': 'GBR', 'CROATIE': 'HRV'}
DicEquipe = {'G2': 'LEC', 'VIT': 'LEC', 'MSF': 'LEC', 'MAD': 'LEC', 'RGE': 'LEC',
             'BDS': 'LEC', 'XL': 'LEC', 'AST': 'LEC', 'FNC': 'LEC', 'SK': 'LEC'}


def Profil(dict, equipe):
    print('Pseudo')
    pseudo = input()
    print('Nationalité')
    nationalite = input().upper()
    nationalité = DicNat[nationalite]
    ligue = DicEquipe[equipe.upper()]
    print('Rôle')
    role = input()

    dict[pseudo.upper()] = [nationalité.upper(), equipe.upper(),
                            ligue.upper(), role.upper()]
    return dict


def Profils():
    bool = 'y'
    dict = {}
    print('Equipe')
    equipe = input()
    while bool == 'y':
        dict = Profil(dict, equipe)
        print('y to continue')
        bool = input()
    print(dict)


Profils()
