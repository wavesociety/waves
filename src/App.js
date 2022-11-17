import './App.css';
import logo from './audio-waves.png';

function App() {
  return (
    <>
    <div className="container-fluid main-header-block">
    <header className="d-flex flex-wrap justify-content-center py-3">
      <a href="/" className="d-flex mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img className="bi me-2 align-items-start" width="40" height="32" src={logo} alt="Wisdom Awakening Value Education Society" />
        <span className="fs-4">Wave Society</span>
      </a>

      {/* <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul> */}
    </header>
  </div>
    <div className="App">
      <header className="App-header">
        <h2 style={{width: "100%"}}>
          Wisdom Awakening Value Education Society
        </h2>
      </header>
    </div>
    {/* // footer */}
    <div className="container-fluid">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img className="bi" width="30" height="24" src={logo} alt="Wisdom Awakening Value Education Society" />
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Wisdom Awakening Value Education Society</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><i className="fab fa-twitter text-info"></i></li>
      <li className="ms-3"><i className="fab fa-instagram text-danger"></i></li>
      <li className="ms-3"><i className="fab fa-facebook text-primary"></i></li>
    </ul>
  </footer>
</div>
    </>
  );
}

export default App;
