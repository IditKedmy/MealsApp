import {createContext, useState} from "react";

export const FavoritesContext = createContext({
  ids: [] as string[],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
  isFavorite: (id: string)  => { // @ts-ignore
    return this?.ids?.includes(id)},
});

export default function FavoritesContextProvider({children}: { children: React.ReactNode }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavoriteHandler = (id: string) => {
    // add the recipe to the favorites
    setFavoriteMealIds((current) => [...current, id]);
  };

  const removeFavoriteHandler = (id: string) => {
    // remove the recipe from the favorites
    setFavoriteMealIds((current) =>
      current.filter((mealId) => mealId !== id));
  };

  const isFavoriteHandler = (id: string) => {
    // check if the recipe is in the favorites
    return favoriteMealIds.some((mealId) => mealId === id);
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}