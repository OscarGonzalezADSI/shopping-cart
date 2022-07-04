class ControllerCarrito
{
  
  constructor()
  {
    this.nodes = {};
    this.#requisition();
    this.#subtotal();
    
    if(!validation_carrito(this.nodes))
    {
      this.requisition.carritoInteractivity();
      this.#producto();
      this.#factura();
      this.#view();
    }
  }

  #requisition()
  {
    this.requisition = new Requisition(this.nodes);
  }
  
  #subtotal()
  {
    this.nodes.subtotal = service_carrito_calcular(this.nodes);
  }
  
  #producto()
  {
    const elemento = new ControllerProducto(this.nodes);
    elemento.carritoSetData(data, elemento);
  }
  
  #factura()
  {
    const facture = new Facture({});
  }
  
  #view()
  {
    this.requisition.carritoTextNode();
    this.requisition.generateView();
  }
  
}
