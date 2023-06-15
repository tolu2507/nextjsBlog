import Image from "next/image";
import LoginContainer from "./container/LoginPageContainer";
import OverlayContainer from "./container/OverLayContainer";
export default function Home() {
  return (
    <main className="min-h-screen min-w-[1024] relative">
      <Image src={"/background.png"} alt={"background"} fill quality={100} />
      <OverlayContainer />
      <LoginContainer />
    </main>
  );
}
