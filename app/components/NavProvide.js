import React from "react";
import { Providers } from "@/redux/provider";
import NavBar from "./NavBar";

export default function NavProvide() {
  return (
    <Providers>
      <NavBar />
    </Providers>
  );
}
