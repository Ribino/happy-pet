import { ReactNode } from "react";

interface Props {
  className?: string;
  flexType?: string;
  applyHighlite?: boolean;
  children?: ReactNode;
}

export default function Column(props: Props) {
  const flexType = props.flexType ?? "flex-1";
  return (
   <>
      <div
         className={`py-1.5 column h-full  group-hover/select-row:bg-teal-700/80 transition-all
         ${
            props.applyHighlite
               ? "  !bg-orange-400 text-white font-semibold"
               : "bg-white"
        } ${flexType} ${props?.className ?? ""}`}
      >
         {props.children}
      </div>
   </>
  );
}
