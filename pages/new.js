import Link from 'next/link'
import React, { useState } from 'react'

function New() {

    const [form, setForm] = useState({
        pj: '',
    })
     const handleChange = (e) => {
        const { value, name } = e.target        
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
       e.preventDefault()
       postData(form)
    }
    const postData = async (form) => {
        try {
            console.log(form)
            const res = await fetch('/api/personaje', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (<>
    <div>Formulario</div>
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Nombre de personaje'
            autoComplete='off'
            name='pj'
            value={form.pj}
            onChange={handleChange}
        />
        <button>Agregar</button>
        <Link href='/'>
            Volver
        </Link>
    </form>
  </>)
}

export default New