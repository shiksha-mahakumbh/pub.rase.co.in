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
    name: "Prof. Pawan Kumar Singh",
    designation: "Director, Indian Institute of Management Tiruchirappalli",
    contact:"https://www.iitrpr.ac.in/director#:~:text=Director%2C%20IIT%20Ropar-,Prof.,from%20April%201%20st%20%2C%202021.",
  },
  
  {
    name: "Prof. Rajeev Ahuja",
    designation:"Director, Indian Institute of Technology Ropar",
    contact:""
  }

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
  name:"Dr. Parul Nandal",
    designation:"Assistant Librarian, Dr YS Parmar University of Horticulture and Forestry",
    contact:""
  }
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
