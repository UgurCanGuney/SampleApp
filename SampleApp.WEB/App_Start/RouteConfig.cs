using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace SampleApp.WEB
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                  name: "Product_Index",
                  url: "Ürünler",
                  defaults: new { controller = "Product", action = "ProductIndex" },
                  namespaces: new[] { "SampleApp.WEB.Controllers" }
              );
            
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Login", action = "LoginIndex", id = UrlParameter.Optional },
                namespaces: new[] { "SampleApp.WEB.Controllers" }

            );
        }
    }
}
