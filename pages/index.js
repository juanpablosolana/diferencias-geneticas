import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dbConnect from '../lib/db';
import Mutation from '../models/mutation';

const  Home=({mutation,noMutation})=> {
//  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title>Diferencias genéticas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Diferencias genéticas
        </h1>
        <p>Mutaciones: {mutation}</p>
        <p>Sin Mutación: {noMutation}</p>
        <p>Promedio: {mutation/noMutation}</p>
      </main>
    </div>
  )
}
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Mutation.findOne({ _id: `${process.env.id}` })
  const mutation = result.count_mutations
  const noMutation = result.count_no_mutation
// console.log(mutation,noMutation)
  return { props: { mutation, noMutation} }
}

export default Home
