DROP TABLE Entregan, Materiales, Proyectos, Proveedores;

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')
DROP TABLE Materiales;
CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
DROP TABLE Proveedores;
CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
DROP TABLE Proyectos;
CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')
DROP TABLE Entregan;
CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)


BULK INSERT a1658002.a1658002.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1658002.a1658002.[Proyectos]
  FROM 'e:\wwwroot\rcortese\Proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1658002.a1658002.[Proveedores]
  FROM 'e:\wwwroot\rcortese\Proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SET DATEFORMAT dmy -- especificar formato de la fecha
BULK INSERT a1658002.a1658002.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

-- EJERCICIO 2
INSERT INTO Materiales values(1000, 'xxx', 1000);
SELECT * FROM Materiales;
Delete from Materiales where Clave = 1000 and Costo = 1000;

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave);
INSERT INTO Materiales values(1000, 'xxx', 1000);
sp_helpconstraint Materiales;

ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC);
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero);
sp_helpconstraint Proveedores;
sp_helpconstraint Proyectos;
ALTER TABLE Entregan add constraint llavesEntregan PRIMARY KEY(Clave, RFC, Numero, Fecha);
sp_helpconstraint Entregan;
SELECT * FROM Entregan;

-- Para eliminar un constraint
--ALTER TABLE tableName drop constraint ConstraintName

--EJERCICIO 3
SELECT * from Materiales;
SELECT * from Proveedores;
SELECT * from Proyectos; 
SELECT * from Entregan;

INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0);
Delete from Entregan where Clave = 0;

ALTER TABLE entregan add constraint cfentreganclave
  foreign key (clave) references materiales(clave);

ALTER TABLE entregan add constraint cfentreganRFC
  foreign key (RFC) references Proveedores(RFC);
ALTER TABLE entregan add constraint cfentreganProyectos
  foreign key (Numero) references Proyectos(Numero);
sp_helpconstraint Entregan;
sp_helpconstraint Materiales;

-- Ejercicio 4
INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);
SELECT * FROM Entregan;

DELETE FROM Entregan WHERE Clave = 1000 AND Cantidad = 0;

ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;