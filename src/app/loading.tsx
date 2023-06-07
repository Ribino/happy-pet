import Loading from "./components/Loading";

export default function LoadingPage() {
   return (
      <>
         <header  className='bg-teal-700 h-20'/>
         <div className='flex container mx-auto m-5 w-screen h-[calc(100vh-7.5rem)]'>
            <Loading/>
         </div>
      </>
   )
}