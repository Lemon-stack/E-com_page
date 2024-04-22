import * as React from "react";
import supabase from "./supabaseClient.jsx"

export default function useFectchProduct(path){
  const [products, setProducts] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const updateProducts = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from(path).select("*");
      if (data) {
        setProducts(data);
      }

      if (error) throw error;
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    updateProducts();
  }, [path]);

  return { products, isLoading, error };
};