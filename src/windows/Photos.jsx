import MacControl from '#components/MacControl'
import { gallery, photosLinks } from '#constants'
import windowWrapper from '#hoc/windowWrapper'
import useWindowStore from '#store/Window'
import { FileType, Mail, Search } from 'lucide-react'
import React from 'react'

const Photos = () => {

    const { openWindow } = useWindowStore()

    return (
        <>
            <div id='window-header'>
                <MacControl target='photos' />

                <div className='w-full flex justify-end items-center gap-3 text-gray-50'>
                    <Mail className='icon' />
                    <Search className='icon' />

                </div>
            </div>
            <div className='flex w-full'>
                <div className='sidebar'>
                    <h2>Photes</h2>

                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='gallery'>
                    <ul>
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                onClick={() =>
                                    openWindow('imgfile', {
                                        id,
                                        name: "Gallery Image",
                                        icon: "/images/image.png",
                                        kind: 'file',
                                        fileType: "img",
                                        imageUrl: img,


                                    })

                                }
                            >
                                <img src={img} alt={`img-${id}`} />
                            </li>
                        ))}
                    </ul>

                </div>


            </div>
        </>
    )
}

const PhotosWindow = windowWrapper(Photos, 'photos')

export default PhotosWindow