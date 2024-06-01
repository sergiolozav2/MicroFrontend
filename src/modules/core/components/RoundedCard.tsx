type RoundedCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function RoundedCard(props: RoundedCardProps) {
  return (
    <div
      className={`flex w-full rounded-lg border bg-card px-6 py-4 text-card-foreground ${props.className}`}
    >
      {props.children}
    </div>
  );
}
