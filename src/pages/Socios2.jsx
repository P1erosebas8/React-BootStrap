import { Container, Row, Col } from "react-bootstrap";
import CardDescrip from "../components/CardConDescripcion";
import HeroSection from "../components/HeroSection";

const requisitos = [
  {
    titulo: "Tarjeta de Sanidad",
    descripcion:
      "Debes subir la tarjeta de sanidad vigente en formato digital, asegurándote que el documento sea legible y válido.",
    imagen: "src/assets/tarjeta-sanidad.png",
    botonLink: "https://www.gob.pe"
  },
  {
    titulo: "Antecedentes Penales",
    descripcion:
      "Adjunta tu certificado de antecedentes penales. Solo se aceptan documentos emitidos en los últimos 90 días.",
    imagen: "src/assets/antecedentes-penales.png",
    botonLink: "https://www.gob.pe"

  },
  {
    titulo: "Licencia de Conducir",
    descripcion:
      "Sube tu licencia de conducir vigente. Debe visualizarse claramente tu nombre completo, número de licencia, categoría y fecha de vencimiento.",
    imagen: "src/assets/licencia-conducir.jpg",
    botonLink: "https://www.gob.pe"

  },
  {
    titulo: "Foto del Transportista",
    descripcion:
      "Carga una foto actual y a color del conductor. Fondo claro, sin gafas oscuras ni gorros.",
    imagen: "src/assets/foto-conductor.png",
    botonLink: "https://www.gob.pe"

  },
  {
    titulo: "Tarjeta de Propiedad",
    descripcion:
      "Sube la tarjeta de propiedad del vehículo. El documento debe mostrar el número de placa, nombre del propietario, fecha de emisión y códigos de registro.",
    imagen: "src/assets/tarjeta-propiedad.png",
    botonLink: "https://www.gob.pe"

  },
  {
    titulo: "Tarjeta de Circulación",
    descripcion:
      "Adjunta la tarjeta de circulación vigente, asegurándote que la información sea visible y sin partes borrosas.",
    imagen: "src/assets/tarjeta-circulacion.png",
    botonLink: "https://www.gob.pe"

  },
  {
    titulo: "SOAT",
    descripcion:
      "Sube el documento del SOAT vigente. Debe visualizarse el número de póliza, la vigencia y la placa del vehículo asegurado.",
    imagen: "src/assets/soat.png",
    botonLink: "https://www.gob.pe"

  },
];

function RequisitosConductor() {
  return (
    <>
      <HeroSection
        title="Rutas Prime"
        subtitle="Tu seguridad y comodidad en cada viaje"
        background="src/assets/flota_transp.jpg"
        height="50vh"
        align="center"
        backgroundPosition="center 40%"
      />
      <section className="py-5" style={{ backgroundColor: "#0d2842ff" }}>
        <Container>
          <h2 className="text-center mb-5 text-white">📋 Requisitos del Conductor</h2>
          <Row>
            {requisitos.map((req, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <CardDescrip
                  titulo={req.titulo}
                  descripcion={req.descripcion}
                  imagen={req.imagen}
                  botonLink={req.botonLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
export default RequisitosConductor;