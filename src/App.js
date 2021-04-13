import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Card from './card';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
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
