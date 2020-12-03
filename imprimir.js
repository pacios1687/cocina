// NUEVO: Crear DB
let DB;
//nombre de ensalada
const EnsaladaInput = document.querySelector('#ensalada');

//tomate
const TomateInput = document.querySelector('#checkbox1');
const cantidadTomateInput = document.querySelector('#tomate');
const medidaTomateInput = document.querySelector('#medida-tomate');

  //lechuga
  const LechugaInput = document.querySelector('#checkbox2');
  const cantidadLechugaInput = document.querySelector('#lechuga');
  const medidaLechugaInput = document.querySelector('#medida-lechuga');
  
  //zanahoria
  const ZanahoriaInput = document.querySelector('#checkbox4');
  const cantidadZanahoriaInput = document.querySelector('#zanahoria');
  const medidaZanahoriaInput = document.querySelector('#medida-zanahoria');
  
  //pepino
  const PepinoInput = document.querySelector('#checkbox3');
  const cantidadPepinoInput = document.querySelector('#pepino');
  const medidaPepinoInput = document.querySelector('#medida-pepino');
  
  //PEPINILLO
  const PepinilloInput = document.querySelector('#checkbox5');
  const cantidadPepinilloInput = document.querySelector('#pepinillo');
  const medidaPepinilloInput = document.querySelector('#medida-pepinillo');
  //AceitunasNegras
  const AceitunasNegrasInput = document.querySelector('#checkbox6');
  const cantidadAceitunasNegrasInput = document.querySelector('#aceitunas-negras');
  const medidaAceitunasNegrasInput = document.querySelector('#medida-aceitunas-negras');


  //Queso cabara
  const CabraInput = document.querySelector('#checkbox8');
  const cantidadCabraInput = document.querySelector('#quesocabra');
  const medidaCabraInput = document.querySelector('#medida-quesocabra');
  
  //Queso Bufala
  const BufalaInput = document.querySelector('#checkbox9');
  const cantidadBufalaInput = document.querySelector('#quesobufala');
  const medidaBufalaInput = document.querySelector('#medida-quesobufala');
  
  //Beicon
  const BeiconInput = document.querySelector('#checkbox10');
  const cantidadBeiconInput = document.querySelector('#beicon');
  const medidaBeiconInput = document.querySelector('#medida-beicon');
  
  //Frutos Cecos
  const FrutosInput = document.querySelector('#checkbox11');
  const cantidadFrutosInput = document.querySelector('#frutoscecos');
  const medidaFrutosInput = document.querySelector('#medida-frutoscecos');

  //Cebolla
  const CebollaInput = document.querySelector('#checkbox12');
  const cantidadCebollaInput = document.querySelector('#cebolla');
  const medidaCebollaInput = document.querySelector('#medida-cebolla');

  //Queso Feta
  const FetaInput = document.querySelector('#checkbox13');
  const cantidadFetaInput = document.querySelector('#quesofeta');
  const medidaFetaInput = document.querySelector('#medida-quesofeta');

  //Maiz
  const MaizInput = document.querySelector('#checkbox14');
  const cantidadMaizInput = document.querySelector('#maiz');
  const medidaMaizInput = document.querySelector('#medida-maiz');
  
  //Pimiento
  const PiminetoInput = document.querySelector('#checkbox15');
  const cantidadPiminetoInput = document.querySelector('#pimiento');
  const medidaPiminetoInput = document.querySelector('#medida-pimiento');
  
  //Queso Capress
  const CapressInput = document.querySelector('#checkbox16');
  const cantidadCapressInput = document.querySelector('#quesocapress');
  const medidaCapressInput = document.querySelector('#medida-quesocapress');
  
  //Albahaca
  const AlbahacaInput = document.querySelector('#checkbox17');
  const cantidadAlbahacaInput = document.querySelector('#albahaca');
  const medidaAlbahacaInput = document.querySelector('#medida-albahaca');

  //Oregano
  const OreganoInput = document.querySelector('#checkbox18');
  const cantidadOreganoInput = document.querySelector('#oregano');
  const medidaOreganoInput = document.querySelector('#medida-oregano');
  //Atun
const AtunInput = document.querySelector('#checkbox19');
const cantidadAtunInput = document.querySelector('#atun');
const medidaAtunInput = document.querySelector('#medida-atun');

  //Huevo
  const HuevoInput = document.querySelector('#checkbox20');
  const cantidadHuevoInput = document.querySelector('#huevococido');
  const medidaHuevoInput = document.querySelector('#medida-huevococido');
  
  //Queso Burrata
  const BurrataInput = document.querySelector('#checkbox21');
  const cantidadBurrataInput = document.querySelector('#quesoburrata');
  const medidaBurrataInput = document.querySelector('#medida-quesoburrata');
  
  //Pesto
  const PestoInput = document.querySelector('#checkbox22');
  const cantidadPestoInput = document.querySelector('#pesto');
  const medidaPestoInput = document.querySelector('#medida-pesto');
  
  //Tostadas
  const TostadasInput = document.querySelector('#checkbox23');
  const cantidadTostadasInput = document.querySelector('#tosatadas');
  const medidaTostadasInput = document.querySelector('#medida-tosatadas');
  //AceitunasNegras
  const PlatanoInput = document.querySelector('#checkbox24');
  const cantidadPlatanoInput = document.querySelector('#platano');
  const medidaPlatanoInput = document.querySelector('#medida-platano');
  //Kiwi
const KiwiInput = document.querySelector('#checkbox25');
const cantidadKiwiInput = document.querySelector('#Kiwi');
const medidaKiwiInput = document.querySelector('#medida-Kiwi');

  //Manzana
  const ManzanaInput = document.querySelector('#checkbox26');
  const cantidadManzanaInput = document.querySelector('#manzana');
  const medidaManzanaInput = document.querySelector('#medida-manzana');
  
  //Pollo
  const PolloInput = document.querySelector('#checkbox27');
  const cantidadPolloInput = document.querySelector('#pollo');
  const medidaPolloInput = document.querySelector('#medida-pollo');
  
  //Salsa Rosa
  const RosaInput = document.querySelector('#checkbox28');
  const cantidadRosaInput = document.querySelector('#salsarosa');
  const medidaRosaInput = document.querySelector('#medida-salsarosa');
  
  //Salsa Cesar
  const CesarInput = document.querySelector('#checkbox29');
  const cantidadCesarInput = document.querySelector('#salsacesar');
  const medidaCesarInput = document.querySelector('#medida-salsacesar');
  //Salsa Balzamica
  const BalzamicaInput = document.querySelector('#checkbox30');
  const cantidadBalzamicaInput = document.querySelector('#salsabalzamica');
  const medidaBalzamicaInput = document.querySelector('#medida-salsabalzamica');
  //Salsa Yogurt
  const YogurtInput = document.querySelector('#checkbox31');
  const cantidadYogurtInput = document.querySelector('#salsayogurt');
  const medidaYogurtInput = document.querySelector('#medida-salsayogurt');
  //Mermelada
  const AguacateInput = document.querySelector('#checkbox32');
  const cantidadAguacateInput = document.querySelector('#aguacate');
  const medidaAguacateInput = document.querySelector('#medida-aguacate');

  


// Contenedor para las Ingredientes
const contenedorIngredientes = document.querySelector('#imprimir');
//IMG
const fileInput = document.querySelector('#file')
const img = document.querySelector('#img')


//Formulario
const formulario = document.querySelector('#recetas');
//NUEVO: 
document.addEventListener('DOMContentLoaded', () => {
    eventListeners(); 
    crearDB();
  
});





