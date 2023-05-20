let imagenesCargadas = 1;
const isIntersecting = (entry) => {
    console.log('imagenes cargadas:', imagenesCargadas)
    return entry.isIntersecting
}
const loadImage = (entry) =>{
    const container = entry.target;
    const image = container.firstChild;
    const url  = image.dataset.src;
    image.src = url;
    imagenesCargadas +=1;
    if (typeof url != 'undefined'){

        observer.unobserve(container);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
})
//

const registerImage =  image => {
    setTimeout(()=>{
        observer.observe(image); 
    },1000)
}
export {registerImage};