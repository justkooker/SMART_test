import React from "react";

import { User } from "../../types/userTypes";

interface TableRowProps {
  user: User;
  idx: number;
}

const TableRow: React.FC<TableRowProps> = ({ user, idx }) => {
  const { name, username, email, phone } = user;
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default TableRow;
