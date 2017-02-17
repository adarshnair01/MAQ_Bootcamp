using System;
using System.Web.Mvc;
using System.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace BootCampWebApi.Controllers
{
    public class BarChartController : Controller
    {
        // GET: BarChart
        public string Index()
        {
            List<string> Cities = new List<string>();
            List<double> Value = new List<double>();
            Cities TopCities = new Cities();
            string s = string.Empty;
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
                        Cities.Add(Convert.ToString(dataReader.GetValue(0)));
                        Value.Add(Convert.ToDouble(Convert.ToString(dataReader.GetValue(1))));
                    }
                    TopCities = new Cities() { cities = Cities, values = Value };
                    s = JsonConvert.SerializeObject(TopCities);
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