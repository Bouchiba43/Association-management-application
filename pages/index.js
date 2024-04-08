import { HomePage } from '../src/components/home/Home-page'

export default function Home(props) {
  return (
    <div >
      <HomePage data={props.data} />
    </div>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('../data/data.json')
  return {
    props: {
      data: events_categories,
    }
  }
}