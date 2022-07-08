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
	new Main();
}

function moduleNone()
{
	document.getElementById('newsletter').style.display='none';
	document.getElementById('newsletter2').style.display='none';
	document.getElementById('newsletter3').style.display='none';
}

function imputsClean()
{
	document.getElementById('producto').value = "";
	document.getElementById('precio').value = "";
	document.getElementById('cantidad').value = "";
}

function moduleBlock(module)
{
	document.getElementById(module).style.display='block';
}

function itemBefore()
{
	moduleNone();
}

function itemNext()
{
	moduleNone();
}

function cancelBuy()
{
	moduleNone();
}

function payBill()
{
	moduleNone();
}

function openModuleBuy()
{
	moduleNone();
	moduleBlock('newsletter');
}

function openModuleRequisition()
{
	moduleNone();
	moduleBlock('newsletter2');
}

function openModuleFacture()
{
	moduleNone();
	moduleBlock('newsletter3');
}

function main()
{
  const requisitionTable = new RequisitionTable({});
  const factureTable = new FactureTable({});
  controller_carrito();
}

const data = [];
main();

