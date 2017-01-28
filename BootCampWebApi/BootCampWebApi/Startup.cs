using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BootCampWebApi.Startup))]
namespace BootCampWebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
