import Bannerimg from '@/Components/BannerImg/Bannerimg'
import BookApointment from '@/Components/BookAppointment/BookApointment'
import Bookingbanner from '@/Components/Bookingbanner/Bookingbanner'
import Buisness_hours from '@/Components/Buisness_Hours/Buisness_hours'
import Contact from '@/Components/ContactUS/Contact'
import ExtraServices from '@/Components/ExtraServices/ExtraServices'
import { specialservices } from '@/Components/ExtraServices/data'
import Service from '@/Components/Services/Service'

import React from 'react'

const page = () => {
  return (
    <div>
      <Bannerimg/>
     
      <ExtraServices services={specialservices} />
      <Service/>
      <Buisness_hours/>
      <Bookingbanner/>
      <BookApointment/> 
      <Contact/>
    </div>
  )
}

export default page