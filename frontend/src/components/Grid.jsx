import React from "react";
import { Table, Button } from "semantic-ui-react";
import "../styles/Grid.css";
const Grid = ({ data }) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Equipe</Table.HeaderCell>
          <Table.HeaderCell>Régleur 1</Table.HeaderCell>
          <Table.HeaderCell>Nom Régleur1</Table.HeaderCell>
          <Table.HeaderCell>Régleur 2</Table.HeaderCell>
          <Table.HeaderCell>Nom Régleur 2</Table.HeaderCell>
          <Table.HeaderCell>Contrôleur </Table.HeaderCell>
          <Table.HeaderCell>Nom Contrôleur</Table.HeaderCell>
          <Table.HeaderCell>Emballerur</Table.HeaderCell>
          <Table.HeaderCell>Nom Emballerur</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>A</Table.Cell>
          <Table.Cell>001</Table.Cell>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>005</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>008</Table.Cell>
          <Table.Cell>Hostile</Table.Cell>
          <Table.Cell>010</Table.Cell>
          <Table.Cell>Jane Smith</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>B</Table.Cell>
          <Table.Cell>002</Table.Cell>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>006</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>009</Table.Cell>
          <Table.Cell>Hostile</Table.Cell>
          <Table.Cell>011</Table.Cell>
          <Table.Cell>Jane Smith</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>C</Table.Cell>
          <Table.Cell>003</Table.Cell>
          <Table.Cell>moncef</Table.Cell>
          <Table.Cell>007</Table.Cell>
          <Table.Cell>Requires Action</Table.Cell>
          <Table.Cell>010</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>012</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        {/* Add more rows here as needed */}
      </Table.Body>
      <div className="button-container">
        <Button className="primary" content="Ajouter" />
        <Button className="negative" content="Supprimer" />
      </div>
    </Table>
  );
};

export default Grid;
