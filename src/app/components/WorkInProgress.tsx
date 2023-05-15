import Loading from "./Loading";

export default function WorkInProgress() {
   return (
      <div className="flex flex-col items-center justify-center gap-10">
         <h1 className="text-2xl font-semibold">Trabalho em andamento...</h1>
         <Loading/>
      </div>
   )
}