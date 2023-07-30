import React, { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { ContactFormsSubmittedContext } from "../../contexts/admin/ContactFormsSubmittedContext";
import { ContactFormsCompletedContext } from "../../contexts/admin/ContactFormsCompletedContext";

const CompletedContactForms = () => {
  const { contactFormsSubmitted, setContactFormsSubmitted } = useContext(
    ContactFormsSubmittedContext
  );
  const { contactFormsCompleted, setContactFormsCompleted } = useContext(
    ContactFormsCompletedContext
  );

  // Restore a Form
  const handleRestore = (contactID) => {
    // Return the Specific Form to be Restored
    const restoredForm = contactFormsCompleted.filter((form) => {
      return form.contactID === contactID;
    });

    // Update the State Variable of the Submitted Forms
    setContactFormsSubmitted([...contactFormsSubmitted, restoredForm[0]]);

    // Return the Forms that will NOT be Restored
    const retainedForms = contactFormsCompleted.filter((form) => {
      return form.contactID !== contactID;
    });

    // Update the State Variable of the Completed Forms
    setContactFormsCompleted(retainedForms);
  };

  return contactFormsCompleted.length === 0 ? null : (
    <div>
      <h5>Completed Forms:</h5>
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

              <TableCell>Restore</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contactFormsCompleted.map((form, index) => (
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

                <TableCell>
                  <button
                    className="btn btn-warning"
                    onClick={(event) => {
                      event.preventDefault();

                      handleRestore(form.contactID);
                    }}>
                    <RestoreIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CompletedContactForms;
