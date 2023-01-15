import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../css/new.module.css'
import { mutate } from "swr";
function Form({formData, forNewPerson = true}) {

    const router = useRouter()
    const [form, setForm] = useState({
        nombre: formData.nombre,
        edad: formData.edad,

    })
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { value, name } = e.target        
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
       e.preventDefault()
       forNewPerson ? postData(form) : putData(form);
       
    }
    const putData = async (form) => {
        const { id } = router.query;
        try {
          const res = await fetch(`/api/persona/${id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(form),
          });
          if (!res.ok) {
            throw new Error(res.status);
          }
    
          const { data } = await res.json();
          mutate(`/api/persona/${id}`, data, false);
          router.push("/");
        } catch (error) {
          setMessage("Falló la edición");
        }
      };
    

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

  return (
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
    <button>
        { forNewPerson ? 'Agregar' : 'Editar' }
    </button>
    <Link href='/'>
        Volver
    </Link>
    <p>{message}</p>
</form>
  )
}

export default Form