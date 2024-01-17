const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const mobileMenu = document.querySelector('.mobile-menu')
const iconMenu = document.querySelector('.menu')

const carIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')


const productDetailClose = document.querySelector('.product-detail-close')

const productDetailContainer = document.querySelector('#productDetail')

 const containerCard= document.querySelector('.cards-container');

navbarEmail.addEventListener('click', toggleDesktopMenu)

productDetailClose.addEventListener('click', closeproductDetail)

iconMenu.addEventListener('click', toggleMenuHam)


carIcon.addEventListener('click', toggleCar)


function toggleDesktopMenu() {
  const isProductDetailClose = shoppingCartContainer.classList.contains('inactive_menu')
  if (!isProductDetailClose) {
    shoppingCartContainer.classList.add('inactive_menu')
  }
  desktopMenu.classList.toggle('inactive_menu')
}
function toggleMenuHam() {

  const isProductDetailClose = shoppingCartContainer.classList.contains('inactive_menu')

  const isdetailoclose = productDetailContainer.classList.contains('inactive_menu')

  if(!isdetailoclose){
        productDetailContainer.classList.add('inactive_menu')
  } 
  if (!isProductDetailClose) {
    shoppingCartContainer.classList.add('inactive_menu')
  }
  mobileMenu.classList.toggle('inactive_menu')
  
}
function toggleCar() {

  const isMobileMenuClose = mobileMenu.classList.contains('inactive_menu')
  const isProductDetailClose = productDetailContainer.classList.contains('inactive_menu')

  if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive_menu')
  }


  if (!isProductDetailClose) {
  productDetailContainer.classList.add('inactive_menu')
  }
  shoppingCartContainer.classList.toggle('inactive_menu')




}

function OpenproductDetail(){

  const isShoppingCartClose = shoppingCartContainer.classList.contains('inactive_menu')

  if (!isShoppingCartClose) {
  shoppingCartContainer.classList.add('inactive_menu')
  }
 productDetailContainer.classList.remove('inactive_menu')

}

function closeproductDetail(){
 productDetailContainer.classList.toggle('inactive_menu')
}

// new productos

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

   productImg.addEventListener('click', OpenproductDetail)

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