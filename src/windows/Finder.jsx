import MacControl from '#components/MacControl.jsx'
import { locations } from '#constants'
import windowWrapper from '#hoc/windowWrapper'
import useLocationStore from '#store/Location'
import useWindowStore from '#store/Window'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import React from 'react'

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore()
    const { openWindow } = useWindowStore()
    const openItem = (item) => {
        if (item?.fileType === "pdf") openWindow("resume")

        if (item.kind === "folder") setActiveLocation(item)

        if (['fig', 'url'].includes(item.fileType) && item.href)
            window.open(item.href, '_blank')

        openWindow(`${item.fileType}-${item.kind}`, item)
    }

    const renderList = (name, items) => (

        <div >
            <h3>{name}</h3>
            <ul>
                {items.map(item => (
                    <li
                        key={item.id}
                        onClick={() => setActiveLocation(item)}
                        className={clsx(
                            item.id === activeLocation?.id ? 'active' : 'not-active'
                        )}
                    >
                        <img src={item.icon} alt={item.name} className='w-4' />
                        <p className='text-sm font-medium truncate'>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div >

    )

    return (
        <>
            <div id='window-header'>
                <MacControl target='finder' />
                <Search className='icon' />
            </div>

            <div className='bg-white flex h-full'>
                <div className='sidebar'>
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('Work', locations.work.children)}
                </div>
                <ul className='content'>
                    {activeLocation?.children?.map((item) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p >{item.name}</p>
                        </li>
                    ))}

                </ul>
            </div >

        </>
    )
}

const FinderWrapper = windowWrapper(Finder, 'finder')


export default FinderWrapper