import Header from './components/Header'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const post = {
  titulo: 'Como a tecnologia está transformando pequenos negócios',
  autor: 'Francisco Pereira',
  data: '2026-03-02',
  dataFormatada: '02 de março de 2026',
  conteudo: [
    'A tecnologia tem revolucionado a forma como pequenos negócios operam, oferecendo ferramentas que antes eram exclusivas de grandes corporações. Com o avanço das soluções digitais, pequenas empresas podem agora competir em escala global.',
    'Desde a automação de processos até o marketing digital, as tecnologias emergentes estão permitindo que os pequenos negócios aumentem sua eficiência e alcancem novos mercados. Plataformas de e-commerce, por exemplo, têm sido fundamentais para que esses negócios possam vender seus produtos online, expandindo seu alcance além das fronteiras locais.',
    'Além disso, a inteligência artificial e o aprendizado de máquina estão sendo utilizados para personalizar a experiência do cliente, melhorar o atendimento e otimizar a gestão de estoque. Com essas inovações, os pequenos negócios estão se tornando mais competitivos e resilientes em um mercado cada vez mais digital.',
  ],
  imagem: {
    src: 'https://digital.sebraers.com.br/wp-content/uploads/2024/07/internet-networking-and-digital-transformation-wi-2023-11-27-05-08-08-utc-scaled-aspect-ratio-752-450.jpg',
    alt: 'Tecnologia transformando pequenos negócios',
    legenda: 'Imagem ilustrativa de tecnologia transformando pequenos negócios',
  },
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          dataFormatada={post.dataFormatada}
          conteudo={post.conteudo}
          imagem={post.imagem}
        />
      </main>
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
