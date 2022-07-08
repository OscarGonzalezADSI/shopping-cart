function service_carrito()
{
	moduleNone();
	moduleBlock('newsletter2');
    controller_carrito();
	imputsClean();
}

function service_carrito_calcular(nodes)
{
	const precioValue = parseFloat(nodes.precio.value);
	const cantidadValue = parseFloat(nodes.cantidad.value);
	const res = precioValue * cantidadValue;
	const resToString = (res).toString();
	return resToString;
}





