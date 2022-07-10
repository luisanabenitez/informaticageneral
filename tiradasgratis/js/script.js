
// Tirada Gratis carta del dia

// Hacemos una funcion que le de asigne un nombre descripcion e imagen a cada card

function card (name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

// Array con toda la informacion de cada carta.
var deck = [
  new card('Le Mat','El Loco en el tarot es el primer Arcano Mayor que encontramos en la baraja y uno de los más misteriosos: es el personaje que “inicia” ese camino hacia el conocimiento, hacia el equilibrio, hacia la libertad y hacia la plenitud que representa la carta XXI del tarot, El Mundo.','tarot-0'),
  new card('Le Bateleur','Empezar y elegir. El Mago en el tarot es la representación del arquetipo masculino, aquello que contiene el principio de la propia creación; personaliza el talento de utilizar y canalizar las fuerzas del universo para fines de índole creativa: todos las fuerzas universales están a su alcance para conseguir los resultados que desea.','tarot-1'),
  new card('La Papesse','La Sacerdotisa en tarot es la imagen misma del inconsciente y símbolo arquetípico de todo lo desconocido. Propone que nos aproximemos al íntimo, intuitivo, intrínseco y oculto mundo de nuestro interior subconsciente. Simboliza los aspectos menos conocidos de la fuerza femenina: es el elemento que estabiliza el lado masculino representado por anterior Arcano -se complementan el uno con el otro. ','tarot-2'),
  new card('L`Impératrice','Representa lo creativo, la hermosura, la belleza, la abundancia y lo social, la afirmación de la capacidad humana para crear y poder expresarse por cualquier medio.','tarot-3'),
  new card('L`Empereur','Es la representación del arquetipo masculino: es la figura del padre, del jefe y del líder. Este arcano es símbolo de control, dominio, autoridad, ley, orden, razón y poder; significa la organización y estructura del mundo, pues su número ya nos lo indica: el cuatro es, a nivel numerológico, el signo de la estabilidad.','tarot-4'),
  new card('Le Pape','Representa el conocimiento y la educación, y es presentado como una figura conservadora, tranquila, amante de la tradición, compasivo, íntegro y regulador. Es el personaje del tarot que transmite el conocimiento religioso y todo lo aprendido como miembros de una sociedad.','tarot-5'),
  new card('L`Amovreux','Esta carta, también conocida en el tarot como Los Amantes, representa como tema principal el amor, el sexo, el placer y la elección.','tarot-6'),
  new card('Le Chariot','Representa ese guerrero que vuelve del combate con esplendor, es la representación de la victoria, del triunfo de los cambios -tanto internos como externos- del ser humano. Ahora bien, no una victoria placentera, sino dura y laboriosa: esta carta nos muestra que la motivación y la constancia son la llave de todos nuestros éxitos y progresos. Es el poder de la fuerza de voluntad.','tarot-7'),
  new card('La Justice','Es la personificación del principal arquetipo femenino y maternal que representa el arcano mayor número XVIII: La Luna. No solamente simboliza el equilibrio del cosmos o universo, sino también el de los tres planos: el físico, el intelectual y el espiritual. Es un naipe que invita a la auto reflexión y a tomar consciencia del presente.','tarot-8'),
  new card('L`Hermite','El Ermitaño en el tarot representa: la búsqueda de nuestra voz interior, de la parte mas interna y personal de nosotros mismos; es el consejero que dice “conócete a ti mismo”.Es la carta que representa los momentos de nuestra vida en los cuales tenemos la necesidad de cuestionar lo establecido y evidente, así como aquellas ideas que hemos adquirido, o bien mediante la educación impuesta, o bien mediante nuestras propias experiencias.','tarot-9'),
  new card('La Roue de Fortune','La Rueda de la Fortuna expone el cambio, velocidad, decisiones apresuradas, suerte (o infortunio) e imprevistos.Habla acerca de las opciones que tenemos en nuestra vida y de aquellos caminos que podemos tomar.','tarot-10'),
  new card('La Force','Es la carta del tarot que inicia el recorrido a través de las fuerzas del inconsciente, nos habla de victoria, pero esta vez de una victoria interior, un triunfo sobre nosotros mismos.','tarot-11'),
  new card('Le Pendu','El Colgado es una carta que muestra que, en determinado momento, existe una necesidad de distanciarse de lo material e indagar más en otros planos de la existencia humana, sobretodo el espiritual','tarot-12'),
  new card('Arcano sin nombre','Es una carta de oportunidades, de cambios importantes, de renovación y de transición. Este Arcano es, por tanto, el germen de un nuevo comienzo.','tarot-13'),
  new card('Temperance','Es el naipe del equilibrio, de la moderación y del término medio.Dentro del caos que a veces podemos sufrir en nuestras vidas, este Triunfo del tarot no advierte, más bien aconseja: hemos de aprender a templar nuestros actos, nuestros deseos, nuestros pensamientos y nuestras aspiraciones, pues es la única manera de alcanzar el equilibrio necesario para seguir evolucionando.','tarot-14'),
  new card('Le Diable','El Diablo en el tarot es un Arcano que trata de todas las barreras y ataduras que bloquean nuestra evolución personal, ya sean pasiones incontrolables, tentaciones, obsesiones materialistas, ignorancia, negatividad o fanatismo, entre otras.Sin embargo, este Arcano del tarot es también un puente entre esa oscuridad y la luz que existe cuando se sale de ella. Y es que no hay luz sin oscuridad ni felicidad sin tristeza… El Diablo nos da la oportunidad de liberarnos de nuestros grilletes y encontrar la auténtica libertad.','tarot-15'),
  new card('La Maison Diev','La Torre en el tarot representa un cambio drástico y repentino causado, en muchas ocasiones, por la destrucción de una realidad que considerábamos como única y verdadera.','tarot-16'),
  new card('L`Etoile','La Estrella tiene un significado claro de “espiritualidad”, “felicidad” y “armonía”; es una carta que invita a “actuar en el mundo”, algo que vemos en como la mujer ejerce esa acción de “nutrir” el manantial de agua que tiene a sus pies. Ese agua vertida en el lago -o río- es una metáfora de todo el conocimiento e influjo espiritual que este naipe transmite. Por ello, este Arcano es una representación de nosotros mismos como auténticos guías espirituales. ','tarot-17'),
  new card('L`Empereur','Es la representación del arquetipo masculino: es la figura del padre, del jefe y del líder. Este arcano es símbolo de control, dominio, autoridad, ley, orden, razón y poder; significa la organización y estructura del mundo, pues su número ya nos lo indica: el cuatro es, a nivel numerológico, el signo de la estabilidad.','tarot-18'),
  new card('La Lune','La Luna en el tarot es una carta que nos habla de pasividad y de una gran receptividad. Pero, puesto que es realmente difícil que podamos apreciar con nitidez y claridad los mismos detalles con la luz nocturna que con la diurna, este Arcano anuncia también ilusión, secreto, misterio, oscuridad, peligro y engaño. Veremos cómo este naipe representa, principalmente, el mundo interior y del inconsciente.','tarot-19'),
  new card('Le Soleil','El Sol en el tarot es símbolo de vida, esperanza y amor. El Sol nos llena de sentimientos positivos e ideas inspiradoras. Su mirada, en la carta del tarot de Marsella, se presenta como todo un poderoso ser. Nos mira directamente de frente, no tiene nada que ocultarnos, sino todo lo contrario, nos revela todo con la máxima claridad.','tarot-20'),
  new card('Le Jugement','El juicio habla de una reencarnación espiritual y triunfo. Este Triunfo representa la señal y el llamamiento final a un nuevo nacimiento, a una reencarnación espiritual y final de la consciencia, donde los fundamentos masculinos y femeninos se unen para formar un nuevo ser. Es el renacimiento de la propia consciencia.','tarot-21'),
  new card('Le Monde','Anuncia la resolución de la llamada de El Juicio y la plenitud de consciencia de toda persona, representan la comprensión última tanto de la sabiduría interior y espiritual como de el mundo que nos rodea. Es la realización suprema.','tarot-22'),
];


function getRandom(num){
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}

function generarCarta(){
  var index = getRandom(22);
  var currentCard = deck[index];
  document.getElementById("tarotcard").innerHTML = '<img src=img/' + currentCard.image + '.png><h3>' + currentCard.name + '</h3><p>' + currentCard.description + '</p>';
}



// Tirada Si o No


function oraclecard (name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
  }
  
  var oracledeck = [
    new oraclecard('Sí','Adentrate a lo desconocido','oracle-1'),
    new oraclecard('No','Parece que no es el momento','oracle-2'),
    new oraclecard('Aún no','Todavía no tenes una respuesta clara','oracle-3'),
    new oraclecard('Puede ser','Todavía no tenes una respuesta clara','oracle-4'),
  ];
  
  function cartaSiNo(){
    var index = getRandom(3);
    var currentoracle = oracledeck[index];
    document.getElementById("tarotcard").innerHTML = '<img src=img/' + currentoracle.image + '.png><h3>' + currentoracle.name + '</h3><p>' + currentoracle.description + '</p>';
  }
