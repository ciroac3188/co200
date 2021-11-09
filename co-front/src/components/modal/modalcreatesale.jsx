import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import DefaultButtom from "../defaultButton/defaultButtom";
import Inputform from "../inputform/inputform2";

const ModalcreateSale = ({ show, handleClose, onSend }) => {
  const [clienteIdform, setClienteIdform] = useState("");
  const [clienteNombreform, setClienteNombreform] = useState("");
  const [ventaFechaform, setVentaFechaform] = useState("");
  const [idVendedorform, setIdVendedorform] = useState("");
  const [ventaEstadoform, setVentaEstadoform] = useState("");
  const [productoIdform, setProductoIdform] = useState("");
  const [productoCantidadform, setProductoCantidadform] = useState(0);
  const [productoPrecioform, setProductoPrecioform] = useState(0);
  const [valorTotalform, setValorTotalform] = useState(0);

  const sendData = () => {
    const json = {
      clienteId: clienteIdform,
      clienteNombre: clienteNombreform,
      ventaFecha: ventaFechaform,
      idVendedor: idVendedorform,
      ventaEstado: ventaEstadoform,
      productoId: productoIdform,
      productoCantidad: productoCantidadform,
      productoPrecio: productoPrecioform,
      valorTotal: valorTotalform,
    };
    console.log(clienteIdform + clienteNombreform);
    onSend(json);
    cleardata();
  };

  function cleardata() {
    setClienteIdform("");
    setClienteNombreform("");
    setVentaFechaform("");
    setIdVendedorform("");
    setVentaEstadoform("");
    setProductoIdform("");
    setProductoCantidadform(0);
    setProductoPrecioform(0);
    setValorTotalform(0);
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
              text="Venta:"
              value={ventaform}
              defaultText={"Venta"}
              type={1}
              onChange={(e) => setVentaform(e.target.value)}
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
              text={"Guardar Venta"}
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

export default ModalcreateSale;
