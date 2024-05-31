import { useState } from "react";

import { Camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISA } from "../../mocks/Camisa-mocks";
import { ARREGLO_CAMISA_GENERO } from "../../utilidades/dominios/DomGenero";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export const PeliAdmin = () => {
  const [arrCamisas] = useState<Camisa[]>(ARREGLO_CAMISA);
  const [objPeli, setObjPeli] = useState<Camisa>(
    new Camisa(0, "", "", "", "", "")
  );
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };

  const obtenerNombreGenero = (valor: string) => {
    for (const objGen of ARREGLO_CAMISA_GENERO) {
      if (objGen.codGenero == valor) {
        return objGen.nombreGenero;
      }
    }
  };

  const eliminarCamisa = (codigo: number) => {
    const cantidad = arrCamisas.length;

    for (let i = 0; i < cantidad; i++) {
      if (arrCamisas[i] != undefined) {
        const comparar = arrCamisas[i].codCamisa;

        if (comparar == codigo) {
          arrCamisas.splice(i, 1);
        }
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
                <th style={{ width: "20%" }}>Color</th>
                <th style={{ width: "10%" }}>Imagen</th>
                <th style={{ width: "10%" }}>Opciones</th>
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
                    <img
                      src={miCamisa.imagenCamisaBase64}
                      alt=""
                      className="imagenListado"
                    />
                    <div className="text-info">{miCamisa.imagenCamisa}</div>
                  </td>
                  <td className="text-center">
                    <a
                      href="/#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                        setObjPeli(miCamisa);
                      }}
                    >
                      <i className="fa-solid fa-trash-can rojito"></i>
                    </a>{" "}
                    <NavLink to={"/pactual/" + miCamisa.codCamisa}>
                      <i className="fa-regular fa-pen-to-square verde"></i>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Eliminar Camisas</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              ¿Está seguro de eliminar esta camisa {objPeli.nombreCamisa}?
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={(e) => {
                  setShow(false);
                }}
              >
                Cancelar
              </Button>

              <Button
                variant="danger"
                onClick={(e) => {
                  eliminarCamisa(objPeli.codCamisa);
                  setShow(false);
                }}
              >
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};
