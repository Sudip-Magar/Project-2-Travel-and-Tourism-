let block = document.querySelector('.cross');
let cross = document.querySelector('.cross1')

block.addEventListener('click', () => {
    document.querySelector('.navbar').style.margin = '0px'
    document.querySelector('.navbar').classList.add('duration-200')
    cross.style.display = 'block'
    block.style.display = 'none'
})

cross.addEventListener('click', () => {
    document.querySelector('.navbar').style.marginTop = '-500px'
    document.querySelector('.navbar').classList.add('duration-200')
    cross.style.display = 'none'
    block.style.display = 'block'
})

// Fetch product data from products.json
let products = [];
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        showDetails();
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });

// Show details of the selected product
function showDetails() {
    let detail = document.querySelector('.detail');
    let productId = new URLSearchParams(window.location.search).get('id');
    let thisProduct = products.filter(value => {
        return value.id == productId
    })[0];

    if (!thisProduct) {
        window.location.href = "/"; // Redirect to homepage if product not found
        return;
    }

    // Update HTML with product details
    detail.querySelector('.image img').src = thisProduct.image ;
    detail.querySelector('.name').innerText = thisProduct.name;
    detail.querySelector('.day').innerText = thisProduct.day;
    detail.querySelector('.diff').innerText = thisProduct.diff;
    detail.querySelector('.overview').innerText = thisProduct.description1;
    detail.querySelector('.price1').innerText = '$' + thisProduct.price1;
    detail.querySelector('.sprice').innerText = 'BOOK NOW FOR $' + thisProduct.price1;

    // Add similar products to the list
    let listProduct = document.querySelector('.place-list');
    products.filter(product => product.id != productId).forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('shadow-xl', 'rounded-lg', 'overflow-hidden', 'w-full', 'sm:w-newwid1', 'lg:w-newid', 'my-3');

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

    const healthCheckbox = document.getElementById('health');
    const medicalCheckbox = document.getElementById('medical');

    const healthPrice = 200;
    const medicalPrice = 50;

    healthCheckbox.addEventListener('change', updateTotalPrice);
    medicalCheckbox.addEventListener('change', updateTotalPrice);

    function updateTotalPrice() {
        let totalPrice = 0;

        if (healthCheckbox.checked) {
            totalPrice = healthPrice + thisProduct.price1;
            detail.querySelector('.sprice').innerText = 'BOOK NOW FOR $' + totalPrice;
        }
        if (medicalCheckbox.checked) {
            totalPrice = thisProduct.price1 + medicalPrice;
            detail.querySelector('.sprice').innerText = 'BOOK NOW FOR $' + totalPrice;
        }
        if (healthCheckbox.checked && medicalCheckbox.checked) {
            totalPrice = thisProduct.price1 + medicalPrice + healthPrice;
            detail.querySelector('.sprice').innerText = 'BOOK NOW FOR $' + totalPrice;
        }
        if (!healthCheckbox.checked && !medicalCheckbox.checked) {
            detail.querySelector('.sprice').innerText = 'BOOK NOW FOR $' + thisProduct.price1;
        }
    }
}




let data = 1;
let num = document.querySelector('#num');


num.innerText = data;

function increament() {
    data = data + 1;
    if (data >= 7) {
        data = 7;
    }
    num.innerText = data;
}
function decreament() {
    data = data - 1;
    if (data <= 1) {
        data = 1;
    }
    num.innerText = data;
}
//children
let data1 = 0;
let num1 = document.querySelector('#num1');
num1.innerText = data1;
function increament1() {
    data1 = data1 + 1;
    if (data1 >= 6) {
        data1 = 6;
    }
    num1.innerText = data1;
}
function decreament1() {
    data1 = data1 - 1;
    if (data1 <= 0) {
        data1 = 0;
    }
    num1.innerText = data1;
}


let book=document.querySelector('.book');
let Enquiry=document.querySelector('.Enquiry');

book.addEventListener('click',()=>{
    document.querySelector('.book-bod').classList.remove('hidden');
    document.querySelector('.Enquiry-bod').classList.add('hidden');
    book.classList.add('text-mycol-0');
    Enquiry.classList.remove('text-mycol-0')
})
Enquiry.addEventListener('click',()=>{
    document.querySelector('.book-bod').classList.add('hidden');
    document.querySelector('.Enquiry-bod').classList.remove('hidden');
    Enquiry.classList.add('text-mycol-0')
    book.classList.remove('text-mycol-0')
})