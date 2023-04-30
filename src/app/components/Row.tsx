'use client'
import { isEmpty } from "lodash";
import { Children, ReactNode, useState } from "react";
import _ from 'lodash'

interface Props {
    numberOfColumns: number,
    selectMode?: boolean,
    onSelected?: Function,
    selected?: boolean,
    id?: number,

    children?: ReactNode;
}


export default function Row(props: Props) {
    const onSelected = props.onSelected ?? function(){}
    function handleClick() {
        onSelected()
    }
   
    return (
        <>
            <div className={`grid grid-cols-${props.numberOfColumns} m-2 rounded-xl overflow-hidden font-normal text-zinc-800 row`}>
                {
                  props.selectMode 
                  ? <button type="button" onClick={() => handleClick()} className={`group/row flex gap-x-0.5 h-auto w-ful ${props.selected ? "bg-zinc-400 [&>*]:bg-teal-700 [&>*]:text-white [&>.icon]:text-orange-200" : ''} `}> {props.children}</button> 
                  : <div className="flex gap-x-0.5 h-auto w-full" > { props.children } </div>
                }                
            </div> 
        </>
    )
}
