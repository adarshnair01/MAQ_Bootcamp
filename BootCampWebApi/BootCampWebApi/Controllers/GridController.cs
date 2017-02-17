using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Web.Mvc;

namespace BootCampWebApi.Controllers
{
    public class GridController : Controller
    {
        // GET: Grid
        public ActionResult Index(string city)
        {
            string s = string.Empty;
            List<Product> topProducts = new List<Product>();
            SqlConnection connection;
            SqlCommand command;
            StringBuilder script = new StringBuilder();
            string sql1 = null;
            SqlDataReader dataReader;
            string connetionString = Constants.ConnectionString;
            sql1 = script.AppendFormat(Constants.CitySelectStatement, city).ToString();
            connection = new SqlConnection(connetionString);
            try
            {
                connection.Open();
                command = new SqlCommand(sql1, connection);
                dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Product topProduct = new Product() { Name = Convert.ToString(dataReader.GetValue(0)), Color = Convert.ToString(dataReader.GetValue(1)), Sales = Convert.ToDouble(Convert.ToString(dataReader.GetValue(2))) };
                    topProducts.Add(topProduct);
                }
                s = JsonConvert.SerializeObject(topProducts); 
                dataReader.Dispose();
                command.Dispose();
                connection.Close();
            }
            catch (Exception exp)
            {
                Console.Write(exp.Message);
            }
            return Content(s, "application/json");
        }

    }
}