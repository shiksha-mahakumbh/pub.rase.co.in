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
    name: "प्रो. वैद्य करतार सिंह धीमान",
    designation: "कुलपति, श्रीकृष्ण आयुष विश्वविद्यालय, कुरुक्षेत्र",
    contact: "https://www.iitrpr.ac.in/director#:~:text=Director%2C%20IIT%20Ropar-,Prof.,from%20April%201%20st%20%2C%202021.",
  },
  
  {
    name: "प्रो. अरविंद कुमार",
    designation: "कुलाधिपति, पं. मदन मोहन मालवीय विश्वविद्यालय (प्रस्तावित) बिशनपुर",
    contact: ""
  }
];

const advisoryMembers = [  
  {
    name: "डॉ. ठाकुर सुदेश कुमार रौनिजा",
    designation: "कुलाधिपति, पं. मदन मोहन मालवीय विश्वविद्यालय (प्रस्तावित), बिशनपुर",
    contact: "",
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
    name: "प्रो. सथन्स",
    designation: "प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र",
    contact: " https://nitkkr.ac.in/?author=161 ",
  },

  {
    name: "डॉ. अजय बंसल",
    designation: "रजिस्ट्रार, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: " https://v1.nitj.ac.in/index.php/nitj_cinfo/Faculty/4 ",
  },
];

