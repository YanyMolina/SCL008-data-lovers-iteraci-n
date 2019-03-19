const data = window.POKEMON.pokemon;
const pokeFilter = document.getElementById('root'); 


//Mostrar pantalla de filtrado y ocultar home
const button_enter = document.getElementById('btn');

const welcome = document.getElementById('welcome');
const category = document.getElementById('category');

button_enter.addEventListener('click', () => {
  welcome.style.display ="none";
  category.style.display="block";
});
  
//Acá al presionar el botón ingresar me aparezcan las categorias
const btnCategorias = document.getElementById('btn');

btnCategorias.addEventListener('click', () => {
  let username= document.getElementById("name").value;
  document.getElementById('root').innerHTML = '';
  document.getElementById('root').innerHTML += 
  `<div class="username">
  <h1>Categorías</h1>
  <h4>Bienvenido ${username}</h4>
  </div>
  <div class="pokeCategory">
  <button id="Water"><img class="element" src="img/Agua.png" alt="Categoria Agua"></button>
  <button id="Fire"><img class="element" src="img/Fuego.png" alt="categoria Fuego"></button>
  <button id="Grass"><img class="element" src="img/Planta.png" alt="Categoria Planta"></button>
  <button id="Ground"><img class="element" src="img/Tierra.png" alt="Categoria Tierra"></button>
  <button id="Rock"><img class="element" src="img/Roca.png" alt="Categoria Roca"></button>
  <button id="Ice"><img class="element" src="img/Hielo.png" alt="Categoria Hielo"></button>
  <button id="Electric"><img class="element" src="img/Electrico.png" alt="Categoria Eléctrico"></button>
  <button id="Dragon"><img class="element" src="img/Dragon.png" alt="Categoria Dragón"></button>
  <button id="Ghost"><img class="element" src="img/Fantasma.png" alt="Categoria Fantasma"></button>
  <button id="Psychic"><img class="element" src="img/Psiquico.png" alt="Categoria Psiquico"></button>
  <button id="Normal"><img class="element" src="img/Normal.png" alt="Categoria Normal"></button>
  <button id="Fighting"><img class="element" src="img/Lucha.png" alt="Categoria Lucha"></button>
  <button id="Poison"><img class="element" src="img/Veneno.png" alt="Categoria Veneno"></button>
  <button id="Bug"><img class="element" src="img/Insecto.png" alt="Categoria Insecto"></button>
  <button id="Flying"><img class="element" src="img/Volador.png" alt="Categoria Volador"></button>
  </div>`


  //Mostrar data filtrada pinchando las imagenes
  const botones = document.getElementsByTagName("button");

  for (let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", ( ) =>{
      let condition = botones[i].getAttribute("id");
      let resultFilter=window.filterData(data,condition);
      pokeFilter.innerHTML="";
      resultFilter.forEach(element =>{
        pokeFilter.innerHTML+=
        `<div class="target col-xl-2 col-lg-3 col-d-6 col-sm6 col-8">
        <div class="card">
        <div class="img">
        <div class="card-title">
      <h2>${element.name}</h2>
      <img src=" ${element.img} ">
      </div>
      <h4> #${element.num}</h4>
      <h4>Tipo:${element.type.join(" - ")}</h4>
      <p>Debilidad: ${element.weaknesses}</p>
      <p class="datos2">Posibilidad de encontrarlo: ${element.spawn_chance}%</p>
      </div>
      </div>
    </div>
  </div>
      `
      });
    let result = window.computeStats(data,condition);
    pokeFilter.innerHTML+=`<div class="total"><h3>Total</h3>
    <p>${result}</p></div>`
  });
  }
})

//Modal Trigger -->
      /*<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>*/

 //Mostrar la data con la función filtrado
  window.showData = (data) =>{
    let resultshowdata=" ";
  data.forEach(element => {
    resultshowdata=pokeFilter.innerHTML ='';
    resultshowdata=pokeFilter.innerHTML +=
    ` <div class="target col-xl-2 col-lg-3 col-d-6 col-sm6 col-8">
    <div class="card">
    <div class="img">
    <div class="card-title">
      <h2>${element.name}</h2>
      <img src=" ${element.img} ">
      </div>
      <h4> #${element.num}</h4>
      <h4>Tipo:${element.type.join(" - ")}</h4>
      <p>Debilidad: ${element.weaknesses}</p>
      <p class="datos2">Posibilidad de encontrarlo: ${element.spawn_chance}%</p>
      </div>
      </div>
      </div>`
       })
  return resultshowdata;
   
  };
  
  let select = document.getElementById("type");
  select.addEventListener("change", () => {
    let condition = select.value;
    let resultFilter = window.filterData( data,condition);
   pokeFilter.innerHTML="";
    resultFilter.forEach(element => {
  
    pokeFilter.innerHTML +=
    `<div class="target col-xl-2 col-lg-3 col-d-6 col-sm6 col-8">
    <div class="card">
    <div class="img">
    <div class="card-title">
      <h2>${element.name}</h2>
      <img src=" ${element.img} ">
      </div>
      <h4> #${element.num}</h4>
      <h4>Tipo:${element.type.join(" - ")}</h4>
      <p>Debilidad: ${element.weaknesses}</p>
      <p class="datos2">Posibilidad de encontrarlo: ${element.spawn_chance}%</p>
      </div>
      </div>
      </div>`
       });
       let condition1 = select.value;
       let result = window.computeStats(data,condition1);
       pokeFilter.innerHTML+=`<div class="total"><h3>Total</h3>
       <p>${result}</p></div>`
      });
      
      //Mostrar Total de pokemones
      /*let calcule = document.getElementById("type");
      calcule.addEventListener("click", () =>{
        let condition = calcule.value;
        let result = window.computeStats(data,condition);
        pokeFilter.innerHTML+=`<div><h3>Total</h3>
        <p>${result}</p></div>`
      });*/

      //Mostrar la data con la función ordenar
      const pokeOrder = document.getElementById('sort');

      pokeOrder.addEventListener('change', () => {
        let selection = pokeOrder.value;
         let selectionOrder = window.sortPoke(data, 'name', selection); 
         pokeFilter.innerHTML = '';
         selectionOrder.forEach(element => { 
             pokeFilter.innerHTML += `
             <div class="target col-xl-2 col-lg-3 col-d-6 col-sm6 col-8">
      <div class="card">
      <div class="img">
      <div class="card-title">
      <h2>${element.name}</h2>
      <img src=" ${element.img} ">
      </div>
      <h4> #${element.num}</h4>
      <h4>Tipo:${element.type.join(" - ")}</h4>
      <p>Debilidad: ${element.weaknesses}</p>
      <p class="datos2">Posibilidad de encontrarlo: ${element.spawn_chance}%</p>
      </div>
      </div>
      </div>`
         });
      });