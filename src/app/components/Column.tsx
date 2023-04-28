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
        className={`${
          props.applyHighlite
            ? "bg-orange-400 text-white font-semibold"
            : "bg-white"
        } ${flexType} ${props?.className ?? ""}`}
      >
        {props.children}
      </div>
    </>
  );
}
