import React from 'react';
import { Table, Button } from 'react-bootstrap';
import moment from "moment";

const MyTable = ({ objects, handleEdit, handleDelete, newPost }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Дата</th>
          <th>Прогресс</th>
        </tr>
      </thead>
      <tbody>
      {objects.map((obj, index) => (
          <tr key={obj.id}>
            <td>{index + 1}</td>
            <td>{obj.header}</td>
            <td>{obj.text}</td>
            <td>{moment(moment(obj.date).toLocaleString()).format('DD/MM/YYYY HH:mm')}</td>
            <td>{obj.progress}</td>
            <td>
               <Button variant="success" onClick={() => handleEdit(obj)}>Выполнено</Button>
            </td>
            <td>
               <Button variant="danger" onClick={() => handleDelete(obj.id)}>Удалить</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;