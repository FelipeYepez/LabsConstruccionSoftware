---------------------- SQL Server ----------------------
/*
Un stored procedure (procedimiento almacenado) es un 
programa que se almacena en una base de datos, para 
ser ejecutado por el servidor de bases de datos. Los 
diferentes manejadores de bases de datos comerciales 
ofrecen extensiones procedimentales a SQL para ofrecer:
    -Paso de parámetros
    -Declaración y uso de variables
    -Estructuras de control
*/

IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'creaMaterial' AND type = 'P')
    DROP PROCEDURE creaMaterial
GO

CREATE PROCEDURE creaMaterial
    @uclave NUMERIC(5,0),
    @udescripcion VARCHAR(50),
    @ucosto NUMERIC(8,2),
    @uimpuesto NUMERIC(6,2)
AS
    INSERT INTO Materiales VALUES(@uclave, @udescripcion, @ucosto, @uimpuesto)
GO

/*
    ¿Qué hace el primer bloque del código (bloque del IF)?
    Verifica si existe un objeto creado dentro del sistema dadas 
    las condiciones de nombre 'creaMaterial'y tipo Stored Procedure.
    En caso de existir lo elimina para ejecutar la creación sin problemas.
*/

/*
    ¿Para qué sirve la instrucción GO?
    Agrupa comandos SQL para enviarlos al servidor juntos en lotes
    o batches a partir del anterior GO, por ejemplo también se puede
    poner Go 5 para ejecutar el lote de comandos 5 veces.
*/

/*
    ¿Explica que recibe como parámetro 
    este Procedimiento y qué tabla modifica?
    Recibe las variables clave, descripcion, costo e impuesto 
    dando el tipo de dato para no generar errores al insertar
    como parámetros a la tabla Materiales.
*/

--  Para ejecutar el stored procedure, se utiliza la sintaxis mostrada en el siguiente ejemplo:
EXECUTE creaMaterial 5000,'Martillos Acme',250,15

/*
    Por analogía crea procedimientos almacenados con los siguientes objetivos:
    
    modificaMaterial que permite modificar
    un material que reciba como parámetros 
    las columnas de la tabla materiales y 
    actualice las columnas correspondientes 
    con los valores recibidos, para el registro 
    cuya llave sea la clave que se recibe 
    como parámetro.
*/



-- Crear procedimientos para realizar consultas con parámetros
-- Define el siguiente stored procedure en tu base de datos:
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'queryMaterial' AND type = 'P')
    DROP PROCEDURE queryMaterial
GO

CREATE PROCEDURE queryMaterial
    @udescripcion VARCHAR(50),
    @ucosto NUMERIC(8,2)

AS
    SELECT * FROM Materiales WHERE descripcion
    LIKE '%'+@udescripcion+'%' AND costo > @ucosto
GO
                            
-- Ejecútalo con la siguiente instrucción:
EXECUTE queryMaterial 'Lad',20
/*
    Explica en tu reporte qué recibe como parámetro 
    este procedimiento y qué hace.

    Este procedimiento recibe como parámetros la descripción
    de un Material y un costo del material; lo que se realiza
    en el procedimiento es consultar materiales cuya descripción 
    contenga la cadena ingresada en descripción y que tenga un 
    costo mayor al recibido.
*/



---------------------- MySQL----------------------

-- Procedimiento que agrega un registro a la tabla Materiales 
-- con los parámetros recibidos.
DROP PROCEDURE IF EXISTS creaMaterial;
DELIMITER //
CREATE PROCEDURE creaMaterial(
	IN clave INT(11),
    IN descripcion VARCHAR(40),
    IN precio FLOAT,
    IN impuesto FLOAT
)
BEGIN
	INSERT INTO materiales VALUES (clave, descripcion, precio, impuesto);
END //


-- Para ejecutar el stored procedure
CALL creaMaterial(5000,'Martillos Acme',250,15); 


-- Modificar Material
DROP PROCEDURE IF EXISTS modificaMaterial;
DELIMITER //
CREATE PROCEDURE modificaMaterial(
	IN uclave INT(11),
    IN udescripcion VARCHAR(40),
    IN uprecio FLOAT,
    IN uimpuesto FLOAT
)
BEGIN
	UPDATE Materiales SET descripcion = udescripcion, precio = uprecio, impuesto = uimpuesto 
    WHERE clave = uclave;
END //


CALL modificaMaterial(5000,'Martillos FA',300,15);

-- Eliminar Material
DROP PROCEDURE IF EXISTS eliminaMaterial;
DELIMITER //
CREATE PROCEDURE eliminaMaterial(
	IN uclave INT(11)
)
BEGIN
	DELETE FROM entregan WHERE clave = uclave;
    DELETE FROM materiales WHERE clave = uclave;
END //

CALL eliminaMaterial(5000);


