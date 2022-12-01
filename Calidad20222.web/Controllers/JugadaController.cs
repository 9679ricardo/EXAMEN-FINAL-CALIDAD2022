using Calidad20222.web.Models;
using Calidad20222.web.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Calidad20222.web.Controllers
{
    public class JugadaController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View(new Jugada());
        }

        [HttpPost]
        public ActionResult Index(Jugada jugada)
        {
            if (!Validar(jugada))
            {
                return View(jugada);
            }

            var service = new PokerService();
            ViewBag.Jugada = service.GetJugada(jugada.Cartas);

            return View("resultado", jugada.Cartas);
        }

        private bool Validar(Jugada jugada)
        {
            List<string> list = new() { "CORAZON", "TREBOL", "ESPADA", "COCO" };

            int i = 0;

            foreach (Carta alternativa in jugada.Cartas)
            {
               
                if (string.IsNullOrEmpty(alternativa.Palo))
                {
                    ModelState.AddModelError(string.Format("Alter{0}Palo", i), "Palo no valida");
                    return false;
                }

                if (!list.Contains(alternativa.Palo))
                {
                    ModelState.AddModelError(string.Format("Alter{0}Palo", i), "Palo no valida");
                    return false;
                }

                if(alternativa.Numero <=0 || alternativa.Numero > 13)
                {
                    ModelState.AddModelError(string.Format("Alter{0}Numero", i), "Numero no valida");
                    return false;
                }

                i++;
            }

            if (jugada.Cartas.Count < 5)
            {
                ModelState.AddModelError("Cartas", "Las cartas deben ser al menos 4");
                return false;
            }
            if (jugada.Cartas.Count > 5)
            {
                ModelState.AddModelError("Cartas", "Las cartas solo deben ser 4");
                return false;
            }


            return true;
        }
    }
}