// Eventos
function eventListeners() {
    //ensalada
    EnsaladaInput.addEventListener('change', datosIngrediente2);
    //tomate
    TomateInput.addEventListener('change', datosIngrediente);
    cantidadTomateInput.addEventListener('change', datosIngrediente2);
    medidaTomateInput.addEventListener('change', datosIngrediente2);
     //lechuga
     LechugaInput.addEventListener('change', datosIngrediente);
     cantidadLechugaInput.addEventListener('change', datosIngrediente2);
     medidaLechugaInput.addEventListener('change', datosIngrediente2);
     //ZHANAHORIA
     ZanahoriaInput.addEventListener('change', datosIngrediente);
     cantidadZanahoriaInput.addEventListener('change', datosIngrediente2);
     medidaZanahoriaInput.addEventListener('change', datosIngrediente2);
     //PEPINO
     PepinoInput.addEventListener('change', datosIngrediente);
     cantidadPepinoInput.addEventListener('change', datosIngrediente2);
     medidaPepinoInput.addEventListener('change', datosIngrediente2);
     //PEPINILLO
     PepinilloInput.addEventListener('change', datosIngrediente);
     cantidadPepinilloInput.addEventListener('change', datosIngrediente2);
     medidaPepinilloInput.addEventListener('change', datosIngrediente2);
     //ACEITUNAS-NEGRAS
     AceitunasNegrasInput.addEventListener('change', datosIngrediente);
     cantidadAceitunasNegrasInput.addEventListener('change', datosIngrediente2);
     medidaAceitunasNegrasInput.addEventListener('change', datosIngrediente2);
    
     //Cabra
     CabraInput.addEventListener('change', datosIngrediente);
     cantidadCabraInput.addEventListener('change', datosIngrediente2);
     medidaCabraInput.addEventListener('change', datosIngrediente2);
     //Bufala
     BufalaInput.addEventListener('change', datosIngrediente);
     cantidadBufalaInput.addEventListener('change', datosIngrediente2);
     medidaBufalaInput.addEventListener('change', datosIngrediente2);
     //Beicon
     BeiconInput.addEventListener('change', datosIngrediente);
     cantidadBeiconInput.addEventListener('change', datosIngrediente2);
     medidaBeiconInput.addEventListener('change', datosIngrediente2);
     //Frutos
     FrutosInput.addEventListener('change', datosIngrediente);
     cantidadFrutosInput.addEventListener('change', datosIngrediente2);
     medidaFrutosInput.addEventListener('change', datosIngrediente2);
     //Cebolla
     CebollaInput.addEventListener('change', datosIngrediente);
     cantidadCebollaInput.addEventListener('change', datosIngrediente2);
     medidaCebollaInput.addEventListener('change', datosIngrediente2);
      //Feta
    FetaInput.addEventListener('change', datosIngrediente);
    cantidadFetaInput.addEventListener('change', datosIngrediente2);
    medidaFetaInput.addEventListener('change', datosIngrediente2);
     //Maiz
     MaizInput.addEventListener('change', datosIngrediente);
     cantidadMaizInput.addEventListener('change', datosIngrediente2);
     medidaMaizInput.addEventListener('change', datosIngrediente2);
     //Pimiento
     PiminetoInput.addEventListener('change', datosIngrediente);
     cantidadPiminetoInput.addEventListener('change', datosIngrediente2);
     medidaPiminetoInput.addEventListener('change', datosIngrediente2);
     //Queso Capress
     CapressInput.addEventListener('change', datosIngrediente);
     cantidadCapressInput.addEventListener('change', datosIngrediente2);
     medidaCapressInput.addEventListener('change', datosIngrediente2);
    
     //Albahaca
     AlbahacaInput.addEventListener('change', datosIngrediente);
     cantidadAlbahacaInput.addEventListener('change', datosIngrediente2);
     medidaAlbahacaInput.addEventListener('change', datosIngrediente2);
      //Oregano
    OreganoInput.addEventListener('change', datosIngrediente);
    cantidadOreganoInput.addEventListener('change', datosIngrediente2);
    medidaOreganoInput.addEventListener('change', datosIngrediente2);
     //Atun
     AtunInput.addEventListener('change', datosIngrediente);
     cantidadAtunInput.addEventListener('change', datosIngrediente2);
     medidaAtunInput.addEventListener('change', datosIngrediente2);
     //Huevo cocido
     HuevoInput.addEventListener('change', datosIngrediente);
     cantidadHuevoInput.addEventListener('change', datosIngrediente2);
     medidaHuevoInput.addEventListener('change', datosIngrediente2);
     //Burrata
     BurrataInput.addEventListener('change', datosIngrediente);
     cantidadBurrataInput.addEventListener('change', datosIngrediente2);
     medidaBurrataInput.addEventListener('change', datosIngrediente2);
     //Pesto
     PestoInput.addEventListener('change', datosIngrediente);
     cantidadPestoInput.addEventListener('change', datosIngrediente2);
     medidaPestoInput.addEventListener('change', datosIngrediente2);
     //Tostadas
     TostadasInput.addEventListener('change', datosIngrediente);
     cantidadTostadasInput.addEventListener('change', datosIngrediente2);
     medidaTostadasInput.addEventListener('change', datosIngrediente2);
      //Platano
    PlatanoInput.addEventListener('change', datosIngrediente);
    cantidadPlatanoInput.addEventListener('change', datosIngrediente2);
    medidaPlatanoInput.addEventListener('change', datosIngrediente2);
     //Kiwi
     KiwiInput.addEventListener('change', datosIngrediente);
     cantidadKiwiInput.addEventListener('change', datosIngrediente2);
     medidaKiwiInput.addEventListener('change', datosIngrediente2);
     //Manzana
     ManzanaInput.addEventListener('change', datosIngrediente);
     cantidadManzanaInput.addEventListener('change', datosIngrediente2);
     medidaManzanaInput.addEventListener('change', datosIngrediente2);
     //Pollo
     PolloInput.addEventListener('change', datosIngrediente);
     cantidadPolloInput.addEventListener('change', datosIngrediente2);
     medidaPolloInput.addEventListener('change', datosIngrediente2);
     //Rosa
     RosaInput.addEventListener('change', datosIngrediente);
     cantidadRosaInput.addEventListener('change', datosIngrediente2);
     medidaRosaInput.addEventListener('change', datosIngrediente2);
     //Cesar
     CesarInput.addEventListener('change', datosIngrediente);
     cantidadCesarInput.addEventListener('change', datosIngrediente2);
     medidaCesarInput.addEventListener('change', datosIngrediente2);
     //Balzamica
     BalzamicaInput.addEventListener('change', datosIngrediente);
     cantidadBalzamicaInput.addEventListener('change', datosIngrediente2);
     medidaBalzamicaInput.addEventListener('change', datosIngrediente2);
      //Yogurt
      YogurtInput.addEventListener('change', datosIngrediente);
      cantidadYogurtInput.addEventListener('change', datosIngrediente2);
      medidaYogurtInput.addEventListener('change', datosIngrediente2);
      
       //Mermelada
     AguacateInput.addEventListener('change', datosIngrediente);
     cantidadAguacateInput.addEventListener('change', datosIngrediente2);
     medidaAguacateInput.addEventListener('change', datosIngrediente2);
      //imagen
      fileInput.addEventListener('change', imagenIngrediente);
    //FORMULARIO
    formulario.addEventListener('submit', nuevoIngrediente);
}
//CLASES

