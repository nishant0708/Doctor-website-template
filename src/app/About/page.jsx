import React from 'react';
import Image from 'next/image';
import style from './About.module.css';

const mockData = [
  {
    imageUrl: '/banner.png', // Change to the correct path of your image
    title: 'About Us',
    content: `
       <div class="theme1_about_textDescription__CMWWv"><p>At Pixel, we're more than just a digital agency; we're your partners in crafting compelling online experiences. With a fusion of creativity and technology, we empower businesses to thrive in the digital landscape. Our journey began with a passion for innovation and a commitment to excellence. Today, we stand as a beacon of digital prowess, offering a comprehensive suite of services tailored to meet your unique needs.</p><p><br></p><p>At the heart of our ethos lies a dedication to understanding your brand identity and objectives. Through strategic collaboration, we translate your vision into captivating digital solutions that resonate with your audience. Whether it's web design, development, digital marketing, or branding, our team of seasoned professionals delivers results that exceed expectations.</p><p><br></p><p>What sets us apart is our unwavering focus on quality and innovation. We leverage cutting-edge technologies and industry best practices to ensure that your digital presence stands out in a crowded marketplace. From sleek, user-friendly websites to dynamic marketing campaigns, we're here to elevate your brand to new heights.</p><p><br></p><p>Join us on a journey of digital transformation, where creativity knows no bounds and success knows no limits. Let's redefine the possibilities together, one pixel at a time.,</p></div>
    `
  }
];

const About = () => {
  return (
    <div className={style.aboutContainer}>
      {mockData.map((data, index) => (
        <div key={index} className={style.aboutContent}>
          <div className={style.aboutImage}>
            <Image src={data.imageUrl} alt="About Us" width={350} height={350} />
          </div>
          <div className={style.aboutText}>
            <h2>{data.title}</h2>
            <p dangerouslySetInnerHTML={{__html:data.content}}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
