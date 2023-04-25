import Image from 'next/image';
import logo from '../images/logo.jpg';
import {MdOutlineExpandMore } from 'react-icons/md';
import Link from 'next/link';

interface Props {
    userName: string,
    userPhoto?: string
}

export default function Header(props: Props) {

    return (
        <>
        <header  className='bg-teal-700 h-20'>
            <div className="container mx-auto h-full">
              <div className='grid grid-rows-1 grid-cols-4 items-center h-full'>
                  <Image className='w-44' src={logo} alt="Logo"/>
                  <nav className='text-zinc-100 space-x-6 font-medium'>
                    <Link href={''} className=''>Inicio</Link>
                    <Link href={''} className=''>Profissionais</Link>
                    <Link href={''} className=''>Clientes</Link>
                    <Link href={''} className=''>Serviços</Link>
                    <Link href={''} className=''>Agendamentos</Link>
                  </nav>
                  
                  <div className='col-start-4 justify-end flex items-center space-x-2 text-zinc-100'> 
                    <div className="">
                      {
                        props.userPhoto ?  
                          <Image className=" rounded-full" src={`/${props.userPhoto}`} alt="Profile" width={56} height={56}/>
                        : <div className='w-12 h-12 flex items-center justify-center bg-orange-400 rounded-full'>
                            <span className='font-medium text-2xl'>A</span>
                          </div>
                      }
                    </div>
                    <span>Bem vindo, {props.userName}</span>
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