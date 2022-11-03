type NumberProp = {
  value: number;
};

type PositiveType = NumberProp & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeType = NumberProp & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroType = NumberProp & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveType | NegativeType | ZeroType;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <>
      RandomNumber value : {value} <br />
      {isPositive && "Positive"} <br />
      {isNegative && "Negative"} <br />
      {isZero && "Zero"} <br />
    </>
  );
};
