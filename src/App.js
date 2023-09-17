import './App.css';
import BooksContainer from "./components/Books/BooksContainer";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import PageOfBookContainer from "./components/Books/Book/PageOfBook/PageOfBookContainer";

function App(props) {
  return (
    <div className="App">
      <SearchBarContainer />
        {props.isBookPage  ? <PageOfBookContainer/> :<BooksContainer /> }
    </div>
  );
}

export default App;
