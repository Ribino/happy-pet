interface Props {
  placeholder?: string;
  className?: string;
}

export default function Textarea({ placeholder, className }: Props) {
  return <textarea placeholder={placeholder} className={className} />;
}
