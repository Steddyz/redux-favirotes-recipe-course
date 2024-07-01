import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import cl from "./Header.module.css";
import useFavorites from "../../hooks/useFavorites";

// Добавить ссылку на страницу с избранным

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className={cl.header}>
      <FaRegHeart fontSize={20} />
      <span>{favorites.length}</span>
    </header>
  );
}
