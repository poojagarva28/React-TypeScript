export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private Profile Component, name is {name}</div>;
};
