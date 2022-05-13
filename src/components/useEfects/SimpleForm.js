import React, { useEffect, useState } from 'react'
import './efects.css'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;


    useEffect(() => {
        // console.log('hey!!')
    }, [])
    useEffect(() => {
        // console.log('Form state cambióo!!')
    }, [formState])


    useEffect(() => {
        // console.log('email  cambióo!!')
    }, [email])

    const handleInputChange = ({ target }) => {


        console.log(target.value)

        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>UseEfects</h1>
            <hr />
            <div className=' form-group'>
                <input
                    type="text"
                    name="name"
                    value={name}
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
                    placeholder='email.com'
                    autoComplete='off'
                    onChange={handleInputChange}
                />

            </div>
            { (name === '123') && <Message/>}
        </>
    )
}

export default SimpleForm
