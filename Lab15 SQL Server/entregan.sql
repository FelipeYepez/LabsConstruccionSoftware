SET DATEFORMAT dmy
DELETE FROM Entregan;
BULK INSERT a1658002.a1658002.[Entregan]
   FROM 'e:\wwwroot\a1658002\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT  * FROM Entregan