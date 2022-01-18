var nombres = ["Maria", "Antony", "Joy", "Juan"]

var nombresMujeres = ["Alma", "Petra", "JRamona", "Alicia"]

console.log(nombres);


var nuevaLongitud = nombres.push("Jonatan");
console.log(nombres);

var indice = nombres.indexOf("Jonatan");
if(indice !== -1){
    console.log("Jonatan está presente");
  }else{
    console.log( "No encontrado");
  }

  //Arreglo 2
  var hombres=new Array("Alma","Maria" ,"Samuel" ,"Alejandro" ,"Felix" ,);
  var mujeres=new Array("Alma", "Alicia" ,"Alejandra" ,"Maria" ,);
   
  var iguales=0;
  for(var i=0;i<hombres.length;i++)
  {
      for(var j=0;j<hombres.length;j++)
      {
          if(hombres[i]==mujeres[j])
              iguales++;
      }
  }
  alert(iguales);


  var x = 'JonatanRios';
  var empty = '';
  
  console.log('La palabra JonatanRios ' + x.length + ' letras');
  /* "Mozilla is 7 code units long" */
  
  console.log('La cadena esá bacía ' + empty.length);
  /* "The empty string has a length of 0" */

  //Entre dos numero 
  function enRango1A100(a, b) {
    return (a >= 1 && a <= 100) && (b >= 1 && b <= 100);
}

console.log(enRango1A100(-1, 100)); // false
console.log(enRango1A100(100, -1)); // false
console.log(enRango1A100(100, 75)); // true


//What is shown on the console when f is console.log'd? 4
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);
  