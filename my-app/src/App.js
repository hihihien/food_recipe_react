import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}> Best Recipes </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter> 
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 500;
  font-family: 'Lobster Two', cursive;
  color: #995c00;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items; center;
  color: #995c00;
  svg {
    font-size: 3rem;
  }
`;


export default App;
