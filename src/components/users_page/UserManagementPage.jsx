import { useState } from "react";
import {
  Badge,
  Button,
  Col,
  Form,
  Image,
  Modal,
  Row,
  Table,
} from "react-bootstrap";

const mockUsers = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "a@example.com",
    phone: "0123 456 789",
    role: "Customer",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=1",
    birthday: "1998-05-10",
    country: "Vietnam",
    bio: "Loyal customer since 2020.",
  },
  {
    id: 2,
    name: "Tran Thi B",
    email: "b@example.com",
    phone: "0987 654 321",
    role: "Admin",
    status: "inactive",
    avatar: "https://i.pravatar.cc/150?img=2",
    birthday: "1995-02-20",
    country: "Vietnam",
    bio: "Admin overseeing orders.",
  },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "inactive" : "active",
            }
          : user
      )
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole ? user.role === filterRole : true;
    const matchesStatus = filterStatus ? user.status === filterStatus : true;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleViewDetail = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div className="container-fluid py-4">
      <h3 className="mb-4">User Management</h3>

      <Row className="mb-3 g-3">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="🔍 Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="">Filter by role</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Filter by status</option>
            <option value="active">Active</option>
            <option value="inactive">Locked</option>
          </Form.Select>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td>
                <Image
                  src={user.avatar}
                  roundedCircle
                  width={50}
                  height={50}
                  alt="avatar"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Badge bg={user.role === "Admin" ? "danger" : "secondary"}>
                  {user.role}
                </Badge>
              </td>
              <td>
                <Badge
                  bg={user.status === "active" ? "success" : "warning"}
                  className="text-capitalize"
                >
                  {user.status}
                </Badge>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <Button
                    size="sm"
                    variant={
                      user.status === "active"
                        ? "outline-danger"
                        : "outline-success"
                    }
                    onClick={() => toggleStatus(user.id)}
                  >
                    {user.status === "active" ? "Lock" : "Unlock"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    onClick={() => handleViewDetail(user)}
                  >
                    View
                  </Button>
                </div>
              </td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center text-muted">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal: User Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <div className="text-center mb-3">
                <Image
                  src={selectedUser.avatar}
                  roundedCircle
                  width={100}
                  height={100}
                  alt="avatar"
                />
              </div>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Birthday:</strong> {selectedUser.birthday}</p>
              <p><strong>Country:</strong> {selectedUser.country}</p>
              <p><strong>Biography:</strong> {selectedUser.bio}</p>

              <Form.Group className="mt-3">
                <Form.Label><strong>Role:</strong></Form.Label>
                <Form.Select
                  value={selectedUser.role}
                  onChange={(e) =>
                    setSelectedUser((prev) => ({
                      ...prev,
                      role: e.target.value,
                    }))
                  }
                >
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                </Form.Select>
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setUsers((prev) =>
                prev.map((user) =>
                  user.id === selectedUser.id
                    ? { ...user, role: selectedUser.role }
                    : user
                )
              );
              setShowModal(false);
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
