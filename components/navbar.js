import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const openHambClick = (event) => {
    event.preventDefault();

    setOpen(!open)
  };
  
  return (
    <div className='header'>
      <Head>
        <title>Wineco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullScreenMenu open={open} setOpen={setOpen}/>

      <div>
          <div className="header z-50 fixed right-0 left-0 max-w-7xl m-auto">
              <div className="flex items-center justify-between z-50 relative py-10">
                <div className="group z-50 relative w-8 h-6 flex-col justify-between items-center flex" onClick={openHambClick}>
                    <span className={`h-1 w-full bg-original rounded-lg transform transition duration-300 ease-in-out 
                    ${open ? "rotate-45 translate-y-2.5 bg-white" : ""}`} />
                    <span className={`h-1 w-full bg-original rounded-lg transition-all duration-300 ease-in-out 
                    ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-original rounded-lg transform transition duration-300 ease-in-out 
                    ${open ? "-rotate-45 -translate-y-2.5 bg-white" : ""}`} />
                </div>

                <div className="logo">
                  <Link href="/">
                    <Image src={`${open ? "/images/logo_white.svg" : "/images/logo.svg"}`} alt="image" width={120} height={120} />
                  </Link>
                </div>

                <div className="search">
                  <Image src={`${open ? "/images/search_white.svg" : "/images/search.svg"}`} alt="image" width={25} height={25} />
                </div>
              </div>
          </div>
      </div>

    </div>
  )
}


function FullScreenMenu({open, setOpen}) {
  return (
      <div className={`fullscreenmenu absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-y-0" : "-translate-y-full"} 
      transition-transform duration-500 ease-in-out filter`}>
         
          <div className="flex flex-col justify-center items-center mt-48">
            <Link href='/' className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white">
              HOMEPAGE
            </Link>
            <Link href='/' className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white">
              ABOUT US
            </Link>
            <Link href='/' className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white">
              WINE LIST
            </Link>
            <Link href='/' className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white">
              WINE SHOP
            </Link>
            <Link href='/' className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white">
              OUR BRANDS
            </Link>
            <Link href='/' className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white">
              BLOG
            </Link>
            <Link href='/' className="font-butlerregular text-white text-4xl my-4 border border-transparent p-3 hover:border-white">
              CONTACT US
            </Link>
          </div>  
      </div>
  )
}