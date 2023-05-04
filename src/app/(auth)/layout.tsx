import Image from "next/image"
import logo from "../images/happy-pet-logo-login.jpg"
export default function AuthLayout({children}: {
  children: React.ReactNode
}) {

  return (
      <div className={`flex justify-center items-center h-screen w-screen bg-teal-700`}>
          <div className="flex flex-col items-center h-4/6 w-2/6 p-10 rounded-2xl border border-zinc-300 shadow-xl bg-white">
            <Image  className="mb-20" width={420} height={120} src={logo} alt="logo"/>
            {children}
          </div>
      </div>
  )
}
