"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.navbar_items}>
      <div>
        <Image src="/logo1.png" alt="" width={200} height={150} style={styles.logo1}/>
        {/* <p className={styles.logo}>Pharmacy_Logo</p> */}
      </div>
      <div className={styles.hamburger} onClick={handleToggle}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className={`${styles.navbar_items_list} ${isOpen ? styles.toggled : ''}`}>
        <Link href="/"><p>Home</p></Link>
        <Link href="/About"><p>About</p></Link>
        <Link href="/Contact"><p>Contact</p></Link>
        <Link href="/Blog"><p>Blog</p></Link>
      </div>
    </div>
  );
};

export default Navbar;
