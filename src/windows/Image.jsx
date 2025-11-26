import MacControl from '#components/MacControl';
import windowWrapper from '#hoc/windowWrapper';
import useWindowStore from '#store/Window';
import React from 'react'

const ImageWindow = () => {
    const { windows } = useWindowStore()
    const data = windows.imgfile?.data;

    if (!data) return;

    const { name, imageUrl } = data;

    return (
        <>
            <div id='window-header'>
                <MacControl target='imgfile' />
                <h2>{name}</h2>
            </div>

            <div className='p-5 bg-white'>
                {imageUrl ? (
                    <div className='w-full'>
                        <img
                            src={imageUrl}
                            alt={name}
                            className='w-full h-auto max-h-[70vh] object-contain'
                        />
                    </div>
                ) : null}
            </div>
        </>
    )
}

const ImageWin = windowWrapper(ImageWindow, "imgfile");

export default ImageWin