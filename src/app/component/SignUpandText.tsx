export default function SignUpAndExtraText({
  FacebookIcon,
  GoogleIcon,
}: {
  FacebookIcon: any;
  GoogleIcon: any;
}) {
  return (
    <div className="text-[#06258b] items-center flex flex-col font-[500] text-center mt-16">
      <span> or connect with</span>
      <div className="flex w-[12%] mt-4 justify-between items-center">
        <FacebookIcon width={30} height={30} />
        <GoogleIcon width={30} height={30} />
      </div>
      <div className="text-[#b6b6b8] text-sm mt-14">
        <span className="mt-10">
          Dont have an account? <span className="text-[#06258b]">Sign up</span>
        </span>
      </div>
    </div>
  );
}
