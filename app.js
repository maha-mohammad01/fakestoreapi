class Product{
    constructor (title, price, image){
        this.title = title;
        this.price = price;
        this.image = image;
    }
}


const products = [];

fetch('https://fakestoreapi.com/products?limit=20') 
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const productData = data[i];
            const product = new Product(
                productData.title,
                productData.price,
                productData.image
            );
            products.push(product);
        }
        const mainSection = document.getElementById('main');

        products.map(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img  style="width:250px;height:200px; " src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Price: ${product.price}</p>
                <p> ${product.description}</p>
            `;
            mainSection.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));