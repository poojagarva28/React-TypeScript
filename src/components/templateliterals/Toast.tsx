type HorizontalType = "left" | "center" | "right";
type VerticalType = "top" | "center" | "bottom";

type ToastType = {
  position:
    | Exclude<`${HorizontalType}-${VerticalType}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastType) => {
  return <div>Toast Position: {position}</div>;
};
