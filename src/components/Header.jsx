export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <span className="logo-mark">DC</span>
            <span>Digital Content Duo</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact" className="menu-pill">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
