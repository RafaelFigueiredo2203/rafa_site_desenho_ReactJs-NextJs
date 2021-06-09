import Head from 'next/head'
import { Body } from '../components/Body'
import { Galeria } from '../components/Galeria'

import { Menubar } from '../components/Menu'
import { Mural } from '../components/Mural'
import { SemiEnd } from '../components/SemiEnd'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <section>
   <Menubar/>
   
   <Body/>

   <SemiEnd/>
   
   <Galeria/>
   
   
    

    
      </section>
      
     
      
    </div>
  )
}
