import data from '../data.json';
import '../styles/menuPage.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default function menuTab() {
    const list = document.createElement('ul');
    list.classList.add('menu-list');

    data.forEach((item, i) => {
        const listItem = document.createElement('li');

        const image = new Image();
        image.src = images[item.image];

        const container = document.createElement('div');
        container.classList.add('container');

        const productName = document.createElement('h3');
        productName.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = 'Morbi scelerisque bibendum tortor semper tincidunt. Etiam tempor rhoncus euismod. Suspendisse quis mi vel justo suscipit sollicitudin'

        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = item.price;

        container.append(productName, description, price);

        listItem.append(image, container);

        list.appendChild(listItem);
    });

    document.getElementById('content').appendChild(list);
    document.getElementById('content').classList.add('menu');
}