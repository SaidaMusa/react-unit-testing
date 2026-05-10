type Props = {
  title: string;
  description: string;
};

export default function Card({ title, description }: Props) {
  return (
    <div role="article">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}