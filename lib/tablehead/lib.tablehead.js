class TableHead
{
  constructor(nodes)
  {
    this.nodes = nodes;
  }
  
  carritoQuerySelector()
  {
    this.nodes.thead = document.querySelector('#requisition thead').insertRow(0);
  }
  
  carritoTh()
  {
    this.nodes.productoTh = document.createElement("th");
    this.nodes.precioTh = document.createElement("th");
    this.nodes.cantidadTh = document.createElement("th");
    this.nodes.subtotalTh = document.createElement("th");
  }
  
  carritoThStyle()
  {
    this.nodes.precioTh.setAttribute("style", "text-align:right");
    this.nodes.cantidadTh.setAttribute("style", "text-align:right");
    this.nodes.subtotalTh.setAttribute("style", "text-align:right");
  }
  
  carritoThTextNode()
  {
    this.nodes.productoText = document.createTextNode("producto");
    this.nodes.precioText = document.createTextNode("precio");
    this.nodes.cantidadText = document.createTextNode("cantidad");
    this.nodes.subtotalText = document.createTextNode("subtotal");
  }
  
  carritoThAppendChild()
  {
    this.nodes.productoTh.appendChild(this.nodes.productoText);
    this.nodes.precioTh.appendChild(this.nodes.precioText);
    this.nodes.cantidadTh.appendChild(this.nodes.cantidadText);
    this.nodes.subtotalTh.appendChild(this.nodes.subtotalText);
  }
  
  carritoTheadAppendChild()
  {
    this.nodes.thead.appendChild(this.nodes.productoTh);
    this.nodes.thead.appendChild(this.nodes.precioTh);
    this.nodes.thead.appendChild(this.nodes.cantidadTh);
    this.nodes.thead.appendChild(this.nodes.subtotalTh);
  }
  
}
