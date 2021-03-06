import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaMapSigns } from 'react-icons/fa';
import { BsFilterLeft, BsPhone, BsPeopleFill, BsReplyAll } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { NotFoundMessage, LoadingWait } from '../../helpers/reusable/loading';
const LatestParent = (props) => {
  const { parents, state } = props;
  return (
    <div className="mt-5 sections">
      <Container>
        <Row>
          <div className="font-weight-bold section-header">
            <FaMapSigns /> Parents
          </div>
        </Row>
        <div className="m--75 mt-4">
          <Row>
            <div className="pl-3">
              {state.loading && (
                <Row>
                  <LoadingWait />
                </Row>
              )}
              {parents && parents.length <= 0 && (
                <Row>
                  <NotFoundMessage message="parents not available" />
                </Row>
              )}
            </div>
          </Row>
          <Row>
            {parents &&
              parents.length > 0 &&
              parents.slice(0, 6).map((item) => (
                <Col md="4" key={item.subscriptionId} className="mt-3">
                  <div className="st-div d-flex align-items-center">
                    <div className="ls">
                      <div className="d-flex align-items-center">
                        <div>
                          <BsFilterLeft />
                        </div>
                        <div className="pl-2">{item.name}</div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsPhone />
                        </div>
                        <div className="pl-2">
                          <small>
                            {item.phoneNumber ? item.phoneNumber : 'N/A'}
                          </small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsPeopleFill />
                        </div>
                        <div className="pl-2">
                          <small>
                            students{' '}
                            <b>
                              {item.parent && item.parent.length > 0
                                ? item.parent.length
                                : 'N/A'}
                            </b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
          {parents && parents.length >= 4 && (
            <Row>
              <div className="mt-4">
                <Col md="12">
                  <Link to="/itegure-parents">
                    <i className="pr-2">
                      <BsReplyAll />
                    </i>
                    view more
                  </Link>
                </Col>
              </div>
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
};
export default LatestParent;
