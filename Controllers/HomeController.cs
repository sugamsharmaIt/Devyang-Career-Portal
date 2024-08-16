using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DivyangPortalWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Home/Home.cshtml");
        }

        public ActionResult About()
        {
            return View("~/Views/Home/About.cshtml");
        }

        public ActionResult Contact()
        {
            return View("~/Views/Home/Contact.cshtml");
        }
    }
}