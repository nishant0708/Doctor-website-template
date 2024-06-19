import Contact from '@/Components/ContactUS/Contact'
import Contactinfo from '@/Components/Contactpage_info/Contactinfo'
import React from 'react'
import style from "./contact.module.css"
import ExtraServices from '@/Components/ExtraServices/ExtraServices'
import { Contactinfodata } from '@/Components/ExtraServices/data'

const page = () => {
  return (
    <div className={style.contact_content}>
        <Contactinfo/>
        <ExtraServices services={Contactinfodata}/>
        <Contact/>
    </div>
  )
}

export default page