import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import TableRow from "../TableRow";

import s from "./Table.module.scss";

const Table = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const filter = useSelector((state: RootState) => state.filter.filter);
  const filterType = useSelector((state: RootState) => state.filter.filterType);
  const filteredUsers = users.filter((user) => {
    if (!filterType || !filter) {
      return true;
    }
    const key = filterType as keyof typeof user;
    const typeValue = user[key]?.toString().toLocaleLowerCase();
    const filterValue = filter.toLocaleLowerCase();
    return typeValue.includes(filterValue);
  });

  return (
    <div className={s.container}>
      <table className={s.table}>
        <thead>
          <tr>
            <td></td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length === 0 ? (
            <tr>
              <td colSpan={5}>No results</td>
            </tr>
          ) : (
            filteredUsers.map((user, idx) => {
              return <TableRow key={user.id} user={user} idx={idx} />;
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
