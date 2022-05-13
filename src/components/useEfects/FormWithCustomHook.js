import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm';
import './efects.css'


const FormWithCustomHook = () => {

    const [handleInputChange, values] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email,password } = values;

    useEffect(() => {
            console.log('El email cambioo');

      
    }, [email])


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }



    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />
            <div className=' form-group'>
                <input
                    type="text"
                    name="name"
                    value={name}
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    onChange={handleInputChange}
                />

            </div>
            <hr />
            <div className=' form-group'>
                <input
                    type="text"
                    name="email"
                    value={email}
                    className='form-control'
                    placeholder='email.com'
                    autoComplete='off'
                    onChange={handleInputChange}
                />

            </div>
            <hr />
            <div className=' form-group'>
                <input
                    type="password"
                    name="password"
                    className='form-control'
                    value={password}
                    placeholder='*****'
                    onChange={handleInputChange}
                />

            </div>

            <button type="submit" className='btn btn-primary'>Enviar</button>
     
        </form>
    )
}

export default FormWithCustomHook
