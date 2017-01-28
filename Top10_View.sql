CREATE VIEW [dbo].[vw_TopTenSalesCities] AS
SELECT TOP(10)  DG.City, SUM(FIS.SalesAmount) AS [Total Sales]
FROM 
[dbo].[FactInternetSales] AS FIS 
left join [dbo].[DimSalesTerritory] AS DST
ON [FIS].[SalesTerritoryKey] = [DST].[SalesTerritoryKey]
left join [dbo].[DimGeography] AS DG
ON [DG].[SalesTerritoryKey] = [DST].[SalesTerritoryKey]
GROUP BY [DG].[City]
ORDER BY [Total Sales] DESC