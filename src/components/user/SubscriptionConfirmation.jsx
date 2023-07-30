// Library Imports
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faCheckToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation, Link } from "react-router-dom";

// Context Imports
import { SubscriptionsContext } from "../../contexts/user/SubscriptionsContext";

// Others
import "../../styles/styleServices.css";

const SubscriptionConfirmation = () => {
  const newSubscription = useLocation();
  const clearSubscription = useNavigate();

  const { subscriptions, setSubscriptions } = useContext(
    SubscriptionsContext
  );

  console.log(subscriptions);

  console.log(newSubscription.state);

  let chosenSubscriptionPlan = [];

  chosenSubscriptionPlan.push(newSubscription.state);

  const handleSubscribe = () => {
    setSubscriptions([...subscriptions, newSubscription.state]);

    alert("Subscription successful");

    clearSubscription("/Services");
  };

  return (
    <div id="subscriptionConfirmation">
      <div
        id="subscriptionConfirmationTop"
        className="bg-primary">
        <div id="divCancelSubscription">
          <Link
            to="/Services"
            className="btnCancelSubscription text-light">
            <FontAwesomeIcon icon={faCircleLeft} />
          </Link>

          <p className="text-center mt-2 mb-4">ABC Software Solutions</p>
        </div>

        <div
          id="divAlmostThere"
          className="bg-dark text-light text-center">
          <h3 id="almostThereText">You're almost there</h3>

          <h1 id="almostThereIcon">
            <FontAwesomeIcon icon={faCheckToSlot} />
          </h1>
        </div>
      </div>

      {chosenSubscriptionPlan.map((plan, index) => {
        return (
          <div
            id="subscriptionConfirmationBottom"
            className="bg-dark-midtone"
            key={index + 1}>
            <div
              id="subscriptionConfirmationDetails"
              className="bg-dark text-light">
              <p className="mb-3">
                Kindly review the details of your subscription below.
                <br />
                Please{" "}
                <Link
                  className="text-primary"
                  onClick={handleSubscribe}>
                  click here
                </Link>{" "}
                or on the button below to confirm your subscription. A copy
                of this subscription will be sent to your email:{" "}
                <b className="text-primary">
                  {plan.subscrptnPlanSubscriber}
                </b>
              </p>

              <h1 className="text-center mt-4 mb-0">
                {plan.subscrptnPlanName}
              </h1>

              <h1 className="text-center mt-0 mb-4">
                {plan.subscrptnPlanAmount === 0
                  ? null
                  : plan.subscrptnPlanAmount.toLocaleString() + " / mo"}
              </h1>

              <p className="text-center mb-3">
                {plan.subscrptnPlanDescription}
              </p>

              <p className="mb-2">
                <b>Subscription Plan ID: </b>
                {plan.subscrptnPlanID}
              </p>

              <p className="mb-2">
                <b>Start Date: </b>
                {plan.subscrptnPlanStart}
              </p>

              <p className="mb-2">
                <b>Duration: </b>
                {plan.subscrptnPlanDuration === 0
                  ? "One Time"
                  : plan.subscrptnPlanDuration + " months"}
              </p>

              <p className="mb-2">
                <b>Recurring: </b>
                {plan.subscrptnPlanRecurring ? "Yes" : "No"}
              </p>

              <p>
                <b>Inclusions:</b>
              </p>

              {plan.subscrptnPlanInclusions.map((inclusion, index) => {
                return (
                  <p key={index + 1}>
                    <hr />

                    <b className="inclusionsList opacity-75">
                      {inclusion.spiServiceType}
                    </b>

                    {inclusion.spiServices.map((service, index) => {
                      return (
                        <p
                          key={index + 1}
                          className="inclusionsItems">
                          {service}
                        </p>
                      );
                    })}
                  </p>
                );
              })}

              <p className="my-3">
                <b>Features:</b>
              </p>

              {plan.subscrptnPlanFeatures.map((feature, index) => {
                return (
                  <p
                    key={index + 1}
                    className="featuresList">
                    {feature}
                  </p>
                );
              })}

              <div className="flexRowCenter">
                <button
                  id="btnConfirmSubscription"
                  className="bg-primary btn btn-success"
                  onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>

              <div className="flexRowCenter">
                <Link
                  to="/Services"
                  id="btnCancelSubscription"
                  className="text-light bg-tertiary btn">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubscriptionConfirmation;
