import { useRouter } from 'next/router'

export default function postID() {
  const router = useRouter()
    return (
      <>
        <h1>Pages ID: { router.query.postid }</h1>
      </>
    )
  }
  