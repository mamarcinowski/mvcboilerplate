using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Client.Web.Startup))]
namespace Client.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
