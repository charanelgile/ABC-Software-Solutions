import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { SubscriptionsContext } from "../../contexts/user/SubscriptionsContext";

const DisplaySubscriptions = () => {
  const { subscriptions } = useContext(SubscriptionsContext);

  console.log(subscriptions);

  return (
    <div>
      <h5>Subscriptions</h5>

      {subscriptions.map((plan, index) => {
        return (
          <Card key={index + 1}>
            <Card.Body>
              <small>Subscription Plan ID: {plan.subscrptnPlanID}</small>

              <Card.Title>{plan.subscrptnPlanName}</Card.Title>

              <Card.Subtitle>
                {plan.subscrptnPlanAmount === 0
                  ? "One Time"
                  : plan.subscrptnPlanAmount.toLocaleString() +
                    "/mo for " +
                    plan.subscrptnPlanDuration +
                    " months"}
              </Card.Subtitle>

              <div>
                <p>
                  Subscriber: <b>{plan.subscrptnPlanSubscriber}</b>
                </p>

                <p>Started on: {plan.subscrptnPlanStart}</p>

                <p>
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
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default DisplaySubscriptions;
