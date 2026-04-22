function Article({ titulo, autor, data, dataFormatada, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p className="autor">Por {autor}</p>
      <time dateTime={data}>{dataFormatada}</time>
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
      <figure>
        <figure>
          <img src={imagem.src} alt={imagem.alt} />
          <figcaption>{imagem.legenda}</figcaption>
        </figure>
      </figure>
    </article>
  )
}

export default Article
