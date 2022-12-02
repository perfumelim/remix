import { Link } from "@remix-run/react";

interface Props {
  question: string;
  name: string;
  to: string;
  className?: string;
}

const QuestionLink = ({ question, name, to, className }: Props) => {
  return (
    <div className="text-zinc-500">
      {question}
      {""}
      <Link to={to} className="font-semibold text-zinc-700">
        {name}
      </Link>
    </div>
  );
};

export default QuestionLink;
