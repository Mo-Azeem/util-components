import React from "react";
import Return from "./Return";

const doctorRole: number = 1;

export default function IfDoctor({ children }: { children: any }) {
  return (
    // Change the condition number below to test
    <Return condition={doctorRole === 2}>
      {children}
    </Return>
  );
}
