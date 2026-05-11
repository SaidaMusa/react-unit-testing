import Card from "../Card/Card";

type Product = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  data: Product[];
  loading?: boolean;
  error?: string | null;
};

export default function CardList({
  data,
  loading,
  error,
}: Props) {
  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  if (!data || data.length === 0)
    return <p>No results</p>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} data-testid="card-item">
          <Card
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
}