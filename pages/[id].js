import { useRouter } from 'next/router'

export default function pageID() {
    const router = useRouter()

    return (
      <>
        <h1>Pages ID: { router.query.id }</h1> {/* id = [id].js */}
      </>
    )
  }
  