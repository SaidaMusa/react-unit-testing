import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import CardList from "./components/CardList/CardList";
import { getProducts} from "./api";
import type { Product } from "./api";
export default function App() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    loadData(search);
  }, []);

  const loadData = async (query: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await getProducts(query);
      setData(res);
    } catch {
      setError("Error loading data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    localStorage.setItem("search", value);
    loadData(value);
  };

  return (
    <div>
      <h1>Categories of gadgets</h1>

      <Search
        onSearch={handleSearch}
        initialValue={search}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <CardList
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
}