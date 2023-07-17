import React from 'react';
import PricingCards from '../components/PricingCards';
function PricingCardsContent() {
  return (
    <>
     <div className='row'>
      <div className='col-3'>
      <PricingCards
        headerTitle="Free"
        cardTitle="Free Plan"
        cardSubtitle="Enables a small software team to ship quickly"
        price="$0.00"
        buttonText="Sign up for free"
        listItems={[
          'Manage ongoing work in series',
          'Create Docs and connect them to ongoing work',
          'Plan multiple sprints using iterations',
          'Get tailored reports for quick insight',
          'Filter and view Kanban views',
          'Access to our Slack, Figma, VCS Integrations'
        ]}
      />
      </div>
          <div className='col-3'>
          <PricingCards
        headerTitle="Team"
        cardTitle="Team Plan"
        cardSubtitle="Enables a small software team to ship quickly"
        price="$0.00"
        buttonText="Sign up for free"
        listItems={[
          'Manage ongoing work in series',
          'Create Docs and connect them to ongoing work',
          'Plan multiple sprints using iterations',
          'Get tailored reports for quick insight',
          'Filter and view Kanban views',
          'Access to our Slack, Figma, VCS Integrations'
        ]}
      />
          </div>
     </div>
    </>
  );
}

export default PricingCardsContent;
