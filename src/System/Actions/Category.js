import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { getRequest } from "./Requests";

const useAllCategories = () => {
  const [auth] = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const data = await getRequest("all/categories", auth);
      setCategories(data.categories);
    } catch (err) {
      setError(err.message || "An error occurred while fetching categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      getData();
    }
  }, [auth && auth?.token]);

  return { categories, catsLoading: loading, error };
};

export default useAllCategories;
