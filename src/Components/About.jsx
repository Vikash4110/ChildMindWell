import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-semibold text-center text-white bg-clip-text text-transparent mb-8 font-serif">About Us</h1>
      <div className="md:flex md:justify-between">
        <div className="md:w-full md:max-w-2xl md:pr-8 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4 font-serif">Our Aim</h2>
            <p className="text-lg font-serif">At ChildMindWell, our primary aim is to provide accessible and reliable resources for assessing and nurturing children's mental health. We believe that early intervention and support are crucial for promoting healthy emotional development in children. Our platform offers innovative features aimed at fostering a nurturing environment for children to thrive mentally and emotionally.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4 font-serif">Our Commitment</h2>
            <p className="text-lg font-serif">At ChildMindWell, we are committed to promoting a holistic approach to children's mental health. While our platform offers valuable tools and resources, we emphasize the importance of seeking professional guidance for comprehensive assessment and intervention. Our aim is to complement professional care and empower caregivers with knowledge and support to nurture children's mental well-being effectively.</p>
          </div>
        </div>
        <div className="md:w-full md:max-w-2xl">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4 font-serif">Key Features</h2>
            <ol className="list-decimal ml-6 mb-6 font-serif">
              <li className="mb-4 font-serif"><span className="font-semibold">PSC-17 Assessment Tool:</span> One of our standout features is the Psychological Screening Checklist (PSC-17), designed to assess various aspects of children's mental health. Developed by pediatric experts, PSC-17 is a valuable tool for identifying potential mental health concerns in children. However, it's essential to note that PSC-17 is not a diagnostic tool but rather a screening measure. Its purpose is to provide valuable insights and guide further evaluation by qualified professionals.</li>
              <li className="mb-4"><span className="font-semibold">Blogs by Pediatric Experts:</span> Our platform hosts a rich repository of blogs written by pediatric experts, offering valuable insights, tips, and strategies for supporting children's mental health. From understanding common challenges to practical strategies for promoting resilience and emotional well-being, our blog section serves as a valuable resource for parents and caregivers.</li>
            </ol>
            <p className="text-lg font-mono">Join us in our mission to create a nurturing environment where every child can thrive mentally, emotionally, and socially. Together, we can make a meaningful difference in the lives of children and families.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
