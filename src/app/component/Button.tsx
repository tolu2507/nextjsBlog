import Link from 'next/link'

export default function Button({ handleClick }: { handleClick: any }) {
  return (
    <div className="my-4">
      <Link href="/dashboard">
        <input
          type="button"
          value="Log in"
          className=" text-white font-[500] w-full rounded-l-full rounded-r-full py-4 bg-gradient-to-r from-[#9e82f1] to-[#e59176] shadow-sm shadow-[#9e82f1] animate-pulse"
          onClick={handleClick}
        />
      </Link>
    </div>
  );
}
