class DataProducto extends Producto
{

  constructor(nodes)
  {
    const producto = nodes.producto.value;
    const precio = nodes.precio.value;
    const cantidad = nodes.cantidad.value;
    const subtotal = nodes.subtotal;
	super(producto, precio, cantidad, subtotal);
  }
  
  dataProductoAdd(data, elemento)
  {
    data[data.length] = {
      "producto" : this.getProducto(),
      "precio" : this.getPrecio(),
      "cantidad" : this.getCantidad(),
      "subtotal" : this.getSubtotal()
    };
    
    this.dataProductoTotal(data);
    
    const total = data[data.length-1].total;
    
    const req = document.querySelector("#requisition tfoot tr th span");
    const textNode = document.createTextNode(total);
    req.innerHTML = "";
    req.appendChild(textNode);
    
    const req2 = document.querySelector("#facture tfoot tr th span");
    const textNode2 = document.createTextNode(total);
    req2.innerHTML = "";
    req2.appendChild(textNode2);
  }
  
  dataProductoTotal(data)
  {
    if(data.length-1 === 0)
    {
      data[data.length-1].total = this.getSubtotal();
    }
    else
    {
      const totalAnterior = parseFloat(data[data.length-2].total);
      const subtotalActual = parseFloat(this.getSubtotal());
      data[data.length-1].total = (totalAnterior + subtotalActual).toString();
    }
  }
    
  dataProductoChequeo()
  {
    console.log(data[0].producto);
  }
  
}
