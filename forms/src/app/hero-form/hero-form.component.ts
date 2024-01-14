import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Indian', 'Thai', 'Chinese', 'American', 'Italian'];
  alterEgo = ['Udupi', 'Mangalore', 'Karkala'];

  model = new Hero(0, ''); // Removed default values

  submitted = false;

  onSubmit() {
    alert("Form submitted");
  }

  newHero() {
    this.model = new Hero(0, '');
  }

  // skyDog(): Hero {
  //   const myHero =  new Hero(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
  //   console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  //   return myHero;
  // }

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; 
  }
}
