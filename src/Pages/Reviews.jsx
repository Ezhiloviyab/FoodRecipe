import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const ReviewPage = () => {
  const [userName, setUserName] = useState('');
  const [userReview, setUserReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setUserReview(event.target.value);
  };

  const handleAddReview = () => {
    if (userName && userReview) {
      const newReview = {
        userName: userName,
        reviewText: userReview,
      };

      setReviews([...reviews, newReview]);
      setUserName('');
      setUserReview('');
    }
  };

  return (
    <>
   

      <Row className='riv'>
        <Col md={6}>
          <Form >
            <Form.Group controlId="userName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={handleNameChange}
              />
            </Form.Group>

            <Form.Group controlId="userReview">
              <Form.Label>Your Review (max 200 words)</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                maxLength={200}
                placeholder="Write your review here..."
                value={userReview}
                onChange={handleReviewChange}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddReview}>
              Add Review
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <div className="mt-4">
            {reviews.map((review, index) => (
              <Card key={index} className="rivcard mb-3">
                <Card.Header style={{fontWeight:"bolder"}}>{review.userName}</Card.Header>
                <Card.Body>
                  <Card.Text>{review.reviewText}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ReviewPage;
