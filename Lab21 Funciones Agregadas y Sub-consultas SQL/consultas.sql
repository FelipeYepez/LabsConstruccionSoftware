/*
              Esquema
Materiales(Clave, Descripci�n, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

/*
	La suma de las cantidades e importe total de todas las 
	entregas realizadas durante el 97
*/
SELECT SUM(Cantidad) as 'Total Cantidades', SUM(Cantidad * (Costo + Costo * PorcentajeImpuesto / 100)) as 'Importe Total'
FROM Materiales M INNER JOIN Entregan E ON M.Clave = E.Clave
WHERE YEAR(Fecha) = 1997


/*
	Para cada proveedor, obtener la raz�n social del proveedor,
	n�mero de entregas e importe total de las entregas realizadas.
*/
SELECT RazonSocial, COUNT(E.RFC) as 'Numero de Entregas', 
	SUM(Cantidad * Costo * (1 + PorcentajeImpuesto / 100)) as 'Importe Total'
FROM Proveedores Prov INNER JOIN Entregan E ON Prov.RFC = E.RFC
	INNER JOIN Materiales M ON M.Clave = E.Clave
GROUP BY RazonSocial


/*
	Por cada material obtener la clave y descripci�n del material,
	la cantidad total entregada, la m�nima cantidad entregada, 
	la m�xima cantidad entregada, el importe total de las entregas
	de aquellos materiales en los que la cantidad promedio entregada
	sea mayor a 400.
*/
SELECT E.Clave, M.Descripcion, SUM(Cantidad) as 'Cantidad Total Entregada', 
MIN(Cantidad) as 'Cantidad M�nima Entregada', MAX(Cantidad) as 'Cantidad M�xima Entregada', 
SUM(Cantidad * Costo * (1 + PorcentajeImpuesto / 100)) as 'Importe Total'
FROM Materiales M INNER JOIN Entregan E ON M.Clave = E.Clave
GROUP BY E.Clave, M.Descripcion, M.Costo
HAVING AVG(Cantidad) > 400


/*
	Para cada proveedor, indicar su raz�n social y mostrar la 
	cantidad promedio de cada material entregado, detallando 
	la clave y descripci�n del material, excluyendo aquellos 
	proveedores para los que la cantidad promedio sea menor
	a 500.
*/
SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Promedio', M.Clave, Descripcion
FROM Proveedores Prov INNER JOIN Entregan E ON Prov.RFC = E.RFC
	INNER JOIN Materiales M ON M.Clave = E.Clave
GROUP BY RazonSocial, M.Clave, M.Descripcion
HAVING AVG(Cantidad) < 500


/*
	Mostrar en una solo consulta los mismos datos que en la 
	consulta anterior pero para dos grupos de proveedores: 
	aquellos para los que la cantidad promedio entregada 
	es menor a 370 y aquellos para los que la cantidad 
	promedio entregada sea mayor a 450
*/
SELECT RazonSocial, AVG(E.Cantidad) AS 'Cantidad_promedio', M.Clave, M.descripcion
FROM Proveedores Prov INNER JOIN Entregan E ON Prov.RFC = E.RFC
	INNER JOIN Materiales M ON M.Clave = E.Clave
GROUP BY RazonSocial, M.Clave, M.descripcion
HAVING AVG(E.Cantidad) < 370 OR AVG(E.Cantidad) > 450


/*
	Utilizando la sentencia 
	INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
	Considerando que los valores de tipos CHAR y VARCHAR 
	deben ir encerrados entre ap�strofes, los valores 
	num�ricos se escriben directamente y los de fecha, 
	como '1-JAN-00' para 1o. de enero del 2000, inserta 
	cinco nuevos materiales.
*/
INSERT INTO Materiales VALUES(1440, 'Cemento Gris 50kg', 185)
INSERT INTO Materiales VALUES(1450, 'Calidra 25kg', 70)
INSERT INTO Materiales VALUES(1460, 'Yeso Blanco 30kg', 65)
INSERT INTO Materiales VALUES(1470, 'Granito', 45)
INSERT INTO Materiales VALUES(1480, 'Adoqu�n Rojo', 20)


/*
	Clave y descripci�n de los materiales que nunca
	han sido entregados
*/
SELECT M.Clave, Descripcion
FROM Materiales M
LEFT JOIN Entregan E
ON M.Clave = E.Clave
WHERE E.Clave IS NULL


/*
	Raz�n social de los proveedores que han realizado 
	entregas tanto al proyecto 'Vamos M�xico' como al 
	proyecto 'Quer�taro Limpio'.
*/
SELECT RazonSocial 
FROM Proveedores Prov INNER JOIN Entregan E ON Prov.RFC = E.RFC
	INNER JOIN Proyectos Proy ON Proy.Numero = E.Numero
WHERE Denominacion = 'Queretaro Limpio' OR Denominacion = 'Vamos Mexico'
GROUP BY RazonSocial


/*
	Descripci�n de los materiales que nunca han 
	sido entregados al proyecto 'CIT Yucat�n'
*/
SELECT Descripcion
FROM Materiales M INNER JOIN Entregan E ON M.Clave = E.Clave
	INNER JOIN Proyectos Proy ON Proy.Numero = E.Numero
WHERE Denominacion <> 'CIT Yucat�n'
GROUP BY Descripcion
ORDER BY Descripcion


/*
	Raz�n social y promedio de cantidad entregada de los proveedores 
	cuyo promedio de cantidad entregada es mayor al promedio de la 
	cantidad entregada por el proveedor con el RFC 'VAGO780901'.
*/

SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Entregada Promedio'
FROM Proveedores P INNER JOIN Entregan E ON P.RFC = E.RFC
GROUP BY E.RFC, RazonSocial
HAVING AVG(Cantidad) > (SELECT AVG(Cantidad)
							FROM Entregan WHERE RFC = 'VAGO780901' GROUP BY RFC)



/*
	RFC, raz�n social de los proveedores que participaron en
	el proyecto 'Infonavit Durango' y cuyas cantidades totales
	entregadas en el 2000 fueron mayores a las cantidades totales
	entregadas en el 2001.
*/

CREATE VIEW VistaCant2000 (Cantidad2000, RFC) 
AS 
	SELECT SUM(Cantidad), RFC 
	FROM Entregan	
	WHERE YEAR(Fecha) = 2000
	GROUP BY RFC;


CREATE VIEW VistaCant2001 (Cantidad2001, RFC)
AS 
	SELECT SUM(Cantidad), RFC
	FROM Entregan	
	WHERE YEAR(Fecha) = 2001
	GROUP BY RFC;

SELECT Proveedores.RFC, RazonSocial
FROM Proveedores, Proyectos, Entregan
WHERE Proveedores.RFC = Entregan.RFC
AND Proyectos.Numero = Entregan.Numero 
AND Denominacion = 'Infonavit Durango'
AND Proveedores.RFC IN (SELECT VistaCant2000.RFC
				FROM VistaCant2000, VistaCant2001
				WHERE Cantidad2000 > Cantidad2001);

SELECT * FROM Entregan
SELECT * FROM Materiales
SELECT * FROM Proveedores
SELECT * FROM Proyectos