import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center bg-gradient-to-r from-blue-200 to-cyan-200 flex flex-col rounded-lg justify-center items-center mt-[6vh] font-mono">
      <h1 className="text-4xl font-semibold mb-4 font-serif">Welcome to Child Mind Well</h1>
      <h2 className="text-2xl font-medium mb-6">Empowering Mental Well-being in Children</h2>
      <p className="text-1xl mb-8 font-mono">At Child Mind Well, we are dedicated to promoting mental well-being in children. Our goal is to provide parents and caregivers with valuable tools and resources to assess and support their child's mental health.</p>
      <p className="text-1xl mb-8 font-mono">The Pediatric Symptom Checklist is a psychosocial screen designed to facilitate the recognition of cognitive, emotional, and behavioral problems so that appropriate interventions can be initiated as early as possible. The PSC is a reliable and validated tool used by healthcare professionals to identify potential behavioral or emotional concerns in children.</p>
      <div className="flex justify-center mb-8">
        <div className="bg-blue-500 rounded-lg p-6 mr-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-black">PSC-17-Parent</h3>
          <p className="text-1xl">Evaluate your child's mental health with our Parent's PSC questionnaire. Understand your child's emotional well-being and receive guidance on supporting them.</p>
          <Link to="/parenttest" className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-2 inline-block px-4 py-2 rounded-lg transition duration-300">Begin Assessment</Link>
        </div>
        <div className="bg-green-500 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-2 text-black">PSC-17-Youth</h3>
          <p className="text-1xl">Engage your child in assessing their mental health with our Child's PSC questionnaire. Foster communication about emotions and promote mental well-being.</p>
          <Link to="/childrentest" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mt-2 inline-block px-4 py-2 rounded-lg transition duration-300">Begin Assessment</Link>
        </div>
      </div>
      <div className="flex flex-row">
        <Link to="/blogpage" className="bg-white text-black hover:bg-blue-600 text-black font-semibold py-2 px-4 mr-[50px] ml-[35px] rounded-lg transition duration-300">Explore Our Experts Blogs</Link>
        <Link to="/sessions" className="bg-white  hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300">Explore Sessions by Experts</Link>
      </div>
    </div>
  );
}

export default Home;
