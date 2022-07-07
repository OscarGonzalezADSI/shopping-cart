class TableConfig
{
  constructor(nodes)
  {
    this.nodes = nodes;
  }
  
  theadQuerySelector()
  {
    this.nodes.thead = document.querySelector('#requisition thead').insertRow(0);
  }
  
  theadTh()
  {
    this.nodes.productoTh = document.createElement("th");
    this.nodes.precioTh = document.createElement("th");
    this.nodes.cantidadTh = document.createElement("th");
    this.nodes.subtotalTh = document.createElement("th");
  }
  
  theadThStyle()
  {
    this.nodes.precioTh.setAttribute("style", "text-align:right");
    this.nodes.cantidadTh.setAttribute("style", "text-align:right");
    this.nodes.subtotalTh.setAttribute("style", "text-align:right");
  }
  
  theadThTextNode()
  {
    this.nodes.productoText = document.createTextNode("producto");
    this.nodes.precioText = document.createTextNode("precio");
    this.nodes.cantidadText = document.createTextNode("cantidad");
    this.nodes.subtotalText = document.createTextNode("subtotal");
  }
  
  theadThAppendChild()
  {
    this.nodes.productoTh.appendChild(this.nodes.productoText);
    this.nodes.precioTh.appendChild(this.nodes.precioText);
    this.nodes.cantidadTh.appendChild(this.nodes.cantidadText);
    this.nodes.subtotalTh.appendChild(this.nodes.subtotalText);
  }
  
  theadTheadAppendChild()
  {
    this.nodes.thead.appendChild(this.nodes.productoTh);
    this.nodes.thead.appendChild(this.nodes.precioTh);
    this.nodes.thead.appendChild(this.nodes.cantidadTh);
    this.nodes.thead.appendChild(this.nodes.subtotalTh);
  }
  
  tfootQuerySelector()
  {
    this.nodes.tfootTr = document.querySelector('#facture tfoot').insertRow(0);
  }
  
  tfootCreateElement()
  {
    this.nodes.th1 = document.createElement("th");
    this.nodes.th2 = document.createElement("th");
    this.nodes.th3 = document.createElement("th");
    this.nodes.th4 = document.createElement("th");
    this.nodes.span = document.createElement("span");
  }
  
  tfootCreateTextNode()
  {
    this.nodes.spanText = document.createTextNode("Total");
  }
  
  tfootSetAttribute()
  {
    this.nodes.th3.setAttribute("style", "text-align:right");
    this.nodes.th4.setAttribute("style", "text-align:right");
  }
  
  tfootAppendChild()
  {
    this.nodes.th3.appendChild(this.nodes.spanText);
    this.nodes.th4.appendChild(this.nodes.span);
    this.nodes.tfootTr.appendChild(this.nodes.th1);
    this.nodes.tfootTr.appendChild(this.nodes.th2);
    this.nodes.tfootTr.appendChild(this.nodes.th3);
    this.nodes.tfootTr.appendChild(this.nodes.th4);
  }
  
}
