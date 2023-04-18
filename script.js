let bundleBtn = document.getElementById("bundle_btn1");
let individualBtn = document.getElementById("individual_btn2");
let suggestedBtn = document.getElementById("suggested_btn3");

let shopProducts = [
  {
    title: "Wrinkle Correcting Serum Mask",
    price: 400,
    quantity: 1,
    catogory: "bundle",
    details:
      "This fragrance-free, silicone-free and water-resistant non-nano tinted mineral SPF 50 (PA ++++) has a universally flattering tint that hydrates while protecting against daily oxidators like sun (broad spectrum UVA/UVB protection), pollution and blue light (HEV).",
    img: "/assets/image 69.svg",
  },
  {
    title: "Dark Circle Correcting Serum ",
    price: 800,
    quantity: 1,
    catogory: "bundle",
    img: "/assets/image 69.svg",
    details:
      "This fragrance-free, silicone-free and water-resistant non-nano tinted mineral SPF 50 (PA ++++) has a universally flattering tint that hydrates while protecting against daily oxidators like sun (broad spectrum UVA/UVB protection), pollution and blue light (HEV).",
  },
  {
    title: "Face Whitining serum",
    price: 1000,
    quantity: 1,
    catogory: "bundle",
    details:
      "This fragrance-free, silicone-free and water-resistant non-nano tinted mineral SPF 50 (PA ++++) has a universally flattering tint that hydrates while protecting against daily oxidators like sun (broad spectrum UVA/UVB protection), pollution and blue light (HEV).",
    img: "/assets/image 69.svg",
  },
  {
    title: "Wrinkle Correcting Serum Mask (i)",
    price: 400,
    quantity: 1,
    catogory: "individual",
    details: "This 1",
    img: "/assets/image 69.svg",
  },
  {
    title: "Dark Circle Correcting Serum (i)",
    price: 800,
    quantity: 1,
    catogory: "individual",
    details: "2",
    img: "/assets/image 69.svg",
  },
  {
    title: "Face Whitining serum (i)",
    price: 1000,
    quantity: 1,
    catogory: "individual",
    details:
      "This fragrance-free, silicone-free and water-resistant non-nano tinted mineral SPF 50 (PA ++++) has a universally flattering tint that hydrates while protecting against daily oxidators like sun (broad spectrum UVA/UVB protection), pollution and blue light (HEV).",
    img: "/assets/image 69.svg",
  },
  {
    title: "Wrinkle Correcting Serum Mask (s)",
    price: 400,
    quantity: 1,
    catogory: "suggested",
    details: "1",
    img: "/assets/image 69.svg",
  },
  {
    title: "Dark Circle Correcting Serum (s)",
    price: 800,
    quantity: 1,
    catogory: "suggested",
    details: "2",
    img: "/assets/image 69.svg",
  },
  {
    title: "Face Whitining serum (s)",
    price: 1000,
    quantity: 1,
    catogory: "suggested",
    details: "3",
    img: "/assets/image 69.svg",
  },
];

const colors = ["#1A1B1C", "white", "#F3F3F4"];

suggestedBtn.addEventListener("click", showitems);
bundleBtn.addEventListener("click", showitems);
individualBtn.addEventListener("click", showitems);

// function showitems(e,default_parameter) {
function showitems(e) {
  // let clickedBtn = default_parameter  ||  e.target;
  let clickedBtn = e ? e.target : bundleBtn;

  //simple as we can
  // let clickedBtn =  e.target

  let btnColor = clickedBtn.style;

  individualBtn.style.backgroundColor = "white";
  individualBtn.style.color = "#1A1B1C";
  bundleBtn.style.backgroundColor = "white";
  bundleBtn.style.color = "#1A1B1C";
  suggestedBtn.style.backgroundColor = "white";
  suggestedBtn.style.color = "#1A1B1C";

  btnColor.backgroundColor = colors[0];
  btnColor.color = colors[1];

  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = "";
  let filter_products = [];

  if (clickedBtn == bundleBtn) {
    filter_products = shopProducts.filter(
      (product) => product.catogory === "bundle"
    );
  } else if (clickedBtn == individualBtn) {
    filter_products = shopProducts.filter(
      (product) => product.catogory === "individual"
    );
  } else if (clickedBtn == suggestedBtn) {
    filter_products = shopProducts.filter(
      (products) => products.catogory === "suggested"
    );
  }

  filter_products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.setAttribute("id", `product${index}`);

    if (index == 0) {
      productDiv.style.backgroundColor = "#1A1B1C";
      productDiv.style.color = "white";

      let quantities = document.getElementsByClassName("quantity");
      console.log(quantities);




      // console.log(productDiv)
    }

    productDiv.addEventListener("click", function () {
      // Set styles for clicked product
      this.style.backgroundColor = "#1A1B1C";
      this.style.color = "white";
      let quantites = document.getElementById(`quantity-${index}`);
      console.log(quantites);
      quantites.parentElement.style.backgroundColor = "white";
      quantites.style.color = "black";
      // Reset styles for previously clicked product
      const allProducts = document.getElementsByClassName("product");

      console.log(allProducts);

      for (let i = 0; i < allProducts.length; i++) {
        if (i != index) {
          allProducts[i].style.backgroundColor = "";
          allProducts[i].style.color = "";

          let quantites = document.getElementById(`quantity-${i}`);
          quantites.parentElement.style.backgroundColor = "";
          quantites.style.color = "";
        }
      }
    });

    productDiv.className =
      "product transition duration-200 ease-in cursor-pointer  ";
    productDiv.innerHTML = `
      <div class="mx-w-[135px]  flex gap-7 pr-6 ">
        <img src="/assets/image 69 bottle.svg" class=" " alt="" />
        <div class="mx-w-[432px] w-full ">
          <div class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-0.025em] ">
            <h1>${product.title}</h1>
          </div>
          <div class="flex justify-between font-semibold mt-[63px] flex-wrap">
          <span class="flex gap-3">
          <span class="plus rotate-45 font-semibold w-[24px] flex justify-center text-base">
            <button class="-rotate-45" onclick="incrementQuantity(${index})">+</button>
          </span>
          <span class="quantity rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[white] ">
            <p class="mt-0.5 -rotate-45" id="quantity-${index}">1</p>
          </span>
          <span class="minus rotate-45 font-semibold w-[24px] flex justify-center text-base">
            <button class="-rotate-45" onclick="decrementQuantity(${index})">-</button>
          </span>
        </span>
            <span class="">
              <span id="price_${index}">${product.price} USD</span>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    `;
    // const paraContainer = document.getElementById("para-Container");
    // paraContainer.innerHTML = "";
    // let filter_products =[];
    function details() {
      const productDiv1 = document.getElementById("photo");
      productDiv1.innerHTML = ` <img src="${product.img}" alt="Productimages" />
        `;
      const productDiv2 = document.getElementById("heading");
      productDiv2.innerHTML = `
        <p> ${product.title} 
        </p>
        `;
      const productDiv3 = document.getElementById("description");
      productDiv3.innerHTML = `
        <p> ${product.details} 
        </p>
        `;
    }
    productDiv.addEventListener("click", details);

    // filter_products=shopProducts.find( (product) => product.details)
    // console.log("Selected item:", product.details,"IMG :", product.img);

    // filter_products.forEach((product,index) =>{
    // // paraContainer.appendChild(productDiv2);
    // } )

    // console.log(filter_products)
    details();

    dataContainer.appendChild(productDiv);
  });
}

