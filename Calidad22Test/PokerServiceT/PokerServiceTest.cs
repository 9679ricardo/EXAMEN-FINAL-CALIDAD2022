using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Calidad20222.web.Models;
using Calidad20222.web.Services;

namespace Calidad22Test.PokerServiceT
{
    public class PokerServiceTest
    {
        [Test]
        public void Color()
        {
            var service = new PokerService();

            var list = new List<Carta>
            {
                new Carta
                {
                    Numero = 1,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 11,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 8,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 5,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 7,
                    Palo = Palo.COCO
                }
            };
            var juga = service.GetJugada(list);
            Assert.That(juga, Is.Not.Null);
            Assert.That(juga, Is.EqualTo("COLOR"));
        }

        [Test]
        public void Full()
        {
            var service = new PokerService();

            var list = new List<Carta>
            {
                new Carta
                {
                    Numero = 1,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 1,
                    Palo = Palo.ESPADA
                },
                new Carta
                {
                    Numero = 1,
                    Palo = Palo.CORAZON
                },
                new Carta
                {
                    Numero = 7,
                    Palo = Palo.TREBOL
                },
                new Carta
                {
                    Numero = 7,
                    Palo = Palo.COCO
                }
            };

            var juga = service.GetJugada(list);
            Assert.That(juga, Is.Not.Null);
            Assert.That(juga, Is.EqualTo("FULL"));
        }
        [Test]
        public void Escalera()
        {
            var service = new PokerService();

            var list = new List<Carta>
            {
                new Carta
                {
                    Numero = 10,
                    Palo = Palo.CORAZON
                },
                new Carta
                {
                    Numero = 9,
                    Palo = Palo.ESPADA
                },
                new Carta
                {
                    Numero = 8,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 7,
                    Palo = Palo.TREBOL
                },
                new Carta
                {
                    Numero = 6,
                    Palo = Palo.ESPADA
                }
            };

            var juga = service.GetJugada(list);
            Assert.That(juga, Is.Not.Null);
            Assert.That(juga, Is.EqualTo("ESCALERA"));
        }

        [Test]
        public void Trio()
        {
            var service = new PokerService();

            var list = new List<Carta>
            {
                new Carta
                {
                    Numero = 12,
                    Palo = Palo.CORAZON
                },
                new Carta
                {
                    Numero = 12,
                    Palo = Palo.ESPADA
                },
                new Carta
                {
                    Numero = 12,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 7,
                    Palo = Palo.TREBOL
                },
                new Carta
                {
                    Numero = 6,
                    Palo = Palo.ESPADA
                }
            };

            var juga = service.GetJugada(list);
            Assert.That(juga, Is.Not.Null);
            Assert.That(juga, Is.EqualTo("TRIO"));
        }

        [Test]
        public void DoblePareja()
        {
            var service = new PokerService();

            var list = new List<Carta>
            {
                new Carta
                {
                    Numero = 11,
                    Palo = Palo.CORAZON
                },
                new Carta
                {
                    Numero = 11,
                    Palo = Palo.TREBOL
                },
                new Carta
                {
                    Numero = 9,
                    Palo = Palo.COCO
                },
                new Carta
                {
                    Numero = 9,
                    Palo = Palo.TREBOL
                },
                new Carta
                {
                    Numero = 2,
                    Palo = Palo.COCO
                }
            };

            var juga = service.GetJugada(list);
            Assert.That(juga, Is.Not.Null);
            Assert.That(juga, Is.EqualTo("DOBLE PAREJA"));
        }
    }
}
