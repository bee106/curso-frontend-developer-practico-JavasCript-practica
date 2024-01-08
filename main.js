const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const mobileMenu = document.querySelector('.mobile-menu')
const iconMenu = document.querySelector('.menu')

const carIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

 const containerCard= document.querySelector('.cards-container');

navbarEmail.addEventListener('click', toggleDesktopMenu)



iconMenu.addEventListener('click', toggleMenuHam)
carIcon.addEventListener('click', toggleCar)


function toggleDesktopMenu() {
  const isProductDetailClose = productDetail.classList.contains('inactive_menu')
  if (!isProductDetailClose) {
    productDetail.classList.add('inactive_menu')
  }
  desktopMenu.classList.toggle('inactive_menu')
}
function toggleMenuHam() {

  const isProductDetailClose = productDetail.classList.contains('inactive_menu')
  if (!isProductDetailClose) {
    productDetail.classList.add('inactive_menu')
  }
  mobileMenu.classList.toggle('inactive_menu')

}
function toggleCar() {

  const isMobileMenuClose = mobileMenu.classList.contains('inactive_menu')

  if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive_menu')
  }
  productDetail.classList.toggle('inactive_menu')




}

// new productos



{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */}
// const productsList =[

// ]
// productsList.push({
//     name :'bike',
//     price : '120.000',
//     img: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// })

// productsList.push({
//   name :'Guantes',
//   price :'12.000',
//   img: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// })

// productsList.push({
//   name :'Casco',
//   price : '20.000',
//   img: 'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// })

// for( product of productsList){

//   // div container
//    const productCar = document.createElement('div')
//   productCar.classList.add('product-card')

// // img product

// const imgSection = document.createElement('img')
// imgSection.setAttribute('src', product.img)


// // product info
// const productInfo = document.createElement('div')
//   productCar.classList.add('product-info')

//   // div vacio
//   const productInfoDiv = document.createElement('div')

//   const parrafo1 = document.createElement('p')
//   parrafo1.innerHTML = '$' + product.price 
//   const parrafo2 = document.createElement('p')
//   parrafo2.innerHTML = product.name


//  productInfoDiv.appendChild(parrafo1)
//  productInfoDiv.appendChild(parrafo2)



//   const productFigure = document.createElement('figure')
//   const imgCar = document.createElement('img')
//   imgCar.setAttribute('src', './icons/bt_add_to_cart.svg')

//   productFigure.appendChild(imgCar)
//  productCar.appendChild(imgSection)
//   productInfo.appendChild(productInfoDiv)
//   productInfo.appendChild(productFigure)
 
//   productCar.appendChild(productInfo)

// containerCard.appendChild(productCar)
// }
const productList = [];
productList.push({
  name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


productList.push({ name: 'Pantalla', price: 220, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', });


productList.push({ name: 'Compu', price: 620, image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', });

productList.push({
  name: 'Casco', price: '50.000', image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
function renderProducts(arr) {
  for (product of arr) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',
      product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');

    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);


    containerCard.appendChild(productCard);

  
  }
}
renderProducts(productList);