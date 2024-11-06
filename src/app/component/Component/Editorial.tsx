"use client";
import React from "react";
import Link from "next/link";

interface AdvisoryMember {
  name: string;
  designation: string;
  contact: string;
}

interface AdvisoryCouncilProps {
  title: string;
  members: AdvisoryMember[];
}   
const EdtMemberErs = [

  
  {
    name:"Prof. (Dr.) Rakesh Sehgal",
    designation:"Director, NIT Srinagar",
    contact:""
  },
  
];
const advisoryMembers = [  
   
  
  {
    name:"Dr. Thakur Sudesh Kumar Raunija",
    designation:"Director, Department of Holistic Education",
    contact:"",
  },
  
];

const EdtMember = [
 
  {
    name: "Dr. Thakur Sudesh Kumar Raunija",
    designation: "Director, Department of Holistic Education",
    contact: "https://drthakurskr.com/",
  },
];
const associateEdit = [
  {
  name:"Prof. Mahesh Chandra Govil",
  designation:"Director, National Institute of Technology Sikkim",
  contact:"",
  },
  {
    name:"Prof. Ajay Kumar Sharma",
    designation:"Director, National Institute of Technology Delhi",
    contact:"",
  },
  {
    name:"Dr. Amar P. Garg",
    designation:"Vice Chancellor, Shobhit Institute of Engineering & Technology",
    contact:" https://www.shobhituniversity.ac.in/pdf/Amar-P-Garg-VCM-Brief-Scientific-CV.pdf ",
  },
  {
    name: "Prof. Sathans ",
    designation: "Professor, National Institute of Technology Kurukshetra",
    contact: " https://nitkkr.ac.in/?author=161 ",
  },

  {
    name: "Dr. Ajay Bansal",
    designation: "Registrar, National Institute of Technology Jalandhar",
    contact: " https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/4 ",
  },
];
const editor = [
  {
    name:"Prof. Anish Sachdeva",
    designation:"Dean Student Walfare, National Institute of Technology Jalandhar",
    
  },

  {
    name: "Dr. Neeru",
    designation: "Joint Director, Skill Development Department, Haryana",
    contact: "https://dhe.org.in/people",
  },

  {
    name: "Dr. Monaj Kandpal",
    designation: "Scientist/Engineer-SE, Semi - Conductor Laboratory, Mohali",
    contact:
      "https://www.researchgate.net/scientific-contributions/Manoj-Kandpal-2035004676",
  },

  {
    name:"Dr. Ankit Kumar",
    designation:"Scientist, Lala Lajpat Rai University of Veterinary and Animal Sciences, Hisar, Haryana",
    
  },

  {
    name:"Dr. Paritosh Jain Retd. ",
    designation:"Scientist, ISRO  ",
    contact:""
  },

  {
    name:"Dr. Manoj kumar Teotia",
    designation:"CRRID, Chandigarh ",
    contact:""
  },

  {
    name:"Dr. Krishan Kumar",
    designation:"Scientist, SCL",
    contact:""
  },

  {
    name: "Dr. Chaman Chandel",
    designation: "Scientist - SG, DRDO",
    contact: "https://scholar.google.co.in/citations?user=lczYWswAAAAJ&hl=en",
  },

  {
    name:"Dr. Naresh",
    designation:"Scientist, VSSC, ISRO",
    contact:""
  },

  {
    name:"Dr. Neeraj Naithani",
    designation:"Scientist, CSIO",
    contact:""
  },

  {
    name: "Dr. Neelesh Kumar",
    designation:
      "Senior Principal Scientist, Biomedical Instrumentation Unit, CSIR-CSIO, Chandigarh",
    contact: "https://scholar.google.co.kr/citations?user=oNbmapQAAAAJ&hl=en",
  },

  {
    name:"Dr. Amit Kumar Singh",
    designation:"Scientist, SCL",
    contact:""
  },

  {
    name:"Dr. Nagesh",
    designation:"Scientist, SCL",
    contact:""
  },

  {
    name: "Dr. Gaurav Sharma",
    designation:"Principal Project Scientist, Indian Institute of Technology Delhi",
    contact: " https://www.researchgate.net/profile/Gaurav-Sharma-75 ",
  },

  {
    name:"Dr. Pooja Devi",
    designation:"Principal Scientist, CSIR-CSIO",
    contact:""
  },

  {
    name:"Mr. Saurav Kumar",
    designation:"Scientist, CSIO",
    contact:""
  },

  {
    name:"Dr. Atul Ptatap Singh",
    designation:"Professor, Chemistry-Division, Chandigarh University",
    contact:""
  },

  {
    name:"Prof. Satish Chand",
    designation:"Professor, Jawahar Lal Nehru University",
    contact:""
  },

  {
    name:"Dr. Deepti Dharmani",
    designation:"Prof. (Retd.), Chaudhary Devi Lal University, Sirsa",
    contact:""
  },

  {
    name:"Dr. Bhargav Naresh",
    designation:"Registrar, Shri Krishna Ayush University, Haryana",
    contact:"",
  },

  {
    name:"Dr. S. K. Mishra",
    designation:"Registrar, I.K. Gujral PTU, Kapurthala",
    contact:""
  },

  {
    name: "Mr. Saurabh Sharma",
    designation: "Dy. Registrar, I.K. Gujral PTU, Kapurthala",
    contact: "",
  },

  {
    name:"Dr. S. Bajpai",
    designation:"Chief Warden, National Institute of Technology Jalandhar",
    contact:""
  },

  {
    name: "Prof. Manjit Bansal",
    designation: "Professor & Dean, MRSPTU, Bathinda",
    contact: "",
  },

  {
    name:"Prof. Jagmeet Bawa",
    designation:"Professor, Central University of Himachal Pradesh",
    contact:""
  },

  {
    name:"Dr. Praveen Kumar",
    designation:"Associate Profossor, IACS",
    contact:""
  },

  {
    name: "Dr. Praveen Kumar Sharma",
    designation: "Associate Professor, Central University of Jammu",
    contact: " https://www.linkedin.com/in/praveen-kumar-sharma-7925a774/",
  },

  {
    name: "Dr. Sameer Mahajan",
    designation: "Associate Professor, Central University of Punjab",
    contact: "",
  },

  {
    name:"Dr. Mahesh Kulharia",
    designation:"Associate Professor, Central University of Himachal Pradesh",
    contact:""

  },
  
  {
    name:"Dr. Atrayee Saha",
    designation:"Associate Professor, Jawahar Lal Nehru University",
    contact:""
  },

  {
    name:"Dr. Mohit Tyagi",
    designation:"Associate Professor, Punjab Engineering College, Chandigarh",
    contact:""
  },

  {
    name: "Dr. Htet Ne Oo",
    designation:"Associate Professor, Chitkara University",
    contact: "https://scholar.google.com/citations?user=SVMpBT0AAAAJ&hl=en"
  },

  {
    name: "Dr. Yashbeer Singh",
    designation:
      "Associate Professor and Dy. Director Sports, DAV University, Jalandhar",
    contact: "https://www.davuniversity.org/faculty/dryeshbeer-singh-hod.aspx",
  },

  {
    name:"Dr. Jatinder Garg",
    designation:"Associate Profossor, BHSBIET, Leheogaga",
    contact:""
  },

  {
    name: "Dr. Kishant Kumar",
    designation: "Assistant Professor, Indian Institute of Technology Ropar",
    contact: "",
  },

  {
    name: "Dr. Ravi Kant ",
    designation: "Assistant Professor, Indian Institute of Technology Ropar",
    contact: "",
  },

  {
    name:"Dr. Amitesh",
    designation:"Department of Electrical Engineering, National Institute of Technology Patna",
    contact:""
  },

  {
    name:"Dr. Kamal Sidhu",
    designation:"Dean, DAV Jalandhar",
    contact:""
  },

  {
    name:"Dr. M. P. R. Prasad",
    designation:"Assistant Professor, National Institute of Technology Kurukshetra",
    contact:""
  },

  {
    name:"Dr. Gaurav Shani ",
    designation:"Assistant Professor, National Institute of Technology Kurukshetra",
    contact:"" 
  },

  {
    name:"Dr. Yashashchandra Dwivedi",
    designation:"Assistant Professor, National Institute of Technology Kurukshetra",
    contact:""
  },

  {
    name:"Dr. Vikram Singh",
    designation:"Assistant Professor, National Institute of Technology Kurukshetra",
    contact:""
  },

  {
    name:"Prof. Shahid Abbas Mir",
    designation:"CEO, iTBI Greenovator Incubation Foundation, National Institute of Technology Srinagar",
    contact:""
  },

  {
    name:"Dr. Narendra Kumar",
    designation:"Assistant Professor, National Institute of Technology Jalandhar",
    contact:""
  },

  {
    name:"Dr. Karan Veer",
    designation:"Assistant Professor, National Institute of Technology Jalandhar",
    contact:""
  },

  {
    name:"Dr. Vijay Kumar",
    designation:"Assistant Professor, National Institute of Technology Srinagar",
    contact:""
  },

  {
    name: "Dr. Samayveer Singh",
    designation:
      "Assistant Professor, National Institute of Technology Jalandhar",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/188",
  },
  {
    name: "Dr. Kiran Singh",
    designation:
      "Assistant Professor, National Institute of Technology Jalandhar",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/185",
  },
  {
    name: "Dr. Suneel Dutt",
    designation:
      "Assistant Professor, National Institute of Technology Jalandhar",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/178",
  },
  {
    name: "Dr. Kapil Kumar Goel",
    designation:
      "Assistant Professor, National Institute of Technology Jalandhar",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/165",
  },
  {
    name: "Dr. Deepika Rani",
    designation: "Assistant Professor, National Institute of Technology Jalandhar",
    contact: "",
  },

  {
    name:"Dr. Harveer Singh Pali",
    designation:"Assistant Professor, National Institute of Technology Srinagar",
    contact:""
  },

  {
    name: "Dr. Shashikant Yadav",
    designation: "Assistant Professor, National Institute of Technology Jalandhar",
    contact: "",
  },

  {
    name:"Dr. Pankaj Kumar",
    designation:"Assistant Professor, Central University of Himachal Pradesh",
    contact:""
  },

  {
    name: "Dr. Naresh Kumar Sharma ",
    designation: "Assistant Professor, Central University of Jammu",
    contact: "",
  },

  {
    name: "Prof. Nand Kishor",
    designation: "Teacher Education, Central University of Haryana",
    contact: "",
  },
  
  {
    name:"Dr. Hemant Ritturaj Kushwaha",
    designation:"Assistant Professor, Jawahar Lal Nehru University",
    contact:""
  },

  {
    name: "Dr. Karan Malik",
    designation:
      "Assistant Professor, Rajiv Gandhi Institute of Petroleum Technology, Jais",
    contact:
      "https://www.rgipt.ac.in/faculty/Faculty/FacultyProfile?Sid=3vxn4llYTC4%3D",
  },

  {
    name: "Dr. Ashish",
    designation:
      "Assistant Professor, Hemwati Nandan Bahuguna, Govt P. G. College, Khatima, Uttarakhand",
    contact:
      "https://www.linkedin.com/in/dr-ashish-kumar-b864381a/?originalSubdomain=in",
  },

  {
    name: "Dr. Shamsher Singh",
    designation: "Assistant Professor, S.R.P.A. Adarsh Bhartiya College, Pathankot",
    contact: "",
  },

  {
    name:"Mr. Aditya Sharma",
    designation:"Assistant Professor, Punjab Technical University",
    contact:""
  },

  {
    name:"Dr. Sheetal Sharma",
    designation:"Assistant Profossor, Commerce, G.G.D.S Collage, Chandigarh",
    contact:""
  },

  {
    name:"Prof. Mohit Verma",
    designation:"Assistant Professor, Government College for Girls, Chandigarh",
    contact:""
  },

  {
    name: "Dr. Jeetendra Sharma",
    designation: "State Co-Convenor, Publicity Department and District Convener, Karnal, Vidya Bharti",
    contact: "",
  },

{
  name:"Dr. Neeraj Verma",
  designation:"Junior Resident, General Surgery (Shalya) Department, Shri Krishna Ayush University, Kurukshetra",
  contact:""
},

{
  name:"Mr. Ashok Pal",
  designation:"President, Vidya Bharti (North Zone)",
  contact:""
},

{
  name: "Mrs. Pratibha Gupta",
  designation:
    "Ex Principal, Government P.G. College for Women, Panchkula & President, Department of Holistic Education",
  contact: "https://dhe.org.in/committee",
},

{
  name: "Col. K. K. Kakkar",
  designation: "Retd. Indian Army Officer",
  contact: "",
},

{
  name:"Mrs. Maninder Kakkar",
  designation:"Secretary, Department of Holistic Education",
  contact:""
},

{
  name: "Mrs. Sonu Sharma",
  designation: "Advisor, Department of Holistic Education",
  contact: "https://dhe.org.in/committee",
},

{
  name:"Mr. Anshul Bansal",
  designation:"Founder, Technocrat",
  contact:""
},

{
  name:"Mr. Subash Mahajan",
  designation:"Vice President, Sarvhitkari Educational Socity, Punjab",
  contact:""
},

{
  name: "Mrs. Manju Arora",
  designation: "Advisor, Department of Holistic Education",
  contact: "https://dhe.org.in/people",
},

{
  name: "Mrs. Kavita Sharma",
  designation: "IT Advisor, Department of Holistic Education",
  contact: "",
},

{
  name: "Mrs. Shiksha Sharma",
  designation: "Research Fellow, Punjab Agriculture University, Ludhiana",
  contact: "https://dhe.org.in/people",
},

{
  name: "Mrs. Poonam Thakur",
  designation: "Advocate, Legal Adviser, Department of Holistic Education",
  contact: "https://dhe.org.in/people",
},

{
  name:"Dr. Ramit Vasudev",
  designation:"Principal, Government School, Mohali",
  contact:"",
},

{
  name: "Mrs. Rosy Jain",
  designation: "Principal, Shifaly International School, Ludhiana, Punjab",
  contact:
    "https://www.linkedin.com/in/rosy-jain-87a868189/?originalSubdomain=in",
},

{
  name:"Mr. P. S. Khimta",
  designation:"Principal, SVM, Malerkotla",
  contact:""
},

{
  name: "Dr. Gagandeep Prashar",
  designation:"Principal, SVM, Bhikhi",
  contact:""
},

{
  name:"Dr. Jagdeep Patial",
  designation:"Principal, SVM, Mansa",
  contact:""
},

{
  name:"Mr. Sunil Malik",
  designation:"Principal, SVM, Barnala",
  contact:""
},

{
  name:"Dr. Anirban Gosh",
  designation:"Founder & CEO, Planet Handcrafted",
  contact:""
},
 
];
const scriptEdt = [
  {
    name: "Mr. Ramendra Singh",
    designation: "Project Manager, Department of Holistic Education",
    contact:
      " https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADx0QkwB9OjkZdCqMv5H2H412ciMj7MAxGc&keywords=ramendra%20singh&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a4117106-8f4f-4857-9101-dc50997ba047&sid=Q%40t&spellCorrectionEnabled=false ",
  },
 
];
const officeInchagre =[
  {
    name: "Dr. Jitesh Pandey",
    designation: "Punjab Municipal Infrastructure Development Company, Department of Local Govt. Punjab",
    contact: "",
  },
];

