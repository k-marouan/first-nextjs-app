import { useRouter } from 'next/router'

export default function bmwID() {
  const router = useRouter()
    return (
      <>
        <h1>BMW Model: { router.query.bmw }</h1>
        <h1>BMW ID: { router.query.bmwid }</h1>
      </>
    )
  }
  