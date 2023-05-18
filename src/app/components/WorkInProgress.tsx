import Loading from "./Loading";

export default function WorkInProgress() {
   return (
      <div className="flex flex-col items-center justify-center gap-10 w-64 h-64">
         <h1 className="text-2xl text-center font-semibold">Trabalho em andamento...</h1>
         <Loading />
      </div>
   )
}