import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { CheckSquare, Trash } from "react-bootstrap-icons";
import CompletedContactUsForms from "./CompletedContactUsForms";

const DisplayContactUsForms = ({
  allContactUsForms,
  setAllContactUsForms,
}) => {
  const [completedContactUsForms, setCompletedContactUsForms] = useState(
    localStorage.getItem("completedContactUsForms")
      ? JSON.parse(localStorage.getItem("completedContactUsForms"))
      : []
  );

  console.log(allContactUsForms);

  //Complete
  const handleComplete = (contactID) => {
    const markedForm = JSON.parse(
      localStorage.getItem("allContactUsForms")
    ).filter((form) => {
      return form.contactID === contactID;
    });

    setCompletedContactUsForms([
      ...completedContactUsForms,
      markedForm[0],
    ]);

    const unmarkedForms = JSON.parse(
      localStorage.getItem("allContactUsForms")
    ).filter((form) => {
      return form.contactID !== contactID;
    });

    setAllContactUsForms(unmarkedForms);

    console.log(markedForm);
    console.log(completedContactUsForms);

    console.log(unmarkedForms);
    console.log(allContactUsForms);
  };

  // Delete
  const handleDelete = (contactID) => {
    const retainedForms = JSON.parse(
      localStorage.getItem("allContactUsForms")
    ).filter((form) => {
      return form.contactID !== contactID;
    });

    setAllContactUsForms(retainedForms);
  };

  useEffect(() => {
    localStorage.setItem(
      "completedContactUsForms",
      JSON.stringify(completedContactUsForms)
    );
  }, [completedContactUsForms]);

  return (
    <div>
      <h4>Submitted Forms:</h4>
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
            {allContactUsForms.map((form, index) => (
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

      <h4>Completed Forms:</h4>
      <CompletedContactUsForms
        completedContactUsForms={completedContactUsForms}
      />
    </div>
  );
};

export default DisplayContactUsForms;
