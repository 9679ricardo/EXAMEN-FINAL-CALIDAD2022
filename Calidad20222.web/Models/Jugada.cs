namespace Calidad20222.web.Models
{
    public class Jugada
    {
        public Jugada()
        {
            Cartas = new List<Carta>();
        }

        public List<Carta> Cartas { get; set; }
    }
}
