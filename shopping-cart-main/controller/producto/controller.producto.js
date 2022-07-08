class ControllerProducto extends DataProducto
{

  constructor(nodes)
  {
	super(nodes);
  }
  
  carritoSetData(data, elemento)
  {
  	this.dataProductoAdd(data, elemento);
  	this.dataProductoChequeo();
  }
  
}
