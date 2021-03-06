/*global angular*/
'use strict';

angular.module('core').factory('Regions', ['_', 'Subregions',
function(_, Subregions) {


  var Regions = [{
    "id" :"55560573c7ed94fa1d14fc14",
    "description":"",
    "genres":[],
    "instruments":[
      { "bomboleguero": "default" },
      { "chajchas": "default" },
      { "quena": "default" },
      { "charango": "default" }
    ],
    "name":"NOA",
    "code":"noa",
    "composerBPM": 96,
    "path": "M195.4,156.1c2.8,0,21,5.6,23.5,7.5c0.2,0.2,0.7,0.7,1.9,1.7c6.4,6.3,10.3,9.5,11.5,9.5v1l0-1c1-0.5,3.6-4,5.7-6.8c4-5.4,5.8-7.6,7.3-7.6l0.1,0c0.1,0,0.2,0,0.3,0c4.7,0,28.6-3.6,30.8-4.2c1.6-1.8,9.9-20.4,12-25.6c-2-0.7-10-1.2-13.9-1.4c-3.9-0.2-5.3-0.3-5.9-0.5c-0.4-0.1-0.7-0.5-0.8-0.9c-0.1-1,0.6-1.5,7.4-5.5c3.2-1.9,8.5-5,9.1-5.9c0.8-2.5,3.3-14.2,2.6-17.7c-25.7,0.3-29.9,1-30.5,1.2c-0.6,0.5-1.3,1.9-1.9,3.1c-1,2.1-1.9,4-3.6,4c-1.8,0-2.6-1.9-3.3-3.6c-0.3-0.7-0.8-1.8-1-2c-1.2-0.4-20.7-4-24.6-4c-0.1,0-0.2,0-0.3,0c-3,0.7-8.8,8.9-9.8,12.3c-0.3,1.2-0.4,2.8-0.5,4.3c-0.2,3.3-0.4,6.4-2.7,6.9c-2.9,0.6-20.4,7.5-21.7,9.6c0,0.6,0.1,1.8,0.2,3.4c0.2,3.1,0.5,7.2,0.5,10.6C189,148.2,194,155.7,195.4,156.1C195.4,156.1,195.4,156.1,195.4,156.1z",
    "available": true,
    "pic":"0824d35b67aea50e05939c780771442c.png",
    "subregions":[
      Subregions.byCode('quebrada'),
      Subregions.byCode('selva'),
      Subregions.byCode('cerro-7-colores'),
      Subregions.byCode('puna')
    ],
    "type":"region"
  },{
    "id": "592ecbd2f6d76bba1b124297",
    "description":"",
    "genres":[],
    "instruments":[
      { "contrabajo": "chamame" },
      { "bandoneon": "chamame" },
      { "guitarra": "chamame" }
    ],
    "name":"NEA",
    "code":"nea",
    "composerBPM": 100,
    "path": "M314.7,166.7c2,0.9,15.3,4.5,25,6.6c9.1-3.2,10.3-3.2,10.8-3.2c0.3,0,1,0,1.8,0c1.7,0,4.2,0.1,7,0.1c11.4,0,13.3-0.6,13.6-0.8c1.9-1.9,14.2-21.4,14.2-23.7c0-1.6-5.3-3.6-8.6-3.6c-0.4,0-0.6,0-0.7,0.1c-0.9,0.2-3.4,4.1-4.7,6.3c-2.5,4-3.3,5.2-4.5,5.2c-0.9,0-5.2-0.3-9.2-0.8c-7.4-0.9-8.8-1.9-8.8-3.2c0-3,18.2-19.1,18.4-19.3c1-0.8,1-2.1,0.9-3.1c-0.3-2.1-1.6-4-2.1-4.2c-1.4-0.5-27.8-6.9-30.4-7.5c-1.1-0.2-4.6-2.3-12.1-7.1c-6.2-3.9-15.7-9.8-17.2-9.9c-2.3,0-10.1,0-19,0.1c0.6,5-2.2,16.9-2.7,18.4c-0.4,1.2-2.8,2.8-9.9,6.9c-1.7,1-3.7,2.2-5.1,3c1,0.1,2.2,0.1,3.4,0.2c11.6,0.6,15,1.2,15.8,2.4c0.2,0.4,0.3,0.8,0.1,1.2c-0.5,1.2-1.9,4.5-3.6,8.3c2,0.1,4.6,0.1,7.5,0.1c23.1,0.3,29.7,0.9,30.7,2.9c0.3,0.5,0.2,1-0.1,1.5C322.4,148,314.4,164,314.7,166.7z",
    "available": true,
    "pic":"7467735c7950673d7946649c54bdf9aa.png",
    "subregions":[
        Subregions.byCode('cataratas-iguazu'),
        Subregions.byCode('esteros-ibera'),
        Subregions.byCode('meseta-misionera'),
        Subregions.byCode('chaco-seco'),
        Subregions.byCode('chaco-humedo')
    ],
    "type":"region"
  },{
    "id": "59308188350cbc122c5ae76e",
    "instruments":[],
    "subregions":[
        Subregions.byCode('aconcagua'),
        Subregions.byCode('valle-luna'),
        Subregions.byCode('oasis-cultivos'),
        Subregions.byCode('montanas'),
        Subregions.byCode('puente-inca')
    ],
    "genres":[],
    "pic":"87b78354189d0ee8a2af358190004aa6.png",
    "description":"",
    "name":"CUYO",
    "code":"cuyo",
    "path" : "M153.3,220.1c2.4,0.7,8.9,2.4,11.8,3c1.5,0.3,5.8,2,10.6,3.9c5.1,2,12,4.7,13.4,4.8c0.7-0.6,1.3-4.6,1.6-6.8c0.7-4.7,1.1-6.9,2.6-7.2c0.7-0.1,3.3,0.1,6.8,0.5c3.8,0.4,8.4,0.9,11.4,0.9c1.4,0,2.1-0.1,2.3-0.2c0.3-2.7,0.1-12.5-1.9-15.6c-0.6-0.9-1.3-1.9-1.9-2.8c-2-2.8-3.9-5.5-3.9-8.1c0-0.7-0.1-1.5-0.2-2.4c-0.2-2.7-0.5-5.3,0.7-6.6c0.5-0.5,1.1-0.8,1.9-0.7c1.3,0.2,5.8,0.5,10.2,0.5c9,0,10-1.5,10.1-1.7c0.2-0.4,0.5-0.9,0.8-1.4c0.5-0.7,1.6-2.5,1.9-3.5c-2.3-0.5-6.5-4.2-12.4-10c-0.7-0.7-1.5-1.5-1.7-1.6c-2.2-1.7-20.1-7.1-22.4-7.1c-2.1,0-5.8-5.5-8-9.5c-0.2,0.8-0.3,1.2-0.5,1.5c-1.4,2.4-3.9,7.8-5.4,11.8c-1.6,4.2-17.7,45.5-18.5,47.5c-0.5,1.3-2.6,3.4-5.6,6.5C155.9,217.3,154.1,219.1,153.3,220.1z",
    "available": true,
    "type":"region"
  },{
    "id": "59308203350cbc122c5ae76f",
    "description":"Sierras Pampeanas es el nombre que recibe una de las regiones naturales geográficas en que se encuentra dividida la República ArgentinaSu área aproximada es de 300 000 km, solapándose algunas zonas del oeste de la región de las Sierras Pampeanas con algunas de las del noroeste argentino NOA y algunas zonas del suroeste de las Sierras Pampeanas con algunas zonas de la región del Cuyo. Esta región pese a su nombre, abarca zonas de penillanuras y mesetas aunque recibe el nombre por los relieves dominantes de esta región, es decir, por el conjunto de sierras serranías que se extienden en el centro-oeste del país argentino, de norte a sur a través de siete provincias Tucumán, Catamarca, La Rioja, Santiago del Estero, San Juan, Córdoba y San Luis.",
    "genres":[],
    "instruments":[
      { "bombo": "zamba" },
      { "voz2": "default" },
      { "voz1": "default" },
      { "piano": "zamba" },
      { "guitarra": "zamba" }
    ],
    "name":"SIERRAS PAMPEANAS",
    "code":"sierras",
    "composerBPM": 70,
    "path":"M216.1,218.9c0.9,0.6,2.1,1.5,3.6,2.6c3.1,2.3,9.4,7,10.9,7.2c0.7-0.4,1.9-3.7,2.7-5.7 c1.6-4.3,2.6-6.7,4.2-7c0.7-0.1,2.8,0.1,5.7,0.3c3.3,0.3,7.4,0.7,10.6,0.7c4.3,0,4.9-0.7,4.9-0.7c1-3,6.2-12.4,6.4-12.8l0.2-0.4 l0.5-0.1c2.2-0.3,15.4-6.3,17.2-7.8c1-0.9,1.5-1.9,1.4-3.2c-0.2-2.3-2.4-5-5.2-6.5c-1.1-0.6-1.7-1.6-1.8-2.8 c-0.1-3.8,5.5-9.4,7.8-11c-0.9-1-4.6-3.1-6.7-4.2c-3.9-2.1-4.9-2.7-5.1-3.6c-0.3-1.1,0.4-2.3,1.2-3.8c0.3-0.6,0.6-1.2,0.9-1.7 c-6.4,1.3-26.2,4-29.8,4c-0.1,0-0.3,0-0.4,0c-1,0.4-3.8,4.2-5.7,6.8c-2.6,3.5-4.4,5.9-5.8,7c0.1,1.4-1.1,3.3-2.2,5.1 c-0.3,0.5-0.6,1-0.8,1.3c-0.6,1.2-2.5,2.8-11.9,2.8c-4.5,0-9.1-0.4-10.5-0.6c-0.2,0-0.2,0-0.2,0c-0.6,0.6-0.3,3.4-0.2,5 c0.1,1,0.2,1.9,0.2,2.6c0,1.9,1.8,4.5,3.5,6.9c0.7,0.9,1.3,1.9,2,2.9C216.2,205.9,216.3,215.9,216.1,218.9z",
    "available": true,
    "pic":"b7b058554ed1dd1633dd48bfc00e151b.png",
    "subregions":[
        Subregions.byCode('sierras'),
        Subregions.byCode('arroyos'),
        Subregions.byCode('flora-fauna')
    ],
    "type":"region"
  },{
    "id": "59317fd1677a485915b38ddb",
    "description":"La Patagonia argentina, o región patagónica argentina, es una de las cuatro regiones integradas de la República Argentina. Está formada por las provincias de Chubut, Neuquén, La Pampa, Río Negro, Santa Cruz y Tierra del Fuego, Antártida e Islas del Atlántico Sur.Está ubicada al sur del país, comprende la parte de la Patagonia que se encuentra dentro de los límites argentinos. Limita al norte con Nuevo Cuyo y Centro, al este con la provincia de Buenos Aires y el océano Atlántico, y al oestea con Chile. Es la menos poblada de las cuatro regiones, poseyendo 2 348 793 hab. en 2010, la más extensa con 930 638 km, y, evidentemente, la menos densamente poblada, con 2,5 habkm.",
    "genres":[],
    "instruments":[],
    "name":"PATAGONIA",
    "code":"patagonia",
    "path": "M138.5,371.3c2.1,2,21.9,10.8,26.2,11.8c2.2,0.6,5.8,0.6,8.6,0.7c2.2,0,4,0.1,4.9,0.3c1.7,0.4,16.8,3.3,22.3,3.3c0.9,0,1.2-0.1,1.3-0.1c0.8-0.8,1.3-2.5,1.5-3.6c-5.7-2.6-26.2-12-28.2-14.5c-1.8-2.3-13.5-25.7-12.7-30.3c0.6-3.5,21.2-22.8,22.7-23.3c1.5-0.6,24.5-17.1,26.1-18.8c1-1,1.7-6.1,1.7-8.2c-0.3-0.5-1.8-1.9-3-3c-4.4-4-7.7-7.3-7-9.9c1.5-5.1,4.2-11.2,9-11.2c4.9,0,11.1,4.1,12.7,5.8c0.3,0.3,0.7,0.7,1,1.2c1.1,1.3,2.9,3.3,4.2,3.3l0,0c0.2,0,0.4-0.1,0.6-0.2c1.4-0.9,2.4-2.7,2.7-4c0.2-0.8,0.1-1.4,0-1.6c-0.2-0.4-0.9-1-1.7-1.7c-2.2-2.1-4.9-4.7-4.5-7c0.1-0.5,0.3-1,0.5-1.4c-2.3-5.7-5.1-11-6-11.6l-20-8c-4.4-1.8-5.1-3-5-5.1c0-0.1,0-0.1,0-0.2c-0.3-0.2-1-0.3-2.5-0.5l-3.8-0.2c-0.4,0.2-0.7,0.3-1,0.3c-0.5,0-1.2-0.1-2.3-0.5c-0.6,0-1-0.1-1.3-0.1l0.1-0.3c-2.8-0.9-6.8-2.5-10.8-4.1c-4.4-1.7-8.9-3.5-10.3-3.8c-2-0.4-8.5-1.9-11.6-2.9c0.2,1.6,0.6,4,0.9,6.4c0.8,5.6,1.4,9.4,1.4,10.5c0,0.9-1.7,7.7-6,24c-3.5,13.5-8.3,32-8.5,34.2c0.3,0.6,2,2.2,3.1,3.3c3.1,2.9,4.4,4.3,4.4,5.5c0,0.2,0,1-0.1,2.2c-0.9,21.8-0.2,26.6,0.2,27.5c0.7,0.5,2.8,1,4.7,1.5c4.2,1.1,6.7,1.8,7.1,3.5c0.3,1.2-1.3,3.5-10.5,15C145.4,361.6,139.2,369.4,138.5,371.3z",
    "available": true,
    "pic":"8a8bef519a1f00e439d0e0eb5bf82269.png",
    "subregions":[
        Subregions.byCode('cordillera'),
        Subregions.byCode('meseta-patagonica'),
        Subregions.byCode('glaciar-perito-moreno'),
        Subregions.byCode('peninsula-valdes'),
        Subregions.byCode('comodoro-rivadavia'),
        Subregions.byCode('estrecho-magallanes')
    ],
    "type":"region"
  },{
    "id": "5931830f677a485915b38ddc",
    "description":"La Pampa, o la región pampeana, es un área geográfica situada en el centro-este de Argentina, en Uruguay, y el sur del estado brasileño de Río Grande del Sur. Es en su mayor extensión una amplia estepa con sectores septentrionales de sabana, la parte más oriental desde el centroeste de la Provincia de Córdoba hasta el océano Atlántico debido al clima templado y a la relativamente alta humedad, que solo es interrumpida periódicamente por las sequías derivadas de El Niño y La Niña y estas sequías suelen ser compensadas luego por avenidas es decir inundaciones hacen que gran parte del este de la Pampasia sea zona de praderas. En su sector austral presenta antiguos médanos paleoclimáticos, y muestra un relieve levemente escalonado hacia el oeste. En Uruguay y Río Grande del Sur presenta un paisaje más ondulado con sierras de una altura de poco más de 500 msnm. Es una de las regiones más fértiles del mundo.",
    "genres":[],
    "instruments":[
      { "piano": "milonga" },
      { "bandoneon": "milonga" },
      { "guitarra": "milonga" }
    ],
    "name":"PAMPA",
    "code":"pampa",
    "composerBPM": 100,
    "path": "M232.1,256.3c0.7,0,1.3,0.1,1.8,0.4c0.7,0.4,2.1,1.2,3.7,2.2c2.2,1.4,6.4,4,7.3,4.1c1.6,0,6-1.1,6.7-2.1c1-1.5,10.6-13.6,12.6-15.7c0.6-0.6,1.4-0.8,2.4-0.8c2,0,4.7,1.1,7,2c1.2,0.5,2.3,0.9,3,1.1c1.6,0.3,12.5,0.9,20.3,0.9c5.1,0,6.7-0.2,7.2-0.4c3.3-1,19.2-11.9,22.6-15.2c2.6-2.6,3.8-5.2,3.6-6.4c-0.1-0.3-0.2-0.4-0.3-0.5c-0.3-0.2-0.7-0.3-1.1-0.5c-1.6-0.7-3.5-1.5-4.1-3.2c-0.3-0.8-0.2-1.7,0.3-2.7c1.3-2.7,5.1-3.6,6.9-3.9c-0.5-2.4-3.6-10.1-4.9-12.7c-0.2-0.4-1.8-2-13.9-6c-0.6-0.2-1.1-0.8-1.1-1.5c-0.3-3.6,11.7-16,13.5-16.9c0.9-0.5,5.6-2.3,10.7-4.1c-8.8-2-21.3-5.3-22.8-6.3c-0.8-0.5-2-1.3,3.2-12.5c2.3-4.9,5.2-10.4,6.6-12.7c-2.9-1.4-19.6-1.6-28.7-1.7c-3.3,0-6.2-0.1-8.4-0.2c-5.5,12.4-7.4,15.6-8.2,16.5c-0.3,1.2-1,2.5-1.6,3.6c-0.4,0.7-1,1.8-1,2.2c0.6,0.5,2.6,1.6,4.1,2.4c5.3,2.9,7.9,4.4,7.9,6.1c0,0.6-0.3,1.1-0.8,1.4c-2.1,1.3-7.2,6.7-7.1,9.5c0,0.5,0.2,0.9,0.7,1.1c2.8,1.5,5.9,4.6,6.2,8.1c0.2,1.9-0.5,3.6-2.1,4.9c-2,1.7-14.1,7.2-17.6,8.1c-1,1.8-5.2,9.6-6,12.1c-0.5,1.4-2.5,2-6.8,2c-3.4,0-7.5-0.4-10.8-0.7c-2.5-0.2-4.6-0.4-5.2-0.3c-0.7,0.3-1.9,3.7-2.7,5.7c-1.7,4.5-2.7,7-4.5,7c-1.7,0-5.3-2.4-12.2-7.6c-1.4-1-2.6-1.9-3.4-2.5c-0.7,0.3-1.9,0.4-3.4,0.4c-3.1,0-7.8-0.5-11.6-0.9c-2.8-0.3-5.2-0.5-6.1-0.5c-0.5,0.7-0.9,3.6-1.1,5.5c-0.4,2.7-0.7,4.8-1.2,6.2c4.8,0.2,7,0.7,7,2.4c0,0.2,0,0.4,0,0.6c-0.1,1-0.1,1.6,3.7,3.1l20,8c1.8,0.7,5.2,8.3,6.7,11.8C229.9,256.6,231,256.3,232.1,256.3z",
    "available": true,
    "pic":"9392620d4ecb9f4780d23124cc4d9d7c.png",
    "subregions":[
        Subregions.byCode('ciudad'),
        Subregions.byCode('sierras-tandil'),
        Subregions.byCode('costa-atlantica'),
        Subregions.byCode('campos-cultivados'),
    ],
    "type":"region"
  }];

  Regions.byName = function(name) {
    return _.findWhere(this, { name: name });
  };

  Regions.byCode = function(code) {
    return _.findWhere(this, { code: code });
  };

  return Regions;
}]);
