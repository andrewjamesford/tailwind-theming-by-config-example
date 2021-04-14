import Header from './header';
import Footer from './footer';
import Card from './card';
function App() {
  return (
      <div className="App">
        <Header />

        <main>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  );
}

export default App;
