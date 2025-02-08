declare module "./accessories.json" {
  export interface Producto {
    id: number;
    nombre: string;
    description: string;
    precio: number;
    imagen: string;
  }

  const productos: Producto[];
  export default productos;
}