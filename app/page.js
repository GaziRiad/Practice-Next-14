import Link from "next/link";

function Home() {
  return (
    <div className="">
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/client" className="btn btn-accent capitalize">
        get Started
      </Link>
    </div>
  );
}

export default Home;
