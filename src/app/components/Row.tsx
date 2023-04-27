import { Children, ReactNode } from "react";
import Column from "./Column";

interface Props {
    numberOfColumns: number
    children?: ReactNode;
}

export default function Row(props: Props) {
    return (
        <>
            <div className={`grid grid-cols-${props.numberOfColumns} m-2 rounded-xl overflow-hidden font-normal text-zinc-900`}>
                <div className="flex gap-x-0.5 h-auto w-full">
                    { props.children }
                </div>
            </div> 
        </>
    )
}
