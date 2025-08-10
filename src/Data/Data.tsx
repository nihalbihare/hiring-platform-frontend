import { IconBriefcase, IconCalendarClock, IconMapPin, IconPremiumRights, IconRecharging, IconSearch } from "@tabler/icons-react";

export const companies = ['Google' ,'Amazon' ,'Figma', 'Meta', 'Microsoft' ,'Netflix', 'Oracle' 
    , 'Pinterest', 'pngwing.com', 'Slack' , 'Spotify' , 'Walmart' ] 
    
    export const jobCategories = [
        {
         name: 'Digital Marketing',
          description: 'Promote brands with marketing strategies',
          jobCount: '1k+ posted job',
        },
        {
            name: 'Data Entry',
            description: 'Input data into system  accurately and efficently',
            jobCount: '300+ posted job',
          },
        {
            name: 'Arts & Design',
          description: 'Create visually appealing graphics and layouts',
          jobCount: '2k+ posted jobs',
        },
        {
            name: 'Content Writing',
          description: 'Write and edit contents for various platforms',
          jobCount: '500+ posted jobs',
        },
        {
            name: 'Finance',
          description: 'Manage financial records and transactions',
          jobCount: '800+ posted jobs',
        },
        {
            name: 'Customer Support',
            description: 'Assist customers with enquires and issues',
            jobCount: '900+ posted jobs',
          },
        {
            name: 'Human Resource',
          description: 'Recruit, manage and support company employees',
          jobCount: '600+ posted jobs',
        },
        {
            name: 'UI-UX Designer',
          description: 'User interface and enhance user experience  ',
          jobCount: '300+ posted jobs',
        },
        {
            name: 'Sales',
          description: 'Sale products and services to customers',
          jobCount: '400+ posted jobs',
        },
        {
            name: 'Web Developer',
          description: 'Build and maintain websites for clients',
          jobCount: '700+ posted jobs',
        },
      ];
    export const work = [
        {
            name: 'Apply for job',
            desc : 'Find and apply for the job that match your skills.'
        },
        {
            name: 'Build your resume',
            desc : 'Create a standout resume with your skills.'
        },
        {
            name: 'Get hired',
            desc :'Connent with employers and start your new job.'
        }
    ]
    export const footerlinks =[
        {
            title:"Product" ,links :["Find Job", 'Find Company', 'Find Employee']
        },
        {
            title:"Company" ,links :["About Us", 'Contact Us', 'Privacy Policy', 'Terms And Conditions']
        },
        {
            title:"Support" ,links :["Help & Support", 'Feedback', 'FAQs']
        }
       
    ]
    export const dropdownData =[
      {title : 'Job Title',icon :IconSearch , options : ['Designer' , 'Developer' , 'Product Manager', 'Marketing Specialist', 'Data Analyst' , 'Sales Executive' ,'Content Writer', 'Customer Support']},
      {title :'Location', icon: IconMapPin, options :['Delhi' , 'New York' , 'San Francisco' , 'London', 'Berlin', 'Tokyo' , 'Sydney' , 'Toronto']},
    {title : 'Experience', icon: IconBriefcase , options:['Entry Level', 'Intermediate', 'Expert']},
    {title : 'Job Type', icon:IconRecharging, options : ['Full Time', 'Part Time', 'Contract']},
    ]
    export const jobList = [
      {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "New York",
        package: "32 LPA",
        postedDaysAgo: 12,
        description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment."
      },
      {
        jobTitle: "Sr. UX Designer",
        company: "Netflix",
        applicants: 14,
        experience: "Expert",
        jobType: "Part-Time",
        location: "San Francisco",
        package: "40 LPA",
        postedDaysAgo: 5,
        description: "Netflix is looking for a Sr. UX Designer to enhance our user experience on streaming platforms. Ideal candidates will have extensive experience in user research and interaction design, helping us to deliver engaging content to our global audience."
      },
      {
        jobTitle: "Product Designer",
        company: "Microsoft",
        applicants: 58,
        experience: "Intermediate",
        jobType: "Full-Time",
        location: "Remote",
        package: "35 LPA",
        postedDaysAgo: 4,
        description: "Join Microsoft as a Product Designer and contribute to our new Lightspeed LA studio. We're looking for designers who can create intuitive and compelling gaming experiences. This is a remote position, offering flexibility and the opportunity to work with a leading technology company."
      },
      {
        jobTitle: "Product Designer",
        company: "Adobe",
        applicants: 23,
        experience: "Expert",
        jobType: "Part-Time",
        location: "Toronto",
        package: "33 LPA",
        postedDaysAgo: 22,
        description: "Adobe is seeking a part-time Product Designer to help us enhance our user experience. You will work closely with our team to design features that make our platform more engaging and user-friendly. This role is perfect for experienced designers looking for flexible work hours."
      },
      {
        jobTitle: "Backend Developer",
        company: "Google",
        applicants: 21,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "Bangalore",
        package: "38 LPA",
        postedDaysAgo: 8,
        description: "Google is hiring a Backend Developer to join our team in Bangalore. You'll be responsible for developing scalable backend systems that power our services. This role requires strong problem-solving skills and experience with modern backend technologies."
      },
      {
        jobTitle: "SMM Manager",
        company: "Spotify",
        applicants: 73,
        experience: "Intermediate",
        jobType: "Full-Time",
        location: "Delhi",
        package: "34 LPA",
        postedDaysAgo: 8,
        description: "Spotify is looking for an SMM Manager to lead our social media marketing efforts in Delhi. You will create and manage campaigns to promote our music streaming service, engage with our audience, and drive growth. This role is ideal for creative marketers with a passion for music."
      },
      {
        jobTitle: "Frontend Developer",
        company: "Amazon",
        applicants: 50,
        experience: "Intermediate",
        jobType: "Full-Time",
        location: "Seattle",
        package: "36 LPA",
        postedDaysAgo: 10,
        description: "Amazon is looking for a Frontend Developer to build and maintain our customer-facing applications. You will work with a dynamic team to create seamless and responsive web applications."
      },
      {
        jobTitle: "iOS Developer",
        company: "Apple",
        applicants: 30,
        experience: "Expert",
        jobType: "Full-Time",
        location: "Cupertino",
        package: "42 LPA",
        postedDaysAgo: 7,
        description: "Apple is seeking an iOS Developer to join our team in Cupertino. You will work on developing cutting-edge applications for iOS devices, ensuring high performance and an exceptional user experience."
      }
    ];
    
     export const searchFields=[
      { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
      { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
      { title: "Skills", icon: IconRecharging, options: ["HTML","CSS","JavaScript","React","Angular","Node.js","Python","Java","Ruby","PHP","SQL","MongoDB","PostgreSQL","Git","API Development","Testing and Debugging","Agile Methodologies","DevOps","AWS","Azure","Google Cloud"] },
  ]
 export const talents = [
    {
      name: "Jarrod Wood",
      role: "Software Engineer",
      company: "Google",
      topSkills: ["React", "SpringBoot", "MongoDB"],
      about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
      expectedCtc: "₹48 - 60LPA",
      location: "New York, United States",
      image:"avatar"
    },
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      company: "Facebook",
      topSkills: ["HTML", "CSS", "JavaScript"],
      about: "As a Frontend Developer at Facebook, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces that enhance user experience. I am dedicated to staying current with the latest trends and best practices in web development to ensure optimal performance and accessibility. I thrive in collaborative environments where I can contribute to innovative projects and deliver solutions that meet user expectations.",
      expectedCtc: "₹40 - 55LPA",
      location: "San Francisco, United States",
      image:"avatar1"
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      company: "Amazon",
      topSkills: ["Node.js", "Express", "MySQL"],
      about: "As a Backend Developer at Amazon, I specialize in server-side development and database management. My skills in Node.js and Express allow me to build robust and scalable APIs, while my experience with MySQL ensures efficient data handling and storage. I am passionate about optimizing backend processes to support high-traffic applications and improve system performance. My approach to development emphasizes reliability, security, and the ability to adapt to evolving technological demands.",
      expectedCtc: "₹50 - 65LPA",
      location: "Seattle, United States",
      image:"avatar"
    },
    {
        name: "Diana Prince",
        role: "UX/UI Designer",
        company: "Adobe",
        topSkills: ["Figma", "Sketch", "InVision"],
        about: "As a UX/UI Designer at Adobe, I am dedicated to crafting visually compelling and user-centric designs. My expertise in Figma, Sketch, and InVision allows me to create intuitive interfaces that enhance user experience across digital platforms. I am passionate about translating complex ideas into clean and effective designs that align with user needs and business goals. My design process involves thorough research, user testing, and iterative design to ensure the highest quality and user satisfaction.",
        expectedCtc: "₹35 - 50LPA",
        location: "Los Angeles, United States",
        image:"avatar2"
      },
    {
      name: "Charlie Brown",
      role: "Full Stack Developer",
      company: "Microsoft",
      topSkills: ["Python", "Django", "React"],
      about: "As a Full Stack Developer at Microsoft, I work on developing end-to-end solutions for web applications. My expertise in Python and Django for backend development, combined with React for frontend, allows me to create cohesive and high-performing applications. I am adept at managing the entire development lifecycle, from designing intuitive user interfaces to implementing robust server-side logic. My goal is to deliver comprehensive solutions that meet both user needs and business objectives.",
      expectedCtc: "₹45 - 60LPA",
      location: "Redmond, United States",
      image:"avatar"
    },
    {
        name: "Fiona Gallagher",
        role: "DevOps Engineer",
        company: "Netflix",
        topSkills: ["Docker", "Kubernetes", "AWS"],
        about: "As a DevOps Engineer at Netflix, I focus on automating infrastructure and optimizing deployment processes to support scalable applications. My expertise in Docker, Kubernetes, and AWS enables me to manage and streamline complex cloud environments efficiently. I am dedicated to improving operational efficiency and reliability through continuous integration and delivery practices. My role involves collaborating with development teams to ensure seamless deployment and maintenance of applications, enhancing overall system performance and resilience.",
        expectedCtc: "₹50 - 65LPA",
        location: "Los Gatos, United States",
        image:"avatar1"
      },
    {
      name: "Ethan Hunt",
      role: "Data Scientist",
      company: "IBM",
      topSkills: ["Python", "R", "Machine Learning"],
      about: "As a Data Scientist at IBM, I leverage my skills in Python, R, and machine learning to analyze complex datasets and generate actionable insights. My work involves building predictive models and data-driven solutions to support strategic decision-making and business growth. I am committed to exploring innovative techniques and methodologies to enhance data analysis and drive meaningful outcomes. My goal is to turn data into valuable information that can help organizations solve problems and seize opportunities.",
      expectedCtc: "₹55 - 70LPA",
      location: "Austin, United States",
      image:"avatar"
    },    
    {
        name: "Helen Mirren",
        role: "Mobile App Developer",
        company: "Apple",
        topSkills: ["Swift", "iOS", "Xcode"],
        about: "As a Mobile App Developer at Apple, I specialize in creating intuitive and high-performance iOS applications. With expertise in Swift and Xcode, I design and develop apps that offer seamless user experiences and adhere to the highest standards of quality and performance. My role involves collaborating with cross-functional teams to deliver innovative features and ensure smooth integration with Apple's ecosystem. I am passionate about leveraging the latest technologies to build apps that delight users and drive engagement.",
        expectedCtc: "₹55 - 70LPA",
        location: "Cupertino, United States",
        image:"avatar2"
      },
      {
        name: "George Lucas",
        role: "Cybersecurity Analyst",
        company: "Cisco",
        topSkills: ["Penetration Testing", "Network Security"],
        about: "As a Cybersecurity Analyst at Cisco, I focus on safeguarding organizations from cyber threats through proactive security measures. My skills in penetration testing, network security, and ethical hacking enable me to identify vulnerabilities and implement effective countermeasures. I am dedicated to protecting sensitive data and ensuring compliance with security standards. My approach involves continuous monitoring, threat analysis, and incident response to maintain robust security posture and mitigate risks in an ever-evolving threat landscape.",
        expectedCtc: "₹60 - 75LPA",
        location: "San Jose, United States",
        image:"avatar"
      }
  ];
 export const profile={
    name: "Jarrod Wood",
    jobTitle: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",
    skills: ["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"],
    experience: [
      {
        title: "Software Engineer III",
        company: "Google",
        location: "New York, United States",
        startDate: "Apr 2022",
        endDate: "Present",
        description: "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
      },
      {
        title: "Software Engineer",
        company: "Microsoft",
        location: "Seattle, United States",
        startDate: "Jun 2018",
        endDate: "Mar 2022",
        description: "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency."
      }
    ],
    certifications: [
      {
        name: "Google Professional Cloud Architect",
        issuer: "Google",
        issueDate: "Aug 2023",
        certificateId: "CB72982GG"
      },
      {
        name: "Microsoft Certified: Azure Solutions Architect Expert",
        issuer: "Microsoft",
        issueDate: "May 2022",
        certificateId: "MS12345AZ"
      }
    ]
  }
 export const fields=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support']},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify']},
    {label:"Experience",placeholder:"Enter Experience Level", options:['Entry Level', 'Intermediate', 'Expert']},
    {label:"Job Type",placeholder:"Enter Job Type", options:['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship']},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto']},
    {label:"Salary",placeholder:"Enter Salary", options:['10 LPA', '15 LPA', '20 LPA', '25 LPA', '30 LPA', '35 LPA', '40 LPA', '45 LPA']}
]
export const content =
  '<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>';



