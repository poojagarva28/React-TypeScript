type ContainerProps = {
  style: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return <div style={props.style}>Content goes here</div>;
};
