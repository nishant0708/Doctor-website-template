import Image from 'next/image'
import React from 'react'
import style from "./Bookingbanner.module.css"

const Bookingbanner = () => {
  return (
    <div className={style.banner}>
        <div className={style.bannerContainer}> 
            <div className={style.mainbannerContainer}> 
            <div className={style.bannerimgContainer}> 
                <Image src="/doc-banner.png" width={300} height={300} alt=""/>
            </div>
            </div>
            <div className={style.bannerTextcontainer}>
                <p className={style.bannerMainHead}>Service You Can Count On,<span>24/7</span> </p>
                <p className={style.bannercontent}> Your satisfaction is our mission, 24 hours a day, 7 days a week.</p>
                <button className={style.banerbutton}>Book Your Appointment Now</button>
            </div>
        </div>
    </div>
  )
}

export default Bookingbanner