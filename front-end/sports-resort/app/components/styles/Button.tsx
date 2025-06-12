import { cn } from "~/lib/utils";

type Props = {
  name: string;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export default function Button({ name, className, href, onClick }: Props) {
  const baseStyle =
    'bg-blue border-blue hover:text-blue text-white border-2 rounded-full px-6 py-2 w-fit hover:bg-transparent duration-200 ease-in-out uppercase font-bold m-1';

  if (href && !onClick) {
    return (
      <a href={href} className={cn(baseStyle, className)}>
        {name}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyle, className)}>
      {name}
    </button>
  );
}