// CLasses
class Ingredientes {
  constructor() {
      this.ingredientes = []
  }
  agregarIngrediente(ingrediente) {
     
      this.ingredientes = [...this.ingredientes, ingrediente];
  }
  
  eliminarIngrediente(id) {
      this.ingredientes = this.ingredientes.filter( ingrediente => ingrediente.id !== id);
  }
 
}

class UI {
  imprimirAlerta(mensaje, tipo) {
      // Crea el div
      const divMensaje = document.createElement('div');
      
      
      // Si es de tipo error agrega una clase
      if(tipo === 'error') {
           divMensaje.classList.add('alerta');
      } else {
           divMensaje.classList.add('correcto');
      }

      // Mensaje de error
      divMensaje.textContent = mensaje;

      // Insertar en el DOM
     document.querySelector('#mensaje').insertBefore(divMensaje, document.querySelector('#mostrar'));
            
     // Quitar el alert despues de 3 segundos
              setTimeout( () => {
                  divMensaje.remove();
              }, 3000);
         }
         imprimirIngrediente() { // Se puede aplicar destructuring desde la función...
    
          // NUEVO : 
         const objectStore = DB.transaction('ingredientes').objectStore('ingredientes');
       /*  const total = objectStore.count();
         total.onsuccess = function() {
             console.log(total.result);
         }*/
        
       
        // retorna un objeto request o petición, 
        objectStore.openCursor().onsuccess = function(e) {
             // cursor se va a ubicar en el registro indicado para accede ra los datos
             const cursor = e.target.result;
       
             if(cursor) {
                 const {ensalada, undefined,
                       tomate, cantidadtomate, medidatomate, 
                       lechuga, cantidadlechuga, medidalechuga,
                       zanahoria, cantidadzanahoria, medidazanahoria, 
                       pepino, cantidadpepino, medidapepino,
                       pepinillo, cantidadpepinillo, medidapepinillo, 
                       aceitunas, cantidadaceitunasnegras, medidaaceitunasnegras,  
                       quesocabra, cantidadquesocabra, medidaquesocabra,
                       quesobufala, cantidadquesobufala, medidaquesobufala, 
                       beicon, cantidadbeicon, medidabeicon,
                       frutoscecos, cantidadfrutoscecos, medidafrutoscecos, 
                       cebolla, cantidadcebolla, medidacebolla,
                       quesofeta, cantidadquesofeta, medidaquesofeta, 
                       maiz, cantidadmaiz, medidamaiz, 
                       pimiento, cantidadpimiento, medidapimiento,
                       quesocapress, cantidadquesocapress, medidaquesocapress, 
                       albahaca, cantidadalbahaca, medidaalbahaca, 
                       oregano, cantidadoregano, medidaoregano,
                       atun, cantidadatun, medidaatun, 
                       huevococido, cantidadhuevococido, medidahuevococido,
                       quesoburrata, cantidadquesoburrata, medidaquesoburrata, 
                       pesto, cantidadpesto, medidapesto, 
                       tosatadas, cantidadtosatadas, medidatosatadas,
                       platano, cantidadplatano, medidaplatano, 
                       Kiwi, cantidadKiwi, medidaKiwi,
                       manzana, cantidadmanzana, medidamanzana, 
                        pollo, cantidadpollo, medidapollo, 
                       salsarosa, cantidadsalsarosa, medidasalsarosa,
                       salsacesar, cantidadsalsacesar, medidasalsacesar, 
                       salsabalzamica, cantidadsalsabalzamica, medidasalsabalzamica,
                       salsayogurt, cantidadsalsayogurt, medidasalsayogurt, 
                       aguacate, cantidadaguacate, medidaaguacate,id} = cursor.value; 
                    
               const divColumna = document.createElement('div');
               divColumna.classList.add('flex-item', 'flex-item--tarjetas')
               divColumna.dataset.id = id;
               const divTarjeta = document.createElement('div');
               divTarjeta.classList.add('tarjeta-7')
               const divCuerpoTarjeta = document.createElement('div');
               divCuerpoTarjeta.classList.add('tarjeta-7__body')
               // scRIPTING DE LOS ELEMENTOS...
               //ensalada
              const EnsaladaH2 = document.createElement('h2');
              EnsaladaH2.classList.add('tarjeta-7__title');
              EnsaladaH2.innerHTML = `${ensalada}`;
              //IMAGEN
              const Imagen = document.createElement('IMG');
              
              Imagen.classList.add('.tarjeta-7__image');
              Imagen.setAttribute('src',`${undefined}`)
              //TOAMATE
              const TomateParrafo = document.createElement('p');
              TomateParrafo.classList.add('tarjeta-7__description');  
             
              if(tomate === '' || cantidadtomate === '' || medidatomate=== ''){
                
               }else{
                TomateParrafo.innerHTML = `${tomate}, ${cantidadtomate}, ${medidatomate}`;
               }
            //Lechuga
              const LechugaParrafo = document.createElement('p');
              LechugaParrafo.classList.add('tarjeta-7__description');
              if(lechuga === '' || cantidadlechuga === '' || medidalechuga=== '' ){
                  
              } else{
               LechugaParrafo.innerHTML = `${lechuga}, ${cantidadlechuga}, ${medidalechuga}`;
              }
              
             
              //Zanahoria
              const ZanahoriaParrafo = document.createElement('p');
              ZanahoriaParrafo.classList.add('tarjeta-7__description');
              if(zanahoria === '' || cantidadzanahoria === '' || medidazanahoria=== ''){
       
              } else{
               ZanahoriaParrafo.innerHTML = `${zanahoria}, ${cantidadzanahoria}, ${medidazanahoria}`;
              }
               
              //PEPINO
             
              const PepinoParrafo = document.createElement('p');
              PepinoParrafo.classList.add('tarjeta-7__description');
              if(pepino === '' || cantidadpepino === '' || medidapepino=== '' ){
       
              } else{
               PepinoParrafo.innerHTML = `${pepino}, ${cantidadpepino}, ${medidapepino}`; 
              }
              
              
             //PEPINILLO
            
             const PepinilloParrafo = document.createElement('p');
             PepinilloParrafo.classList.add('tarjeta-7__description');
             if(pepinillo === '' || cantidadpepinillo === '' || medidapepinillo=== ''){
       
             } else{
               PepinilloParrafo.innerHTML = `${pepinillo}, ${cantidadpepinillo}, ${medidapepinillo}`; 
               
             }
             
             //AceitunasNegras
             const AceitunasNegrasParrafo = document.createElement('p');
             AceitunasNegrasParrafo.classList.add('tarjeta-7__description');
             if(aceitunas === '' || cantidadaceitunasnegras === '' || medidaaceitunasnegras=== ''){
               
             } else{
               AceitunasNegrasParrafo.innerHTML = `${aceitunas}, ${cantidadaceitunasnegras}, ${medidaaceitunasnegras}`; 
               
             }
              
              //Bloque 1
              
              
              
            //Cabra
              const CabraParrafo = document.createElement('p');
              CabraParrafo.classList.add('tarjeta-7__description');
              if(quesocabra === '' || cantidadquesocabra === '' || medidaquesocabra=== '' ){
                  
              } else{
               CabraParrafo.innerHTML = `${quesocabra}, ${cantidadquesocabra}, ${medidaquesocabra}`;
               
              }
              
             
              //Bufala
              const BufalaParrafo = document.createElement('p');
              BufalaParrafo.classList.add('tarjeta-7__description');
              if(quesobufala === '' || cantidadquesobufala === '' || medidaquesobufala=== ''){
       
              } else{
               BufalaParrafo.innerHTML = `${quesobufala}, ${cantidadquesobufala}, ${medidaquesobufala}`;
              }
       
              //huevo
              const HuevoParrafo = document.createElement('p');
              HuevoParrafo.classList.add('tarjeta-7__description');
              if(huevococido === '' || cantidadhuevococido === '' || medidahuevococido=== ''){
       
              } else{
               BufalaParrafo.innerHTML = `${huevococido}, ${cantidadhuevococido}, ${medidahuevococido}`;
              }
               
              //Beicon
             
              const BeiconParrafo = document.createElement('p');
              BeiconParrafo.classList.add('tarjeta-7__description');
              if(beicon === '' || cantidadbeicon === '' || medidabeicon=== '' ){
       
              } else{
               BeiconParrafo.innerHTML = `${beicon}, ${cantidadbeicon}, ${medidabeicon}`; 
              }
              
              
             //Frutos
            
             const FrutosParrafo = document.createElement('p');
             FrutosParrafo.classList.add('tarjeta-7__description');
             if(frutoscecos === '' || cantidadfrutoscecos === '' || medidafrutoscecos=== ''){
       
             } else{
               FrutosParrafo.innerHTML = `${frutoscecos}, ${cantidadfrutoscecos}, ${medidafrutoscecos}`; 
             }
             
             //Cebolla
             const CebollaParrafo = document.createElement('p');
             CebollaParrafo.classList.add('tarjeta-7__description');
             if( cebolla === '' || cantidadcebolla === '' || medidacebolla=== ''){
                 
             } else{
               CebollaParrafo.innerHTML = `${ cebolla}, ${cantidadcebolla}, ${medidacebolla}`; 
             }
             //bloque 2
              //Feta
              const FetaParrafo = document.createElement('p');
              FetaParrafo.classList.add('tarjeta-7__description');  
             
              if(quesofeta === '' || cantidadquesofeta === '' || medidaquesofeta=== ''){
              
               }else{
                FetaParrafo.innerHTML = `${quesofeta}, ${cantidadquesofeta}, ${medidaquesofeta}`;
               }
            //Maiz
              const MaizParrafo = document.createElement('p');
              MaizParrafo.classList.add('tarjeta-7__description');
              if(maiz === '' || cantidadmaiz === '' || medidamaiz=== '' ){
                  
              } else{
               MaizParrafo.innerHTML = `${maiz}, ${cantidadmaiz}, ${medidamaiz}`;
              }
              
             
              //Pimiento
              const PimientoParrafo = document.createElement('p');
              PimientoParrafo.classList.add('tarjeta-7__description');
              if(pimiento === '' || cantidadpimiento === '' || medidapimiento=== ''){
       
              } else{
               PimientoParrafo.innerHTML = `${pimiento}, ${cantidadpimiento}, ${medidapimiento}`;
              }
             
              
              
             //quesocapress
            
             const CapressParrafo = document.createElement('p');
             CapressParrafo.classList.add('tarjeta-7__description');
             if(quesocapress === '' || cantidadquesocapress === '' || medidaquesocapress=== ''){
       
             } else{
              CapressParrafo.innerHTML = `${quesocapress}, ${cantidadquesocapress}, ${medidaquesocapress}`; 
             }
             //Burrata
            
             const BurrataParrafo = document.createElement('p');
             BurrataParrafo.classList.add('tarjeta-7__description');
             if(quesoburrata === '' || cantidadquesoburrata === '' || medidaquesoburrata=== ''){
       
             } else{
              BurrataParrafo.innerHTML = `${quesoburrata}, ${cantidadquesoburrata}, ${medidaquesoburrata}`; 
             }
             
             //Albahaca
             const AlbahacaParrafo = document.createElement('p');
             AlbahacaParrafo.classList.add('tarjeta-7__description');
             if(albahaca === '' || cantidadalbahaca === '' || medidaalbahaca=== ''){
                 
             } else{
               AlbahacaParrafo.innerHTML = `${albahaca}, ${cantidadalbahaca}, ${medidaalbahaca}`; 
             }
              //bloque 3
               //OREGANO
               const OreganoParrafo = document.createElement('p');
               OreganoParrafo.classList.add('tarjeta-7__description');  
              
               if(oregano === '' || cantidadoregano === '' || medidaoregano=== ''){
               
                }else{
                 OreganoParrafo.innerHTML = `${oregano}, ${cantidadoregano}, ${medidaoregano}`;
                }
             //Atun
               const AtunParrafo = document.createElement('p');
               AtunParrafo.classList.add('tarjeta-7__description');
               if(atun === '' || cantidadatun === '' || medidaatun=== '' ){
                   
               } else{
                AtunParrafo.innerHTML = `${atun}, ${cantidadatun}, ${medidaatun}`;
               }
               
              
               //Pesto
               const PestoParrafo = document.createElement('p');
               PestoParrafo.classList.add('tarjeta-7__description');
               if(pesto === '' || cantidadpesto === '' || medidapesto=== ''){
       
               } else{
                PestoParrafo.innerHTML = `${pesto}, ${cantidadpesto}, ${medidapesto}`;
               }
                
               //Platano
              
               const PlatanoParrafo = document.createElement('p');
               PlatanoParrafo.classList.add('tarjeta-7__description');
               if(platano === '' || cantidadplatano === '' || medidaplatano=== '' ){
       
               } else{
                PlatanoParrafo.innerHTML = `${platano}, ${cantidadplatano}, ${medidaplatano}`; 
               }
               
               
              //Tostadas
             
              const TostadasParrafo = document.createElement('p');
              TostadasParrafo.classList.add('tarjeta-7__description');
              if(tosatadas === '' || cantidadtosatadas === '' || medidatosatadas=== ''){
       
              } else{
                TostadasParrafo.innerHTML = `${tosatadas}, ${cantidadtosatadas}, ${medidatosatadas}`; 
              }
              
              //Kiwi
              const KiwiParrafo = document.createElement('p');
              KiwiParrafo.classList.add('tarjeta-7__description');
              if(Kiwi === '' || cantidadKiwi === '' || medidaKiwi=== ''){
                  
              } else{
                KiwiParrafo.innerHTML = `${Kiwi}, ${cantidadKiwi}, ${medidaKiwi}`; 
              }
              //BLOQUE 4
               //Manzana
               const ManzanaParrafo = document.createElement('p');
               ManzanaParrafo.classList.add('tarjeta-7__description');  
              
               if(manzana === '' || cantidadmanzana === '' || medidamanzana=== ''){
               
                }else{
                 ManzanaParrafo.innerHTML = `${manzana}, ${cantidadmanzana}, ${medidamanzana}`;
                }
             //Pollo
               const PolloParrafo = document.createElement('p');
               PolloParrafo.classList.add('tarjeta-7__description');
               if(pollo === '' || cantidadpollo === '' || medidapollo=== '' ){
                   
               } else{
                PolloParrafo.innerHTML = `${pollo}, ${cantidadpollo}, ${medidapollo}`;
               }
               
              
               //Salsarosa
               const RosaParrafo = document.createElement('p');
               RosaParrafo.classList.add('tarjeta-7__description');
               if(salsarosa === '' || cantidadsalsarosa === '' || medidasalsarosa=== ''){
       
               } else{
                RosaParrafo.innerHTML = `${salsarosa}, ${cantidadsalsarosa}, ${medidasalsarosa}`;
               }
                
               //Cesar
              
               const CesarParrafo = document.createElement('p');
               CesarParrafo.classList.add('tarjeta-7__description');
               if(salsacesar === '' || cantidadsalsacesar === '' || medidasalsacesar=== '' ){
       
               } else{
                 CesarParrafo.innerHTML = `${salsacesar}, ${cantidadsalsacesar}, ${medidasalsacesar}`; 
               }
               
               
              //Balzamica
             
              const BalzamicaParrafo = document.createElement('p');
              BalzamicaParrafo.classList.add('tarjeta-7__description');
              if(salsabalzamica === '' || cantidadsalsabalzamica === '' || medidasalsabalzamica=== ''){
       
              } else{
                BalzamicaParrafo.innerHTML = `${salsabalzamica}, ${cantidadsalsabalzamica}, ${medidasalsabalzamica}`; 
              }
              
              
              //BLOQUE 5
               //Salsa de Yogurt
               const YogurtParrafo = document.createElement('p');
               YogurtParrafo.classList.add('tarjeta-7__description');  
              
               if(salsayogurt === '' || cantidadsalsayogurt === '' || medidasalsayogurt=== ''){
               
                }else{
                 YogurtParrafo.innerHTML = `${salsayogurt}, ${cantidadsalsayogurt}, ${medidasalsayogurt}`;
                }
             //Aguacate
               const AguacateParrafo = document.createElement('p');
               AguacateParrafo.classList.add('tarjeta-7__description');
               if(aguacate === '' || cantidadaguacate === '' || medidaaguacate=== '' ){
                   
               } else{
                 AguacateParrafo.innerHTML = `${aguacate}, ${cantidadaguacate}, ${medidaaguacate}`;
               }
               
              
       
              
               // Agregar un botón de eliminar...
               const btnEliminar = document.createElement('A');
              
               btnEliminar.onclick = () => eliminarIngrediente(id); // añade la opción de eliminar
               btnEliminar.classList.add('tarjeta-7__link');
               btnEliminar.innerHTML = 'Eliminar'
       
             
             
               // Agregar al HTML
               divCuerpoTarjeta.appendChild(Imagen);
               divCuerpoTarjeta.appendChild(EnsaladaH2);
               divCuerpoTarjeta.appendChild(TomateParrafo);
               divCuerpoTarjeta.appendChild(LechugaParrafo); 
               divCuerpoTarjeta.appendChild(ZanahoriaParrafo); 
               divCuerpoTarjeta.appendChild(PepinoParrafo);
               divCuerpoTarjeta.appendChild(PepinilloParrafo); 
               divCuerpoTarjeta.appendChild(AceitunasNegrasParrafo);
               
               divCuerpoTarjeta.appendChild(CabraParrafo); 
               divCuerpoTarjeta.appendChild(BufalaParrafo); 
               divCuerpoTarjeta.appendChild(BeiconParrafo);
               divCuerpoTarjeta.appendChild(FrutosParrafo); 
               divCuerpoTarjeta.appendChild(CebollaParrafo);
               divCuerpoTarjeta.appendChild(FetaParrafo);
               divCuerpoTarjeta.appendChild(MaizParrafo); 
               divCuerpoTarjeta.appendChild(PimientoParrafo); 
               divCuerpoTarjeta.appendChild(CapressParrafo);
               divCuerpoTarjeta.appendChild(AlbahacaParrafo); 
               divCuerpoTarjeta.appendChild(OreganoParrafo);
               divCuerpoTarjeta.appendChild(AtunParrafo);
               divCuerpoTarjeta.appendChild(HuevoParrafo); 
               divCuerpoTarjeta.appendChild(BurrataParrafo); 
               divCuerpoTarjeta.appendChild(PestoParrafo);
               divCuerpoTarjeta.appendChild(TostadasParrafo); 
               divCuerpoTarjeta.appendChild(PlatanoParrafo);
               divCuerpoTarjeta.appendChild(KiwiParrafo); 
               divCuerpoTarjeta.appendChild(ManzanaParrafo); 
               divCuerpoTarjeta.appendChild(PolloParrafo);
               divCuerpoTarjeta.appendChild(RosaParrafo); 
               divCuerpoTarjeta.appendChild(CesarParrafo);
               divCuerpoTarjeta.appendChild(BalzamicaParrafo);
               divCuerpoTarjeta.appendChild(YogurtParrafo); 
               divCuerpoTarjeta.appendChild(AguacateParrafo); 
               
               divCuerpoTarjeta.appendChild(btnEliminar)
               
               divTarjeta.appendChild(divCuerpoTarjeta);
               divColumna.appendChild(divTarjeta);
              contenedorIngredientes.appendChild(divColumna);
              cursor.continue() 
             
             }
            }
       
          }
         
    }

