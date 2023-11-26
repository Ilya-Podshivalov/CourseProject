import React from 'react';
import { Table } from 'react-bootstrap';

const MyTable = ({ objects }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody>
        {objects.map((obj, index) => (
          <tr key={obj.id}>
            <td>{index + 1}</td>
            <td>{obj.name}</td>
            <td>{obj.description}</td>
            <td>{obj.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;