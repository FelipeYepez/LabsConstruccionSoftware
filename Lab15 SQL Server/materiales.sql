DELETE FROM Materiales;
BULK INSERT a1658002.a1658002.[Materiales]
   FROM 'e:\wwwroot\a1658002\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT  * FROM Materiales