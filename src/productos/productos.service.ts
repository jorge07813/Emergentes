import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearProductoDto } from 'src/model/crearProducto';
import { Producto } from 'src/model/producto';
import { ActualizarProductoDto } from 'src/model/updateProducto';

@Injectable()
export class ProductosService {

    private productos0: Producto[] = [
        {id:1,nombre:'Xiaomi 14 Ultra',categoria:'Telefonos'},
        { id:2,nombre:'Xiaomi 14',categoria:'Telefonos'},
        { id:3,nombre:'Xiaomi 13T',categoria:'Telefonos'}, 
        { id:4,nombre:'Xiaomi 12T pro',categoria:'Telefonos'}, 
        { id:5,nombre:'Xiaomi 12',categoria:'Telefonos'} 
    ];

    findAll(){
        return this.productos0;
    }

    findById(id:Number){
        const prod = this.productos0.find( p => p.id === id );
        if ( !prod ) throw new NotFoundException(`Producto con el id '${ id }' no encontrado`);
        
        return prod;
    }

    create(nuevo:CrearProductoDto){
        
        const prodNew : Producto = {
             id: this.productos0.length+1,
            nombre: nuevo.nombre,
            categoria: nuevo.categoria
        }
        
        this.productos0.push(prodNew);
    }

    update(id:number, prodActualizar:ActualizarProductoDto){
            let prod = this.findById(id);
            console.log(prod);
            
            this.productos0 = this.productos0.map( p => {

                if ( p.id === id ) {
                    prod.nombre = prodActualizar.nombre;
                    prod.categoria = prodActualizar.categoria;
                    return prod;
                }
    
                return p;
            })

            return prod;
    }

    delete(id:number){
        let prod = this.findById(id);
        if(prod){
            this.productos0 = this.productos0.filter (producto => producto.id !== id)
        }

    }



    
}
