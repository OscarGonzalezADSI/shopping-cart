class Main
{

  constructor()
  {
    this.controllerCarrito();
  }
  
  controllerCarrito()
  {
    this.controllerCarrito = new ControllerCarrito();
  }
  
}

function controller_carrito()
{
  const main = new Main();
}


function main()
{
  const requisitionTable = new RequisitionTable({});
  const factureTable = new FactureTable({});
  controller_carrito();
}


const data = [];
main();
