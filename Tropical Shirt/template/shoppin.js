

let carts = document.getElementsByClassName("shop-item-button");

let products = [
  {
    name: "LI-NING Hoodie White",
    tag: "Sample",
    price: 100,
    inCart: 0,
  },
  {
    name: "Apple Airpods Pro White",
    tag: "airpods",
    price: 199,
    inCart: 0,
  },
  {
    name: "Nike ZoomX Invincible Run Flyknit",
    tag: "nike",
    price: 180,
    inCart: 0,
  },
  {
    name: "Apple iPad(10.2inch, 128GB) Space Gray",
    tag: "iPad",
    price: 399,
    inCart: 0,
  },
  {
    name: "$10 Xbox Gift Card [Digital Code]",
    tag: "XboxGiftCard",
    price: 10,
    inCart: 0,
  },
  {
    name: "PowerBear 4K HDMI Cable 10ft",
    tag: "HDMICable",
    price: 10,
    inCart: 0,
  },
  {
    name: "Kindle Paperwhite",
    tag: "Kindle",
    price: 130,
    inCart: 0,
  },
  {
    name: "Apple iphone XR (128GB, Black)",
    tag: "iphoneXR",
    price: 539,
    inCart: 0,
  },
  /* food department*/
  {
    name: "Apple",
    tag: "apple",
    price: 10,
    inCart: 0,
  },
  {
    name: "Lemon",
    tag: "Lemon",
    price: 12,
    inCart: 0,
  },
  {
    name: "Banana",
    tag: "banana",
    price: 3,
    inCart: 0,
  },
  {
    name: "Watermelon",
    tag: "watermelon",
    price: 10,
    inCart: 0,
  },
  {
    name: "Peach",
    tag: "peach",
    price: 2,
    inCart: 0,
  },
  {
    name: "Tomato",
    tag: "tomato",
    price: 8,
    inCart: 0,
  },
  {
    name: "Corn",
    tag: "corn",
    price: 10,
    inCart: 0,
  },
  /* electronic department*/
  {
    name: "Macbook Pro",
    tag: "macbookpro",
    price: 1800,
    inCart: 0,
  },
  {
    name: "Macbook Air",
    tag: "macbookair",
    price: 1200,
    inCart: 0,
  },
  {
    name: "Surface Pro X",
    tag: "microsoftx",
    price: 980,
    inCart: 0,
  },
  {
    name: "Beats Wireless headphone",
    tag: "beats",
    price: 290,
    inCart: 0,
  },
  /* health department*/
  {
    name: "GNC Herbal_Plus",
    tag: "Herbal_Plus",
    price: 18,
    inCart: 0,
  },
  {
    name: "GNC Women's Collagen",
    tag: "Women",
    price: 12,
    inCart: 0,
  },
  {
    name: "Tri Flex",
    tag: "tri",
    price: 12,
    inCart: 0,
  },
  {
    name: "Women Mega",
    tag: "womenmega",
    price: 20,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    for (let x = 0; x < products.length; x++) {
      let shopItem = carts[i].parentElement.parentElement;
      let title = shopItem.getElementsByClassName("shop-item-title")[0]
        .innerText;
      if (products[x].name == title) {
        cartNumbers(products[x]);
        totalCost(products[x]);
      }
    }
  });
}

function onloadcartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".Main-Website span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".Main-Website span").textContent =
      productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".Main-Website span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", product.price + cartCost);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      
        <div class="product">
            
            <ion-icon class="remove" name="trash-outline"></ion-icon>
            <img src="${item.tag}.jpg">
            <span class="cart-title">${item.name}</span>
            <div class="cart-price">$${item.price}</div>
            <div class="cart-quantity">
                <ion-icon class="decrease" name="arrow-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class="cart-total">$${item.price * item.inCart}</div>
        
        </div>
        
        `;
    });

    productContainer.innerHTML += `

        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
              Basket Total:
            </h4>
            <h4 class="basketTotal">
              $${cartCost}
            </h4>
        </div>
      `;
  }
}

onloadcartNumbers();
displayCart();

/*   remove item in the cart    */

let removeCartItem = document.getElementsByClassName("remove");

for (var z = 0; z < removeCartItem.length; z++) {
  var button = removeCartItem[z];
  let shopItems = button.parentElement;

  button.parentElement.remove;
  button.addEventListener("click", () => {
    for (let c = 0; c < products.length; c++) {
      let titles = shopItems.getElementsByClassName("cart-title")[0].innerText;
      if (products[c].name == titles) {
        reduceCartNumber(products[c]);
        setRemoveItems(products[c]);

        onloadcartNumbers();
        displayCart();
      }
    }
  });
}

function reduceCartNumber(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let quantity = cartItems[product.tag].inCart;
  let price = cartItems[product.tag].price;

  localStorage.setItem("cartNumbers", productNumbers - quantity);
  document.querySelector(".Main-Website span").textContent =
    productNumbers - quantity;

  let cartCost = localStorage.getItem("totalCost");
  cartCost = parseInt(cartCost);
  localStorage.setItem("totalCost", cartCost - price * quantity);

  onloadcartNumbers();
  displayCart();
}

function setRemoveItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    delete cartItems[product.tag];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }
  onloadcartNumbers();
  displayCart();
}

/* minus quanitity of item in cart */

let minusCartItems = document.getElementsByClassName("decrease");

for (var q = 0; q < minusCartItems.length; q++) {
  var minbutton = minusCartItems[q];
  let minitem = minbutton.parentElement.parentElement;

  minbutton.addEventListener("click", () => {
    for (let c = 0; c < products.length; c++) {
      let mintitle = minitem.getElementsByClassName("cart-title")[0].innerText;
      if (products[c].name == mintitle) {
        decreaseCartItem(products[c]);
        onloadcartNumbers();
      }
    }
    displayCart();
  });
}

function decreaseCartItem(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let quantity = cartItems[product.tag].inCart - 1;

  if (quantity == 0) {
    reduceCartNumber(product);
    setRemoveItems(product);
  } else {
    let price = cartItems[product.tag].price;

    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector(".Main-Website span").textContent =
      productNumbers - 1;

    cartItems[product.tag].inCart -= 1;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost - price);
  }
}

/* add quanitity of item in cart */

let addCartItems = document.getElementsByClassName("increase");

for (var w = 0; w < addCartItems.length; w++) {
  var addbutton = addCartItems[w];
  let additem = addbutton.parentElement.parentElement;

  addbutton.addEventListener("click", () => {
    for (let c = 0; c < products.length; c++) {
      let addtitle = additem.getElementsByClassName("cart-title")[0].innerText;
      if (products[c].name == addtitle) {
        increaseCartItem(products[c]);

        onloadcartNumbers();
      }
    }
    displayCart();
  });
}

function increaseCartItem(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let quantity = cartItems[product.tag].inCart + 1;

  if (quantity != 0) {
    let price = cartItems[product.tag].price;

    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".Main-Website span").textContent =
      productNumbers + 1;

    cartItems[product.tag].inCart += 1;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseInt(cartCost);

    localStorage.setItem("totalCost", cartCost + price);
  }
}





var removeAll = document.getElementsByClassName("removeAll");


for (var w = 0; w < removeAll.length; w++) {
  var allbutton = removeAll[w];

  allbutton.addEventListener("click", () => {
    cleanAll();
    displayCart();
  });
}



function cleanAll(){
  
  localStorage.setItem("cartNumbers", 0);
  localStorage.setItem("totalCost", 0);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    cartItems = {};
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }
  onloadcartNumbers();
  displayCart();
}

