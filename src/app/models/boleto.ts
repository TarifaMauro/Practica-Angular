export class Boleto {
    static nextId = 1; //Variable estática para asignar ID únicos a los boletos

    id: number;
    dni: string;
    precio: number;
    categoriaTurista: number; // 1: Menor, 2: Adulto, 3: Jubilado
    fechaCompra: Date;
    email: string;

    constructor(dni: string, precio: number, categoriaTurista: number, fechaCompra: Date, email: string) {
        this.id = Boleto.nextId++; // Asignar un ID único al boleto
        this.dni = dni;
        this.precio = precio;
        this.categoriaTurista = categoriaTurista;
        this.fechaCompra = fechaCompra;
        this.email = email;
    }
}
