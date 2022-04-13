D = { 'CABOCHARD': ['FR', 'KC', 'LFL', 'TOP'],'113' : ['TR','KC','LFL','JGL'], 'SAKEN' : ['FR','KC','LFL','MID'], 'REKKLES' : ['SE','KC','LFL','ADC'], 'HANTERA' : ['FR','KC','LFL','SUP'], 'DJOKO' : ['FR','SLY','LFL','JGL'], 'STEELBACK' : ['FR','SLY','LFL','SUP'], 'EIKA' : ['FR','LDLC','LFL','MID'], 'VETHEO' : ['FR','MSF','LEC','MID'], 'ODOAMNE' : ['ROU','RGE','LEC','TOP'],'TOUCOUILLE' : ['FR','FLY','LCS','MID'],'CINKROFF' : ['POL','BDS','LEC','JGL'],'FAKER' : ['KOR','T1','LCK','MID'],'KERIA' : ['KOR','T1','LCK','SUP'],'CZEKOLAD' : ['POL','GW','LFL','MID'],'RONALDO' : ['ROU','GO','LFL','MID'], 'RANGJUN' : ['KOR','ME','LFL','MID'],'CZAJEK' : ['POL','MSFP','LFL','MID'],'SCARLET' : ['AUT','SLY','LFL','MID'],'XICO' : ['PRT','BDSA','LFL','MID'],'PENG' : ['SE','OPL','LFL','MID'],'DIPLEX' : ['DEU','VITB','LFL','MID'],'BADLULU' : ['FR','ME','LFL','TOP'], 'MELONIK' : ['POL','GW','LFL','TOP'], 'RAGNER' : ['TR','LDLC','LFL','TOP'], 'VIZICSACSI' : ['HUN','GO','LFL','TOP'], 'IRRELEVANT' : ['DEU','MSFP','LFL','TOP'],'KIO' : ['SVK','SLY','LFL','TOP'], 'SZYGENDA' : ['DNK','VITB','LFL','TOP'], 'AGRESIVOO' : ['POL','BDSA','LFL','TOP'],'SKEANZ' : ['FR','VITB','LFL','JGL'],'TYNX' : ['DNK','MSFP','LFL','JGL'],'BRUNESS' : ['POL','OPL','LFL','JGL'],'SHEO' : ['FR','BDSA','LFL','JGL'],'MEMENTO' : ['SE','ME','LFL','JGL'],'YIKE' : ['SE','LDLC','LFL','JGL'], 'AKABANE' : ['FR','GW','LFL','JGL'],'KARIMKT' : ['FR','GO','LFL','JGL']}


def playoffs(D):
    L = []
    E = ['LDLC','KC','BDSA','MSFP','VITB','VIT','MSF','G2','FNC','RGE','T1']
    for player in D:
        if D[player][1] in E:
            L.append(player)
    print(L)

def LFL(D):
    L = []
    for player in D:
        if D[player][2]=='LFL':
            L.append(player)
    print(L)

def LEC(D):
    L = []
    for player in D:
        if D[player][2]=='LEC':
            L.append(player)
    print(L)

LEC(D)