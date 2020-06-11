import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table dark size="sm" margen="auto" >
      <thead>
        <tr className="MenuTabla">
          <th>RANGO</th>
          <th>NOMBRE</th>
          <th>APELLIDO</th>
          <th>INSTAGRAM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Creador</th>
          <td>Giovanny</td>
          <td>Jukopila</td>
          <td>@giojukopila</td>
        </tr>
        <tr>
          <th scope="row">Admin</th>
          <td>Yango</td>
          <td>Jukopila</td>
          <td>@yangojukopila</td>
        </tr>
        <tr>
          <th scope="row">Admin</th>
          <td>Andres</td>
          <td>Rueda</td>
          <td>@andresrueda05</td>
        </tr>
        <tr>
          <th scope="row">Admin</th>
          <td>Julian</td>
          <td>Ramos</td>
          <td>@julian19r</td>
        </tr>
        <tr>
          <th scope="row">Admin</th>
          <td>Jacobo</td>
          <td>Ramos</td>
          <td>@jacoboramos1</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;