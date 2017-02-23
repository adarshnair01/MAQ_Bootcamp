using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BootCampWebApi
{
    public class Constants
    {
        public static string ConnectionString = ConnectionString;
        public static string ProductSelectStatement = "SELECT * FROM [dbo].[udf_Top10ProductSales] ('{0}')";
        public static string CitySelectStatement = "Select [City], [Total Sales] FROM [dbo].[vw_TopTenSalesCities];";
    }
}