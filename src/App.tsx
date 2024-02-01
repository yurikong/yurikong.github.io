import type { JSX } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router.tsx'

/**
 * @returns {JSX.Element} the App component
 */
function App(): JSX.Element {
  return <RouterProvider router={router} />
}

export default App

//  * @returns {JSX.Element} the AppLayout component
//  */
// function AppLayout(): JSX.Element {
//   return <>App Layout</>
// }

{
  /* <header id='app-header' className='app-header'>
App Header
</header>

<section id='hero' className='hero'>
Hero
</section>

<section id='about-me' className='about-me'>
About Me
</section>

<section id='projects' className='projects'>
Projects
</section>

<section id='contact-me' className='contact-me'>
Contact Me
</section> */
}
