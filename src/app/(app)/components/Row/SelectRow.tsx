'use client'
import { ReactNode } from "react";
import _ from 'lodash'

interface Props {
    onSelected: Function,
    selected: boolean,
    children?: ReactNode,
    className?: string;
}


export default function SelectRow(props: Props) {
    const onSelected = props.onSelected ?? function(){}
    function handleClick() {
        onSelected()
    }
    return (
        <>
            <div className={`grid grid-cols-1 m-2 rounded-xl overflow-hidden font-normal text-zinc-800 row`}>
                
                <button type="button" 
                        onClick={() => handleClick()} 
                        className={`group/select-row flex gap-x-0.5 h-auto w-full 
                        ${props.selected ? "bg-zinc-400 [&>*]:bg-teal-700 [&>*]:text-white [&>.icon]:text-orange-200" : ''} 
                        ${props.className ?? ''}
                        `}>         
                    {props.children}
                </button> 
                               
            </div> 
        </>
    )
}
