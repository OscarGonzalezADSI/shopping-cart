class Requisition extends TableBody
{

  constructor(nodes)
  {
    super(nodes);
    this.#carritoButton();
    this.#carritoGetElements();
  }
  
  carritoInteractivity()
  {
    this.nodes.tr = document.querySelector('#requisition tbody').insertRow();
  }
  
  carritoGetElements()
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
  
}