const website =[
  {
    name: "Ms. Sonal",
    designation: "Software Developer, Department of Holistic Education",
    contact:
      ""
      },
];

const copy= [
  {
    name: "Ms. Kusum Jha",
    designation: "Employee, Department of Holistic Education",
    contact:
      ""
      },
];

const Editorial = () => {
  return (
    <div className=" bg-white p-4">
      <section id="editorial-board" className="mb-8">
        <h2 className="text-xl  font-semibold text-colour">
          Editor-in-Chief Emeritus
        </h2>       
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden ">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {EdtMemberErs.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.contact}>
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
        <h2 className="text-xl font-semibold text-black">Editor-in-Chief</h2>
         <table className="table-fixed max-width my-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {EdtMember.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.contact}>
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
        <h2 className="text-xl  font-semibold text-black">Associate Editors</h2>
        
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {associateEdit.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.contact}>
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
        <h2 className="text-xl  font-semibold text-black">Editors</h2>
        
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {editor.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link href={`${member.contact}`} className="text-blue-500" >
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
        <h2 className="text-xl font-semibold text-black">
        Office-in-Charge
        </h2>
       
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary ">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {officeInchagre.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.contact}>
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
        <h2 className="text-xl font-semibold text-black">
          Manuscript Handling Editor
        </h2>
      
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {scriptEdt.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.contact}>
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
        <h2 className="text-xl font-semibold text-black">
        Website Handling Editor
        </h2>
        
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {website.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.contact}>
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
        <h2 className="text-xl font-semibold text-black">
        Copy Editor
        </h2>
        
        <table className="table-fixed max-width my-5 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary">
            <th className="w-1/3 p-2 border text-left text-white">Name</th>
            <th className="w-1/3 p-2 border text-left text-white">Designation</th>
            
          </tr>
        </thead>
        <tbody>
          {copy.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-orange-50' : 'bg-white'}>
              <td className="p-2 border text-left text-black"><Link className="text-blue-500" href={member.contact}>
                  {member.name}
                </Link></td>
              <td className="p-2 border text-left text-black">{member.designation}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    </div>
  );
};

export default Editorial;
