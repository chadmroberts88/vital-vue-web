import { Checkbox, TableCell, TableRow, TableRowProps } from "@mui/material";
import { Patient, Vitals } from "../types";

interface PatientRowProps extends TableRowProps {
  isSelected?: boolean;
  item: {
    patient?: Patient;
    vitals?: Vitals;
  };
}

const PatientRow = ({
  isSelected,
  item,
  ...rest
}: PatientRowProps): JSX.Element => {
  const { patient, vitals } = item;
  return (
    <TableRow
      hover
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={-1}
      selected={isSelected}
      sx={{
        cursor: "pointer",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "black",
        margin: 4,
      }}
      {...rest}
    >
      <TableCell padding="checkbox">
        <Checkbox color="primary" checked={isSelected} />
      </TableCell>
      <TableCell align="left">{patient?.firstName}</TableCell>
      <TableCell align="left">{patient?.lastName}</TableCell>
      <TableCell align="left">{patient?.healthcareNumber}</TableCell>
      <TableCell align="right">{`${vitals?.bloodPressure?.systolic}/${vitals?.bloodPressure?.diastolic}`}</TableCell>
      <TableCell align="right">{vitals?.specificOxygen}</TableCell>
      <TableCell align="right">{vitals?.pulse}</TableCell>
      <TableCell align="right">{vitals?.respirations}</TableCell>
    </TableRow>
  );
};

export default PatientRow;
