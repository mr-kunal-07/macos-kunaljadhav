import MacControl from '#components/MacControl';
import { socials } from '#constants';
import windowWrapper from '#hoc/windowWrapper';
import React from 'react'

const Contact = () => {
    return (
        <>
            <div id='window-header'>
                <MacControl target='contact' />
                <h2>Contact Me</h2>
                <p>dev.kunaljadhav@gmail.com</p>
            </div>

            <div className='p-5 space-y-5'>
                <img src="/images/adrian.jpg" alt="Kunal" className='w-20 rounded-full' />

                <h3>Let's Connect</h3>
                <p>I'm always open to new opportunities and collaborations.</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                                <img src={icon} alt={text} className='size-6' />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const Contactwin = windowWrapper(Contact, "contact");

export default Contactwin