DELETE FROM Proveedores;
BULK INSERT a1658002.a1658002.[Proveedores]
   FROM 'e:\wwwroot\a1658002\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT  * FROM Proveedores