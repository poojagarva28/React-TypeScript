type ArrayProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const ArrayProp = (props: ArrayProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
