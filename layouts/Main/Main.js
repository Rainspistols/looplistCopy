import Head from 'next/head'

const Main = ({ headTitle, children }) => {
  return (
    <Head>
      <title>{headTitle}</title>

      <main>{children}</main>


      {/* <footer></footer> */}
    </Head>
  )
}

export default Main
