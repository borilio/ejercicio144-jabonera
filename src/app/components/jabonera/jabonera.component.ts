import {Component} from '@angular/core';

@Component({
  selector: 'app-jabonera',
  templateUrl: './jabonera.component.html',
  styleUrls: ['./jabonera.component.css']
})
export class JaboneraComponent {
  private _nombre: string; //Los atributos privados se le antepone un guion bajo _
  private _nivelMaximo: number;
  private _nivelActual: number;
  private _cantidadDispensada: number;
  private _bateria: number;
  private _encendido: boolean;

  private _imagenOn: string;
  private _imagenOff: string;


  constructor() {
    this._nombre = "Deliplus";
    this._nivelMaximo = 500;
    this._nivelActual = 0;
    this._cantidadDispensada = 10;
    this._bateria = 100;
    this._encendido = false;
    this._imagenOn = "assets/img/jabonera-on.png";
    this._imagenOff = "assets/img/jabonera-off.png";
  }

  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(nombre: string) {
    this._nombre = nombre;
  }

  get nivelMaximo(): number {
    return this._nivelMaximo;
  }

  set nivelMaximo(value: number) {
    this._nivelMaximo = value;
  }

  get nivelActual(): number {
    return this._nivelActual;
  }

  set nivelActual(value: number) {
    this._nivelActual = value;
  }

  get cantidadDispensada(): number {
    return this._cantidadDispensada;
  }

  set cantidadDispensada(value: number) {
    this._cantidadDispensada = value;
  }

  get bateria(): number {
    return this._bateria;
  }

  set bateria(value: number) {
    this._bateria = value;
  }

  get encendido(): boolean {
    return this._encendido;
  }

  set encendido(value: boolean) {
    this._encendido = value;
  }

  get imagenOn(): string {
    return this._imagenOn;
  }

  set imagenOn(value: string) {
    this._imagenOn = value;
  }

  get imagenOff(): string {
    return this._imagenOff;
  }

  set imagenOff(value: string) {
    this._imagenOff = value;
  }

  public obtenerPorcentajeJabon(): number {
    return this.nivelActual * 100 / this.nivelMaximo;
  }

  public comprobarAjustes(): void {
    // Comprobar que los valores no estén en negativo
    if (this.bateria < 0) {
      this.bateria = 0;
    }
    if (this.nivelActual < 0) {
      this.nivelActual = 0;
    }

    // Apagar el dispositivo si no tiene batería
    if (this.bateria === 0) {
      this.encendido = false;
    }

  }

  public dispensar() {
    if (this.encendido) {
      this.nivelActual -= this.cantidadDispensada;
      this.bateria -= 3;
      this.comprobarAjustes();
    }
  }

  public rellenarJabon() {
    this.nivelActual = this.nivelMaximo;
  }

  public cargarBateria() {
    this.bateria = 100;
  }

  public power() {
    this.bateria -= 0.1;
    this.encendido = !this.encendido;
    this.comprobarAjustes();
  }

}
