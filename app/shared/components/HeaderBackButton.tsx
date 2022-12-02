import { ArrowBack } from "./vectors";

interface Props {
  onClick?: () => void;
}

const HeaderBackButton = ({ onClick }: Props) => {
  return (
    <button
      className="-ml-2 flex h-full items-center p-2 text-customGrey-300"
      onClick={onClick}
    >
      <ArrowBack className="h-auto w-7 fill-zinc-400 stroke-zinc-400" />
    </button>
  );
};

export default HeaderBackButton;
