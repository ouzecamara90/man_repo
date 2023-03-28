      //pour tous les boutons
var plusButton = document.querySelectorAll('.btnPlus');
let deleteButton = document.querySelectorAll('.btn-outline-danger');
let heartIcons = document.querySelectorAll('.fa-heart');
let article = document.querySelectorAll('.article')
let qty = document.querySelectorAll('.quantite')
let total = document.querySelectorAll('.total')
let price = document.querySelectorAll('.prix')
let mns = document.querySelectorAll('.btn-outline-warning')
let sum = document.querySelector('.Prixtotal')
//calculer le prix total des produits
function calculateTotal() {
      let totalPrice = 0;
      for (let i = 0; i < article.length; i++) {
        let itemPrice = parseInt(price[i].innerHTML);
        let itemQty = parseInt(qty[i].value);
        let itemTotal = itemPrice * itemQty;
        total[i].innerHTML = itemTotal;
        totalPrice += itemTotal;
      }
      sum.value = totalPrice;
      console.log(article);
    }
   // ajouter un récepteur de clic à chaque bouton plus
for (let i = 0; i < plusButton.length; i++) { 
  plusButton[i].addEventListener('click', function(){
    qty[i].value ++ ;
    calculateTotal();
  });
  //diminuer un récepteur de clic à chaque bouton moins
  mns[i].addEventListener('click' , function(){
    if(qty[i].value > 0){
      qty[i].value --;
      calculateTotal();
    }
  })
  //ajouter un click event listener à chaque bouton supprimer
  deleteButton[i].addEventListener('click' , function(){
    article[i].remove();
    let articlePrice = parseInt(price[i].innerHTML) * parseInt(qty[i].innerHTML);
    let currentTotal = parseInt(sum[0].value);
    sum[0].value = currentTotal - articlePrice;
    calculateTotal()
  })

  }
  //ajouter un click event listener à chaque icône de coeur
heartIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
   // activer la classe "aimé" sur l'icône cliquée
    icon.classList.toggle('liked');
  });
});