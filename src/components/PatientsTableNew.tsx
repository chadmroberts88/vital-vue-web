import { Table } from "antd";
import type { TablePaginationConfig, TableProps } from "antd";
interface DataType {
  id: string;
  key: string;
  firstName: string;
  lastName: string;
  healthcareNumber: string;
  bloodPressure: string;
  specificOxygen: number;
  pulse: number;
  respirations: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "First name",
    key: "firstName",
    dataIndex: "firstName",
  },
  {
    title: "Last name",
    key: "lastName",
    dataIndex: "lastName",
  },
  {
    title: "Healthcare #",
    key: "healthcareNumber",
    dataIndex: "healthcareNumber",
  },
  {
    title: "Blood Pressure",
    key: "bloodPressure",
    dataIndex: "bloodPressure",
    align: "right",
  },
  {
    title: "SpO2 (%)",
    key: "specificOxygen",
    dataIndex: "specificOxygen",
    align: "right",
  },
  {
    title: "Pulse (/min)",
    key: "pulse",
    dataIndex: "pulse",
    align: "right",
  },
  {
    title: "Resp. (/min)",
    key: "respirations",
    dataIndex: "respirations",
    align: "right",
  },
];

const data: DataType[] = [
  {
    id: "1234568",
    key: "01",
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
    key: "02",
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
    key: "03",
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
    key: "04",
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
    key: "05",
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
    key: "06",
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
    key: "07",
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
    key: "08",
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
    key: "09",
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
    key: "10",
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
    key: "11",
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
    key: "12",
    firstName: "Chad",
    lastName: "Roberts",
    healthcareNumber: "1234x7890",
    bloodPressure: `${120}/${80}`,
    specificOxygen: 97,
    pulse: 80,
    respirations: 42,
  },
];

const PatientsTable = () => {
  const paginationConfig: TablePaginationConfig = {
    pageSize: 5,
  };

  return (
    <Table
      style={{
        width: "100%",
        height: "394px",
        margin: "20px",
        borderRadius: "10px",
        boxShadow: "0px 10px 10px 5px #a9a9a9a9",
        backgroundColor: "#FAFAFA",
      }}
      pagination={paginationConfig}
      columns={columns}
      dataSource={data}
    />
  );
};

export default PatientsTable;
