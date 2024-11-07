import React from "react";

const About = () => {
  const about = `"Viksit India" is a quarterly journal started in 2024, a transformative evolution of the revered "Echoes of Shiksha Mahakumbh." This journal stands as an integral component of the Shiksha Mahakumbh initiative, a distinguished effort spearheaded by the Department of Holistic Education (DHE). DHE, a visionary endeavor founded by Dr. Thakur SKR, renowned scientist of ISRO, dedicated RSS worker, and accomplished author, envisions education as more than just marks on a page. It represents the complete transformation of young minds into valuable assets for society.
  
  In this spirit, "Viksit India" is dedicated to the advancement of education. We firmly believe that education's worth cannot be solely gauged by academic scores. True education involves the holistic development of individuals, infusing them with energy, skills, and values that go beyond textbooks. Our journal is an open invitation to all those who share this vision and are committed to nurturing discussions, research, and insights that pertain to the global educational landscape.
  
  "Viksit India" offers comprehensive coverage of a multitude of educational aspects, from school education to higher education, language pedagogy to technological advancements, child pedagogy to scientific research. It encompasses pioneering research, visionary perspectives, and in-depth explorations of every facet of the ever-evolving domain of learning and teaching. It is a passport to a realm filled with knowledge, inspiration, and innovation within the field of education.
  
  The subjects covered in "Viksit India" are a testament to our commitment to a holistic education approach. We explore school and university education, language education, child pedagogy, research and development, legal education, sports, technology, and basic science. The multidisciplinary approach of our journal ensures that you remain at the forefront of the ever-changing educational landscape.
  `;

  const publisherDetails = (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-black">Publisher Information</h3>
      <p className="mt-2 text-black">Publisher: Dr. Thakur Sudesh Kumar Raunija</p>
      <p className="text-black">Published by: Shaantijai Media House</p>
      <p className="text-black">Email: <a href="mailto:pub.dhe4@gmail.com" className="text-blue-600 hover:underline">pub.dhe4@gmail.com</a></p>
      
      <h4 className="mt-4 font-semibold text-black">Editorial and Publishing Office</h4>
      <p className="text-black">AMCF-132, Arya Nagar, Ballabagarh,</p>
      <p className="text-black">Faridabad, 121004, Haryana</p>
    </div>
  );

  return (
    <div className="bg-white p-6">
      <section id="about-us" className="mb-8">
        <h2 className="text-xl font-semibold text-black">
          About this Journal
        </h2>
        <p className="mt-4 text-justify text-black whitespace-pre-line">
          {about}
        </p>
      </section>
      {/* Add the publisher information section here */}
      {publisherDetails}
    </div>
  );
};

export default About;
