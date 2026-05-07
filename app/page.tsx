import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const isLogedin=false;

  return (
  <>
  <h1>Home</h1>
  <Link href="/about">Go to About page</Link>
  <Link href="/state">Go to state page</Link>
  <Link href="/effect">Go to effect page</Link>
  <Link href="/counterapp">Go to counter page</Link>
  <Link href="/asynawait">Go to api handling using async and wait</Link>
  <Link href="/contextuseage">Go to context usage page</Link>
  <Link href="/refusage">Go to ref usage page</Link>
  <Link href="/usememousage">Go to usememo page</Link>
  </>

  );
}
