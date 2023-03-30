import Link from "next/link";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <h1>Hello world!</h1>
      <a href="/newpage">Go to new pages!</a> {/* on click => refresh the page and show the result */}
      <br />
      <Link href="/newpage">Go to new pages!</Link>{/* on click => show the result without refresh the page */}
      <br />
      <button onClick={ () => {router.push('/about')} }>Go to about pages!</button>
    </>
  )
}
