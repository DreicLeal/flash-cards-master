import { Link } from "react-router-dom";
import { ExampleContainer } from "./StyleLandingPage";
import { FrontContainer, VerseContainer } from "../../style/CardStyle";
export const LadingPage = () => {
  return (
    <>
      <h1>Reforce os conteúdos que você estuda</h1>
      <ExampleContainer>
        <FrontContainer>
          <h3>Ácido Desoxirribonucleico</h3>
          <span className="material-symbols-outlined">redo</span>
        </FrontContainer>
        <span className="material-symbols-outlined double-arrow">double_arrow</span>
        <VerseContainer>
          <p>
            É um tipo de ácido nucleico que possui destaque por armazenar a
            informação genética da grande maioria dos seres vivos. Essa molécula
            é formada por nucleotídeos e apresenta, geralmente, a forma de uma
            dupla-hélice.(DNA)
          </p>
          <span className="material-symbols-outlined">undo</span>
        </VerseContainer>
      </ExampleContainer>

      <h2>Clique no botão abaixo para entrar na dashboard</h2>
      <Link to="dashboard">Entrar</Link>
    </>
  );
};
