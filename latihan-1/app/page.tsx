import Link from "next/link"


export default function Home() {
  return (
    <>
      <h1>HELLO WORLD!</h1>
      <hr /><br />
      <Link href="/posts">POSTING PAGE</Link><br />
      <Link href="/albums">ALBUMS PAGE</Link><br />
    </>
  );
}
