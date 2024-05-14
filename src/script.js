let block=document.querySelector('.cross');
let cross=document.querySelector('.cross1')

block.addEventListener('click',()=>{
    document.querySelector('.navbar').style.margin='0px'
    document.querySelector('.navbar').classList.add('duration-200')
    cross.style.display='block'
    block.style.display='none'
})

cross.addEventListener('click',()=>{
    document.querySelector('.navbar').style.marginTop='-500px'
    document.querySelector('.navbar').classList.add('duration-200')
    cross.style.display='none'
    block.style.display='block'
})


document.addEventListener('DOMContentLoaded', () => {
    let products = [];

    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            console.log(products);
            addDataToHTML();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    function addDataToHTML() {
        const listProduct = document.querySelector('.place-list');

        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('shadow-xl', 'rounded-lg', 'overflow-hidden','w-full','sm:w-newwid1','lg:w-newid','my-3');


            newProduct.innerHTML = `
            <img class="w-full" src="${product.image}" alt="${product.name}">
            <div class="mx-5">
            <h2 class="mt-6 text-2xl mb-3 pb-3  font-bold border-b-2">${product.name}</h2>
            <p class="border-b-2 mb-3 pb-3">${product.description}</p>
            <div class="flex justify-between items-center my-3 py-3">
            <a href="detail.html?id=${product.id}" class="px-8 py-3 inline-block my-4 bg-mycol-0 hover:scale-110  hover:duration-300 duration-300 text-white  text-sm font-bold rounded-md">Detail</a>
           <div class="flex gap-2  items-center my-3 py-3">
           <div class="text-mycol2-0 font-bold">$${product.price1}</div>
           <div class="ont-medium text-mycol3-0"><strike>$${product.price}</strike></div>
           </div>
            </div>
            </div>
            `;

            listProduct.appendChild(newProduct);
        });
    }
});