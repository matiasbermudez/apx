
//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
    nombre: "Marce",
    habilidades: {
      ataque: 700,
      velocidad: 300,
      vida: 60,
      magia: 120,
    },
    articulos: ["espada", "escudo", "varita", "garrote", "espada2"],
  };
  
  const jugadorDos = {
    nombre: "Flor",
    habilidades: {
      ataque: 100,
      velocidad: 30,
      vida: 800,
      magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
  };
  
  //-----------------------------------------------------------------------//
  
  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
  var contadorPuntosJug1 = 0;
  var contadorPuntosJug2 = 0;
  
  //Ganador:
  var ganador;
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR PODER DE ATAQUE
  // (Escribir debajo el código que te permita generar esta comparación)

  if(jugadorUno.habilidades.ataque === jugadorDos.habilidades.ataque){
    console.log("En ataque fue empate, NADIE SUMA")
  }
    else if(jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque){
    contadorPuntosJug1++
    console.log("j1 Ataque GANA: " + jugadorUno.habilidades.ataque + "   j2ataque: " + jugadorDos.habilidades.ataque)
    }else {
    contadorPuntosJug2++
    console.log("j1: " + jugadorUno.habilidades.ataque + "    j2Ataque GANA: " + jugadorDos.habilidades.ataque)
    }
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR VELOCIDAD:
  //(Escribir debajo el código que te permita generar esta comparación)
if(jugadorUno.habilidades.velocidad === jugadorDos.habilidades.velocidad){
    console.log("En Velocidad fue empate, NADIE SUMA")
  } 
    else if(jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad){
    contadorPuntosJug1++
    console.log("j1Velocidad GANA: " + jugadorUno.habilidades.velocidad + " j2Ataque: " + jugadorDos.habilidades.velocidad)
  }else {
    contadorPuntosJug2++
    console.log("j1: " + jugadorUno.habilidades.velocidad + " j2velocidad GANA: " + jugadorDos.habilidades.velocidad)
  }
  
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR NIVEL DE VIDA:
  //(Escribir debajo el código que te permita generar esta comparación)
  if(jugadorUno.habilidades.vida === jugadorDos.habilidades.vida){
    console.log("En VIDA fue empate, NADIE SUMA")
  }
  else if(jugadorUno.habilidades.vida > jugadorDos.habilidades.vida){
    contadorPuntosJug1++
    console.log("j1VIDA GANA: " + jugadorUno.habilidades.vida + " j2VIDA: " + jugadorDos.habilidades.vida)
  }else {
    contadorPuntosJug2++
    console.log("j1: " + jugadorUno.habilidades.vida + " j2VIDA GANA: " + jugadorDos.habilidades.vida)
  }
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR MAGIA:
  //(Escribir debajo el código que te permita generar esta comparación)
  if(jugadorUno.habilidades.magia === jugadorDos.habilidades.magia){
    console.log("En magia fue empate, NADIE SUMA")
  } else if(jugadorUno.habilidades.magia > jugadorDos.habilidades.magia){
    console.log("j1Magia GANA: " + jugadorUno.habilidades.magia + " j2Magia: " + jugadorDos.habilidades.magia)
    contadorPuntosJug1++
  }else {
    console.log("j1Magia: " + jugadorUno.habilidades.magia + " j2Magia GANA: " + jugadorDos.habilidades.magia)
    contadorPuntosJug2++
  }
  //-----------------------------------------------------------------------//
  
  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  //(Escribir debajo el código que te permita generar esta comparación)
  if(jugadorUno.articulos.length === jugadorDos.articulos.length){
    console.log("En Articulos fue empate, NADIE SUMA")
  }else if(jugadorUno.articulos.length > jugadorDos.articulos.length){
    contadorPuntosJug1++
  }else {
    contadorPuntosJug2++
  }
  //-----------------------------------------------------------------------//
  
  //DEFINIENDO EL GANADOR DE LA PARTIDA
  //En este espacio deberás generar la comparación final de puntos
  //que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida
  
  // ejemplo:
  // var resultado = {
  //  [nombreDeJug1]: contadorPuntosJug1,
  //  [nombreDeJug2]: contadorPuntosJug2,
  //  ganador: nombreDeJug1
  // }
  // console.log(resultado)
    if(contadorPuntosJug1 === contadorPuntosJug2){
        ganador = "Empate"
    }else if (contadorPuntosJug1 > contadorPuntosJug2){
        ganador = jugadorUno.nombre
    }else {
        ganador = jugadorDos.nombre
    }

const resultado = {
    [jugadorUno.nombre] : contadorPuntosJug1,
    [jugadorDos.nombre] : contadorPuntosJug2,
    resultado : ganador
}

console.log(resultado)

  //-----------------------------------------------------------------------//