// showitems('ads',bundleBtn)
// showitems()
showitems();

// function showitems(e) {
//   let clickedBtn = e.target;
//   let btnColor = clickedBtn.style;

//   individualBtn.style.backgroundColor = "white";
//   individualBtn.style.color = "#1A1B1C";
//   bundleBtn.style.backgroundColor = "white";
//   bundleBtn.style.color = "#1A1B1C";
//   suggestedBtn.style.backgroundColor = "white";
//   suggestedBtn.style.color = "#1A1B1C";

//   btnColor.backgroundColor = colors[0];
//   btnColor.color = colors[1];

//   const dataContainer = document.getElementById("data-container");

//   // Clear existing products
//   dataContainer.innerHTML = "";

//   if (clickedBtn == bundleBtn) {
//     shopProducts.forEach((product, index) => {
//       const productDiv = document.createElement("div");
//       productDiv.className =
//         "mr-4 bg-[#F3F3F4] text-[#1A1B1C] hover:bg-[#1A1B1C] group hover:text-[white]";

//       productDiv.innerHTML = `
//   <div class="mx-w-[135px]  flex gap-7 pr-6 ">
//     <img src="/assets/image 69 bottle.svg" class=" " alt="" />
//     <div class="mx-w-[432px] w-full ">
//       <div class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-0.025em] ">
//         <h1>${product.title}</h1>
//       </div>
//       <div class="flex justify-between font-semibold mt-[63px] flex-wrap">
//         <span class="flex gap-3">
//           <span class="plus rotate-45 font-semibold w-[24px] flex justify-center text-base ">
//             <button href="#" class="-rotate-45">+</button>
//           </span>
//           <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[white] group-hover:bg-[#FCFCFC] group-hover:text-[#1A1B1C]">
//             <p class="num -rotate-45">${product.quantity}</p>
//           </span>
//           <span class=" minus rotate-45 font-semibold w-[24px] flex justify-center text-base ">
//             <button href="" class="-rotate-45">-</button>
//           </span>
//         </span>
//         <span class="">
//           <h1>${product.price} USD</h1>
//         </span>
//       </div>
//     </div>
//   </div>
//   <div></div>
// `;

//       dataContainer.appendChild(productDiv);
//     });
//   }
// }
// let bundle_product=document.getElementById("bundle_product-1")
// bundle_product.addEventListener("click" ,console.log("hi"))

// const plus = document.querySelector(".plus"),
//   minus = document.querySelector(".minus"),
//   num = document.querySelector(".num");
// console.log(num);
// var numCount;
// let a = 1;
// plus.addEventListener("click", () => {
//   a++;
//   // a=(a>10) ? a : a;

//   num.innerHTML = `<p class="-rotate-45">${a}</p>`;

//   priceTotal();
//   // console.log(a)
// });
// minus.addEventListener("click", () => {
//   if (a > 1) {
//     a--;
//     // a=(a>10) ? a : a;
//     num.innerHTML = `<p class="-rotate-45">${a}</p>`;
//     // console.log(a)
//   }
//   priceTotal();
// });

// var price = document.getElementById("price").innerText;
// console.log(price);

// function priceTotal() {
//   var total = num * price;

//   // price.innerText=total
//   console.log(total, num, price);
// }

// Function to increment quantity
function incrementQuantity(index) {
  const quantityElement = document.getElementById(`quantity-${index}`);
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity.toString();

  // Update price value based on quantity
  let product = shopProducts[index];
  let price = product.price;
  let total = price * quantity;
  document.getElementById(`price_${index}`).innerText = total + " USD";
}

// Function to decrement quantity
function decrementQuantity(index) {
  const quantityElement = document.getElementById(`quantity-${index}`);
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity.toString();
  }

  // Update price value based on quantity
  let product = shopProducts[index];
  let price = product.price;
  let total = price * quantity;
  document.getElementById(`price_${index}`).innerText = total + " USD";
}
