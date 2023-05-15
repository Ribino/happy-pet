import Image from "next/image"
import logo from "../images/happy-pet-logo.jpg"
export default function AuthLayout({children}: {
  children: React.ReactNode
}) {

  return (
      <div className={`flex flex-col pt-24 items-center h-screen w-screen bg-teal-700`}>
         <Image  className="mb-20 w-auto h-auto" width={380} height={120} src={logo} priority alt="logo"/>
          <div className="flex flex-col items-center min-w-max max-w-none 2xl:w-1/3 xl:w-3/6 md:w-2/3 py-10 px-8 rounded-2xl border border-zinc-300 shadow-xl bg-white">
            {children}
          </div>
      </div>
  )
}
