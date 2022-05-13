import React from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import '../useEfects/efects.css'

const MultipleCustomHooks = () => {


    const { counter, increment} = useCounter(1);
    console.log(counter);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    console.log(state);
    const { loading,data } = state;
    const {quote,author } = !!data && data[0];

    return (
        <div>
            <h3>Breakingbda Quotes!</h3>
            <hr />

            {
                loading ? (<div className='alert alert-info text-center'>
                    Loading..
                </div>) : (
                    <blockquote className='blockquote text-right'>
                        <p className='mb-3'>{quote} </p>
                        <footer className='blockquote-footer'>
                            {author}
                        </footer>

                    </blockquote>)
            }

            <button type="" className='btn btn-primary' onClick={ increment}>Siguiente</button>


        </div>
    )
}

export default MultipleCustomHooks
