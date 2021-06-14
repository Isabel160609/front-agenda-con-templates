export interface Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    cumple: Date;
    dni: string;
    color: string;
    sexo: string;
    createdAt?:string;
    updateAt?:string;
    _id?: string
   
}