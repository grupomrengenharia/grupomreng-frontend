interface Props {
  text: string;
}

export function Badge({ text }: Readonly<Props>) {
  return (
    <span className="inline-block bg-(--primary-color) text-white text-xs font-semibold px-2 py-1 rounded text-center">
      {text}
    </span>
  );
}
