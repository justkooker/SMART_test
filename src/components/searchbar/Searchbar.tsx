import SearchbarTypes from "./SearchbarTypes/SearchbarTypes";
import SearchbarInput from "./SearchbarInput";

import s from "./Searchbar.module.scss";

const Searchbar = () => {
  return (
    <div className={s.searchbar}>
      <SearchbarTypes />
      <SearchbarInput />
    </div>
  );
};

export default Searchbar;
