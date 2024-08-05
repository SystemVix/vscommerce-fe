import './styles.css';

export default function SearchBar()
{
   return(
      <form className="vsc-search-bar">
         <button type="submit">🔎︎</button>
         <input type="text" placeholder="Nome do produto"/>
         <button type="reset">🗙</button>
      </form>
   );
}