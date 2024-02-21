import '../styles/aboutPage.css';

export default function aboutTab() {
    const header = document.createElement('h2');
    header.textContent = 'Come on, pay us a visit!';

    const address = document.createElement('address');
    address.textContent = '2463 Melville Street, Hazel';

    const contact = document.createElement('p');
    contact.textContent = 'Contact: bestcoffe@mail.com';

    const container = document.createElement('div');
    container.classList.add('info-container');

    container.append(header, address, contact);

    document.getElementById('content').appendChild(container);
}