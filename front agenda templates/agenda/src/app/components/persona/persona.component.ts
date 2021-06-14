import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service'
import { NgForm } from '@angular/forms'
import {Persona} from '../../models/persona'

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe(
      (res) => {
        this.personaService.personas = res;
      },
      (err) => console.error(err)
    );
  }

  addPersona(form: NgForm) {
    if (form.value._id) {
      this.personaService.putPersona(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
      alert("contacto modificado")
      
    } else {
      this.personaService.createPersona(form.value).subscribe(
        res => {
          this.getPersonas();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }
 

  deletePersona(id: any) {
    if (confirm("estas seguro de querer eliminarlo?")) {
      this.personaService.deletePersona(id).subscribe(
        (res) => {
          this.getPersonas()
        },
        (err) => console.error(err)
      );
    }

  }

  editPersona(persona: Persona) {
    this.personaService.selectedPersona = persona;
  }


}
