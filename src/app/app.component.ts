import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola-mundo-ng';

  codigoUno = `import { Component } from '@angular/core';
  @ Component (
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      )
      export class AppComponent {
        title = 'Mi Aplicación Angular';
      }";`

  codigoDos = `<div *ngIf="mostrarMensaje">
              <p>{{ mensaje }}</p>
            </div>
        
         
            <ul>
              <li *ngFor="let item of listaItems">{{ item }}</li>
            </ul>`
}
