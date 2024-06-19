"use client";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import style from "./BookAppointment.module.css";
import { TextField } from "@mui/material";

const BookApointment = () => {
  return (
    <div>
    <div className={style.BookApointment}>
      <p className={style.bookheading}>Book Appointment</p>

      <div className={style.book_img_container}>
        <div>
          <Image
            src="/book-appointment.png"
            width={500}
            height={500}
            alt=""
            className={style.bookimage}
          />
        </div>
        <div className={style.calendar_container}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        defaultValue={dayjs()}
        sx={{
          width: "100%",
          backgroundColor: "#0db3b022",
          border:"2px dotted #0db3b0",
          '& .MuiButtonBase-root': {
            color: 'black', // Text color for buttons
          },
          '& .MuiPickersDay-root': {
            color: 'black', // Text color for days
          },
          '& .MuiTypography-root': {
            color: 'black', // Text color for all typography (e.g., month, year)
          },
          '& .MuiPickersCalendarHeader-root': {
            color: 'black', // Text color for calendar header
          },
          '& .MuiSvgIcon-root': {
            color: 'black', // Color for icons (e.g., arrows)
          },
          '& .Mui-selected': {
            backgroundColor: '#0db3b0 !important', // Background color for selected date
            color: 'white !important', // Text color for selected date
          },
        }}
        slotProps={{
          day: {
            sx: {
              '&.Mui-selected': {
                backgroundColor: '#0db3b0', // Background color for selected date
                color: 'white', // Text color for selected date
              },
              '&.Mui-selected:hover': {
                backgroundColor: 'darkred', // Darker red on hover for selected date
              },
            },
          },
          actionBar: {
            sx: {
              '& .MuiButton-root': {
                color: '#0db3b0',
                fontWeight:"600" // Text color for Cancel and OK buttons
              },
            },
          },
        }}
        renderInput={(params) => (
          <TextField {...params} fullWidth />
        )}
      />
    </LocalizationProvider>
        </div>
      </div>
    </div></div>
  );
};

export default BookApointment;
