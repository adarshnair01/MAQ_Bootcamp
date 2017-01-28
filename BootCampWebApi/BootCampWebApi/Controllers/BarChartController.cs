using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;

namespace BootCampWebApi.Controllers
{
    public class BarChartController : Controller
    {
        // GET: BarChart
        public string Index()
        {

            string s = "";
            string cities = "[";
            string values = "[";
            try
            {

                string connetionString = null;
                SqlConnection connection;
                SqlCommand command;
                string sql1 = null;
                SqlDataReader dataReader;
                connetionString = "Data Source=DESKTOP-483S0CP\\SQLEXPRESS;Initial Catalog=Ext_Bootcamp;Integrated Security=True";
                sql1 = "Select [City], [Total Sales] FROM [dbo].[vw_TopTenSalesCities];";

                connection = new SqlConnection(connetionString);
                try
                {
                    connection.Open();
                    command = new SqlCommand(sql1, connection);
                    dataReader = command.ExecuteReader();
                    while (dataReader.Read())
                    {
                        cities += "\"" + Convert.ToString(dataReader.GetValue(0)) + "\", ";
                        values += Convert.ToString(dataReader.GetValue(1)) + ", ";
                    }
                    cities = cities.Remove(cities.Length - 2);
                    values = values.Remove(values.Length - 2);
                    cities += "]";
                    values += "]";
                    s = "{ \"cities\": " + cities + ", \"values\": " + values + "}";
                    dataReader.Dispose();
                    command.Dispose();
                    connection.Close();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            catch (Exception exp)
            {
                Console.Write(exp.Message);
            }

            return s;
        }
    }
}