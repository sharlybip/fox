import { registerImage } from "./lazy.js";

const appNode = document.getElementById('images');
const addbutton = document.querySelector('button');
const deletebutton = document.querySelector('.delete');


const nodeImage = () => {
    const container = document.createElement('div');
    
    container.className = 'p-4 bg-black w-96 mx-auto ';
    container.height = '450';
    container.width = '342';
    const img = document.createElement('img');
    img.className = 'mx-auto bg-slate-300 rounded-md';
    let url;
    window.fetch('https://randomfox.ca/floof')
    .then(rta => rta.json())
    .then(rta => {
        img.dataset.src = `${rta.image}`
    });
    img.width = '320';
    img.style.objectFit = 'cover'
    container.append(img);
    return container;
}

let imagenes = 0;
const loadImage = () => {
    imagenes +=1;
    console.log('Imagenes',imagenes)
    const newImage = nodeImage();
    appNode.append(newImage);
    registerImage(newImage);
    
    
};
addbutton.addEventListener('click', loadImage)
deletebutton.addEventListener('click', () => {
    appNode.innerText = '';
    imagenes = 0;
})
