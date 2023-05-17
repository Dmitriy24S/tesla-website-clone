import productsInfo from '../../assets/productsInfo.json'
import ProductHero from '../ProductHero/ProductHero'

const Home = () => {
  // const [data, setData] = useState(productsInfo)
  const data = productsInfo

  return (
    <main>
      {data.map((item, index) => (
        <ProductHero
          key={item.id}
          title={item.title}
          image={item.image}
          isCar={Boolean(item.range)}
          lastItem={index === data.length - 1}
        />
      ))}
    </main>
  )
}

export default Home
