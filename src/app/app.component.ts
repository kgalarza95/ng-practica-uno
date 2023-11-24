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


  mostrarIntroduccion = true;
  mostrarCaracteristicas = true;
  caracteristicas = [
    'Plantilla (Template): Los componentes tienen una plantilla asociada que define la estructura HTML de la interfaz de usuario.',
    'Estilos: Pueden tener estilos CSS específicos asociados.',
    'Lógica: Contienen la lógica de la aplicación en el archivo TypeScript asociado.',
    'Metadatos (Metadata): Los metadatos del componente, como decoradores, proporcionan información adicional sobre el componente.'
  ];
}
