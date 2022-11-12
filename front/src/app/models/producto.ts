import { Marca } from "./marca";
import { TipoProducto } from "./tipo-producto";

export interface Producto {
    id: number,
    codigo_barra: string,
    descripcion: number,
    tipoProducto: TipoProducto,
    marca: Marca,
    precio_unitario_venta: number,
    precio_unitario_compra: number,
    
}
