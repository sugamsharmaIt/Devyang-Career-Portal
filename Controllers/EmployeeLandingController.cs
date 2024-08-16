using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DivyangPortalWeb.Controllers
{
    public class EmployeeLandingController : Controller
    {
        // GET: EmployeeLanding
        public ActionResult Index()
        {
            return View("~/Views/EmployeeLanding/EmployeeLanding.cshtml");
        }
    }
}