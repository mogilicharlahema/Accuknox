import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="category">
      <div className="category-header">
        <h3 className="category-name">{category.name}</h3>
      </div>
      <Row className="widgets">
        {category.widgets.map((widget) => (
          <Col key={widget.id} sm={12} md={6} lg={4} className="mb-3">
            <Widget widget={widget} categoryId={category.id} />
          </Col>
        ))}
        <Col sm={12} md={6} lg={4} className="mb-3">
          <button
            className="add-widget-button"
            onClick={handleOpenModal}
          >
            + Add Widget
          </button>
        </Col>
      </Row>

      {/* Modal for Adding Widget */}
      <AddWidgetForm
        showModal={showModal}
        handleClose={handleCloseModal}
        categoryId={category.id} // Pass category ID to the modal
      />
    </div>
  );
};

export default Category;
