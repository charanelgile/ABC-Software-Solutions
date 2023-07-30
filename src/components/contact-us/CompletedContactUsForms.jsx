import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const CompletedContactUsForms = ({ completedContactUsForms }) => {
  console.log(completedContactUsForms);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead className="bg-secondary">
            <TableRow>
              <TableCell>Request ID</TableCell>

              <TableCell>Requestor's Name</TableCell>

              <TableCell>Name of Business</TableCell>

              <TableCell>Email</TableCell>

              <TableCell>Phone</TableCell>

              <TableCell>Service Request Type</TableCell>

              <TableCell>Message</TableCell>

              <TableCell>Date Submitted</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {completedContactUsForms.map((form, index) => (
              <TableRow key={index + 1}>
                <TableCell>{form.contactID}</TableCell>

                <TableCell>
                  {form.contactFirstName} {form.contactLastName}
                </TableCell>

                <TableCell>{form.contactBusinessName}</TableCell>

                <TableCell>{form.contactEmail}</TableCell>

                <TableCell>{form.contactPhone}</TableCell>

                <TableCell>{form.contactServiceType}</TableCell>

                <TableCell>{form.contactMessage}</TableCell>

                <TableCell>{form.contactDateSubmitted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompletedContactUsForms;
