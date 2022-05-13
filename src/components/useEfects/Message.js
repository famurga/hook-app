import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coords, setcoords] = useState({
        x:0,
        y:0
    })

    const {x,y} = coords;
    useEffect(() => {

        const mouseMove = (e) => {
            const cors = {
                x: e.x,
                y: e.y
            }
            console.log(cors);
            setcoords(cors);
        }


        window.addEventListener('mousemove',mouseMove);
      

        return () => {
            window.removeEventListener('mousemove',mouseMove);
        };
    }, [])

  return (
    <div>
      <h3>message</h3>
      <h4> x: {x}  y:{y}</h4>
    </div>
  )
}

export default Message
