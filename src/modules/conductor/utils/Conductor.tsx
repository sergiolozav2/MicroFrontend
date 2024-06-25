class Conductor {
  id?: number;
  nombre?: string;
  fechaRegistro?: Date;
  vehiculo: Vehiculo;

  constructor() {
    this.vehiculo = new Vehiculo(this.id!);
  }
}

class Vehiculo {
  constructor(idConductor: number) {
    console.log(idConductor)
    console.log("Clase de vehículo inicializada")
  }
}
