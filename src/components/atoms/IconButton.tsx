import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";
import { CopyIcon } from "./Icons";
interface IconButtonProps {
  Icon: any;
  bgColor: string;
  btnClassName: string;
  text: string;
}
function IconButton({ Icon, bgColor, btnClassName, text }: IconButtonProps) {
  return (
    <Button bgColor={bgColor} className={`${btnClassName} btn-icon`}>
      {Icon}
      {text}
    </Button>
  );
}

export default IconButton;
