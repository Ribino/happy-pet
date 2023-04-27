import { ReactNode } from "react";
import Column from "./Column";

interface Props {
    values:any[];
    highlightFirstColumn?:boolean;
}

export default function Row(props: Props) {
    const highlightFirstColumn = props.highlightFirstColumn
    const numberOfColumns = props.values.length;
    return (
        <>
            <div className={`grid grid-cols-${numberOfColumns} m-2 rounded-xl overflow-hidden`}>
                <div className="flex gap-x-0.5 h-14 w-full ">
                {
                    props.values
                    .map((value, index) =>     
                        <Column value={value} key={index}
                                applyHighlite={highlightFirstColumn && index == 0}/>
                    )
                }
                
                </div>
            </div> 
        </>
    )
}
