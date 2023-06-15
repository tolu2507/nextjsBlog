export default function LeftHandComponent({ButtonImage}:any) {
  return (
    <div className="w-1/2 h-full">
      <div className=" rounded-l-full shadow-2xl shadow-purple-400 h-full bg-[#a787eb]/30 pl-2">
        <div className=" rounded-l-full shadow-2xl shadow-purple-400 h-full p-8 bg-gradient-to-b from-[#e99b85]/70 to-[#a787eb]/70 flex items-center">
          <div className=" mx-8 lg:mx-24 text-white text-sm">
            <div className="my-8 text-4xl text-white font-bold">Circle</div>
            Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed accumsan euismod urna, at fermentum turpis pharetra sieu
            mi rhoncus dapibus. dolor sit amet, consectetur adipiscing elit. Sed
            accumsan euismod urna, at fermentum turpis pharetra sieu mi rhoncus
            dapibus.dolor sit amet, consectetur adipiscing elit. Sed accumsan
            euismod urna, at fermentum turpis pharetra sieu mi rhoncus
            dapibus.dolor sit amet, consectetur adipiscing elit. Sed accumsan
            euismod urna, at fermentum turpis pharetra sieu mi rhoncus dapibus.
            <div className="my-8  flex space-x-4 items-center">
              <button
                type="button"
                className="p-2 border rounded-3xl font-semibold text-fuchsia-500 px-4 bg-white"
              >
                Learn More
              </button>
              <button type="button" className="rounded-full p-2 border-[3px]">
                <ButtonImage width={"100"} height={"20"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}