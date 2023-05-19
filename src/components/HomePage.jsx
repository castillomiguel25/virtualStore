import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Themes from '@components/Theme';
import Footer from '@components/Footer';
import Promo from './Promo';
import Tips from './Tips';

import { Navbar, Button } from 'flowbite-react';
import Image from 'next/image';
import uno from '@icons/one.webp';

import { useRouter } from 'next/router';
import es from '../../translated/es';
import en from '../../translated/en';
import Select from './Lenguaje';

const Group = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      setDarkMode(storedTheme ? JSON.parse(storedTheme) : false);
    }
  }, []);

  const { asPath, locale, locales } = useRouter();
  const translated = locale === 'en' ? en : es;

  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', JSON.stringify(updatedDarkMode));
    }
  };
   
  console.log(darkMode, typeof(darkMode))

  return (
    <div className={`h-full mx-auto ${darkMode ? 'dark' : ''}`}>
      <Navbar className='fixed dark:bg-black z-50 w-full top-0' fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className='dark:bg-emerald-500 dark:hover:bg-emerald-600 bg-indigo-500 hover:bg-indigo-600 mr-5 hidden lg:block' href="/User">PROBAR</Button>
          <Navbar.Toggle className='hidden lg:block' />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={true}>
            <Themes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </Navbar.Link>
          <Navbar.Link href='/Form' className='mt-3'>
            <h3 className='cursor-pointer'>CONTÁCTANOS</h3>
          </Navbar.Link>
          <Navbar.Link className='mt-3'>
            <Select />
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="bg-neutral-50 py-10 text-center text-neutral-800 dark:bg-emerald-500 dark:text-neutral-200 mt-10">
        <h1 className="mb-6 text-5xl font-bold mt-10">I Shoping</h1>
        <h3 className="mb-8 text-3xl font-bold">{translated.news.subtitle}</h3>
        <div className="grid place-items-center">
          <div className="">
            <Image src={uno} alt='Image-page-init'></Image>
          </div>
        </div>
        <div className="mb-5">{ }</div>
        <Link
          className="inline-block rounded bg-indigo-500 dark:bg-black px-6 pt-2.5 pb-2 text-xs
           font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition 
           duration-150 ease-in-out hover:bg-primary-600 
           hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_8px_23px_0_rgba(59,113,202,0.2)] 
           focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
           focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          href="#!"
          role="button"
        >
          {translated.news.first}
        </Link>
      </div>
      <div className="lg:grid place-items-center">
        <Tips />
      </div>
      <div className="lg:grid place-items-center">
        <Promo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Group;
