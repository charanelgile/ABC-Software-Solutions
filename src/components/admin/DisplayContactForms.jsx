// Library Imports
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
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
    alert("Are you sure you want to delete this entry?");

    // Return the Forms that are NOT for Deletion
    const retainedForms = contactFormsSubmitted.filter((form) => {
      return form.contactID !== contactID;
    });

    // Update the State Variable of the Submitted Forms
    setContactFormsSubmitted(retainedForms);
  };

  return contactFormsSubmitted.length === 0 ? null : (
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
                Mark as Complete
              </TableCell>

              <TableCell className="text-light text-center fw-bold">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="contactFormDetails">
            {contactFormsSubmitted.map((form, index) => (
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
                    className="bg-primary text-light btn"
                    onClick={(event) => {
                      event.preventDefault();

                      handleComplete(form.contactID);
                    }}>
                    <p className="contactFormButtons">
                      <FontAwesomeIcon icon={faSquareCheck} />
                    </p>
                  </button>
                </TableCell>

                <TableCell className="text-light text-center fw-bold">
                  <button
                    className="bg-tertiary text-light btn"
                    onClick={(event) => {
                      event.preventDefault();

                      handleDelete(form.contactID);
                    }}>
                    <p className="contactFormButtons">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </p>
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
