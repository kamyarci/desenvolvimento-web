const postsRelacionados = [
  'Como a tecnologia está transformando pequenos negócios',
  'Inovação e digitalização no setor de serviços',
  'Tendências tecnológicas para pequenas empresas',
]

function Sidebar() {
  return (
    <aside>
      <h3>Artigos relacionados</h3>
      <ul>
        {postsRelacionados.map((post, index) => (
          <li key={index}>
            <a href="#">{post}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
