import Form1 from '@components/Form1'
import Intro from '@components/Intro'
import LayoutStandard from '@components/LayoutStandard'
import Loading from '@components/Loading'
import { introFormContent } from '@content/intro'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function CardPage() {
  const { query } = useRouter()
  const { data: form, error } = useSWR(
    () => query.id && `/api/forms/${query.id}`,
    fetcher
  )

  return (
    <LayoutStandard>
      {error && <div>{error.message}</div>}
      {form ? <Intro content={introFormContent} /> : <Loading />}
      <Form1 />
    </LayoutStandard>
  )
}
