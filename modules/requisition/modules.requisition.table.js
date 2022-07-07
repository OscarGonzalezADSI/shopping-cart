class RequisitionTable extends TableConfig
{
  
  constructor(nodes)
  {
    super(nodes);
    this.tableSetAttribute();
    this.captionTextNode();
    this.captionSetAttribute();
    this.captionAppendChild();
    this.theadQuerySelector();
    this.theadTh();
    this.theadThStyle();
    this.theadThTextNode();
    this.theadThAppendChild();
    this.theadTheadAppendChild();
    this.tfootQuerySelector();
    this.tfootCreateElement();
    this.tfootCreateTextNode();
    this.tfootSetAttribute();
    this.tfootAppendChild();
  }
  
  tableSetAttribute()
  {
    document.querySelector('#requisition').setAttribute("class", "w3-table-all w3-small");
  }

  captionTextNode()
  {
    this.nodes.captionTextNode = document.createTextNode("pedido");
  }
  
  captionSetAttribute()
  {
    document.querySelector('#requisition caption').setAttribute("class","w3-lime");
  }
  
  captionAppendChild()
  {
    document.querySelector('#requisition caption').appendChild(this.nodes.captionTextNode);
  }
  
  theadQuerySelector()
  {
    this.nodes.thead = document.querySelector('#requisition thead').insertRow(0);
  }
  
  theadThTextNode()
  {
    this.nodes.productoText = document.createTextNode("producto");
    this.nodes.precioText = document.createTextNode("precio");
    this.nodes.cantidadText = document.createTextNode("cantidad");
    this.nodes.subtotalText = document.createTextNode("subtotal");
  }
  
  tfootQuerySelector()
  {
    this.nodes.tfootTr = document.querySelector('#requisition tfoot').insertRow(0);
  }
  
}
