"use client";
import { useRouter } from "next/navigation";
import { isEmpty } from "lodash";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface Props {
   children: ReactNode
   disabled?: boolean;
   secundary?: boolean;
   action?: Function;
   redirect?: string;
   className?: string;
   type?: "button" | "submit" | "reset" | undefined;
}

export default function Button(props: Props) {
   const route = useRouter();
   const isRedirectButton = !isEmpty(props.redirect);
   const action = props.action ? props.action : () => {};

   function redirect() {
      route.push(props?.redirect!);
   }

   return (
      <>
         <button
            type={props.type ?? "button"}
            disabled={props.disabled}
            onClick={() => {
               isRedirectButton ? redirect() : action();
            }}
            className={`border border-zinc-100 rounded-xl h-fit w-fit text-sm font-semibold py-2 px-5 transition-all ${props.className ?? ''}
                  ${
                     props.secundary
                     ? "bg-white text-orange-400 border-orange-300 hover:bg-orange-400/20 hover:text-orange-600 disabled:text-orange-500/50 disabled:border-orange-300/50 disabled:bg-white"
                     : "bg-orange-400 text-white hover:bg-orange-400/100 disabled:bg-orange-400/50"
                  }`
            }
            >
            {props.children}
         </button>
      </>
   )
}
