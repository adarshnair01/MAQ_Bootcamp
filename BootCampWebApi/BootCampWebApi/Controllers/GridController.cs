using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BootCampWebApi.Controllers
{
    public class GridController : Controller
    {
        // GET: Grid
        public string Index(string city)
        {
            string s = "[";
            //string productName = "[";
            //string color = "[";
            //string totalSales = "[";
            SqlConnection connection;
            SqlCommand command;
            string sql1 = null;
            SqlDataReader dataReader;
            string connetionString = "Data Source=DESKTOP-483S0CP\\SQLEXPRESS;Initial Catalog=Ext_Bootcamp;Integrated Security=True";
            sql1 = "SELECT * FROM [dbo].[udf_Top10ProductSales] ('"+ city + "')";
            connection = new SqlConnection(connetionString);
            try
            {
                connection.Open();
                command = new SqlCommand(sql1, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    s += "{ \"Product\": \"" + Convert.ToString(dataReader.GetValue(0)) + "\", \"Color\": \"" + Convert.ToString(dataReader.GetValue(1)) + "\", \"Sales\": " + Convert.ToString(dataReader.GetValue(2)) + "},";
                }
                s = s.Remove(s.Length - 1);
                s += "]";
                //productName += "\"" + Convert.ToString(dataReader.GetValue(0)) + "\", ";
                //color += Convert.ToString(dataReader.GetValue(1)) + ", ";
                //totalSales += Convert.ToString(dataReader.GetValue(1)) + ", ";
                //}
                //productName = productName.Remove(productName.Length - 2);
                //color = color.Remove(color.Length - 2);
                //totalSales = totalSales.Remove(totalSales.Length - 2);
                //productName += "]";
                //color += "]";
                //totalSales += "]";
                //s = "{ \"product_name\": " + productName + ", \"color\": " + color + ", \"totalSales\": " + totalSales + "}";
                //totalSales = totalSales.Remove(totalSales.Length - 2);
                //totalSales = totalSales.Remove(totalSales.Length - 2);
                dataReader.Dispose();
                command.Dispose();
                connection.Close();
            }
            catch (Exception exp)
            {
                Console.Write(exp.Message);
            }

            return s;
        }

    }
}