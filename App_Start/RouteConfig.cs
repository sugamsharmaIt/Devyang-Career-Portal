using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace DivyangPortalWeb
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
name: "EmployeeLanding",
url: "EmployeeLanding",
defaults: new { controller = "EmployeeLanding", action = "Index", id = UrlParameter.Optional }
);
            routes.MapRoute(
  name: "Blogs",
  url: "Blogs",
  defaults: new { controller = "Blogs", action = "Index", id = UrlParameter.Optional }
);

            routes.MapRoute(
   name: "Schemes",
   url: "Schemes",
   defaults: new { controller = "Schemes", action = "Index", id = UrlParameter.Optional }
);

            routes.MapRoute(
    name: "Jobs",
    url: "Jobs",
    defaults: new { controller = "Jobs", action = "Index", id = UrlParameter.Optional }
);

            routes.MapRoute(
       name: "FounderNote",
       url: "FounderNote",
       defaults: new { controller = "FounderNote", action = "FounderNote", id = UrlParameter.Optional }
   );
            routes.MapRoute(
            name: "Contactus",
            url: "Contactus",
            defaults: new { controller = "Home", action = "Contact", id = UrlParameter.Optional }
        );
            routes.MapRoute(
              name: "Aboutus",
              url: "Aboutus",
              defaults: new { controller = "Home", action = "About", id = UrlParameter.Optional }
          );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
