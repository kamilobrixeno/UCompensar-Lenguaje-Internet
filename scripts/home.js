const dataDogs = [
    {
        id: "dv-img1",
        img: "img1",
        title: "Affenpinscher",
        content: "Pese a su apariencia de terrier y su traviesa expresión similar a la de un mono, el Affenpinscher es un perro de compañía que en edad adulta mide entre 24 y 28 cm de la altura (contando desde las patas hasta la parte superior de la escápula) y pesa unos 3 o 4 kg. Su pelaje es áspero y suele ser negro aunque, a veces, también presenta un leve tono gris."
    },
    {
        id: "dv-img2",
        img: "img2",
        title: "Afgano",
        content: "El Afgano es un perro de aspecto noble que luce con orgullo y elegancia su largo y brillante pelaje, que es su mayor atractivo. Es una raza grande con una altura de 68 a 74 cm en la edad adulta para el macho y de 63 a 69 cm en el caso de las hembras. Su magnífico pelaje puede ser de cualquier color, desde negro a plateado, pasando por todos los colores y combinaciones posibles. El peso medio es de 25 kg aproximadamente con un mínimo de unos 20 kg y un máximo de unos 27 kg dependiendo del sexo y la constitución del perro."
    },
    {
        id: "dv-img3",
        img: "img3",
        title: "Akita japonés",
        content: "El Akita es un perro grande y fuerte de gran esencia y dignidad. El porte orgulloso de su cabeza se ve realzado por unas orejas pequeñas y unos ojos oscuros. Son impresionantes gracias a su pelaje grueso y afelpado, de color rojo leonado, sésamo, atigrado y blanco. Los machos adultos miden entre 64 y 70 cm y las hembras, entre 58 y 64 cm. El peso puede estar entre 34 y 50 kg."
    },
    {
        id: "dv-img4",
        img: "img4",
        title: "Basenji",
        content: "Este perro de tamaño pequeño-mediano tiene una cola muy curvada y la frente arrugada. El pelaje es brillante, corto y suave y puede ser rojo y blanco, negro y blanco, negro, canela y blanco, tricolor o con muchos colores mezclados. La altura ideal para un adulto macho es de 43 cm (desde las patas hasta el punto más alto del omóplato) y de 40 cm para las hembras. En la edad adulta, el peso ideal para los machos es de 11 kg y para las hembras, 9,5 kg."
    },
    {
        id: "dv-img5",
        img: "img5",
        title: "Basset Azul de Gascuña",
        content: "El Basset Azul es un sabueso de aspecto noble que tiene el cuerpo largo y las patas cortas (típicas de la raza Basset). Es fuerte y atlético, pero no es un perro pesado ni voluminoso. De tamaño medio, mide entre 30 y 38 cm de altura en edad adulta y pesa entre 7 y 9 kilos. La característica más llamativa es el color de su pelaje: negro sobre un fondo blanco, cubierto de motas negras que le dan ese aspecto azulado, aunque a veces también pueden tener un tono canela. Para más información, consulta el estándar de la raza."
    },
    {
        id: "dv-img6",
        img: "img6",
        title: "Basset Grifón vandeano (grande)",
        content: "Este sabueso fuerte y de tamaño medio es un poco más largo que alto. El pelaje de este Grifón es áspero y resistente a la intemperie y puede ser blanco o amarillento, naranja, negro, tricolor o canela. Se caracteriza por el pelo que tiene sobre las cejas, la barba y el bigote. Los machos adultos alcanzan una altura de 40 a 44 cm y las hembras, de 39 a 43 cm."
    },
    {
        id: "dv-img7",
        img: "img7",
        title: "Basset Grifón vandeano (pequeño)",
        content: "El pequeño Basset Grifón vandeano es una raza fuerte, de tamaño medio o pequeño y pecho ancho. Tiene la forma típica de un Basset, con una longitud superior a su altura y patas cortas. Los adultos miden entre 34 y 38 cm. Su pelaje es áspero y de longitud media y se presenta en color blanco con marcas color limón, naranja, grisáceo o negro, o tricolor."
    },
    {
        id: "dv-img8",
        img: "img8",
        title: "Basset Hound",
        content: "El Basset hound es un perro de patas cortas (su nombre procede de la palabra francesa «bas» que significa «bajo»). Su pelaje corto y suave puede ser de todos los colores típicos de los perros, pero normalmente es tricolor (negro, canela y blanco) o bicolor (color limón y blanco). Los Bassets adultos miden de 33 a 38 cm y pesan desde 18 kg hasta 27 kg."
    },
    {
        id: "dv-img9",
        img: "img9",
        title: "Basset leonado de Bretaña",
        content: "Este perro de tamaño medio y pelaje áspero tiene el cuerpo típico de la raza Basset, aunque no está tan cerca del suelo como el Basset Hound y de adulto mide entre 32 y 38 cm. Pesa unos 16-18 kg en edad adulta. El pelaje puede ser color canela, dorado o rojizo. Algunos ejemplares tienen algo de blanco en el pecho."
    },
    {
        id: "dv-img10",
        img: "img10",
        title: "Beagle",
        content: "Estos perros robustos y atrevidos son afables, además de compactos y atléticos. Tienen un pelaje corto, denso, resistente a las inclemencias del clima y se presenta en varios colores y patrones. (Para más información, consulta el estándar de la raza). Miden de 33 a 40 cm y pesan de 10 o 11 kg."
    },
    {
        id: "dv-img11",
        img: "img11",
        title: "Beauceron",
        content: "Este perro grande, musculoso y de aspecto imponente pesa de 30 a 38,5 kg en la edad adulta. Los machos adultos miden de 65 a 70 cm de altura y las hembras, unos 68 cm. El pelaje es corto y negro y con unas manchas características de color canela o tricolor (gris y negro con manchas color canela)."
    },
    {
        id: "dv-img12",
        img: "img12",
        title: "Bedlington Terrier",
        content: "Este Terrier de patas largas y tamaño medio o pequeño es muy fácil de reconocer. Tiene el cráneo estrecho y un pelaje similar al de la oveja, que se presenta en azul, marrón rojizo o en color arena, con o sin manchas canela. Los machos adultos miden entre 38 y 43 cm y pesan de 8 a 10 kg."
    }
]

const getData = (incomingId) => {
    dataDogs.forEach(element => {
        if(element.id === incomingId){
            localStorage.setItem('information-title', element.title);
            localStorage.setItem('information-content', element.content);
            localStorage.setItem('information-image', document.getElementById(element.img).src);
        }
    });
}


document.getElementById('dv-img1').addEventListener('click', function() {
    getData("dv-img1")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img2').addEventListener('click', function() {
    getData("dv-img2")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img3').addEventListener('click', function() {
    getData("dv-img3")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img4').addEventListener('click', function() {
    getData("dv-img4")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img5').addEventListener('click', function() {
    getData("dv-img5")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img6').addEventListener('click', function() {
    getData("dv-img6")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img7').addEventListener('click', function() {
    getData("dv-img7")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img8').addEventListener('click', function() {
    getData("dv-img8")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img9').addEventListener('click', function() {
    getData("dv-img9")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img10').addEventListener('click', function() {
    getData("dv-img10")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img11').addEventListener('click', function() {
    getData("dv-img11")
    window.location.href = '../pages/information.html';    
});

document.getElementById('dv-img12').addEventListener('click', function() {
    getData("dv-img12")
    window.location.href = '../pages/information.html';    
});