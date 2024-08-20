import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/actions';
import { Modal, Button, Form } from 'react-bootstrap';
import './AddWidgetForm.css'; // Import the updated CSS file

const AddWidgetForm = ({ showModal, handleClose, categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryId) {
      dispatch(addWidget({ categoryId, name: widgetName, text: widgetText }));
      setWidgetName('');
      setWidgetText('');
      handleClose(); // Close the modal after adding the widget
    }
  };

  const handleClear = () => {
    setWidgetName('');
    setWidgetText('');
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName="custom-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Widget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="widgetName">
            <Form.Control
              type="text"
              placeholder="Widget Name"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="widgetText">
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Widget Text"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              required
            />
          </Form.Group>
          {/* You can add more fields here if needed */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
        <Button type="submit" variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddWidgetForm;
