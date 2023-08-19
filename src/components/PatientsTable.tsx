import * as React from "react";
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
    healthcareNumber: "1234567890",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
  {
    id: "87654321",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "1234567890",
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
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <DataGrid
        sx={{ width: "100%" }}
        rows={rows}
        columns={columns}
        density="compact"
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "Mui-even" : "Mui-odd"
        }
      />
    </Box>
  );
};

export default PatientsTable;
