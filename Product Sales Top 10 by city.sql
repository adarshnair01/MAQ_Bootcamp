SELECT TOP 10 DP.EnglishProductName, DP.[Color], SUM([SalesAmount]) AS TotalSales FROM  [dbo].[FactInternetSales] FIS
LEFT JOIN dbo.DimProduct DP ON DP.[ProductKey] = FIS.[ProductKey]
LEFT JOIN [dbo].[DimGeography] DG ON DG.[SalesTerritoryKey] = FIS.[SalesTerritoryKey] AND DG.[City] = 'London'
GROUP BY DP.EnglishProductName, DP.[Color], FIS.[SalesAmount]
ORDER BY SUM(SalesAmount) DESC