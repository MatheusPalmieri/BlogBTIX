import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Logo } from "../Logo";

export const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <header className="button-back-header">
      <nav className="button-back-navbar" onClick={goBack}>
        <ChevronLeftIcon />
        <p>voltar</p>
      </nav>
      <div className="button-home">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
    </header>
  );
};
