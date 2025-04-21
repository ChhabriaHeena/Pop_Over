import { useState } from 'react'
import './PopOver.css'

const PopOver = () => {
    const [showBody, setShowBody] = useState(false);


    const handleClick = () => {
        setShowBody(!showBody)
    }


    return (
        <div>
            <div>
                <button onClick={handleClick}>Click Here</button>
            </div>
            {
                showBody && (

                    <div className='popupContent'>
                        <>
                            <div className='triangle'></div>


                            <h2 className='popupHeader'>Header</h2>
                            <p>Content is here</p>

                        </>
                    </div>
                )
            }
        </div>
    )
}

export default PopOver
