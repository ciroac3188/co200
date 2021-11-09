/* eslint-disable no-lone-blocks */
import React from 'react'
import {Form} from 'react-bootstrap'

const Inputform = ({id, text, value, type, onChange}) => {
    if(type === 1){{/*PARA TEXTO PLANO INGRESE EL 1*/}
        return ( 
            <Form.Group className="mb-3" controlId={id}>
                <Form.Label>{text}</Form.Label>
                <Form.Control type="text" defaultValue={value} placeholder={`Ingrese ${text}`} onChange={onChange} disable="false"/>
            </Form.Group>
        )
    }else if(type === 2 ){ {/*PARA CONTRASEÑA INGRESE EL 2*/}
        return (
            <Form.Group className="mb-3" controlId={id}>
                    <Form.Label>{text}</Form.Label>
                    <Form.Control type="password" defaultValue={value} placeholder={`Ingrese ${text}`} onChange={onChange}/>
            </Form.Group>
        )
    }else if(type === 3) { {/*PARA EMAIL INGRESE EL 3*/}
        return (
            <Form.Group className="mb-3" controlId={id}>
                    <Form.Label>{text}</Form.Label>
                    <Form.Control type="password" defaultValue={value} placeholder={`Ingrese ${text}`} onChange={onChange}/>
            </Form.Group>
        )
    }else {
        return (
        <h1>NOT TYPE FOUND</h1>
        )
    }
}

export default Inputform
