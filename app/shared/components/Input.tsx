export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return (
    <input
      {...props}
      className="placeholder:gray-200 peer h-12 rounded border border-customGrey-200 px-4 text-base text-zinc-500 outline-0 transition-[filter] duration-200 ease-in-out focus:border-limegreen disabled:bg-customGrey-100"
    />
  );
};

export default Input;
