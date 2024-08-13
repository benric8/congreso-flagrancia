export interface Ponente {
    nombre:string,
    descripcion:string,
    imagen:string,
    pais:string,
    bandera:string
}

export interface DataPonentes{
    nacionales:Array<Ponente>;
    internacionales:Array<Ponente>;
}