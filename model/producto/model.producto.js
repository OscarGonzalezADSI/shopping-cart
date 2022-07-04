class Producto 
{

  constructor(producto, precio, cantidad, subtotal)
  {
  	this.producto = producto;
  	this.precio = precio;
  	this.cantidad = cantidad;
    this.subtotal = subtotal;
  }
  
  getProducto()
  {
    return this.producto;
  }
  
  setProducto(producto)
  {
    this.producto = producto;
  }
  
  getPrecio(precio)
  {
    return this.precio;
  }
  
  setPrecio(precio)
  {
    this.precio = precio;
  }
  
  getCantidad(cantidad)
  {
    return this.cantidad;
  }
  
  setCantidad(cantidad)
  {
    this.cantidad = cantidad;
  }
  
  getSubtotal(subtotal)
  {
  	return this.subtotal;
  }
    
  setSubtotal(subtotal)
  {
    this.subtotal = subtotal;
  }
  
}
