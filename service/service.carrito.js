function service_carrito()
{
  controller_carrito();
}

function service_carrito_calcular(nodes)
{
  const precioValue = parseFloat(nodes.precio.value);
  const cantidadValue = parseFloat(nodes.cantidad.value);
  const res = precioValue * cantidadValue;
  const resToString = (res).toString();
  return resToString;
}





