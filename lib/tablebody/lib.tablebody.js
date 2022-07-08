class TableBody
{

  constructor(nodes)
  {
    this.nodes = nodes;
  }
  
  carritoInteractivity()
  {
    this.nodes.tr = document.querySelector('#requisition tbody').insertRow();
  }
  
  #carritoButton()
  {
    this.nodes.button = document.getElementById("button");
    this.nodes.button.setAttribute("onClick", "service_carrito()");
  }
  
  #carritoGetElements()
  {
    this.nodes.producto = document.getElementById("producto");
    this.nodes.precio = document.getElementById("precio");
    this.nodes.cantidad = document.getElementById("cantidad");
  }
  
  carritoTextNode()
  {
    this.nodes.productoText = document.createTextNode(this.nodes.producto.value);
    this.nodes.precioText = document.createTextNode(this.nodes.precio.value);
    this.nodes.cantidadText = document.createTextNode(this.nodes.cantidad.value);
    this.nodes.subtotalText = document.createTextNode(this.nodes.subtotal);
  }
  
  generateView()
  {
    this.#carritoInsertCell();
    this.#carritoSetAttribute();
    this.#carritoAppendChild();
  }
  
  #carritoInsertCell()
  {
    this.nodes.tdProducto = this.nodes.tr.insertCell();
    this.nodes.tdPrecio = this.nodes.tr.insertCell();
    this.nodes.tdCantidad = this.nodes.tr.insertCell();
    this.nodes.tdSubtotal = this.nodes.tr.insertCell();
  }
  
  #carritoAppendChild()
  {
    this.nodes.tdProducto.appendChild(this.nodes.productoText);
    this.nodes.tdPrecio.appendChild(this.nodes.precioText);
    this.nodes.tdCantidad.appendChild(this.nodes.cantidadText);
    this.nodes.tdSubtotal.appendChild(this.nodes.subtotalText);
  }
  
  #carritoSetAttribute()
  {
    this.nodes.tdPrecio.setAttribute("class", "td-number");
    this.nodes.tdCantidad.setAttribute("class", "td-number");
    this.nodes.tdSubtotal.setAttribute("class", "td-number");
  }

}
