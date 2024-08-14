import React from "react";
interface DividerPorps {
  text?: string;
}
const Divider = ({ text }: DividerPorps) => {
  return (
    <span className="flex items-center w-full">
      <span className="h-px flex-1 bg-patchwork_black-300 w-full"></span>
      {text && (
        <span className="shrink-0 px-6 text-patchwork_white-900">
          {text ?? ""}
        </span>
      )}
      <span className="h-px flex-1 bg-patchwork_black-300 w-full"></span>
    </span>
  );
};

export default Divider;
