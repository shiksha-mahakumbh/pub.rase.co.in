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
    name:"प्रो. (डॉ.) राघवेंद्र पी. तिवारी, कुलपति",
    designation:"कुलपति, पंजाब केंद्रीय विश्वविद्यालय, बठिंडा",
    contact:""
  },

 

];
const advisoryMembers = [  
   
  
  {
    name:"डॉ. ठाकुर सुदेश कुमार रौनिजा",
    designation:"निदेशक, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
    contact:"",
  },
  
];

const EdtMember = [
 
  {
    name: "डॉ. ठाकुर सुदेश कुमार रौनिजा",
    designation: "निदेशक, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
    contact: "https://drthakurskr.com/",
  },
];
const associateEdit = [
  {
  name:"प्रो. महेश चंद्र गोविल",
  designation:"निदेशक, राष्ट्रीय प्रौद्योगिकी संस्थान सिक्किम",
  contact:"",
  },
  {
    name:"प्रो. अजय कुमार शर्मा",
    designation:"निदेशक, राष्ट्रीय प्रौद्योगिकी संस्थान दिल्ली",
    contact:"",
  },
  {
    name:"डॉ. अमर पी. गर्ग",
    designation:"कुलपति, शोभित इंजीनियरिंग और प्रौद्योगिकी संस्थान",
    contact:" https://www.shobhituniversity.ac.in/pdf/Amar-P-Garg-VCM-Brief-Scientific-CV.pdf ",
  }

 
];
const editor = [

  {
    name:"डॉ. विजय कुमार",
    designation:"सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान श्रीनगर",
    contact:""
  },

  {
    name: "डॉ. समयवीर सिंह",
    designation:
      "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/188",
  },
  {
    name: "डॉ. किरण सिंह",
    designation:
      "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/185",
  },
  {
    name: "डॉ. सुनील दत्त",
    designation:
      "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/178",
  },
  {
    name: "डॉ. कपिल कुमार गोयल",
    designation:
      "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: "https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/165",
  },
  {
    name: "डॉ. दीपिका रानी",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: "",
  },

  {
    name:"डॉ. हरवीर सिंह पाली",
    designation:"सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान श्रीनगर",
    contact:""
  },

  {
    name: "डॉ. शशिकांत यादव",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: "",
  },

  {
    name:"डॉ. पंकज कुमार",
    designation:"सहायक प्रोफेसर, हिमाचल प्रदेश केंद्रीय विश्वविद्यालय",
    contact:""
  },

  {
    name: "डॉ. नरेश कुमार शर्मा ",
    designation: "सहायक प्रोफेसर, जम्मू केंद्रीय विश्वविद्यालय",
    contact: "",
  },

  {
    name: "प्रो. नंद किशोर",
    designation: "शिक्षक शिक्षा, हरियाणा केंद्रीय विश्वविद्यालय",
    contact: "",
  },
  
  {
    name:"डॉ. हेमंत ऋत्तुराज कुशवाहा",
    designation:"सहायक प्रोफेसर, जवाहरलाल नेहरू विश्वविद्यालय",
    contact:""
  },

  {
    name: "डॉ. करण मलिक",
    designation:
      "सहायक प्रोफेसर, राजीव गांधी पेट्रोलियम प्रौद्योगिकी संस्थान, जयस",
    contact:
      "https://www.rgipt.ac.in/faculty/Faculty/FacultyProfile?Sid=3vxn4llYTC4%3D",
  },

  {
    name: "डॉ. आशीष",
    designation:
      "सहायक प्रोफेसर, हेमवती नंदन बहुगुणा, सरकारी पी. जी. कॉलेज, खटीमा, उत्तराखंड",
    contact:
      "https://www.linkedin.com/in/dr-ashish-kumar-b864381a/?originalSubdomain=in",
  },

  {
    name: "डॉ. शमशेर सिंह",
    designation: "सहायक प्रोफेसर, एस.आर.पी.ए. आदर्श भारतीय कॉलेज, पठानकोट",
    contact: "",
  },

  {
    name:"श्री आदित्य शर्मा",
    designation:"सहायक प्रोफेसर, पंजाब तकनीकी विश्वविद्यालय",
    contact:""
  },

  {
    name:"डॉ. शीतल शर्मा",
    designation:"सहायक प्रोफेसर, वाणिज्य, जी.जी.डी.एस कॉलेज, चंडीगढ़",
    contact:""
  },

  {
    name:"प्रो. मोहित वर्मा",
    designation:"सहायक प्रोफेसर, गर्वनमेंट कॉलेज फॉर गर्ल्स, चंडीगढ़",
    contact:""
  },

  {
    name: "डॉ. जितेंद्र शर्मा",
    designation: "राज्य सह-संयोजक, प्रचार विभाग और जिला संयोजक, करनाल, विद्या भारती",
    contact: "",
  },

{
  name:"डॉ. नीरज वर्मा",
  designation:"जूनियर रेजिडेंट, जनरल सर्जरी (शल्य) विभाग, श्री कृष्ण आयुष विश्वविद्यालय, कुरुक्षेत्र",
  contact:""
},

{
  name:"श्री अशोक पाल",
  designation:"अध्यक्ष, विद्या भारती (उत्तर क्षेत्र)",
  contact:""
},

{
  name: "श्रीमती प्रतिभा गुप्ता",
  designation:
    "पूर्व प्रधानाचार्य, गर्वनमेंट पी.जी. कॉलेज फॉर वीमेन, पंचकुला और अध्यक्ष, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
  contact: "https://dhe.org.in/committee",
},

{
  name: "कर्नल के. के. कक्कड़",
  designation: "सेवानिवृत्त भारतीय सेना अधिकारी",
  contact: "",
},

{
  name:"श्रीमती मनिंदर कक्कड़",
  designation:"सचिव, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
  contact:""
},

{
  name: "श्रीमती सोनू शर्मा",
  designation: "सलाहकार, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
  contact: "https://dhe.org.in/committee",
},

{
  name:"श्री अंशुल बंसल",
  designation:"संस्थापक, तकनीकी विशेषज्ञ",
  contact:""
},

{
  name:"श्री सुभाष महाजन",
  designation:"उपाध्यक्ष, सर्वहितकारी शिक्षा सोसाइटी, पंजाब",
  contact:""
},

{
  name: "श्रीमती मंजू अरोड़ा",
  designation: "सलाहकार, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
  contact: "https://dhe.org.in/people",
},

{
  name: "श्रीमती कविता शर्मा",
  designation: "आईटी सलाहकार, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
  contact: "",
},

{
  name: "श्रीमती शिक्षा शर्मा",
  designation: "अनुसंधान फेलो, पंजाब कृषि विश्वविद्यालय, लुधियाना",
  contact: "https://dhe.org.in/people",
},

{
  name: "श्रीमती पूनम ठाकुर",
  designation: "वकील, कानूनी सलाहकार, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
  contact: "https://dhe.org.in/people",
},

{
  name:"डॉ. रमित वासुदेव",
  designation:"प्रधानाचार्य, सरकारी स्कूल, मोहाली",
  contact:"",
},

{
  name: "श्रीमती रोसी जैन",
  designation: "प्रधानाचार्य, शिफाली इंटरनेशनल स्कूल, लुधियाना, पंजाब",
  contact:
    "https://www.linkedin.com/in/rosy-jain-87a868189/?originalSubdomain=in",
},

{
  name:"श्री पी. एस. खिमटा",
  designation:"प्रधानाचार्य, एस.वी.एम., मलेरकोटला",
  contact:""
},

{
  name: "डॉ. गगनदीप प्रसार",
  designation:"प्रधानाचार्य, एस.वी.एम., भिखी",
  contact:""
},

{
  name:"डॉ. जगदीप पटियाल",
  designation:"प्रधानाचार्य, एस.वी.एम., मनसा",
  contact:""
},

{
  name:"श्री सुनील मलिक",
  designation:"प्रधानाचार्य, एस.वी.एम., बरनाला",
  contact:""
},

{
  name:"डॉ.अनिर्बान घोष",
  designation:"संस्थापक और सीईओ, प्लैनेट प्लैनेटहैंडक्राफ्टेड",
  contact:""
},
 
];
const scriptEdt = [
  {
    name: "श्री रमेन्द्र सिंह",
    designation: "प्रोजेक्ट मैनेजर, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
    contact:
      " https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADx0QkwB9OjkZdCqMv5H2H412ciMj7MAxGc&keywords=ramendra%20singh&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a4117106-8f4f-4857-9101-dc50997ba047&sid=Q%40t&spellCorrectionEnabled=false ",
  },
 
];
const officeInchagre =[
  {
    name: "डॉ. जितेश पांडे",
    designation: "पंजाब म्युनिसिपल इंफ्रास्ट्रक्चर डेवलपमेंट कंपनी, स्थानीय सरकार विभाग, पंजाब",
    contact: "",
  },
];

const website =[
  {
    name: "सुश्री सोनल",
    designation: "सॉफ्टवेयर डेवलपर, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
    contact:
      ""
      },
];

const copy= [
  {
    name: "सुश्री कुसुम झा",
    designation: "कर्मचारी, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
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
