import Image from 'next/image'
import Navbar from '../components/Navbar'
import Homey from '../components/Homey'
import Contact from '@/components/Contact'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="">
       <Navbar></Navbar>
       <Homey></Homey>
      <Contact></Contact>
       <About></About>
       
       
    </main>
  )
}
