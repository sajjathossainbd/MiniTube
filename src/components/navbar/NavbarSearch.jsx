import { useState } from "react";
import { searched } from "../../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";

function NavbarSearch() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handeSubmit = (event) => {
    event.preventDefault();
    dispatch(searched(input));

    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handeSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  );
}

export default NavbarSearch;
