import Image from 'next/image'
import React from 'react'
import style from "./Bannerimg.module.css"

const Bannerimg = () => {
  return (
    <div>
    <Image src="/banner1.webp" alt="" fill className={style.bannerimg} />
     <div className={style.Herotext_div} > 
      <p className={style.Herotext_Heading}>The Clinic</p>
      <p className={style.Herotext_subheading}>Your Health, <span>Our Priority</span></p>
      <p className={style.herotext_desc}>Expert medical care at <span>[Doctor&apos;s Name] Clinic.</span></p>
      <p className={style.herotext_button}>Book Your Appointment Now</p>
     </div>
    </div>
  )
}

export default Bannerimg