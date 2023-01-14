import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../css/new.module.css'

function New() {
    const router = useRouter()
    const [form, setForm] = useState({
        nombre: '',
        edad: '',

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
            // console.log(form)
            const res = await fetch('/api/controles', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push('/')

        } catch (error) {
            console.log(error)
        }
    }

  return (<>
    <div>Formulario</div>
    <form className={styles.form} onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Nombre'
            autoComplete='off'
            name='nombre'
            value={form.nombre}
            onChange={handleChange}
        />  
        <input 
        type="text" 
        placeholder='Edad'
        autoComplete='off'
        name='edad'
        value={form.edad}
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