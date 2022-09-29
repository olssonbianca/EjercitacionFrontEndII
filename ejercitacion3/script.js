const felinos = [{
    img: 'imagenes/tiger.jpg',
    titulo: "El tigre" ,
    descripcion: "El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño."
}, {
    img: 'imagenes/chita.jpg',
    titulo: "El chita" ,
    descripcion: "El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros."
}, {
    img: 'imagenes/jaguar.jpg',
    titulo: "El jaguar" ,
    descripcion:"El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo)."
}, {
    img: 'imagenes/leon.jpg',
    titulo: "El leon" ,
    descripcion: "El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India"
}, {
    img:' imagenes/leopardo.jpg',
    titulo: "El leopardo" ,
    descripcion: "El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico)."
}, {
    img:' imagenes/pantera-negra.jpg',
    titulo: "La pantera negra" ,
    descripcion: " La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales."
}]

/* ---------------------------------- ---- ---------------------------------- */

let div= document.querySelector('.contenedor')


function cardFelinos(felinos, contenedor){
    let item = document.createElement('div')
    let imagen= document.createElement('img')
    let titulo= document.createElement('h2')
    let info= document.createElement('p')

    item.setAttribute('class', 'item')
    imagen.setAttribute('src', felinos.img)
    titulo.innerText= felinos.titulo
    info.innerText=felinos.descripcion
    item.append(imagen, titulo, info)
    contenedor.appendChild(item)
}

for(const felino of felinos){
    cardFelinos(felino, div)
}

function darkMode(){
    document.querySelector('body').classList.toggle('dark');
}