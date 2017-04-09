"# Node.js-herokuHelloWorld" 
# TP1: INITIATION A HADOOP ET MAP-REDUCE


Le fichier en entrée est un fichier log dont les champs sont de la forme suivante:

-*date temps magasin produit coût paiement

Les champs du fichier log  sont séparés par des tabulations 

Les codes du mapper et du reducer sont écrits en JAVA.

#A propos

Lors de ce Tp, Nous avons utilisé la machine virtuelle de Cloudera qui est une machine Linux, sur laquelle est installé le

framework Hadoop , ainsi qu’un grand nombre d’outils de son  écosystème, sont préinstallés.

Nous avons testé le mapper et le reducer en local, ensuite nous avons exécuté le code directement sur HDFS.


#Activité 4

le but est de déterminer le total des ventes par magasin

-*le mapper: s'occupe d'extraire les couples  (magasin,coût)

-*le reducer: s'occupe de faire la somme de tous les coûts pour un même magasin 

+*le mapper: s'occupe d'extraire les couples  (magasin,coût)

+*le reducer: s'occupe de faire la somme de tous les coûts pour un même magasin 

*le reducer: s'occupe de faire la somme de tous les coûts pour un même magasin 

