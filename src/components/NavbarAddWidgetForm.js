import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/actions'; // Ensure this import path is correct

const NavbarAddWidgetForm = ({ showModal, handleClose, categoryList }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory) {
      dispatch(addWidget({ categoryId: selectedCategory, name: widgetName, text: widgetText }));
      setWidgetName('');
      setWidgetText('');
      setSelectedCategory('');
      handleClose(); // Close the modal after adding the widget
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Add Widget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="widgetCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              {categoryList.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="widgetName">
            <Form.Label>Widget Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter widget name"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="widgetText">
            <Form.Label>Widget Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter widget text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NavbarAddWidgetForm;
