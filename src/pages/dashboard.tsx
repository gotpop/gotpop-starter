import useSWR from 'swr'
import { Card as CardType } from 'types'
import Layout from '@components/Layout'
import Card from '@components/Card'
import Loading from '@components/Loading'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Cards() {
  const { data: cards, error } = useSWR('/api/cards', fetcher)

  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  )
}
