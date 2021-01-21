const button = document.getElementById("btn"); /* Id button */
const list = document.getElementById("list"); /* Id list */
const button3 = document.getElementById("btn3"); /* Id button */
const list3 = document.getElementById("list3"); /* Id list */

list.style.display = "none"; /* Ne pas afficher la liste */
list3.style.display = "none"; /* Ne pas afficher la liste */


button.addEventListener("click", (event) => { /* Click */
    if (list.style.display == "none"){ /* Si la liste n'est pas affichée */
        list.style.display = "block" /* Si on clique sur le bouton, afficher la liste*/
    } else { 
        list.style.display = "none" /* Si on reclique, ne pas afficher */
    }
})

button3.addEventListener("click", (event) => { /* Click */
    if (list3.style.display == "none"){ /* Si la liste n'est pas affichée */
        list3.style.display = "block" /* Si on clique sur le bouton, afficher la liste*/
    } else { 
        list3.style.display = "none" /* Si on reclique, ne pas afficher */
    }
})

