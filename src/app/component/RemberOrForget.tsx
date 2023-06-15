export default function RemebermeOrForgotPassword() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-2">
        <input type="checkbox" name="check" id="check" />
        <div className="text-[#06258b] font-[600]">Remember me</div>
      </div>
      <div className="text-[#06258b] font-[600]">Forgot password?</div>
    </div>
  );
}
