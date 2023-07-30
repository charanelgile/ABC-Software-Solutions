// Library Imports
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
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
    <div>
      <div id="subscriptionConfirmationHeader">
        <Link to="/Services">
          <FontAwesomeIcon icon={faCircleLeft} />
        </Link>

        <h5>ABC Software Solutions</h5>

        <h1>You're almost there</h1>
      </div>
      {chosenSubscriptionPlan.map((plan, index) => {
        return (
          <div key={index + 1}>
            <p>
              Kindly review the details of your subscription below.
              <br />
              Please <Link onClick={handleSubscribe}>click here</Link> or
              on the button below to confirm your subscription. A copy of
              this subscription will be sent to your email:{" "}
              <b>{plan.subscrptnPlanSubscriber}</b>
            </p>

            <small>Subscription Plan ID: {plan.subscrptnPlanID}</small>

            <p>Subscription Plan Name: </p>
            <h3>{plan.subscrptnPlanName}</h3>

            <h1>
              {plan.subscrptnPlanAmount === 0
                ? null
                : plan.subscrptnPlanAmount.toLocaleString() + "/ mo"}
            </h1>

            <p>{plan.subscrptnPlanDescription}</p>

            <p>Start Date: {plan.subscrptnPlanStart}</p>

            <p>
              Duration:{" "}
              {plan.subscrptnPlanDuration === 0
                ? "One Time"
                : plan.subscrptnPlanDuration + "months"}
            </p>

            <p>Recurring: {plan.subscrptnPlanRecurring ? "Yes" : "No"}</p>

            <p>
              <b>Inclusions:</b>
            </p>
            <ul>
              {plan.subscrptnPlanInclusions.map((inclusion, index) => {
                return (
                  <li key={index + 1}>
                    <b>{inclusion.spiServiceType}</b>

                    {inclusion.spiServices.map((service, index) => {
                      return <p key={index + 1}>{service}</p>;
                    })}
                  </li>
                );
              })}
            </ul>

            <p>
              <b>Features:</b>
            </p>
            <ul>
              {plan.subscrptnPlanFeatures.map((feature, index) => {
                return <li key={index + 1}>{feature}</li>;
              })}
            </ul>
          </div>
        );
      })}

      <button
        className="btn btn-success"
        onClick={handleSubscribe}>
        Subscribe
      </button>
    </div>
  );
};

export default SubscriptionConfirmation;
