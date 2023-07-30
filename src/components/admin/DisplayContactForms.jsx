import React, { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { CheckSquare, Trash } from "react-bootstrap-icons";
import { ContactFormsSubmittedContext } from "../../contexts/admin/ContactFormsSubmittedContext";
import { ContactFormsCompletedContext } from "../../contexts/admin/ContactFormsCompletedContext";

const DisplayContactForms = () => {
  const { contactFormsSubmitted, setContactFormsSubmitted } = useContext(
    ContactFormsSubmittedContext
  );
  const { contactFormsCompleted, setContactFormsCompleted } = useContext(
    ContactFormsCompletedContext
  );

  // Complete a Form
  const handleComplete = (contactID) => {
    // Return the Specific Form that was Marked for Completion
    const markedForm = contactFormsSubmitted.filter((form) => {
      return form.contactID === contactID;
    });

    // Update the State Variable of the Completed Forms
    setContactFormsCompleted([...contactFormsCompleted, markedForm[0]]);

    // Return the Forms that are NOT Marked for Completion
    const unmarkedForms = contactFormsSubmitted.filter((form) => {
      return form.contactID !== contactID;
    });

    // Update the State Variable of the Submitted Forms
    setContactFormsSubmitted(unmarkedForms);

    console.log(markedForm);
    console.log(contactFormsCompleted);

    console.log(unmarkedForms);
    console.log(contactFormsSubmitted);
  };

  // Delete a Form
  const handleDelete = (contactID) => {
    // Return the Forms that are NOT for Deletion
    const retainedForms = contactFormsSubmitted.filter((form) => {
      return form.contactID !== contactID;
    });

    // Update the State Variable of the Submitted Forms
    setContactFormsSubmitted(retainedForms);
  };

  return contactFormsSubmitted.length === 0 ? null : (
    <div>
      <h5>Submitted Forms:</h5>
      <TableContainer>
        <Table>
          <TableHead className="bg-primary">
            <TableRow>
              <TableCell>Request ID</TableCell>

              <TableCell>Requestor's Name</TableCell>

              <TableCell>Name of Business</TableCell>

              <TableCell>Email</TableCell>

              <TableCell>Phone</TableCell>

              <TableCell>Service Request Type</TableCell>

              <TableCell>Message</TableCell>

              <TableCell>Date Submitted</TableCell>

              <TableCell>Mark as Complete</TableCell>

              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {contactFormsSubmitted.map((form, index) => (
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
                    className="btn btn-primary"
                    onClick={(event) => {
                      event.preventDefault();

                      handleComplete(form.contactID);
                    }}>
                    <CheckSquare />
                  </button>
                </TableCell>

                <TableCell>
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();

                      handleDelete(form.contactID);
                    }}>
                    <Trash />
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

export default DisplayContactForms;