export const card=[
    {name:"Location", icon:IconMapPin, value:"New York", id:"location"},
    {name:"Experience", icon:IconBriefcase, value:"Expert", id:"experience"},
    {name:"Salary", icon:IconPremiumRights, value:"48 LPA" , id :"packageOffered"},
    {name:"Job Type", icon:IconRecharging, value:"Full Time", id:"jobType"},
]
export const skills=['React', 'Spring Boot', 'Java', 'Python', 'Node.js', 'MongoDB', 'Express', 'Django', 'PostgreSQL']
export const desc="<h4>About The Job</h4><p>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.</p><h4>Responsibilities</h4><ul><li>Design, build, test, and deploy software applications and features</li><li>Carry software products through the software development life cycle (SDLC)</li><li>Write clean, concise, and efficient code</li><li>Manage code documentation and version control</li><li>Troubleshoot and debug software</li><li>Participate in on-call rotation to respond to production issues</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>3+ years of professional experience working on this field</li><li>Bachelor's degree in computer science, software engineering, or related field</li><li>Proficiency in at least one programming language (e.g., Java, C#, C++)</li><li>Back-end development expertise</li><li>Strong problem-solving and communication skills</li><li>Experience with build tools such as Gradle and Maven</li><li>Good working knowledge of the Linux operating system</li></ul>"

