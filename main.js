/**
 * créer un repo git
 * ajouter un binôme en tant que collaborateur
 * l'un crée une fonction factorielle
 * l'autre une fonction combinaison qui utilise cette fonction factorielle
 * comb(n,p)= n!/(n-p)! * p!
 * vos fichiers seront séparés
 * pusher vos changements sur le dépot distant
 */
import  {factorielle} from "./fact.js"

function comb(n,p) {
    return (factorielle(n)/(n-p))*factorielle(p)
}

console.log(comb(2,2));
