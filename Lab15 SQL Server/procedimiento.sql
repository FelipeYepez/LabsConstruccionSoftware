CREATE TABLE Materiales
(
  Clave numeric(5),
  Descripcion varchar(50),
  Costo numeric(8,2)
)

sp_help materiales

DROP TABLE Materiales

CREATE TABLE Proveedores (


DROP TABLE Entregan, Proyectos, Proveedores, Materiales

select * from sysobjects where xtype='U'