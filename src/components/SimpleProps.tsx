type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const SimpleProps = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You have {messageCount} unread messagees.
        </h2>
      ) : (
        <h2>Welcome Guest!</h2>
      )}
    </div>
  );
};

export default SimpleProps;
