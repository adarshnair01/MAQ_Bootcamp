using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Text;
using System.Web.Mvc;

namespace BootCampWebApi.Controllers
{
    class Details {
            public Cities top10City { get; set; }
            public List<Product> top10Product { get; set; }
    }
    class Cities
    {
        // Auto-implemented properties.
        public List<string> cities { get; set; }
        public List<double> values { get; set; }
    }
    class Product
    {
        // Auto-implemented properties.
        public string Name { get; set; }
        public string Color { get; set; }
        public double Sales { get; set; }
    }
    public class BarGridController : Controller
    {
        // GET: BarGrid
        public ActionResult Index(string city)
        {
            string s = string.Empty;
            Details details;
            //Execute Top products query
            List<Product> topProducts = TopProducts(city);
            //Execute city query
            Cities topCities = TopCities();            
            details = new Details() {top10City = topCities, top10Product = topProducts };
            s = JsonConvert.SerializeObject(details);
            return Content(s, "application/json");
        }

        // GET: BarChart
        public ActionResult BarChart()
        {
            string s = string.Empty;
            //Execute city query
            Cities topCities = TopCities();
            s = JsonConvert.SerializeObject(topCities);
            return Content(s, "application/json");
        }
        // GET: GridData
        public ActionResult GridData(string city)
        {
            string s = string.Empty;
            //Execute Top products query
            List<Product> topProducts = TopProducts(city);
            s = JsonConvert.SerializeObject(topProducts);
            return Content(s, "application/json");
        }
        private Cities TopCities()
        {
            string connetionString = Constants.ConnectionString;
            string sql = Constants.CitySelectStatement;
            Cities topCities = null;
            SqlConnection connection = new SqlConnection(connetionString);
            try
            {
                connection.Open();
                SqlCommand command = new SqlCommand(sql, connection);
                SqlDataReader dataReader = command.ExecuteReader();
                List<string> Cities = new List<string>();
                List<double> Value = new List<double>();
                while (dataReader.Read())
                {
                    Cities.Add(Convert.ToString(dataReader.GetValue(0)));
                    Value.Add(Convert.ToDouble(Convert.ToString(dataReader.GetValue(1))));
                }
                topCities = new Cities() { cities = Cities, values = Value };
                dataReader.Dispose();
                command.Dispose();
                connection.Close();
            }
            catch (Exception ex)
            {
                LogMessage("Error: " + ex.Message);
            }
            return topCities;
        }
        private List<Product> TopProducts(string city)
        {
            string connetionString = Constants.ConnectionString;
            StringBuilder script = new StringBuilder();
            string sql = script.AppendFormat(Constants.ProductSelectStatement, city).ToString();
            List<Product> topProducts = new List<Product>();
            SqlConnection connection = new SqlConnection(connetionString);
            try
            {
                connection.Open();
                SqlCommand command = new SqlCommand(sql, connection);
                SqlDataReader dataReader = command.ExecuteReader();
                while (dataReader.Read())
                {
                    Product topProduct = new Product() { Name = Convert.ToString(dataReader.GetValue(0)), Color = Convert.ToString(dataReader.GetValue(1)), Sales = Convert.ToDouble(Convert.ToString(dataReader.GetValue(2))) };
                    topProducts.Add(topProduct);
                }
                dataReader.Dispose();
                command.Dispose();
                connection.Close();
            }
            catch (Exception ex)
            {
                LogMessage("Error: " + ex.Message);
            }
            return topProducts; 
        }

        public static void LogMessage(string sErrMsg)
        {
            DateTime now = DateTime.Now;
            string str1 = now.ToShortDateString().ToString();
            string filePath = "D:/bootcamp/Final Project/BootCampWebApi/BootCampWebApi/Logs/log";
            string currentTime = CurrentTime();
            string str2 = " ";
            now = DateTime.Now;
            string str3 = now.ToLongTimeString().ToString();
            string str4 = " --> ";
            string sLogFormat = str1 + str2 + str3 + str4;
            StreamWriter streamWriter = new StreamWriter(filePath + currentTime + ".log", true);
            string str5 = sLogFormat + sErrMsg;
            streamWriter.WriteLine(str5);
            streamWriter.Flush();
            streamWriter.Close();
        }

        public static string CurrentTime() {
            int num = DateTime.Now.Year;
            string str1 = num.ToString();
            num = DateTime.Now.Month;
            string str2 = num.ToString();
            num = DateTime.Now.Day;
            string str3 = num.ToString();
            string str4 = str2;
            string str5 = str3;
            string currentTime = str1 + str4 + str5;
            return currentTime;
        }

    }
}