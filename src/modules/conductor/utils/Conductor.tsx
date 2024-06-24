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
  constructor(idConductor: number) {}
}
