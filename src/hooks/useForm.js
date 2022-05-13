import React, { useState } from 'react'

const useForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState)

    const handleInputChange = ({target}) => {

        setvalues(
          {
            ...values,
            [target.name]: target.value
          }
        );

    }

    return [
        handleInputChange,
        values
    ]

}

export default useForm
