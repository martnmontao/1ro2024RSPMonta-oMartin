class Persona
{
    constructor(id, nombre, apellido, fecha)
    {
        if(id != null && apellido != null && nombre != null)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
        }
        else
        {
            alert("Complete los campos.")
            throw new Error("Error.");
        }
        this.fecha = fecha;
    }

    toString()
    {
        return 0;
    }   

   

}

class Ciudadano extends Persona
{
    constructor(id, nombre, apellido, fecha, dni)
    {
        super(id,nombre,apellido,fecha);
        if(dni > 0)
        {
            this.dni = dni;
        }
        else
        {   
            alert("Complete los campos.");
            throw new Error("Error");
        }
    }

    toString(){};



}


class Extranjero extends Persona
{
    constructor(id, nombre, apellido, fecha, paisOrigen)
    {
        super(id,nombre,apellido,fecha);
        if(paisOrigen != null)
        {
            this.paisOrigen = paisOrigen;
                          
        }
        else
        {   
            alert("Complete los campos.");
            throw new Error("Error");
        }
    }

    toString(){return 0};
   
}


const stringDatos = '[{"id":1,"apellido":"Serrano","nombre":"Horacio","fechaNacimiento":19840103,"dni":45876942},{"id":2,"apellido":"Casas","nombre":"Julian","fechaNacimiento":19990723,"dni":98536214},{"id":3,"apellido":"Galeano","nombre":"Julieta","fechaNacimiento":20081103,"dni":74859612},{"id":4,"apellido":"Molina","nombre":"Juana","fechaNacimiento":19681201,"paisOrigen":"Paraguay"},{"id":5,"apellido":"Barrichello","nombre":"Rubens","fechaNacimiento":19720523,"paisOrigen":"Brazil"},{"id":666,"apellido":"Hkkinen","nombre":"Mika","fechaNacimiento":19680928,"paisOrigen":"Finlandia"}]';
const lista = JSON.parse(stringDatos);
let listaExtranjeros = lista.filter(persona => typeof(persona.paisOrigen) == "string");
listaExtranjeros = listaExtranjeros.map(persona => new Extranjero(persona.id, persona.nombre,persona.apellido,persona.fechaNacimiento,persona.paisOrigen));
console.log(listaExtranjeros)

let listaCiudadano = lista.filter(persona => persona.dni > 0);
listaCiudadano = listaCiudadano.map(persona => new Ciudadano(persona.id, persona.nombre,persona.apellido,persona.fechaNacimiento,persona.dni));
function obtenerEdad(fechaNacimiento)
{
    var fecha = fechaNacimiento.toString();
    var nacimientoPersona = new Date(fecha.substring(0,4), fecha.substring(4,6), fecha.substring(6,8));
    var fechaActual = new Date();

    var edad = fechaActual.getFullYear() - nacimientoPersona.getFullYear();
    return edad;

}


let listaPersonas = [];
listaCiudadano.forEach(element => {
    listaPersonas.push(element);
});

listaExtranjeros.forEach(element => {
    listaPersonas.push(element);
});
let mostrar = listaPersonas.filter(persona => persona.paisOrigen !== undefined);
console.log(mostrar);

mostrar = listaPersonas.filter(persona => persona.paisOrigen !== undefined);
console.log(mostrar);

mostrar = mostrar.sort((a,b) => a.paisOrigen.localeCompare(b.paisOrigen));
console.log(mostrar);


listaPersonas.forEach(element => {
    if(element.id == 1)
    {
        element.fechaNacimiento = 2000;
    }
});

console.log(listaPersonas);