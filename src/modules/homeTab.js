import '../styles/homePage.css';

export default function homeTab() {
    const heading = document.createElement('h1');
    heading.textContent = 'Best coffee in town!';
    heading.classList.add('heading');

    const description = document.createElement('p');
    description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque aut quibusdam odio quam et inventore sit? Non eos, eveniet architecto doloremque animi blanditiis rerum dicta? Beatae corporis quo quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque aut quibusdam odio quam et inventore sit? Non eos, eveniet architecto doloremque animi blanditiis rerum dicta? Beatae corporis quo quaerat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab neque aut quibusdam odio quam et inventore sit? Non eos, eveniet architecto doloremque animi blanditiis rerum dicta? Beatae corporis quo quaerat!';
    description.classList.add('description');

    document.getElementById('content').append(heading, description);
}