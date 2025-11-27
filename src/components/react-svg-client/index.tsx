"use client";
import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";

export const ReactSvgClient = (props: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ReactSVG {...props} />;
};
