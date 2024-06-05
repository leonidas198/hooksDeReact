import { useEffect, useState } from "react"


export const Message = () => {

    const [coord, setCoord] = useState({ x: 0, y: 0 })

    useEffect(() => {

      const onMouseMove = ( { x, y } ) => {
        //const coord = { x, y };
        setCoord( { x, y } );
      }
      
      window.addEventListener( 'mousemove', onMouseMove );
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
       
      }
    }, []);
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coord ) }
    </>
  )
}
