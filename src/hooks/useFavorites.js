import { useSelector } from "react-redux";

export default function useFavorites() {
  const { favorites } = useSelector((state) => state);

  return { favorites };
}
