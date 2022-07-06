class FactureTable extends TableHead{
  
  constructor(nodes)
  {
    super(nodes);
    this.carritoQuerySelector();
    this.carritoTh();
    this.carritoThStyle();
    this.carritoThTextNode();
    this.carritoThAppendChild();
    this.carritoTheadAppendChild();
  }
  
  carritoQuerySelector()
  {
    this.nodes.thead = document.querySelector('#facture thead').insertRow(0);
  }
  
  carritoThTextNode()
  {
    this.nodes.productoText = document.createTextNode("producto");
    this.nodes.precioText = document.createTextNode("precio");
    this.nodes.cantidadText = document.createTextNode("cantidad");
    this.nodes.subtotalText = document.createTextNode("subtotal");
  }
  
}
