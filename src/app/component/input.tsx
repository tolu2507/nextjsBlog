import { DATAINPUT } from "./Right";

export default function Input({ name, value, action }: DATAINPUT) {
  return (
    <div className="space-y-1 flex-col flex">
      <label
        className="text-[#b6b6b8] text-sm"
        style={{ textTransform: "capitalize" }}
      >
        {name}
      </label>
      <input
        className="p-4 hover:border-[#a787eb] border-[3px] border-[#b6b6b8] rounded-lg focus:bg-white"
        type={name}
        name={name}
        value={value}
        onChange={action}
      />
    </div>
  );
}
