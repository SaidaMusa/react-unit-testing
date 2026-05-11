export type Product = {
  id: number;
  title: string;
  description: string;
};

export const getProducts = async (query: string = "") => {
  const data: Product[] = [
    { id: 1, title: "iPhone", description: "Apple phone" },
    { id: 2, title: "Samsung", description: "Android phone" },
    { id: 3, title: "MacBook", description: "Apple laptop" }
  ];

  return data.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );
};