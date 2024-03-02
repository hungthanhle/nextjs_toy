// pages/pokemon.js

import Head from 'next/head';

export default function Pokemon({ pokemonData }) {
  return (
    <div>
      <Head>
        <title>Mô hình Pokemon</title>
        <meta name="description" content="Trang thông tin về mô hình Pokemon" />
      </Head>
      <h1>Mô hình Pokemon</h1>
      <p>Thông tin về mô hình Pokemon:</p>
      <ul>
        {pokemonData && pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name} : {pokemon.rate}</li>
        ))}
      </ul>
    </div>
  );
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://shinyrates.com/data/rate');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { pokemonData: data } };
}
