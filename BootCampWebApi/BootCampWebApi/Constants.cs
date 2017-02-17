using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BootCampWebApi
{
    public class Constants
    {
        public static string ConnectionString = "Data Source=DESKTOP-483S0CP\\SQLEXPRESS;Initial Catalog=Ext_Bootcamp;Integrated Security=True";
        public static string ProductSelectStatement = "SELECT * FROM [dbo].[udf_Top10ProductSales] ('{0}')";
        public static string CitySelectStatement = "Select [City], [Total Sales] FROM [dbo].[vw_TopTenSalesCities];";
    }
}