export const companyData={
  Name: "Google",
  Overview: "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world’s information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",
  Industry: "Internet, Software & Technology Services",
  Website: "https://www.google.com",
  Size: "100,000+ Employees",
  Headquarters: "Mountain View, California, United States",
  Specialties: [
    "Search Engine",
    "Online Advertising",
    "Cloud Computing",
    "Software",
    "Hardware",
    "AI & Machine Learning",
    "Mobile Operating Systems",
    "Consumer Electronics"
  ]
}
export const similar=[
{
name: "Meta",
employees: 58604
},
{
name: "Netflix",
employees: 12800
},
{
name: "Microsoft",
employees: 221000
},
{
name: "Adobe",
employees: 29439
},
{
name: "Google",
employees: 181798
},
{
name: "Spotify",
employees: 8200
},
{
name: "Amazon",
employees: 1561000
},
{
name: "Apple",
employees: 164000
}
]

export const activeJobs=[
  {
    "jobTitle": "Frontend Developer",
    "location": "San Francisco, USA",
    "posted": "5 days ago"
  },
  {
    "jobTitle": "Backend Engineer",
    "location": "London, UK",
    "posted": "2 days ago"
  },
  {
    "jobTitle": "Full Stack Developer",
    "location": "Sydney, Australia",
    "posted": "7 days ago"
  },
  {
    "jobTitle": "UI/UX Designer",
    "location": "Toronto, Canada",
    "posted": "1 day ago"
  },
  {
    "jobTitle": "DevOps Engineer",
    "location": "Berlin, Germany",
    "posted": "4 days ago"
  },
  {
    "jobTitle": "Mobile App Developer",
    "location": "Austin, USA",
    "posted": "8 days ago"
  },
  {
    "jobTitle": "Data Analyst",
    "location": "Mumbai, India",
    "posted": "6 days ago"
  },
  {
    "jobTitle": "Cloud Architect",
    "location": "Dublin, Ireland",
    "posted": "3 days ago"
  },
  {
    "jobTitle": "Software Engineer",
    "location": "Tokyo, Japan",
    "posted": "9 days ago"
  },
  {
    "jobTitle": "Cybersecurity Specialist",
    "location": "Paris, France",
    "posted": "10 days ago"
  }
]
export const drafts=[
  {
    "jobTitle": "Junior Web Developer",
    "location": "New York, USA",
    "posted": "3 days ago"
  },
  {
    "jobTitle": "ML Engineer",
    "location": "Toronto, Canada",
    "posted": "6 days ago"
  },
  {
    "jobTitle": "DevOps Specialist",
    "location": "Amsterdam, Netherlands",
    "posted": "2 days ago"
  }
] 


export const field=[
    {label:"Job Title",placeholder:"Enter Job Title", options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'],  leftSection:IconBriefcase},
    {label:"Company",placeholder:"Enter Company Name", options:['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'],leftSection:IconBriefcase},
    {label:"Location",placeholder:"Enter Job Location", options:['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'], leftSection:IconMapPin},
     {
      label: 'Total Experience',
    placeholder: 'Select total experience (in years)',
    options: ['0', '1', '2', '3', '4', '5+'],
    leftSection: IconCalendarClock
  }

  ]




