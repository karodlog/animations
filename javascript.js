// effet barre de navigation

const navigation = document.querySelector('.navbar');
window.addEventListener("scroll", ()=>{
    // si mon scroll est plus grand que 80px
    if(window.scrollY > 60){
        // on ajoute notre classe
        navigation.classList.add('anim-nav');
        
    } else{
        // sinon, on l'efface
        navigation.classList.remove("anim-nav");
    }
})



// effet animation au clic
// on rajoute une div à chaque clic sur la fenêtre

window.addEventListener("click", (e)=>{
    const rond = document.createElement("div");
    rond.className = "clickAnim";
    rond.style.top = `${e.pageY -25}px`;
    rond.style.left = `${e.pageX -25}px`;
    document.body.appendChild(rond);

// on supprime la div après 1500 ms

    setTimeout(()=>{
        rond.remove();
    }, 1500)
})


// effet animation input


const validationInput = document.querySelector('input');

validationInput.addEventListener('input', (e)=>{
    // si la 
    if(e.target.value.length >= 6){
        validationInput.style.borderColor = "green";
        
    } else{
        validationInput.style.borderColor = "red";

    }
})
