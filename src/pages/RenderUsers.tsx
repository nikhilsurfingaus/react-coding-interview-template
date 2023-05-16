import { Users } from "../types/types";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type RenderUsersProps = {
  users: Users;
};

const RenderUsers = ({ users }: RenderUsersProps) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {users.map((user, index) => (
          <Col key={index} className=" mt-3">
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={user?.pfp} />
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem", textAlign: "center" }}>
                  {user?.username}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RenderUsers;
