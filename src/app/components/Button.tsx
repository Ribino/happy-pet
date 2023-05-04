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
      const redirectPath = props.redirect ?? "";
      route.push(redirectPath);
   }

   return (
      <>
         <button
            type={props.type ?? "button"}
            disabled={props.disabled}
            onClick={() => {
               isRedirectButton ? redirect() : action();
            }}
            className={`border border-zinc-100 rounded-xl h-full w-full text-sm font-semibold py-2 px-5 hover:transition ${props.className ?? ''}
                  ${
                     props.secundary
                     ? "bg-white text-orange-500 hover:bg-orange-400/20 hover:text-orange-600 disabled:text-orange-500/50 disabled:border-orange-400/50 disabled:bg-white"
                     : "bg-orange-400 text-white hover:bg-orange-400/100 disabled:bg-orange-400/50 disabled:border-orange-400/50"
                  }`
            }
            >
            {props.children}
         </button>
      </>
   )
}