//OBJETO

const ingredienteObj = {
    ensalada:'',
    undefined:'',
    tomate:'',
    cantidadtomate:'',
    medidatomate:'',
    lechuga:'',
    cantidadlechuga:'',
    medidalechuga:'',
    zanahoria:'',
    cantidadzanahoria:'',
    medidazanahoria:'',
    pepino:'',
    cantidadpepino:'',
    medidapepino:'',
    pepinillo:'',
    cantidadpepinillo:'',
    medidapepinillo:'',
    aceitunas:'',
    cantidadaceitunasnegras:'',
    medidaaceitunasnegras:'',
    parmezano:'',
    cantidadparmezano:'',
    medidaparmezano:'',
    quesocabra:'',
    cantidadquesocabra:'',
    medidaquesocabra:'',
    quesobufala:'',
    cantidadquesobufala:'',
    medidaquesobufala:'',
    beicon:'',
    cantidadbeicon:'',
    medidabeicon:'',
    frutoscecos:'',
    cantidadfrutoscecos:'',
    medidafrutoscecos:'',
    cebolla:'',
    cantidadcebolla:'',
    medidacebolla:'',
    quesofeta:'',
    cantidadquesofeta:'',
    medidaquesofeta:'',
    maiz:'',
    cantidadmaiz:'',
    medidamaiz:'',
    pimiento:'',
    cantidadpimiento:'',
    medidapimiento:'',
    quesocapress:'',
    cantidadquesocapress:'',
    medidaquesocapress:'',
    albahaca:'',
    cantidadalbahaca:'',
    medidaalbahaca:'',
    oregano:'',
    cantidadoregano:'',
    medidaoregano:'',
    atun:'',
    cantidadatun:'',
    medidaatun:'',
    huevococido:'',
    cantidadhuevococido:'',
    medidahuevococido:'',
    quesoburrata:'',
    cantidadquesoburrata:'',
    medidaquesoburrata:'',
    pesto:'',
    cantidadpesto:'',
    medidapesto:'',
    tosatadas:'',
    cantidadtosatadas:'',
    medidatosatadas:'',
    platano:'',
    cantidadplatano:'',
    medidaplatano:'',
    Kiwi:'',
    cantidadKiwi:'',
    medidaKiwi:'',
    manzana:'',
    cantidadmanzana:'',
    medidamanzana:'',
    pollo:'',
    cantidadpollo:'',
    medidapollo:'',
    salsarosa:'',
    cantidadsalsarosa:'',
    medidasalsarosa:'',
    salsacesar:'',
    cantidadsalsacesar:'',
    medidasalsacesar:'',
    salsabalzamica:'',
    cantidadsalsabalzamica:'',
    medidasalsabalzamica:'',
    salsayogurt:'',
    cantidadsalsayogurt:'',
    medidasalsayogurt:'',
    aguacate:'',
    cantidadaguacate:'',
    medidaaguacate:'',
    
}
//FUNCIONES
//extrayendo datos
function datosIngrediente(e) {
   //console.log(e.target.name) // Obtener el Input
   
   ingredienteObj[e.target.name]= e.target.name; 
}
function imagenIngrediente(e) {
   const file = e.target.files[0]
         const fileReader = new FileReader()
              fileReader.readAsDataURL(file)
              fileReader.addEventListener('load', (e) => {
                 ingredienteObj[e.target.imagen]= e.target.result; 
                  //console.log(e.target.result)
              }) 
                         
  }