/*
    Desarrollar los procedimientos (almacenados) 
    creaProyecto , modificaproyecto y eliminaproyecto, 
    hacer lo mismo para las tablas proveedores y 
    entregan.
*/

-- Crea Proyecto
DROP PROCEDURE IF EXISTS creaProyecto;
DELIMITER //
CREATE PROCEDURE creaProyecto(
	IN numero INT(11),
    IN denominacion VARCHAR(40)
)
BEGIN
	INSERT INTO proyectos VALUES(numero, denominacion);
END //

CALL creaProyecto(5020, 'RECON');


-- Modifica Proyecto
DROP PROCEDURE IF EXISTS modificaProyecto;
DELIMITER //
CREATE PROCEDURE modificaProyecto(
	IN unumero INT(11),
    IN udenominacion VARCHAR(40)
)
BEGIN
	UPDATE proyectos SET denominacion = udenominacion WHERE numero = unumero;
END //

CALL modificaProyecto(5020, 'Natdev WBS');


-- Elimina Proyecto
DROP PROCEDURE IF EXISTS eliminaProyecto;
DELIMITER //
CREATE PROCEDURE eliminaProyecto(
	IN unumero INT(11)
)
BEGIN
	DELETE FROM proyectos WHERE numero = unumero;
END //

CALL eliminaProyecto(5020);


-- Crear Proveedores
DROP PROCEDURE IF EXISTS creaProveedor;
DELIMITER //
CREATE PROCEDURE creaProveedor(
	IN rfc VARCHAR(15),
    IN razonsocial VARCHAR(40)
)
BEGIN
	INSERT INTO proveedores VALUES (rfc, razonsocial);
END //

CALL creaProveedor('IIII800101','Peñips');


-- Modificar Proveedores
DROP PROCEDURE IF EXISTS modificaProveedor;
DELIMITER //
CREATE PROCEDURE modificaProveedor(
	IN urfc VARCHAR(15),
    IN urazonsocial VARCHAR(40)
)
BEGIN
	UPDATE Proveedores SET razonsocial = urazonsocial
    WHERE rfc = urfc;
END //

CALL modificaProveedor('IIII800101', 'TabiPeñips');


-- Eliminar Proveedor
DROP PROCEDURE IF EXISTS eliminaProveedor;
DELIMITER //
CREATE PROCEDURE eliminaProveedor(
	IN urfc VARCHAR(15)
)
BEGIN
	DELETE FROM proveedores WHERE rfc = urfc;
END //

CALL eliminaProveedor('IIII800101');


-- Crear Entrega
DROP PROCEDURE IF EXISTS creaEntrega;
DELIMITER //
CREATE PROCEDURE creaEntrega(
	IN clave INT(11),
    IN rfc VARCHAR(15),
    IN numero INT(11),
    IN fecha DATE,
    IN cantidad INT(11)
)
BEGIN
	INSERT INTO entregan VALUES (clave, rfc, numero, fecha, cantidad);
END //

CALL creaEntrega(1430, 'HHHH800101', 5018, '2020-04-14', 150);


-- Modificar Entrega
DROP PROCEDURE IF EXISTS modificaEntrega;
DELIMITER //
CREATE PROCEDURE modificaEntrega(
	IN uclave INT(11),
    IN urfc VARCHAR(15),
    IN unumero INT(11),
    IN ufecha DATE,
    IN ucantidad INT(11)
)
BEGIN
	UPDATE Entregan SET fecha = ufecha, cantidad = ucantidad
    WHERE clave = uclave AND rfc = urfc AND numero = unumero;
END //

CALL modificaEntrega(1430, 'HHHH800101', 5018, '2021-04-14', 300);


-- Eliminar Entrega
DROP PROCEDURE IF EXISTS eliminaEntrega;
DELIMITER //
CREATE PROCEDURE eliminaEntrega(
	IN uclave INT(11),
    IN urfc VARCHAR(15),
    IN unumero INT(11)
)
BEGIN
	DELETE FROM entregan WHERE clave = uclave AND rfc = urfc AND numero = unumero;
END //

CALL eliminaEntrega(1430, 'HHHH800101', 5018);

/*
    ¿Qué ventajas tienen el utilizar Stored Proceduresen una aplicación cliente-servidor?
    - Aumentan escalabilidad dado que se aisla el procesamiento de datos de la aplicación, haciendolo tan solo en el servidor.
    - El mantenimiento de un SP es más fácil dado que solo se cambia una vez en el servidor en lugar de en todas las copias de clientes.


    ¿Qué ventajas tiene utilizar SP en un proyecto?
    - Son más rápidos y eficientes dado que solo se tienen que compilar una vez y se almacenan sus ejecutables haciendo las consultas más rápidas.
    - Reutilización de código, se logra mayor productividad ya que se usa una y otra vez el código.
*/