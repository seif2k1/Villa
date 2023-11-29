export default function Loading() {
  return (
    <div className="inset-0 h-screen w-screen absolute bg-black z-[99] flex items-center justify-center ">
      <div className="flex flex-row items-center justify-center gap-2 w-[80%] h-[80%]">
        <div className="w-10 h-10  rounded-full bg-[#f25525] animate-bounce [animation-delay:.1s]"></div>
        <div className="w-10 h-10 rounded-full bg-[#f25525] animate-bounce [animation-delay:.3s]"></div>
        <div className="w-10 h-10 rounded-full bg-[#f25525] animate-bounce [animation-delay:.5s]"></div>
        <div className="w-10 h-10 rounded-full bg-[#f25525] animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>
  );
}
