import Input, { type Props as InputProps } from "./Input";

interface Props extends InputProps {
  label: string;
}

const LabelInput = ({ label, ...rest }: Props) => {
  return (
    <div className="flex flex-col-reverse">
      <Input {...rest} />
      <label className="mb-2 text-base font-semibold text-customGrey-400 peer-focus:text-limegreen">
        {label}
      </label>
    </div>
  );
};

export default LabelInput;
