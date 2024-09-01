import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setFilter } from "../../../redux/features/filterSlice";
import s from "./SearchbarInput.module.scss";
const SearchbarInput = () => {
  const dispatch = useDispatch();
  const type = useSelector((state: RootState) => state.filter.filterType);
  const filter = useSelector((state: RootState) => state.filter.filter);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <input
      className={s.input}
      type="text"
      value={filter}
      onChange={handleChange}
      disabled={type ? false : true}
      placeholder={type ? `Enter ${type} to search` : 'Choose search type'}
    />
  );
};

export default SearchbarInput;
