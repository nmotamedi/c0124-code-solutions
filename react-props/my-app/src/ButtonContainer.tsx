type buttonProps = {
  text: string;
};

export function ButtonContainer({ text }: buttonProps) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}
