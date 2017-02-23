Bootcamp Project

Technical Specification:

Requirements on Web report:
1.	A bar chart displaying top 10 cities with maximum sales
2.	A grid which displays top 10 selling products of a city
3.	A drop down binding the grid with the top 10 cities as options
4.	On selecting the drop down option, top 10 selling products should be displayed for the city selected
5.	Grid should be a client side and sortable with a pagination of 5
6.	Charts should be as per MAQ standard chart library
7.	Info icon should have appropriate information for chart and grid

Requirements on API front:
1.	Three end points for Bar Chart, grid and (Bar chart + grid) combined respectively
2.	Request and response should be in JSON format
3.	Failure response should be handled
4.	Factory design should be followed
5.	Appropriate status code, headers should be used
6.	Use C# MVC or DAO architecture
7.	Use logging for errors
8.	Authentication should be handled
Requirements on SSIS and database:

Prerequisite: AdventureWorks 2014 database, Local database
1.	Create SSIS package for pulling following tables from AdventureWorks database to local database
a.	dbo.Product
b.	dbo.ProductInventory
c.	dbo.DimGeography
d.	dbo.dimSalesTerritory
e.	dbo.FactInternetSales
f.	dbo.dimDate
2.	Pull the data only for 3rd Quarter of Fiscal Year 2011. Note- Pull data based on Order Date
3.	Create same schema and tables in local database and dump the pulled data into it
4.	All SSIS development standards and proper naming conventions should be used
5.	Queries should contain table/query hints. (Ex. Nolock etc..)
