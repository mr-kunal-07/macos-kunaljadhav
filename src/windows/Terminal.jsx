import MacControl from '#components/macControl'
import { techStack } from '#constants'
import windowWrapper from '#hoc/windowWrapper'
import { Check, Flag } from 'lucide-react'
import React from 'react'

const Terminal = () => {
    return (<>
        <div id='window-header'>
            <MacControl target='terminal' />
            <h2>Tech Stack</h2>
        </div>

        <div className='techstack'>
            <p>
                <span className='font-bold'>@Kunla %</span>
                show tech stack
            </p>

            <div className='label'>
                <p className='w-32'>Category</p>
                <p>Technologies</p>
            </div>

            <ul className='content'>
                {techStack.map(({ category, items }) => (
                    <li key={category} className='flex items-center'>
                        <Check className='check' size={20} />
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, i) => (
                                <li key={i}>
                                    {item}
                                    {i < items.length - 1 && ','}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className='footnote'>
                <p>
                    <Check size={20} /> all Stacks Loaded successfully (100%)
                </p>
                <p className='text-black'>
                    <Flag size={15} fill='black' />
                    Render times: 6ms
                </p>

            </div>
        </div>
    </>
    )
}

// Add the icon selector as the third parameter
const TerminalWindow = windowWrapper(Terminal, 'terminal', '#terminal-icon')
// Or use a class selector if your dock uses classes
// const TerminalWindow = windowWrapper(Terminal, 'terminal', '.dock-icon-terminal')

export default TerminalWindow