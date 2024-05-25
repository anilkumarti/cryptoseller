import React from "react";
import { Table, Button, Container, Navbar } from "react-bootstrap";

const Home = () => {
  const seminar = [
    { Date: "16 July", Location: "Delhi", Name: "Rahul Sinha" },
    { Date: "19 July", Location: "Shimla", Name: "Shamsher Sahu" },
    { Date: "30 July", Location: "Mumbai", Name: "Mohammad" },
  ];
  return (
    <div> <Navbar bg="warning" variant="light">
       <Button variant="outline-primary" className="mx-auto"> Ticket for Latest online seminar</Button>
       </Navbar>
      
      <h1> Seminars</h1>
    <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th> Trader </th>
        </tr>
      </thead>
      <tbody>
        {seminar.map((item, index) => (
          <tr key={index}>
            <td> {item.Date} </td>
            <td> {item.Location}</td>
            <td>{item.Name}</td>
            <td>
              {" "}
              <Button> Buy tickets </Button>
            </td>
          </tr>
        ))}{" "}
      </tbody>
    </Table>
    </div>
  );
};

export default Home;