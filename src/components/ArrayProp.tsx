type ArrayProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const ArrayProp = (props: ArrayProps) => {
  return (
    <div>
      {props.names.map((name, i) => (
        <h2 key={i}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
