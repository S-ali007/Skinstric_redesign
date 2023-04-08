let bundleBtn = document.getElementById("bundle_btn1");
let individualBtn = document.getElementById("individual_btn2");
let suggestedBtn = document.getElementById("suggested_btn3");

let shopProducts = [
    {
        title: "Wrinkle Correcting Serum Mask",
        price: "100USD",
        quantity: 1,
        catogory: "bundle",
        details: "This fragrance-free, silicone-free and water-resistant non-nano tinted mineral SPF 50 (PA ++++) has a universally flattering tint that hydrates while protecting against daily oxidators like sun (broad spectrum UVA/UVB protection), pollution and blue light (HEV)."
    }
]

const colors = ['#1A1B1C', 'white', '#F3F3F4']

suggestedBtn.addEventListener("click", showitems)
bundleBtn.addEventListener("click", showitems)
individualBtn.addEventListener("click", showitems)


function showitems(e) {


    let clickedBtn = e.target;
    let btnColor = clickedBtn.style;

    individualBtn.style.backgroundColor = 'white';
    individualBtn.style.color = '#1A1B1C';
    bundleBtn.style.backgroundColor = 'white';
    bundleBtn.style.color = '#1A1B1C';
    suggestedBtn.style.backgroundColor = 'white';
    suggestedBtn.style.color = '#1A1B1C';

    btnColor.backgroundColor = colors[0]
    btnColor.color = colors[1]


    const dataContainer = document.getElementById("data-container");
    console.log(shopProducts);
    dataContainer.innerHTML = JSON.stringify(shopProducts, null, 4);

    // Update the HTML of the data container based on the clicked button
    if (clickedBtn == bundleBtn) {
        dataContainer.innerHTML = `
            <div class="mt-3.5 m-0 pr-1.5 flex gap-2">
                <div class="mx-w-[135px] bg-[#1A1B1C] flex gap-7 pr-6">
                  <img src="/assets/image 69 bottle.svg" class=" " alt="" />

                  <div class="mx-w-[432px] w-full">
                    <div class="uppercase text-white mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-0.025em]">
                      <h1>${shopProducts[0].title}</h1>
                    </div>

                    <div class="flex justify-between font-semibold mt-[63px] flex-wrap">
                      <span class="flex gap-3">
                        <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#FCFCFC]">
                          <a href="#" class="-rotate-45">+</a>
                        </span>
                        <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#FCFCFC] text-[black]">
                          <p class="-rotate-45">${shopProducts[0].quantity}</p>
                        </span>
                        <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#FCFCFC]">
                          <a href="#" class="-rotate-45">-</a>
                        </span>
                      </span>

                      <span class="text-white">
                        <h1>${shopProducts[0].price}</h1>
                      </span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="mr-4">
                <h1 class="flex justify-center items-center py-[90px]">
                  Undo Remove?
                </h1>

                <div
                  class="mx-w-[135px] bg-[#F3F3F4] border-t border-black flex gap-7 pr-6"
                >
                  <img src="/assets/image 69 bottle.svg" class=" " alt="" />

                  <div class="mx-w-[432px] w-full">
                    <div
                      class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-[-0.02em]]"
                    >
                      <h1>Pore Refining & Spot Correcting Concentrate</h1>
                    </div>

                    <div
                      class="flex justify-between font-semibold mt-[63px] flex-wrap"
                    >
                      <span class="flex gap-3">
                        <span
                          class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                        >
                          <a href="#" class="-rotate-45">+</a>
                        </span>
                        <span
                          class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#F3F3F4]"
                        >
                          <p class="-rotate-45">14</p>
                        </span>
                        <span
                          class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                        >
                          <a href="#" class="-rotate-45">-</a>
                        </span>
                      </span>

                      <span class="">
                        <h1>2,095.38 USD</h1>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  class="mx-w-[135px] bg-[#F3F3F4] mt-3 border-t border-black flex gap-7 pr-6"
                >
                  <img src="/assets/image 69 bottle.svg" class=" " alt="" />

                  <div class="mx-w-[432px] w-full">
                    <div
                      class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-[-0.02em]]"
                    >
                      <h1>Wrinkle Correcting Serum Mask</h1>
                    </div>

                    <div
                      class="flex justify-between font-semibold mt-[63px] flex-wrap"
                    >
                      <span class="flex gap-3">
                        <span
                          class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                        >
                          <a href="#" class="-rotate-45">+</a>
                        </span>
                        <span
                          class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-black text-[#F3F3F4]"
                        >
                          <p class="-rotate-45">3</p>
                        </span>
                        <span
                          class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                        >
                          <a href="#" class="-rotate-45">-</a>
                        </span>
                      </span>

                      <span class="">
                        <h1>149.67 USD</h1>
                      </span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
        `;
    } else if (clickedBtn == individualBtn) {
        dataContainer.innerHTML = `
      
       
          
    

        <div
          class="mx-w-[135px] bg-[#F3F3F4]  flex gap-7 pr-6 mt-5"
        >
          <img src="/assets/image 69 bottle.svg" class=" " alt="" />

          <div class="mx-w-[432px] w-full">
            <div
              class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-[-0.02em]]"
            >
              <h1>Pore Refining & Spot Correcting Concentrate</h1>
            </div>

            <div
              class="flex justify-between font-semibold mt-[63px] flex-wrap"
            >
              <span class="flex gap-3">
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">+</a>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#F3F3F4]"
                >
                  <p class="-rotate-45">14</p>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">-</a>
                </span>
              </span>

              <span class="">
                <h1>2,095.38 USD</h1>
              </span>
            </div>
          </div>
        </div>

        <div
          class="mx-w-[135px] bg-[#F3F3F4] mt-3 border-t border-black flex gap-7 pr-6"
        >
          <img src="/assets/image 69 bottle.svg" class=" " alt="" />

          <div class="mx-w-[432px] w-full">
            <div
              class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-[-0.02em]]"
            >
              <h1>Wrinkle Correcting Serum Mask</h1>
            </div>

            <div
              class="flex justify-between font-semibold mt-[63px] flex-wrap"
            >
              <span class="flex gap-3">
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">+</a>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-black text-[#F3F3F4]"
                >
                  <p class="-rotate-45">3</p>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">-</a>
                </span>
              </span>

              <span class="">
                <h1>149.67 USD</h1>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
        <div class="mt-3.5 m-0 pr-1.5 flex gap-2">
            <div class="mx-w-[135px] bg-[#1A1B1C] flex gap-7 pr-6">
              <img src="/assets/image 69 bottle.svg" class=" " alt="" />

              <div class="mx-w-[432px] w-full">
                <div class="uppercase text-white mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-0.025em]">
                  <h1>${shopProducts[0].title}</h1>
                </div>

                <div class="flex justify-between font-semibold mt-[63px] flex-wrap">
                  <span class="flex gap-3">
                    <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#FCFCFC]">
                      <a href="#" class="-rotate-45">+</a>
                    </span>
                    <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#FCFCFC] text-[black]">
                      <p class="-rotate-45">${shopProducts[0].quantity}</p>
                    </span>
                    <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#FCFCFC]">
                      <a href="#" class="-rotate-45">-</a>
                    </span>
                  </span>

                  <span class="text-white">
                    <h1>${shopProducts[0].price}</h1>
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div class="mt-3.5 m-0 pr-1.5 flex gap-2">
        <div class="mx-w-[135px] bg-[#1A1B1C] flex gap-7 pr-6">
          <img src="/assets/image 69 bottle.svg" class=" " alt="" />

          <div class="mx-w-[432px] w-full">
            <div class="uppercase text-white mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-0.025em]">
              <h1>${shopProducts[0].title}</h1>
            </div>

            <div class="flex justify-between font-semibold mt-[63px] flex-wrap">
              <span class="flex gap-3">
                <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#FCFCFC]">
                  <a href="#" class="-rotate-45">+</a>
                </span>
                <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#FCFCFC] text-[black]">
                  <p class="-rotate-45">${shopProducts[0].quantity}</p>
                </span>
                <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#FCFCFC]">
                  <a href="#" class="-rotate-45">-</a>
                </span>
              </span>

              <span class="text-white">
                <h1>${shopProducts[0].price}</h1>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>`
    }
    else if (clickedBtn == suggestedBtn) {
        dataContainer.innerHTML = ` <div class="mt-3.5 m-0 pr-1.5 flex gap-2">
        <div class="mx-w-[135px] bg-[#ffffff] flex gap-7 pr-6">
          <img src="/assets/image 69 bottle.svg" class=" " alt="" />

          <div class="mx-w-[432px] w-full">
            <div class="uppercase text-black mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-0.025em]">
              <h1>${shopProducts[0].title}</h1>
            </div>

            <div class="flex justify-between font-semibold mt-[63px] flex-wrap">
              <span class="flex gap-3">
                <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#FCFCFC] text-[#1A1B1C]">
                  <a href="#" class="-rotate-45">+</a>
                </span>
                <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#FCFCFC]">
                  <p class="-rotate-45">${shopProducts[0].quantity}</p>
                </span>
                <span class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#FCFCFC] text-[#1A1B1C]">
                  <a href="#" class="-rotate-45">-</a>
                </span>
              </span>

              <span class="text-black">
                <h1>${shopProducts[0].price}</h1>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="mr-4">
       
          
        </h1>

        <div
          class="mx-w-[135px] bg-[#F3F3F4] border-t border-black flex gap-7 pr-6"
        >
          <img src="/assets/image 69 bottle.svg" class=" " alt="" />

          <div class="mx-w-[432px] w-full">
            <div
              class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-[-0.02em]]"
            >
              <h1>Pore Refining & Spot Correcting Concentrate</h1>
            </div>

            <div
              class="flex justify-between font-semibold mt-[63px] flex-wrap"
            >
              <span class="flex gap-3">
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">+</a>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-[#1A1B1C] text-[#F3F3F4]"
                >
                  <p class="-rotate-45">14</p>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">-</a>
                </span>
              </span>

              <span class="">
                <h1>2,095.38 USD</h1>
              </span>
            </div>
          </div>
        </div>

        <div
          class="mx-w-[135px] bg-[#F3F3F4] mt-3 border-t border-black flex gap-7 pr-6"
        >
          <img src="/assets/image 69 bottle.svg" class=" " alt="" />

          <div class="mx-w-[432px] w-full">
            <div
              class="uppercase mx-w-[194px] w-full font-semibold mt-1.5 text-[16px] tracking-[-0.02em]]"
            >
              <h1>Wrinkle Correcting Serum Mask</h1>
            </div>

            <div
              class="flex justify-between font-semibold mt-[63px] flex-wrap"
            >
              <span class="flex gap-3">
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">+</a>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base bg-black text-[#F3F3F4]"
                >
                  <p class="-rotate-45">3</p>
                </span>
                <span
                  class="rotate-45 font-semibold w-[24px] flex justify-center text-base text-[#1A1B1C]"
                >
                  <a href="#" class="-rotate-45">-</a>
                </span>
              </span>

              <span class="">
                <h1>149.67 USD</h1>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>`

    }



}

