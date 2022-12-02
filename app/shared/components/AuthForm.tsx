import { Form, useActionData } from "@remix-run/react";
import Button from "./Button";
import LabelInput from "./LabelInput";
import QuestionLink from "./QuestionLink";
import { useFormLoading } from "./useFormLoading";

interface ActionData {
  text: "hello world";
}

interface Props {
  mode: "login" | "register";
}

const authDescriptions = {
  login: {
    usernamePlaceholder: "아이디를 입력하세요",
    passwordPlaceholder: "비밀번호를 입력하세요",
    buttonText: "로그인",
    actionText: "회원가입",
    question: "계정이 없으신가요?",
    actionLink: "/register",
  },
  register: {
    usernamePlaceholder: "5~20자 영문, 숫자 입력",
    passwordPlaceholder: "8자 이상, 영문/숫자/특수문자 중 2가지 이상 입력",
    buttonText: "회원가입",
    actionText: "로그인",
    question: "계정이 이미 있으신가요?",
    actionLink: "/login",
  },
} as const;

const AuthForm = ({ mode }: Props) => {
  const action = useActionData<ActionData | undefined>();
  const isLoading = useFormLoading();

  // console.log(transition)

  const {
    usernamePlaceholder,
    passwordPlaceholder,
    buttonText,
    actionLink,
    actionText,
    question,
  } = authDescriptions[mode];
  return (
    <Form method="post" className="flex h-full flex-col justify-between p-4">
      <div className="flex w-full flex-col gap-4">
        <LabelInput
          label="아이디"
          name="username"
          placeholder={usernamePlaceholder}
          disabled={isLoading}
        />
        <LabelInput
          label="비밀번호"
          name="password"
          placeholder={passwordPlaceholder}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <Button type="submit" layoutMode="fullWidth" disabled={isLoading}>
          {buttonText}
        </Button>
        <QuestionLink question={question} name={actionText} to={actionLink} />
      </div>
    </Form>
  );
};

export default AuthForm;
