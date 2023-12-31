interface Props {
  query?: string;
  category?: string;
}

const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        Search results for &quot;{query}&quot; in
        <span className="capitalize"> {category}</span>
      </h1>
    );
  } else if (query) {
    return <h1 className="heading3 self-start text-white-800">Search results for &quot;{query}&quot;</h1>;
  } else if (category) {
    return <h1 className="heading3 self-start text-white-800 capitalize">{category}</h1>;
  }
  return <h1 className="heading3 self-start text-white-800">No results</h1>;
};

export default Header;
