import Navbar from "./common/navbar";
import HomeSlides from "./components/HomeSlides";
import RecentEvents from "./components/RecentEvents";
import 'tw-elements';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <HomeSlides />
          </div>
          <div>
            <RecentEvents />
          </div>
      </div>
    </div>
  );
}

export default App;
