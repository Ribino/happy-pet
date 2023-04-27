'use client'
import Image from 'next/image';
import logo from '../../images/logo.jpg';
import {MdOutlineExpandMore } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navRoutes  = {
  home: "/",
  professional: '/professional',
  client: '/client',
  service: '/service',
  scheduling: '/scheduling'
}

interface Props {
    userName: string,
    pathImage?: string
}

export default function Header(props: Props) {
    const shouldDisplayUserImage = !!props.pathImage;
    const currentPath = usePathname()
    function checkCurrentRoute(path: string): string {
       if(path === currentPath) return 'text-orange-400 font-semibold';
       return '';
    }

    return (
        <>
        <header  className='bg-teal-700 h-20'>
            <div className="container mx-auto h-full">
              <div className='grid grid-rows-1 grid-cols-4 items-center h-full'>
                  <Image className='w-44' src={logo} alt="Logo"/>
                  <nav className='text-zinc-100 space-x-6 font-medium'>
                    <Link className={checkCurrentRoute(navRoutes.home)} href={navRoutes.home}>Inicio</Link>
                    <Link className={checkCurrentRoute(navRoutes.professional)} href={navRoutes.professional}>Profissionais</Link>
                    <Link className={checkCurrentRoute(navRoutes.client)} href={navRoutes.client}>Clientes</Link>
                    <Link className={checkCurrentRoute(navRoutes.service)} href={navRoutes.service}>Serviços</Link>
                    <Link className={checkCurrentRoute(navRoutes.scheduling)} href={navRoutes.scheduling}>Agendamentos</Link>
                  </nav>
                  
                  <div className='col-start-4 justify-end flex items-center space-x-2 text-zinc-100'> 
                    <div className="">
                      {
                       shouldDisplayUserImage ?  
                          <Image className=" rounded-full w-14 h-14" src={`/${props.pathImage}`} alt="Profile" width={56} height={56}/>
                        : <div className='w-14 h-14 flex items-center justify-center bg-orange-400 rounded-full'>
                            <span className='font-medium text-3xl'>{props.userName.slice(0, 1).toUpperCase()}</span>
                          </div>
                      }
                    </div>
                    <span>Olá, {props.userName}</span>
                    <button className="flex w-10 text-2xl" type="button">
                      <MdOutlineExpandMore/>
                    </button>
                  </div>
              </div>
            </div>
          </header>
        </>
    )
}