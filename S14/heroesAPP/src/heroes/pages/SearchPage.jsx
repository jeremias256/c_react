import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";

import queryString from "query-string";

export const SearchPage = () => {
  console.log("RENDERIZO => SearchPage.jsx");
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showSearch = (q === '');
  const showError = (q !== '' && heroes.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <form>
            <input
              autoComplete="off"
              className="form-control"
              name="searchText"
              onChange={onInputChange}
              placeholder="Find your hero"
              type="text"
              value={searchText}
            />
            <button className="btn btn-outline-primary mt-2" onClick={onSearchSubmit} type="submit" >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
              ? <div className="alert alert-primary">
                Search a hero
              </div>
              : (heroes.length === 0) && <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
          } */}

          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>



          {
            heroes.map((heroe) => (
              <HeroCard
                key={heroe.id}
                {...heroe}
              />
            ))
          }
        </div>
      </div >
    </>
  );
}
