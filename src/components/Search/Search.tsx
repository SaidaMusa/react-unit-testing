import { useEffect, useState } from "react";

type Props = {
  onSearch: (value: string) => void;
   initialValue?: string;
};

export default function Search({ onSearch }: Props) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("search");
    if (saved) {
      setValue(saved);
    }
  }, []);

  const handleSearch = () => {
    localStorage.setItem("search", value);
    onSearch(value);
  };

  return (
    <div>
      <input
        role="textbox"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}