import Header from '@/components/Header'
import Main from '@/components/Main'

const Home = () => (
  <div
    className="flex flex-col lg:flex-row items-center lg:mx-auto lg:my-auto
              max-w-[736px] h-fit justify-center lg:rounded-[32px] bg-white
              shadow-2xl shadow-darkNavy/10"
  >
    <Header />
    <Main />
  </div>
)

export default Home
