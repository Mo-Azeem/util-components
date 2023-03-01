import React from "react";

interface Props {
  condition: boolean;
  children: any;
}

export default function Return({ condition, children }: Props) {

    if (condition) return children;

  return null;
}
