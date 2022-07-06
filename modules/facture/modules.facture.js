class Facture extends TableBody
{

  constructor(nodes)
  {
    super(nodes);
    this.#carritoInteractivity();
    this.#carritoGetElements();
    this.#carritoTextNode();
    this.generateView();
  }
  
  #carritoInteractivity()
  {
    this.nodes.tr = document.querySelector('#facture tbody').insertRow();
  }
  
  #carritoGetElements()
  {
    this.nodes.producto = data[data.length-1].producto;
    this.nodes.precio = data[data.length-1].precio;
    this.nodes.cantidad = data[data.length-1].cantidad;
    this.nodes.subtotal = data[data.length-1].subtotal;
  }
  
  #carritoTextNode()
  {
    this.nodes.productoText = document.createTextNode(this.nodes.producto);
    this.nodes.precioText = document.createTextNode(this.nodes.precio);
    this.nodes.cantidadText = document.createTextNode(this.nodes.cantidad);
    this.nodes.subtotalText = document.createTextNode(this.nodes.subtotal);
  }
  
}
