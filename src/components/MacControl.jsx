import useWindowStore from '#store/Window'
import React from 'react'

const MacControl = ({ target }) => {
    const { closeWindow } = useWindowStore()


    return (
        <div id='window-controls'>
            <div className='close' onClick={() => closeWindow(target)} />
            <div className='minimize' />
            <div className='maximize' />
        </div>
    )
}

export default MacControl