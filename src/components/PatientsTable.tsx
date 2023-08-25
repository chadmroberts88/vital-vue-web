import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PropsWithChildren } from "react";

const columns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First name",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
  },
  {
    field: "healthcareNumber",
    headerName: "Healthcare #",
    flex: 1,
  },
  {
    field: "bloodPressure",
    headerName: "Bloodpressure",
    type: "number",
    align: "right",
    flex: 1,
  },
  {
    field: "specificOxygen",
    headerName: "SpO2 (%)",
    type: "number",
    align: "right",
    flex: 1,
  },
  {
    field: "pulse",
    headerName: "Pulse (/min)",
    type: "number",
    align: "right",
    flex: 1,
  },
  {
    field: "respirations",
    headerName: "Resp. (/min)",
    type: "number",
    align: "right",
    flex: 1,
  },
];

const rows = [
  {
    id: "1234568",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "1",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654321",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "2",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654320",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "3",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654319",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "14",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654318",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "125",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654317",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "17",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654316",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "09",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654315",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "1230",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654314",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "17890",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654313",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "1234x7890",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "1234x7890",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "854313",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "1234x7890",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
];

type PatientsTableProps = PropsWithChildren & {
  drawerOpen: boolean;
};

const PatientsTable = ({ drawerOpen }: PatientsTableProps) => {
  return (
    <DataGrid
      sx={{
        boxShadow: 3,
      }}
      rows={rows}
      columns={columns}
      density="compact"
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      checkboxSelection
      disableRowSelectionOnClick
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? "Mui-even" : "Mui-odd"
      }
    />
  );
};

export default PatientsTable;
