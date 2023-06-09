'use client'
import Image from 'next/image';
import logo from '../../images/happy-pet-logo-align-left.jpg';
import {MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { isEmpty } from 'lodash';
import { destroyToken } from './Utils';
import { useState } from 'react';

const navRoutes  = {
  home: "/",
  professional: '/professional',
  client: '/client',
  service: '/service',
  scheduling: '/scheduling',
  pets: '/pets',
}

interface Props {
    userName: string,
    pathImage?: string,
    type: string,
}

export default function Header(props: Props) {
    const {userName, type, pathImage} = props
    const shouldDisplayUserImage = !isEmpty(props.pathImage);
    const currentPath = usePathname()
    const route = useRouter()
    const [expandUserOptions, setExpandUserOption] = useState(false);
  
    function checkCurrentRoute(path: string): string {
       if(path === currentPath) return 'text-orange-400/100 font-semibold';
       return '';
    }

    function hasAccess(path: string): boolean {
      if(type === 'ADMIN') {
        if(path === navRoutes.pets) return false;
        return true;
      }

      if(type === 'CLIENT') {
        if(path === navRoutes.pets) return true;
        if(path === navRoutes.scheduling) return true;
        return false;
      }

      if(type === 'PROFESSIONAL') {
        if(path === navRoutes.scheduling) return true;

      }

      return false;
    }

    function signoff() {
      destroyToken()
      route.refresh()
    }

    return (
        <>
        <header  className='bg-teal-700 h-20'>
            <div className="container mx-auto h-full">
              <div className='grid grid-rows-1 grid-cols-4 items-center h-full'>
                  <Image className='col-start-1 h-3/5 w-3/5 ' src={logo} alt="Logo"/>
                  <nav className='col-span-2 text-zinc-100 space-x-6 font-medium  hover:[&>*]:text-orange-400 [&>*]:transition-all'>
                    <Link className={checkCurrentRoute(navRoutes.home)} href={navRoutes.home}>Inicio</Link>
                    <Link hidden={!hasAccess(navRoutes.professional)} className={checkCurrentRoute(navRoutes.professional)} href={navRoutes.professional}>Profissionais</Link>
                    <Link hidden={!hasAccess(navRoutes.client)} className={checkCurrentRoute(navRoutes.client)} href={navRoutes.client}>Clientes</Link>
                    <Link hidden={!hasAccess(navRoutes.service)} className={checkCurrentRoute(navRoutes.service)} href={navRoutes.service}>Serviços</Link>
                    <Link hidden={!hasAccess(navRoutes.pets)} className={checkCurrentRoute(navRoutes.pets)} href={navRoutes.pets}>Meus Pets</Link>
                    <Link hidden={!hasAccess(navRoutes.scheduling)} className={checkCurrentRoute(navRoutes.scheduling)} href={navRoutes.scheduling}>Agendamentos</Link>
                  </nav>
                  
                  <div className='col-start-4 justify-end flex items-center space-x-2 text-zinc-100'> 
                    <div className="">
                      {
                       shouldDisplayUserImage ?  
                          <Image className=" rounded-full w-14 h-14" src={`/${pathImage}`} alt="Profile" width={56} height={56}/>
                        : <div className='w-12 h-12 flex items-center justify-center bg-orange-400 rounded-full'>
                            <span className='font-medium text-3xl'>{userName.slice(0, 1).toUpperCase()}</span>
                          </div>
                      }
                    </div>
                    <span>Olá, {props.userName}</span>
                    <div className='transition-all'>
                      <button className={`flex text-2xl ${expandUserOptions ? "bg-white text-teal-700 border-x border-zinc-400 rounded-t-md" : ""}`} 
                              type="button" onClick={() => setExpandUserOption((value) => !value)}>
                        {
                          expandUserOptions  
                          ? <MdOutlineExpandLess/>
                          : <MdOutlineExpandMore/>
                        } 
                      </button>
                      <div className={`fixed w-28 overflow-hidden ${expandUserOptions ? "block" : "hidden"} bg-white border border-t-0 border-zinc-400 rounded-b-md `}>
                        <ul className='text-zinc-900 italic [&>*]:p-1'>
                          <li className='hover:bg-zinc-200'><a className="cursor-pointer" onClick={() => signoff()}>Sair</a></li>
                        </ul>
                      </div>
                    
                    </div>
                  </div>
              </div>
            </div>
          </header>
        </>
    )
}