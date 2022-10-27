import { Link } from "react-router-dom";
export const Dashboard = () => {
  return (
    <>
      <header>
        <h1>MemoMaster</h1>
        <Link to="/">Sair</Link>
      </header>
      <h2>Você está na dashboard</h2>
    </>
  );
};