const editor = [
  {
    name: "प्रो. अनिश सचदेवा",
    designation: "डीन स्टूडेंट वेलफेयर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
  },

  {
    name: "डॉ. नीरू",
    designation: "संयुक्त निदेशक, कौशल विकास विभाग, हरियाणा",
    contact: "https://dhe.org.in/people",
  },

  {
    name: "डॉ. मनीष कंडपाल",
    designation: "वैज्ञानिक/इंजीनियर-एसई, सेमीकंडक्टर प्रयोगशाला, मोहाली",
    contact: "https://www.researchgate.net/scientific-contributions/Manoj-Kandpal-2035004676",
  },

  {
    name: "डॉ. अंकित कुमार",
    designation: "वैज्ञानिक, लाला लाजपत राय विश्वविद्यालय, हरियाणा",
  },

  {
    name: "डॉ. परितोष जैन (सेवानिवृत्त)",
    designation: "वैज्ञानिक, इसरो",
    contact: ""
  },

  {
    name: "डॉ. मनोज कुमार तेओटिया",
    designation: "सीआरआरआईडी, चंडीगढ़",
    contact: ""
  },

  {
    name: "डॉ. कृष्ण कुमार",
    designation: "वैज्ञानिक, एससीएल",
    contact: ""
  },

  {
    name: "डॉ. चमन चंदेल",
    designation: "वैज्ञानिक-एसजी, डीआरडीओ",
    contact: "https://scholar.google.co.in/citations?user=lczYWswAAAAJ&hl=en",
  },

  {
    name: "डॉ. नरेश",
    designation: "वैज्ञानिक, वीएसएससी, इसरो",
    contact: ""
  },

  {
    name: "डॉ. नीरज नैथानी",
    designation: "वैज्ञानिक, सीएसआईओ",
    contact: ""
  },

  {
    name: "डॉ. नीलेश कुमार",
    designation: "वरिष्ठ प्रधान वैज्ञानिक, जैव-चिकित्सकीय उपकरण इकाई, सीएसआईआर-सीएसआईओ, चंडीगढ़",
    contact: "https://scholar.google.co.kr/citations?user=oNbmapQAAAAJ&hl=en",
  },

  {
    name: "डॉ. अमित कुमार सिंह",
    designation: "वैज्ञानिक, एससीएल",
    contact: ""
  },

  {
    name: "डॉ. नागेश",
    designation: "वैज्ञानिक, एससीएल",
    contact: ""
  },

  {
    name: "डॉ. गौरव शर्मा",
    designation: "प्राचार्य परियोजना वैज्ञानिक, भारतीय प्रौद्योगिकी संस्थान दिल्ली",
    contact: " https://www.researchgate.net/profile/Gaurav-Sharma-75 ",
  },

  {
    name: "डॉ. पूजा देवी",
    designation: "प्राचार्य वैज्ञानिक, सीएसआईआर-सीएसआईओ",
    contact: ""
  },

  {
    name: "श्री सौरव कुमार",
    designation: "वैज्ञानिक, सीएसआईओ",
    contact: ""
  },

  {
    name: "डॉ. अतुल प्रताप सिंह",
    designation: "प्रोफेसर, रसायन विभाग, चंडीगढ़ विश्वविद्यालय",
    contact: ""
  },

  {
    name: "प्रो. सतीश चंद",
    designation: "प्रोफेसर, जवाहरलाल नेहरू विश्वविद्यालय",
    contact: ""
  },

  {
    name: "डॉ. दीप्ति धर्मानी",
    designation: "प्रोफेसर (सेवानिवृत्त), चौधरी देवी लाल विश्वविद्यालय, सिरसा",
    contact: ""
  },

  {
    name: "डॉ. भार्गव नरेश",
    designation: "रजिस्ट्रार, श्री कृष्ण आयुष विश्वविद्यालय, हरियाणा",
    contact: ""
  },

  {
    name: "डॉ. एस. के. मिश्रा",
    designation: "रजिस्ट्रार, आई.के. गुजराल पीटीयू, कपूरथला",
    contact: ""
  },

  {
    name: "श्री सौरभ शर्मा",
    designation: "उप रजिस्ट्रार, आई.के. गुजराल पीटीयू, कपूरथला",
    contact: ""
  },

  {
    name: "डॉ. एस. बाजपेयी",
    designation: "मुख्य वार्डन, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: ""
  },

  {
    name: "प्रो. मंजीत बंसल",
    designation: "प्रोफेसर और डीन, एमआरएसपीटीयू, बठिंडा",
    contact: ""
  },

  {
    name: "प्रो. जगमीत बावा",
    designation: "प्रोफेसर, केंद्रीय विश्वविद्यालय हिमाचल प्रदेश",
    contact: ""
  },

  {
    name: "डॉ. प्रवीण कुमार",
    designation: "सहायक प्रोफेसर, आईएसीएस",
    contact: ""
  },

  {
    name: "डॉ. प्रवीण कुमार शर्मा",
    designation: "सहायक प्रोफेसर, केंद्रीय विश्वविद्यालय जम्मू",
    contact: " https://www.linkedin.com/in/praveen-kumar-sharma-7925a774/",
  },

  {
    name: "डॉ. समीर महाजन",
    designation: "सहायक प्रोफेसर, केंद्रीय विश्वविद्यालय पंजाब",
    contact: ""
  },

  {
    name: "डॉ. महेश कुल्हरिया",
    designation: "सहायक प्रोफेसर, केंद्रीय विश्वविद्यालय हिमाचल प्रदेश",
    contact: ""
  },
  
  {
    name: "डॉ. अत्रयी साहा",
    designation: "सहायक प्रोफेसर, जवाहरलाल नेहरू विश्वविद्यालय",
    contact: ""
  },

  {
    name: "डॉ. मोहित त्यागी",
    designation: "सहायक प्रोफेसर, पंजाब इंजीनियरिंग कॉलेज, चंडीगढ़",
    contact: ""
  },

  {
    name: "डॉ. हत न ओओ",
    designation: "सहायक प्रोफेसर, चितकारा विश्वविद्यालय",
    contact: "https://scholar.google.com/citations?user=SVMpBT0AAAAJ&hl=en"
  },

  {
    name: "डॉ. यशबीर सिंह",
    designation: "सहायक प्रोफेसर और उप निदेशक खेल, डीएवी विश्वविद्यालय, जालंधर",
    contact: "https://www.davuniversity.org/faculty/dryeshbeer-singh-hod.aspx",
  },

  {
    name: "डॉ. जतिंदर गर्ग",
    designation: "सहायक प्रोफेसर, बीएचएसबीआईईटी, लहेगोगा",
    contact: ""
  },

  {
    name: "डॉ. किशंत कुमार",
    designation: "सहायक प्रोफेसर, भारतीय प्रौद्योगिकी संस्थान रोपड़",
    contact: ""
  },

  {
    name: "डॉ. रवि कांत",
    designation: "सहायक प्रोफेसर, भारतीय प्रौद्योगिकी संस्थान रोपड़",
    contact: ""
  },

  {
    name: "डॉ. अमीतेश",
    designation: "विद्युत अभियंत्रण विभाग, राष्ट्रीय प्रौद्योगिकी संस्थान पटना",
    contact: ""
  },

  {
    name: "डॉ. कमल सिधु",
    designation: "डीन, डीएवी जालंधर",
    contact: ""
  },

  {
    name: "डॉ. एम. पी. आर. प्रसाद",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र",
    contact: ""
  },

  {
    name: "डॉ. गौरव शानी",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र",
    contact: ""
  },

  {
    name: "डॉ. यशचंद्र द्विवेदी",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र",
    contact: ""
  },

  {
    name: "डॉ. विक्रम सिंह",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र",
    contact: ""
  },

  {
    name: "प्रो. शाहिद अब्बास मीर",
    designation: "सीईओ, आईटीबीआई ग्रीनोवेटर इनक्यूबेशन फाउंडेशन, राष्ट्रीय प्रौद्योगिकी संस्थान श्रीनगर",
    contact: ""
  },

  {
    name: "डॉ. नरेंद्र कुमार",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: ""
  },

  {
    name: "डॉ. करण वीर",
    designation: "सहायक प्रोफेसर, राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर",
    contact: ""
  }
];

const scriptEdt = [
  {
    name: "श्री रमेंद्र सिंह",
    designation: "प्रोजेक्ट मैनेजर, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
    contact: " https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADx0QkwB9OjkZdCqMv5H2H412ciMj7MAxGc&keywords=ramendra%20singh&origin=RICH_QUERY_SUGGESTION&position=0&searchId=a4117106-8f4f-4857-9101-dc50997ba047&sid=Q%40t&spellCorrectionEnabled=false ",
  },
];

const officeInchagre =[
  {
    name: "डॉ. जितेश पांडे",
    designation: "पंजाब नगर बुनियादी ढांचा विकास कंपनी, स्थानीय सरकार विभाग, पंजाब",
    contact: "",
  },
];

const website =[
  {
    name: "श्री सोनल",
    designation: "सॉफ्टवेयर डेवलपर, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
    contact: ""
  },
];

const copy= [
  {
    name: "सुश्री कुसुम झा",
    designation: "कर्मचारी, डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन",
    contact: ""
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
