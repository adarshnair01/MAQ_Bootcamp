ALTER FUNCTION udf_Top10ProductSales (@City nvarchar(50))
RETURNS @Product TABLE 
(
[EnglishProductName] nvarchar(50) NULL
,[Color] nvarchar(15) NULL
,[TotalSales] [money] NULL
)
AS
BEGIN
    DECLARE @EnglishProductName nvarchar(50);
    DECLARE @Color nvarchar(15);
    DECLARE @TotalSales money;

    DECLARE @iterator [int];
    SET @iterator = 0;
    
    WHILE @iterator <10
    BEGIN
	   SELECT @EnglishProductName = DP.EnglishProductName,@Color =  DP.[Color], @TotalSales =  SUM([SalesAmount]) FROM  [dbo].[FactInternetSales] FIS
	   LEFT JOIN dbo.DimProduct DP ON DP.[ProductKey] = FIS.[ProductKey]
	   LEFT JOIN [dbo].[DimGeography] DG ON DG.[SalesTerritoryKey] = FIS.[SalesTerritoryKey] AND DG.[City] = @City
	   GROUP BY DP.EnglishProductName, DP.[Color], FIS.[SalesAmount]
	   ORDER BY SUM(SalesAmount) DESC
	   OFFSET @iterator ROWS
	   FETCH NEXT 1 ROWS ONLY;

	   INSERT INTO @Product
	   VALUES (@EnglishProductName , @Color, @TotalSales);
	   
	   SET @iterator = @iterator + 1;
    END
    RETURN;
END;
