export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/planets/mercury',
      permanent: true,
    },
  }
}
