import { ReactNode } from "react";

interface Props {
	 applyShadow?: boolean,
	 children?: ReactNode;
}

export default function Row(props: Props) {
	 return (
		  <>
				<div className={`grid grid-cols-1 m-2 rounded-xl overflow-hidden font-normal text-zinc-800 row
									${props.applyShadow ? 'shadow-lg border-2' : ''}`}>    
					<div className="flex gap-x-0.5 h-auto w-full" > 
						{ props.children } 
					</div>
				</div> 
		  </>
	 )
}
