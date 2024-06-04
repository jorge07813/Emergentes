import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from 'src/model/producto';
import { CrearProductoDto } from 'src/model/crearProducto';
import { ActualizarProductoDto } from 'src/model/updateProducto';

@Controller('productos')
export class ProductosController {

    constructor(private  productosService: ProductosService) {}

    //devolver la lista complta
    @Get()
    getAllProductos(){
        return this.productosService.findAll();
    }

    //devolver un producto de la lista
    @Get(":id")
    getProductosById(@Param("id") id:String){
        return this.productosService.findById(+id);
    }

    //crear un producto
    @Post()
    crearProducto(@Body() crearDto:CrearProductoDto){
        console.log(crearDto)
        return this.productosService.create(crearDto);
    }

    //actualizar un producto
    @Put(":id")
    actualizarProducto(@Param("id") id:String, @Body() updateProducto:ActualizarProductoDto){
        return this.productosService.update(+id,updateProducto);
    }

    //borrar un producto 
    @Delete(":id")
    eliminarProducto(@Param("id") id:String){
        return this.productosService.delete(+id);
    }

}
