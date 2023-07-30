import React from 'react';

const ServiceCard = ({ imageUrl, title, content }) => {
  return (
    <div className="d-flex col-12 col-md-6">
      <div className="me-3">
        <img src={imageUrl} alt="Logo" width={75} />
      </div>
      <div>
        <h4>{title}</h4>
        {content}
      </div>
    </div>
  );
};

const ServiceContent = () => {
  return (
    <div>
      <div className="w-50 text-start m-5">
        <h2>Development</h2>
        <p>From full-time remote engineering teams to hourly contractors, work with remote dev as needed</p>
      </div>  
      <div className="container w-100">
        <div className="row my-3">
          <ServiceCard
            imageUrl="https://ais-10072.kxcdn.com/wp-content/uploads/2019/09/02-full-cycle-web-evelopment.png"
            title="Full-Stack Web App Development"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Front End Web App Development"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi? lorem10"
          />
        </div>
        <div className="row my-3">
          <ServiceCard
            imageUrl="https://ddi-dev.com/uploads/backend-is.png"
            title="Back End Web App Development"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.dCMZePGI5jD-xgriOLiBTwHaEK&pid=Api&P=0&h=180"
            title="Cross-Platform Mobile App Development"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
        </div>
      </div>

      <div className="w-50 text-start m-5">
        <h2>OutSourcing</h2>
        <p>From full-time remote engineering teams to hourly contractors, work with remote dev as needed</p>
      </div>  
      <div className="container w-100">
        <div className="row my-3">
          <ServiceCard
            imageUrl="https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-programming-coding-it-profession_277904-7400.jpg?size=626&ext=jpg"
            title="Dedicated Front End Developers"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Dedicated Back End Developers"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi? lorem10"
          />
        </div>
        <div className="row my-3">
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Dedicated Full Stack Web App Developers"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Dedicated Cross-Platform Mobile App Developers"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
        </div>
      </div>

      <div className="w-50 text-start m-5">
        <h2>Design</h2>
        <p>From full-time remote engineering teams to hourly contractors, work with remote dev as needed</p>
      </div>  
      <div className="container w-100">
        <div className="row my-3">
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Mockups"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Wireframes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi? lorem10"
          />
        </div>
        <div className="row my-3">
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="UI/UX Design"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Website Rebranding"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
        </div>
      </div>

      <div className="w-50 text-start m-5">
        <h2>Strategy</h2>
        <p>From full-time remote engineering teams to hourly contractors, work with remote dev as needed</p>
      </div>  
      <div className="container w-100">
        <div className="row my-3">
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="Web and Mobile App Consulting"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi?"
          />
          <ServiceCard
            imageUrl="https://tse2.mm.bing.net/th?id=OIP.JysQbvr5i6P_fu3nA_ozKgAAAA&pid=Api&P=0&h=180"
            title="SEO Implementation"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium consequuntur nobis iusto! Similique magni incidunt consequuntur, natus corrupti modi? lorem10"
          />
        </div>
        
      </div>
    </div>

    
  );
};

export default ServiceContent;
