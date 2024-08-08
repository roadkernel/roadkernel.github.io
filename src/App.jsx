import { HashRouter } from "react-router-dom";

import { About, Contact, Hero } from "./components";

const App = () => {
  return (
    <HashRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
