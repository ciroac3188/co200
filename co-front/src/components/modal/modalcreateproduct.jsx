import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import DefaultButtom from "../defaultButton/defaultButtom";
import Inputform from "../inputform/inputform2";

const ModalcreateProduct = ({ show, handleClose, onSend }) => {
  const [productoform, setProductoform] = useState("");
  const [valorform, setValorform] = useState("");
  const [estadoform, setEstadoform] = useState("");

  const sendData = () => {
    const json = {
      producto: productoform,
      valor: valorform,
      estado: estadoform,
    };
    console.log(productoform + estadoform);
    onSend(json);
    cleardata();
  };

  function cleardata() {
    setProductoform("");
    setValorform("");
    setEstadoform("");
  }

  return (
    <>
      <Modal show={show}>
        <Form method="post">
          <Modal.Header>
            <Modal.Title>Registrar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Inputform
              text="Producto:"
              value={productoform}
              defaultText={"Producto"}
              type={1}
              onChange={(e) => setProductoform(e.target.value)}
            />
            <Inputform
              text="Valor Unitario:"
              value={valorform}
              defaultText={"Valor Unitario"}
              type={1}
              onChange={(e) => setValorform(e.target.value)}
            />
            <Inputform
              text="Estado:"
              value={estadoform}
              defaultText={"Estado"}
              type={1}
              onChange={(e) => setEstadoform(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <DefaultButtom
              typebuttom={1}
              text={"Guardar Producto"}
              onClick={sendData}
            />
            <DefaultButtom
              typebuttom={2}
              text={"Cerrar"}
              onClick={handleClose}
            />
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ModalcreateProduct;
