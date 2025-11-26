import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar, Welcome, Dock } from '#components'
import Terminal from '#windows/Terminal'
import Safari from '#windows/Safari'
import ResumeWindow from '#windows/Resume'
import FinderWrapper from '#windows/Finder'
import TextWindow from '#windows/Text.jsx'
import ImageWin from '#windows/Image'
import Contactwin from '#windows/Contact'
import Home from '#components/Home'
import PhotosWindow from '#windows/Photos'

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
      <TextWindow />
      <ImageWin />
      <Contactwin />
      <PhotosWindow />

      <Home />
    </main>
  )
}

export default App
