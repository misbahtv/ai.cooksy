import "../assets/bootstrap/css/bootstrap.min.css";
import "../../public/icon.png"

export default function Nav() {
  return (
    <nav className="sticky-top shadow bg-white ">
        <img src="../public/icon.png" alt="cooksy logo" />
        <h1>Cooksy</h1>
    </nav>
  );
}
