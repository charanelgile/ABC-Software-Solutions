// Library Imports
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

// Context Imports
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
      <TableContainer className="rounded">
        <Table>
          <TableHead className="bg-dark-midtone">
            <TableRow>
              <TableCell className="text-light text-center fw-bold">
                Request ID
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Requestor's Name
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Name of Business
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Service Request Type
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Message
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Date Submitted
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Email
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Phone
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Restore
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="contactFormDetails">
            {contactFormsCompleted.map((form, index) => (
              <TableRow key={index + 1}>
                <TableCell className="text-info text-center fw-bold">
                  {form.contactID}
                </TableCell>

                <TableCell className="text-light fw-bold">
                  {form.contactFirstName} {form.contactLastName}
                </TableCell>

                <TableCell className="text-light fw-bold">
                  {form.contactBusinessName}
                </TableCell>

                <TableCell className="text-light text-center fw-bold">
                  {form.contactServiceType}
                </TableCell>

                <TableCell className="text-light fw-bold">
                  {form.contactMessage}
                </TableCell>

                <TableCell className="text-light fw-bold">
                  {form.contactDateSubmitted}
                </TableCell>

                <TableCell className="text-light text-center fw-bold">
                  {form.contactEmail}
                </TableCell>

                <TableCell className="text-light text-center fw-bold">
                  {form.contactPhone}
                </TableCell>

                <TableCell className="text-light text-center fw-bold">
                  <button
                    className="bg-secondary text-dark btn"
                    onClick={(event) => {
                      event.preventDefault();

                      handleRestore(form.contactID);
                    }}>
                    <FontAwesomeIcon icon={faArrowRotateLeft} />
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
