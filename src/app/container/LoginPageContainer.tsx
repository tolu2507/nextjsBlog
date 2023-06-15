'use client'
import {
  ButtonImage,
  FacebookIcon,
  GoogleIcon,
} from "../../../public/assets/but";
import LeftHandComponent from "../component/Left";
import RightHandComponent from "../component/Right";

export default function LoginContainer({action}:any) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex">
      <RightHandComponent FacebookIcon={FacebookIcon} GoogleIcon={GoogleIcon} />
      <LeftHandComponent ButtonImage={ButtonImage} />
    </div>
  );
}
