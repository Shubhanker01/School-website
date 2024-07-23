import './App.css'
import schoollogo from './assets/vecteezy_school-logo-design-template-vector_7635722.jpg'
function App() {

  return (
    <>
      <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <img src={schoollogo} id='logo' className='rounded-circle'></img>
          <a className="navbar-brand ms-4" href="#">Spring Dale</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Academics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Admissions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Faculty</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Students</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App
