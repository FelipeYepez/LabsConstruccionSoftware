DELETE FROM Proyectos;
BULK INSERT a1658002.a1658002.[Proyectos]
   FROM 'e:\wwwroot\a1658002\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT  * FROM Proyectos