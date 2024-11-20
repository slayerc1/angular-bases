import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
  styles: ``,
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  deleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  addNewCharacter(character: Character): void {
    this.dbzService.addNewCharacter(character);
  }
}
