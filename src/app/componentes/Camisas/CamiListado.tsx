import { useState } from "react";
import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISA } from "../../mocks/Camisa-mocks";
import { ARREGLO_CAMISA_GENERO } from "../../utilidades/dominios/DomGenero";

export const PeliListado = () => {
  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISA);

  const obtenerNombreGenero = (valor: string) => {
    for (const objGen of ARREGLO_CAMISA_GENERO) {
      if (objGen.codGenero == valor) {
        return objGen.nombreGenero;
      }
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "30%" }}>Marca</th>
                <th style={{ width: "20%" }}>Talla</th>
                <th style={{ width: "30%" }}>Color</th>
                <th style={{ width: "10%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrCamisas.map((miCamisa: Camisa) => (
                <tr className="align-middle" key={miCamisa.codCamisa}>
                  <td>{miCamisa.codCamisa}</td>
                  <td>{miCamisa.nombreCamisa}</td>
                  <td>{obtenerNombreGenero(miCamisa.codGeneroCamisa)}</td>
                  <td>{miCamisa.protagonistaCamisa}</td>
                  <td>
                    <img src={miCamisa.imagenCamisaBase64} alt="" className="imagenListado" />
                    <div className="text-info">{miCamisa.imagenCamisa}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
