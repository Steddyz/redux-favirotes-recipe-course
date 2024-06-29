import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import cl from "./Header.module.css";

export default function Header() {
  return (
    <header className={cl.header}>
      <FaRegHeart />
    </header>
  );
}
