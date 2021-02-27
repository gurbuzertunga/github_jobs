import NavLogo from './components/header.component';
import FooterLogo from './components/footer.component';
import SearchPage from './pages/searchpage.pages';

function App() {
  return (
    <>
      <NavLogo />
      <div className="App">
        <SearchPage />
      </div>
      <FooterLogo />
    </>
  );
}

export default App;