function datosIngrediente2(e) {
    //console.log(e.target.value) // Obtener el Input
    ingredienteObj[e.target.name]= e.target.value;
  }

  function nuevoIngrediente(e) {
    e.preventDefault();
   //console.log(ingredienteObj)
    
    const {ensalada, undefined,
      tomate, cantidadtomate, medidatomate, 
      lechuga, cantidadlechuga, medidalechuga,
      zanahoria, cantidadzanahoria, medidazanahoria, 
      pepino, cantidadpepino, medidapepino,
      pepinillo, cantidadpepinillo, medidapepinillo, 
      aceitunas, cantidadaceitunasnegras, medidaaceitunasnegras, 
      quesoparmezano, cantidadquesoparmezano, medidaquesoparmezano, 
      quesocabra, cantidadquesocabra, medidaquesocabra,
      quesobufala, cantidadquesobufala, medidaquesobufala, 
      beicon, cantidadbeicon, medidabeicon,
      frutoscecos, cantidadfrutoscecos, medidafrutoscecos, 
      cebolla, cantidadcebolla, medidacebolla,
      quesofeta, cantidadquesofeta, medidaquesofeta, 
      maiz, cantidadmaiz, medidamaiz, 
      pimiento, cantidadpimiento, medidapimiento,
      quesocapress, cantidadquesocapress, medidaquesocapress, 
      albahaca, cantidadalbahaca, medidaalbahaca, 
      oregano, cantidadoregano, medidaoregano,
      atun, cantidadatun, medidaatun, 
      huevococido, cantidadhuevococido, medidahuevococido,
      quesoburrata, cantidadquesoburrata, medidaquesoburrata, 
      pesto, cantidadpesto, medidapesto, 
      tosatadas, cantidadtosatadas, medidatosatadas,
      platano, cantidadplatano, medidaplatano, 
      Kiwi, cantidadKiwi, medidaKiwi,
      manzana, cantidadmanzana, medidamanzana, 
       pollo, cantidadpollo, medidapollo, 
      salsarosa, cantidadsalsarosa, medidasalsarosa,
      salsacesar, cantidadsalsacesar, medidasalsacesar, 
      salsabalzamica, cantidadsalsabalzamica, medidasalsabalzamica,
      salsayogurt, cantidadsalsayogurt, medidasalsayogurt, 
      aguacate, cantidadaguacate, medidaaguacate,id} = ingredienteObj
        
     // Validar
         //tomate
         if(((tomate === '' || cantidadtomate === '' || medidatomate=== '' || ensalada === '' || undefined ==='')||
         ((lechuga !== '' && cantidadlechuga === '')||(lechuga !== '' && medidalechuga=== '')||
         (lechuga === '' && cantidadlechuga !== '')||(cantidadlechuga !== '' && medidalechuga=== '')||
         (medidalechuga!== '' && cantidadlechuga === '')||(lechuga === '' && medidalechuga!== '')||
         (zanahoria !== '' && cantidadzanahoria === '')||(zanahoria !== '' && medidazanahoria=== '')||
         (zanahoria === '' && cantidadzanahoria !== '')||(cantidadzanahoria !== '' && medidazanahoria=== '')||
         (medidazanahoria!== '' && cantidadzanahoria === '')||(zanahoria === '' && medidazanahoria!== '')||
         (pepino !== '' && cantidadpepino === '')||(pepino !== '' && medidapepino=== '')||
         (pepino === '' && cantidadpepino !== '')||(cantidadpepino !== '' && medidapepino=== '')||
         (medidapepino!== '' && cantidadpepino === '')||(pepino === '' && medidapepino!== '')||
         (pepinillo !== '' && cantidadpepinillo === '')||(pepinillo !== '' && medidapepinillo=== '')||
         (pepinillo === '' && cantidadpepinillo !== '')||(cantidadpepinillo !== '' && medidapepinillo=== '')||
         (medidapepinillo!== '' && cantidadpepinillo === '')||(pepinillo === '' && medidapepinillo!== '')||
         (aceitunas !== '' && cantidadaceitunasnegras === '')||(aceitunas!== '' && medidaaceitunasnegras=== '')||
         (aceitunas === '' && cantidadaceitunasnegras!== '')||(cantidadaceitunasnegras!== '' && medidaaceitunasnegras=== '')||
         (medidaaceitunasnegras!== '' && cantidadaceitunasnegras=== '')||(aceitunas === '' && medidaaceitunasnegras!== '')))&&
         //lechuga
         ((lechuga === '' || cantidadlechuga === '' || medidalechuga=== '' || ensalada === '' || undefined ==='')||
         ((tomate !== '' && cantidadtomate === '')||(tomate !== '' && medidatomate=== '')||
          (tomate === '' && cantidadtomate !== '')||(cantidadtomate !== '' && medidatomate=== '')||
          (medidatomate!== '' && cantidadtomate === '')||(tomate === '' && medidatomate!== '')||
          (zanahoria !== '' && cantidadzanahoria === '')||(zanahoria !== '' && medidazanahoria=== '')||
          (zanahoria === '' && cantidadzanahoria !== '')||(cantidadzanahoria !== '' && medidazanahoria=== '')||
          (medidazanahoria!== '' && cantidadzanahoria === '')||(zanahoria === '' && medidazanahoria!== '')||
          (pepino !== '' && cantidadpepino === '')||(pepino !== '' && medidapepino=== '')||
          (pepino === '' && cantidadpepino !== '')||(cantidadpepino !== '' && medidapepino=== '')||
          (medidapepino!== '' && cantidadpepino === '')||(pepino === '' && medidapepino!== '')||
          (pepinillo !== '' && cantidadpepinillo === '')||(pepinillo !== '' && medidapepinillo=== '')||
          (pepinillo === '' && cantidadpepinillo !== '')||(cantidadpepinillo !== '' && medidapepinillo=== '')||
          (medidapepinillo!== '' && cantidadpepinillo === '')||(pepinillo === '' && medidapepinillo!== '')||
          (aceitunas !== '' && cantidadaceitunasnegras === '')||(aceitunas!== '' && medidaaceitunasnegras=== '')||
          (aceitunas === '' && cantidadaceitunasnegras!== '')||(cantidadaceitunasnegras!== '' && medidaaceitunasnegras=== '')||
          (medidaaceitunasnegras!== '' && cantidadaceitunasnegras=== '')||(aceitunas === '' && medidaaceitunasnegras!== '')))&&
         //zanahoria
         ((zanahoria === '' || cantidadzanahoria === '' || medidazanahoria=== '' || ensalada === '' || undefined ==='')||
         ((tomate !== '' && cantidadtomate === '')||(tomate !== '' && medidatomate=== '')||
         (tomate === '' && cantidadtomate !== '')||(cantidadtomate !== '' && medidatomate=== '')||
         (medidatomate!== '' && cantidadtomate === '')||(tomate === '' && medidatomate!== '')||
         (lechuga !== '' && cantidadlechuga === '')||(lechuga !== '' && medidalechuga=== '')||
         (lechuga === '' && cantidadlechuga !== '')||(cantidadlechuga !== '' && medidalechuga=== '')||
         (medidalechuga!== '' && cantidadlechuga === '')||(lechuga === '' && medidalechuga!== '')||
         (pepino !== '' && cantidadpepino === '')||(pepino !== '' && medidapepino=== '')||
         (pepino === '' && cantidadpepino !== '')||(cantidadpepino !== '' && medidapepino=== '')||
         (medidapepino!== '' && cantidadpepino === '')||(pepino === '' && medidapepino!== '')||
         (pepinillo !== '' && cantidadpepinillo === '')||(pepinillo !== '' && medidapepinillo=== '')||
         (pepinillo === '' && cantidadpepinillo !== '')||(cantidadpepinillo !== '' && medidapepinillo=== '')||
         (medidapepinillo!== '' && cantidadpepinillo === '')||(pepinillo === '' && medidapepinillo!== '')||
         (aceitunas !== '' && cantidadaceitunasnegras === '')||(aceitunas!== '' && medidaaceitunasnegras=== '')||
         (aceitunas === '' && cantidadaceitunasnegras!== '')||(cantidadaceitunasnegras!== '' && medidaaceitunasnegras=== '')||
         (medidaaceitunasnegras!== '' && cantidadaceitunasnegras=== '')||(aceitunas === '' && medidaaceitunasnegras!== '')))&&
         //pepino
         ((pepino === '' || cantidadpepino === '' || medidapepino=== '' || ensalada === '' || undefined ==='')||
         ((tomate !== '' && cantidadtomate === '')||(tomate !== '' && medidatomate=== '')||
         (tomate === '' && cantidadtomate !== '')||(cantidadtomate !== '' && medidatomate=== '')||
         (medidatomate!== '' && cantidadtomate === '')||(tomate === '' && medidatomate!== '')||
         (zanahoria !== '' && cantidadzanahoria === '')||(zanahoria !== '' && medidazanahoria=== '')||
         (zanahoria === '' && cantidadzanahoria !== '')||(cantidadzanahoria !== '' && medidazanahoria=== '')||
         (medidazanahoria!== '' && cantidadzanahoria === '')||(zanahoria === '' && medidazanahoria!== '')||
         (lechuga !== '' && cantidadlechuga === '')||(lechuga !== '' && medidalechuga=== '')||
         (lechuga === '' && cantidadlechuga !== '')||(cantidadlechuga !== '' && medidalechuga=== '')||
         (medidalechuga!== '' && cantidadlechuga === '')||(lechuga === '' && medidalechuga!== '')||
         (pepinillo !== '' && cantidadpepinillo === '')||(pepinillo !== '' && medidapepinillo=== '')||
         (pepinillo === '' && cantidadpepinillo !== '')||(cantidadpepinillo !== '' && medidapepinillo=== '')||
         (medidapepinillo!== '' && cantidadpepinillo === '')||(pepinillo === '' && medidapepinillo!== '')||
         (aceitunas !== '' && cantidadaceitunasnegras === '')||(aceitunas!== '' && medidaaceitunasnegras=== '')||
         (aceitunas === '' && cantidadaceitunasnegras!== '')||(cantidadaceitunasnegras!== '' && medidaaceitunasnegras=== '')||
         (medidaaceitunasnegras!== '' && cantidadaceitunasnegras=== '')||(aceitunas === '' && medidaaceitunasnegras!== '')))&&
         //pepinillo
         ((pepinillo === '' || cantidadpepinillo === '' || medidapepinillo=== '' || ensalada === '')||
         ((tomate !== '' && cantidadtomate === '')||(tomate !== '' && medidatomate=== '')||
         (tomate === '' && cantidadtomate !== '')||(cantidadtomate !== '' && medidatomate=== '')||
         (medidatomate!== '' && cantidadtomate === '')||(tomate === '' && medidatomate!== '')||
         (zanahoria !== '' && cantidadzanahoria === '')||(zanahoria !== '' && medidazanahoria=== '')||
         (zanahoria === '' && cantidadzanahoria !== '')||(cantidadzanahoria !== '' && medidazanahoria=== '')||
         (medidazanahoria!== '' && cantidadzanahoria === '')||(zanahoria === '' && medidazanahoria!== '')||
         (pepino !== '' && cantidadpepino === '')||(pepino !== '' && medidapepino=== '')||
         (pepino === '' && cantidadpepino !== '')||(cantidadpepino !== '' && medidapepino=== '')||
         (medidapepino!== '' && cantidadpepino === '')||(pepino === '' && medidapepino!== '')||
         (lechuga !== '' && cantidadlechuga === '')||(lechuga !== '' && medidalechuga=== '')||
         (lechuga === '' && cantidadlechuga !== '')||(cantidadlechuga !== '' && medidalechuga=== '')||
         (medidalechuga!== '' && cantidadlechuga === '')||(lechuga === '' && medidalechuga!== '')||
         (aceitunas !== '' && cantidadaceitunasnegras === '')||(aceitunas!== '' && medidaaceitunasnegras=== '')||
         (aceitunas === '' && cantidadaceitunasnegras!== '')||(cantidadaceitunasnegras!== '' && medidaaceitunasnegras=== '')||
         (medidaaceitunasnegras!== '' && cantidadaceitunasnegras=== '')||(aceitunas === '' && medidaaceitunasnegras!== '')))&&
         //aceitunas
         ((aceitunas === '' || cantidadaceitunasnegras === '' || medidaaceitunasnegras=== '' || ensalada === '' || undefined ==='')||
         ((tomate !== '' && cantidadtomate === '')||(tomate !== '' && medidatomate=== '')||
         (tomate === '' && cantidadtomate !== '')||(cantidadtomate !== '' && medidatomate=== '')||
         (medidatomate!== '' && cantidadtomate === '')||(tomate === '' && medidatomate!== '')||
         (zanahoria !== '' && cantidadzanahoria === '')||(zanahoria !== '' && medidazanahoria=== '')||
         (zanahoria === '' && cantidadzanahoria !== '')||(cantidadzanahoria !== '' && medidazanahoria=== '')||
         (medidazanahoria!== '' && cantidadzanahoria === '')||(zanahoria === '' && medidazanahoria!== '')||
         (pepino !== '' && cantidadpepino === '')||(pepino !== '' && medidapepino=== '')||
         (pepino === '' && cantidadpepino !== '')||(cantidadpepino !== '' && medidapepino=== '')||
         (medidapepino!== '' && cantidadpepino === '')||(pepino === '' && medidapepino!== '')||
         (pepinillo !== '' && cantidadpepinillo === '')||(pepinillo !== '' && medidapepinillo=== '')||
         (pepinillo === '' && cantidadpepinillo !== '')||(cantidadpepinillo !== '' && medidapepinillo=== '')||
         (medidapepinillo!== '' && cantidadpepinillo === '')||(pepinillo === '' && medidapepinillo!== '')||
         (lechuga !== '' && cantidadlechuga === '')||( lechuga!== '' && medidalechuga=== '')||
         (lechuga === '' && cantidadlechuga!== '')||(cantidadlechuga!== '' && medidalechuga=== '')||
         (medidalechuga!== '' && cantidadlechuga=== '')||(  lechuga === '' && medidalechuga!== '')))&&
         ((quesoparmezano === '' || cantidadquesoparmezano === '' || medidaquesoparmezano=== '' || ensalada === '' || undefined ===''))) {
          ui.imprimirAlerta('Todos los campos del producto elegido y El nombre de la receta son Obligatorios', 'error')
      return;
        } else {
            // Nuevo Registrando
    
            // Generar un ID único
            ingredienteObj.id = Date.now();
            
            // Añade la nueva cita
            administrarIngredientes.agregarIngrediente({...ingredienteObj});
         // NUEVO: 
          const transaction = DB.transaction(['ingredientes'], 'readwrite');
          const objectStore = transaction.objectStore('ingredientes');
          // console.log(objectStore);
          const peticion = objectStore.add(ingredienteObj);

         transaction.oncomplete = () => {
            console.log('Receta agregada!');

            // Mostrar mensaje de que todo esta bien...
            ui.imprimirAlerta('Se agregó correctamente')

        }

        transaction.onerror = () => {
            console.log('Hubo un error!');
           }
        }
        
        // Imprimir el HTML de citas
      ui.imprimirIngrediente(administrarIngredientes);

     // Reiniciar el objeto
      reiniciarObjeto() 
     // Reiniciar Formulario
     formulario.reset();
     setTimeout( () => {
      window.location.href = 'ensaladas.html';
       }, 3000);
     
    }
  
    function reiniciarObjeto() {
        
        // Reiniciar el objeto
        ingredienteObj.ensalada = '';
        ingredienteObj.undefined = '';
        ingredienteObj.tomate = '';
        ingredienteObj.cantidadtomate = '';
        ingredienteObj.medidatomate = '';
        ingredienteObj.lechuga = '';
        ingredienteObj.cantidadlechuga = '';
        ingredienteObj.medidalechuga = '';
        ingredienteObj.zanahoria = '';
        ingredienteObj.cantidadzanahoria = '';
        ingredienteObj.medidazanahoria = '';
        ingredienteObj.pepino = '';
        ingredienteObj.cantidadpepino = '';
        ingredienteObj.medidapepino = '';
        ingredienteObj.pepinillo = '';
        ingredienteObj.cantidadpepinillo = '';
        ingredienteObj.medidapepinillo = '';
        ingredienteObj.aceitunas = '';
        ingredienteObj.cantidadaceitunasnegras = '';
        ingredienteObj.medidaaceitunasnegras = '';
         // bloque 2
         ingredienteObj.parmezano = '';
         ingredienteObj.cantidadparmezano = '';
         ingredienteObj.medidaparmezano = '';
         ingredienteObj.quesocabra = '';
         ingredienteObj.cantidadquesocabra = '';
         ingredienteObj.medidaquesocabra = '';
         ingredienteObj.quesobufala = '';
         ingredienteObj.cantidadquesobufala = '';
         ingredienteObj.medidaquesobufala = '';
         ingredienteObj.beicon = '';
         ingredienteObj.cantidadbeicon = '';
         ingredienteObj.medidabeicon = '';
         ingredienteObj.frutoscecos = '';
         ingredienteObj.cantidadfrutoscecos = '';
         ingredienteObj.medidafrutoscecos = '';
         ingredienteObj.cebolla = '';
         ingredienteObj.cantidadcebolla = '';
         ingredienteObj.medidacebolla = ''; // Reiniciar el objeto

       //bloque tres
         ingredienteObj.quesofeta = '';
         ingredienteObj.cantidadquesofeta = '';
         ingredienteObj.medidaquesofeta = '';
         ingredienteObj.maiz = '';
         ingredienteObj.cantidadmaiz = '';
         ingredienteObj.medidamaiz = '';
         ingredienteObj.pimiento = '';
         ingredienteObj.cantidadpimiento = '';
         ingredienteObj.medidapimiento = '';
         ingredienteObj.quesocapress = '';
         ingredienteObj.cantidadquesocapress = '';
         ingredienteObj.medidaquesocapress = '';
         ingredienteObj.albahaca = '';
         ingredienteObj.cantidadalbahaca = '';
         ingredienteObj.medidaalbahaca = '';
         ingredienteObj.oregano = '';
         ingredienteObj.cantidadoregano = '';
         ingredienteObj.medidaoregano = '';
         //bloque cuatro
         ingredienteObj.atun = '';
         ingredienteObj.cantidadatun = '';
         ingredienteObj.medidaatun = '';
         ingredienteObj.huevococido = '';
         ingredienteObj.cantidadhuevococido = '';
         ingredienteObj.medidahuevococido = '';
         ingredienteObj.quesoburrata = '';
         ingredienteObj.cantidadquesoburrata = '';
         ingredienteObj.medidaquesoburrata = '';
         ingredienteObj.pesto= '';
         ingredienteObj.cantidadpesto= '';
         ingredienteObj.medidapesto= '';
         ingredienteObj.tosatadas = '';
         ingredienteObj.cantidadtosatadas = '';
         ingredienteObj.medidatosatadas = '';
         ingredienteObj.platano = '';
         ingredienteObj.cantidadplatano = '';
         ingredienteObj.medidaplatano = '';
         //BLOQUE 5
         ingredienteObj.Kiwi = '';
         ingredienteObj.cantidadKiwi = '';
         ingredienteObj.medidaKiwi = '';
         ingredienteObj.manzana = '';
         ingredienteObj.cantidadmanzana = '';
         ingredienteObj.medidamanzana = '';
         ingredienteObj.pollo = '';
         ingredienteObj.cantidadpollo = '';
         ingredienteObj.medidapollo = '';
         ingredienteObj.salsarosa= '';
         ingredienteObj.cantidadsalsarosa= '';
         ingredienteObj.medidasalsarosa= '';
         ingredienteObj.salsacesar = '';
         ingredienteObj.cantidadsalsacesar = '';
         ingredienteObj.medidasalsacesar = '';
         ingredienteObj.salsabalzamica = '';
         ingredienteObj.cantidadsalsabalzamica = '';
         ingredienteObj.medidasalsabalzamica = '';
         ingredienteObj.salsayogurt= '';
         ingredienteObj.cantidadsalsayogurt= '';
         ingredienteObj.medidasalsayogurt= '';
         ingredienteObj.aguacate= '';
         ingredienteObj.cantidadaguacate= '';
         ingredienteObj.medidaaguacate= '';
        
       
    }
    function eliminarIngrediente(id) {
        // NUEVO:
    const transaction = DB.transaction(['ingredientes'], 'readwrite');
    const objectStore = transaction.objectStore('ingredientes');
    
   const resultado =  objectStore.delete(id);

    // console.log( objectStore);
    // console.log( resultado);


    transaction.oncomplete = () => {
        console.log(`Recetas ${id} fue eliminado`);
        administrarIngredientes.eliminarIngrediente(id);
        ui.imprimirIngrediente()
    }


    transaction.onerror = () => {
        console.log('Hubo un error!');
    }
  }

    
  
// Código de IndexedDB
function crearDB() {
  // crear base de datos con la versión 1
  const crearDB = window.indexedDB.open('ingredientes', 1);

  // si hay un error, lanzarlo
  crearDB.onerror = function() {
      console.log('Hubo un error');
  }

  // si todo esta bien, asignar a database el resultado
  crearDB.onsuccess = function() {
      console.log('Ingredientes Listo!');

      // guardamos el resultado
      DB = crearDB.result;

      // mostrar citas al cargar
      ui.imprimirIngrediente()
  }

  // este método solo corre una vez
  crearDB.onupgradeneeded = function(e) {
      // el evento que se va a correr tomamos la base de datos
      const db = e.target.result;

      
      // definir el objectstore, primer parametro el nombre de la BD, segundo las opciones
      // keypath es de donde se van a obtener los indices
      const objectStore = db.createObjectStore('ingredientes', { keyPath: 'id',  autoIncrement: true } );

          console.log('Database creada y lista');
  }
}




 //INSTANCIAS
    const administrarIngredientes = new Ingredientes();
    const ui = new UI();


