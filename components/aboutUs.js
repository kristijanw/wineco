import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="homepage grid grid-cols-2 h-full">

        <div className="flex flex-col justify-center items-start relative">
            <h1 className='font-butlerregular text-5xl text-original'>ABOUT US</h1>

            <div className='font-butlerregular text-lg'>
                <p className='mb-3'>
                    <strong>Wine&Co</strong> specijalizirana je veleprodaja vina, žestokih pića i popratnog asortimana.
                    Naši kupci su ponajbolji restorani, hoteli ali i sve više privatni kupci.
                </p>

                <p className='mb-3'>
                    S obzirom na naše dugogodišnje iskustvo, direktno surađujemo s većinom vinara što olakšava i ubrzava put od proizvođača do Vas.
                </p>

                <p className='mb-3'>Hvala na povjerenju i živjeli!</p>
            </div>
        </div>

        <div className="">
            <img src='/images/aboutus-bg.svg' alt="aboutus-bg" className='w-full h-screen' />
        </div>
    </div>
  )
}