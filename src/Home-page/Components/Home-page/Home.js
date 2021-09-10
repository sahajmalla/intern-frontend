import Footer from '../Footer/Footer'
import HomeMain from '../Home-Main-Page/Components/HomeMain'
import Header from '../Header/Header'

const Home = () => {
    
    return (
        <div className="bg-white h-auto">
            <div className="max-w-7xl mx-auto h-full">
                <div className="pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
                    <Header />

                    <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-6 lg:px-8 xl:mt-8 h-full">
                        <HomeMain />
                    </main>
                    <Footer />
                </div>
                
            </div>
        </div>
    )
}

export default Home
