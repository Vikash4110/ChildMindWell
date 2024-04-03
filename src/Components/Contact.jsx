import React from 'react';

const Home = () => {
  return (
    <div className="contact ml-40 flex items-center justify-content flex-row gap-8 md:gap-16 mt-40 text-white">

      <div className="contact-text text-center">
        <h2 className="text-blue-50 text-[50px] font-serif ">Contact <span className="text-blue font-serif ">Us</span></h2>
        <h4 className="font-mono">Connect with us!</h4>
       
        <div className="contact-list flex flex-col gap-2 md:flex-row md:justify-center md:gap-10 mt-4">
          <div className="flex items-center">
            <i className="bx bxs-send text-3xl mr-2"></i>
            <b>bharal224@gmail.com</b>
          </div>
          <div className="flex items-center">
            <i className="bx bx-phone text-3xl mr-2"></i>
            <b>7973117120</b>
          </div>
        </div>
        <div className="contact-icons flex justify-center gap-4 mt-6">
          <a href="https://m.facebook.com/vikash.bharal?ref=bookmarks" className="text-blue-500"><i className="bx bxl-facebook-circle text-4xl"></i></a>
          <a href="https://www.instagram.com/its_me_vikash18/" className="text-pink-500"><i className="bx bxl-instagram text-4xl"></i></a>
          <a href="www.linkedin.com/in/vikash-bharal-5a2a49238" className="text-blue-700"><i className="bx bxl-linkedin text-4xl"></i></a>
          <a href="https://geteternalknowledge.blogspot.com" className="text-orange-500"><i className="bx bxl-blogger text-4xl"></i></a>
        </div>
      </div>

      <div className="contact-form w-full md:w-3/4 lg:w-1/2">
        <form id="contact-form" action="https://formspree.io/f/xjvqjyaq" method="POST">
          <input type="text" placeholder="Enter Your Name" required className="w-full px-4 py-3 rounded-md mb-4 bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500" />
          <input type="email" name="email" placeholder="Enter Your Email" required className="w-full px-4 py-3 rounded-md mb-4 bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500" />
          <input type="text" placeholder="Enter Your Subject" required className="w-full px-4 py-3 rounded-md mb-4 bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500" />
          <textarea name="message" id="message" cols="30" rows="5" placeholder="Enter Your Message" required className="w-full px-4 py-3 rounded-md mb-4 bg-gray-800 text-gray-100 focus:outline-none focus:ring focus:border-blue-500"></textarea>
          <input type="submit" value="Submit" className="send w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 cursor-pointer" />
        </form>
      </div>
    </div>
  );
}

export default Home;
