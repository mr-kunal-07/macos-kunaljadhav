import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar, Welcome, Dock } from '#components'
import Terminal from '#windows/Terminal'
import Safari from '#windows/Safari'
import Resume from '#windows/Resume'
import ResumeWindow from '#windows/Resume'
import FinderWrapper from '#windows/Finder'

gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <ResumeWindow />
      <FinderWrapper />
    </main>
  )
}

export default App
