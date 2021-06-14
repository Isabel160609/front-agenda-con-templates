import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Persona} from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL_API="http://localhost:3000/personas"

  selectedPersona: Persona = {
    nombre: "",
    apellidos: "",
    edad: 0,
    dni:"",
    cumple: new Date,
    color: "",
    sexo: ""
  }
  personas : Persona[]=[]

  constructor(private http: HttpClient){
    
  }

 getPersonas(){
  return this.http.get<Persona[]>(this.URL_API);
  
  }

  createPersona(persona: Persona){
    return this.http.post(this.URL_API,persona);
  }

  putPersona(persona:Persona){
    return this.http.put(`${this.URL_API}/${persona._id}`, persona)
  }

  deletePersona(_id: string){
    
    return this.http.delete(`${this.URL_API}/${_id}`)
  }
}
