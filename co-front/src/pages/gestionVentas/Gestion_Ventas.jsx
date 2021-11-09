import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import axios from "axios";
import DefaultTable from "../../components/defaultTable/defaultable";
import DefaultButtom from "../../components/defaultButton/defaultButtom";
import ModalcreateSale from "../../components/modal/modalcreatesale";
import ModalupdateSale from "../../components/modal/modalupdatesale";

const Ventas = () => {

const data = [
    {
        "id"  : 1,
        "col" : "ID"
    },
    {
        "id" : 2,
        "col" : "ID CLIENTE"
    },
    {
        "id" : 3,
        "col" : "NOMBRE CLIENTE"
    },
    {
        "id" : 4,
        "col": "FECHA-FAC"
    },
    {
        "id" : 5,
        "col": "ESTADO"
    },
    {
        "id" : 6,
        "col": "ID PRODUCTO"
    },
    {
        "id" : 7,
        "col": "VALOR TOTAL"
    },
    {
        "id" : 8,
        "col" : "ACTIONS"
    }
];

const rows = [
    {id: 1, a:"123", b: "Paula Alejandra Saavedra", c: "2021/10/24", d: "2021/10/24", e: "Seller", f: "Autorizado"},
    {id: 2, a:"122", b: "Alejandra Saavedra", c: "2021/10/24", d: "2021/10/24", e: "Seller", f: "Autorizado"},
    {id: 3, a:"124", b: "Paula Saavedra", c: "2021/10/24", d: "2021/10/24", e: "Seller", f: "Autorizado"}

];


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Gestion de Ventas</CardTitle>
                                <p className="card-category">
                                Listado de Ventas{" "}
                                </p>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <Card className="card-plain">
                                            <CardHeader>
                                                <CardTitle >
                                                    <div>
                                                        
                                                    </div>
                                                </CardTitle>
                                            </CardHeader>
                                            <CardBody>
                                                <DefaultTable data={data} rows={rows}/> TABLA DE GESTION DE USUARIOS
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                

                

            </div>   
        </>
    )
}

export default Ventas


//const GestionUsuarios = () => {
