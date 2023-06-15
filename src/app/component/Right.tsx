import { useState } from "react";
import Content from "../container/Content";
import Top from "../container/Top";
import Button from "./Button";
import RemebermeOrForgotPassword from "./RemberOrForget";
import SignUpAndExtraText from "./SignUpandText";
import TopLogin from "./TopLogin";
import Input from "./input";
import Link from "next/link";

export default function RightHandComponent({
  FacebookIcon,
  GoogleIcon,
}: {
  FacebookIcon: any;
  GoogleIcon: any;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputData: DATAINPUT[] = [
    { name: "email", value: email, action: (e) => setEmail(e.target.value) },
    {
      name: "password",
      value: password,
      action: (e) => setPassword(e.target.value),
    },
  ];
  const action = async (email: string, password: string) => {
    if (!email || !password) return;
    if (password.length < 8) return alert("password too short");
    console.log("====================================");
    console.log(email, password);
    console.log("====================================");
    setTimeout(() => {
      alert(`User with Email Address ${email} is successfully Logged In`);
    }, 3000);
  };

  function handleSubmit() {
    action(email, password);
  }

  return (
    <div className="w-1/2 h-full py-[5%] px-[7%]">
      <div className="h-full">
        <Top>
          <TopLogin />
        </Top>

        <Content>
          {inputData.map(({ name, value, action }) => (
            <Input key={name} name={name} value={value} action={action} />
          ))}
          <RemebermeOrForgotPassword />
          <Button handleClick={handleSubmit} />
          <SignUpAndExtraText
            FacebookIcon={FacebookIcon}
            GoogleIcon={GoogleIcon}
          />
        </Content>
      </div>
    </div>
  );
}

export interface DATAINPUT {
  name: string;
  value: string;
  action: (e: any) => void;
}
