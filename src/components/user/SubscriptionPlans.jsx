// Library Imports
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";

// Context imports
import { AllUsersContext } from "../../contexts/user/AllUsersContext";
import { CurrentUserContext } from "../../contexts/user/CurrentUserContext";

// Others
import {
  year,
  month,
  date,
  hrs,
  mins,
  eitherAMorPM,
} from "../../data/DateTimeData";
import { SubscriptionPlansData } from "../../data/SubscriptionPlansData";

const SubscriptionPlans = () => {
  const loginRequired = useNavigate();
  const signUpRequired = useNavigate();
  const newSubscription = useNavigate();

  const { allUsers } = useContext(AllUsersContext);
  const { currentUser } = useContext(CurrentUserContext);

  const handleGetPlan = (planName) => {
    const chosenSubscriptionPlan = SubscriptionPlansData.filter((plan) => {
      return plan.subscrptnPlanName === planName;
    });

    // Add the Email of the Subscriber
    chosenSubscriptionPlan[0].subscrptnPlanSubscriber =
      currentUser[0].userEmail;

    // Add a Unique ID
    chosenSubscriptionPlan[0].subscrptnPlanID = Date.now();

    // Add a Start Date
    chosenSubscriptionPlan[0].subscrptnPlanStart = `${month}-${date}-${year}, ${hrs}:${mins} ${eitherAMorPM}`;

    // Add a Recurring or Not Flag
    chosenSubscriptionPlan[0].subscrptnPlanDuration > 0
      ? (chosenSubscriptionPlan[0].subscrptnPlanRecurring = true)
      : (chosenSubscriptionPlan[0].subscrptnPlanRecurring = false);

    console.log(chosenSubscriptionPlan);

    newSubscription("/ABC-Software-Solutions/SubscriptionConfirmation", {
      state: chosenSubscriptionPlan[0],
    });
  };

  return (
    <div id="subscriptionPlans" className="bg-dark-midtone">
      <h5 className="text-light text-center mb-3 opacity-75">
        Subscription Plans
      </h5>

      <div className="flexColCenter">
        {SubscriptionPlansData.map((plan, index) => {
          return (
            <Card
              key={index + 1}
              className="subscriptionPlanCards bg-dark-midtone w-100">
              <Card.Header className="subscriptionPlanHeaders text-light bg-primary">
                {plan.subscrptnPlanName}
              </Card.Header>

              <Card.Body className="subscriptionPlanDetails bg-dark text-light text-center">
                <Card.Title>
                  <h3>{plan.subscrptnPlanName}</h3>
                </Card.Title>

                <Card.Subtitle className="mb-2">
                  {plan.subscrptnPlanDescription}
                </Card.Subtitle>

                <h1 className="subscriptionPlanPrice">
                  {plan.subscrptnPlanAmount === 0
                    ? "FREE"
                    : plan.subscrptnPlanAmount.toLocaleString()}
                </h1>

                {plan.subscrptnPlanDuration === 0 ? (
                  ""
                ) : (
                  <p className="opacity-75">
                    per month for {plan.subscrptnPlanDuration} months
                  </p>
                )}

                <Button
                  className="bg-primary text-center mb-4 px-5 rounded rounded-5"
                  onClick={() => {
                    allUsers.length === 0
                      ? signUpRequired("/ABC-Software-Solutions/UserSignUp")
                      : currentUser.length === 0
                      ? loginRequired("/ABC-Software-Solutions/UserLogin")
                      : handleGetPlan(plan.subscrptnPlanName);
                  }}>
                  GET {plan.subscrptnPlanName.toUpperCase()}
                </Button>

                <div className="subscriptionPlanInclusionsFeatures">
                  <p id="subscriptionPlanInclusions">
                    <b>Inclusions</b>
                  </p>

                  <ul className="list-group list-group-flush">
                    {plan.subscrptnPlanInclusions.map((inclusion, index) => (
                      <li
                        className="text-light list-group-item"
                        key={index + 1}>
                        <b className="opacity-75">{inclusion.spiServiceType}</b>

                        {inclusion.spiServices.map((service, index) => {
                          return (
                            <p key={index + 1}>
                              <ArrowRightTwoToneIcon />
                              {service}
                            </p>
                          );
                        })}
                      </li>
                    ))}
                  </ul>

                  {plan.subscrptnPlanFeatures.length === 0 ? (
                    ""
                  ) : (
                    <p id="subscriptionPlanFeatures">
                      <b>Features</b>
                    </p>
                  )}

                  <ul className="list-group list-group-flush">
                    {plan.subscrptnPlanFeatures.map((feature, index) => (
                      <li
                        className="text-light list-group-item"
                        key={index + 1}>
                        <ArrowRightTwoToneIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <Button className="btnCustomPackage bg-secondary text-dark-midtone fw-bold border-0">
        Customize your Subscription Package
      </Button>
    </div>
  );
};

export default SubscriptionPlans;
