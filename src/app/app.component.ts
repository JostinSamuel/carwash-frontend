import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ListaServiciosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isLoginRoute: boolean = false;

  private routesWithoutNavbar: string[] = ['/login', '/recover', '/register'];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Usar startsWith para mayor flexibilidad en comparación de rutas
        this.isLoginRoute = this.routesWithoutNavbar.some(route => event.urlAfterRedirects.startsWith(route));
      }
    });
  }


  ngOnInit(): void {}

}
