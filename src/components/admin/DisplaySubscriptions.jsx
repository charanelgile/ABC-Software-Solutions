// Library Imports
import React, { useContext } from "react";
import { Card } from "react-bootstrap";

// Context Imports
import { SubscriptionsContext } from "../../contexts/user/SubscriptionsContext";

const DisplaySubscriptions = () => {
  const { subscriptions } = useContext(SubscriptionsContext);

  console.log(subscriptions);

  return (
    <div>
      {subscriptions.map((plan, index) => {
        return (
          <Card
            key={index + 1}
            className="subscriptionCards text-light">
            <Card.Body className="flexColStart">
              <div>
                <small>
                  <span className="opacity-75">
                    Subscription Plan ID:{" "}
                  </span>
                  <b>{plan.subscrptnPlanID}</b>
                </small>

                <Card.Title className="subscriptionPlanNames text-primary fw-bold">
                  {plan.subscrptnPlanName}
                </Card.Title>

                <Card.Subtitle className="text-primary mb-3">
                  {plan.subscrptnPlanAmount === 0
                    ? "One Time"
                    : plan.subscrptnPlanAmount.toLocaleString() +
                      "/mo for " +
                      plan.subscrptnPlanDuration +
                      " months"}
                </Card.Subtitle>

                <p>
                  <span className="opacity-75">Subscriber: </span>
                  <b>{plan.subscrptnPlanSubscriber}</b>
                </p>

                <p>
                  <span className="opacity-75">Started on: </span>
                  {plan.subscrptnPlanStart}
                </p>
              </div>

              <div>
                <div>
                  <p className="mt-2 opacity-75">
                    {plan.subscrptnPlanFeatures.length === 0
                      ? null
                      : "Features"}
                  </p>

                  <ul>
                    {plan.subscrptnPlanFeatures.map((feature, index) => {
                      return <li key={index + 1}>{feature}</li>;
                    })}
                  </ul>
                </div>

                <div>
                  <p className="mt-2 opacity-75">
                    {plan.subscrptnPlanInclusions.length === 0
                      ? null
                      : "Inclusions"}
                  </p>

                  <p>
                    {plan.subscrptnPlanInclusions.map(
                      (inclusion, index) => {
                        return (
                          <div>
                            <p
                              key={index + 1}
                              className="opacity-75 fw-bold">
                              &nbsp;&nbsp;&nbsp;{inclusion.spiServiceType}
                            </p>

                            <ul>
                              {inclusion.spiServices.map(
                                (service, index) => {
                                  return (
                                    <li key={index + 1}>{service}</li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        );
                      }
                    )}
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default DisplaySubscriptions;
