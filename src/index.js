import './styles/global.css';
import homeTab from './modules/homeTab';
import menuTab from './modules/menuTab';
import aboutTab from './modules/aboutTab';

window.addEventListener('load', () => {
    document.querySelector('.home-tab').click();
})

document.querySelector('.main-nav').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        const activeBtn = document.querySelector('button.active');

        if(activeBtn) {
            activeBtn.classList.remove('active');
        }

        clearContent();

        if(e.target.className === 'home-tab') {
            homeTab();
        }

        if(e.target.className === 'menu-tab') {
            menuTab();
        }

        if(e.target.className === 'about-tab') {
            aboutTab();
        }

        e.target.classList.add('active');
    }
})

function clearContent() {
    document.getElementById('content').replaceChildren();
    document.getElementById('content').classList.remove('menu');
}

