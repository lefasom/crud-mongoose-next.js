import Form from '../components/Form.jsx'
import React, { useState } from 'react'

function New() {

    const formData = {
        nombre: "",
        edad: "",
    }

  return (<>
    <div>Formulario</div>
    <Form formData={formData}/>
  </>)
}

export default New