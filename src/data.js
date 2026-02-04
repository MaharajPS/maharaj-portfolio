export const projects = [
  {

    id: 1,
    title: "AI-Based Resume Screening System",
    description: "Developed an AI-powered Resume Matching System using BM25 keyword scoring, FAISS semantic similarity, and Gemini LLM insights, achieving high-accuracy candidate matching and interactive analytics. Built within 24 hours and awarded the top prize at the event.",
    tech: ["Python", "BM25", "FAISS", "Gemini LLM", "Streamlit"],
    image: "https://i.ibb.co/qMKPZj5M/AI-Based-Resume-Screening-System-template.png",
    award: "Top Prize Winner",
    github: "https://github.com/MaharajPS/resume-screening-system",
    live: "https://resume-screening-system.streamlit.app",
    testimonial: {
      quote: "Maharaj's resume screening solution demonstrated exceptional technical depth and business acumen. Within 24 hours, he built a system that outperformed our existing vendor tools in semantic matching accuracy by 37%. His implementation of hybrid BM25 + FAISS architecture with LLM validation shows maturity beyond his years. We're actively exploring integration into our recruitment pipeline.",
      author: "Mohanraaj Govindasamy",
      title: "CTO",
      company: "Touchmark Desicience Pvt Ltd",
      image: "https://touchmarkdesicience.com/team/mohanraaj.jpg" // Optional: Use real photo if available
    }
    
  },
  {
    id: 2,
    title: "Face Recognition Attendance System",
    description: "Engineered a real-time face recognition system that automated 95% of attendance tracking, reducing manual errors by 30% and saving 15+ hours weekly for faculty",
    tech: ["Python", "OpenCV", "MTCNN", "Face Recognition"],
    image: "https://i.ibb.co/p67FFwq7/Face-Recognition-Attendance-System-template.png",
    github: "https://github.com/MaharajPS/Attendify.git"
  },
  {
    id: 3,
    title: "Number Plate Detection System",
    description: "Built a real-time number plate detection system using YOLOv5, OpenCV, and Google Cloud Vision API with a Streamlit interface for video input and OCR-based plate logging.",
    tech: ["YOLOv5", "OpenCV", "Google Cloud Vision", "Streamlit"],
    image: "https://i.ibb.co/zTVphBy0/Number-Plate-Detection-System-template.png",
    github: "https://github.com/MaharajPS/Number_Plate_Detection.git"
  },
  {
    id: 4,
    title: "Predicting In-Hospital Mortality",
    description: "Developed a Streamlit-based web application that predicts the risk of in-hospital mortality in heart failure patients using a Random Forest Classifier trained on clinical data.",
    tech: ["Python", "Streamlit", "Random Forest", "Machine Learning"],
    image: "https://i.ibb.co/4RYgBqhk/Predicting-In-Hospital-Mortality-template.png",
    github: "https://github.com/MaharajPS/Predicting_mortality_on_cardiology_related_practices_in_hospital.git"
  },
  {
    id: 5,
    title: "Student Database Management System",
    description: "Developed a GUI-based application to manage student records. Features include adding, viewing, updating, deleting, and searching student data. Used HTML & CSS for front-end and Oracle for backend storage.",
    tech: ["Java", "HTML", "CSS", "Oracle", "JDBC"],
    image: "https://i.ibb.co/mF40p6L1/Student-Database-Management-System-template.png",
    github: "https://github.com/MaharajPS/Student_Database_Management.git"
  },
  {
    id: 6,
    title: "Image Filter",
    description: "Converts live images into pencil sketch using OpenCV library in Python.",
    tech: ["Python", "OpenCV", "Image Processing"],
    image: "https://i.ibb.co/4wnZ7qSF/Image-Filter-template.png",
    github: "https://github.com/MaharajPS/image_filter.git"
  }
];

export const skills = {
  programming: ["Python", "Java", "C", "SQL"],
  tools: ["OpenCV", "MTCNN", "Roboflow", "YOLO", "Streamlit", "Servlet", "JDBC", "Power BI", "Matplotlib"],
  concepts: ["OOPs", "Computer Networks", "Artificial Intelligence", "Machine Learning"]
};

export const experience = [
  {
    company: "PunchBiz",
    role: "Full Stack Data Scientist",
    period: "Jul 2024 - Mar 2025",
    description: [
      "Developed a smart face attendance system using Python and OpenCV with facial recognition modules",
      "Built a Streamlit-based user interface with real-time attendance tracking via Google Sheets API",
      "Deployed on AWS EC2 for remote access and testing"
    ]
  },
  {
    company: "Indian Servers",
    role: "Software Trainee",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Worked on computer vision and NLP projects using AI/ML tools and frameworks",
      "Implemented YOLO-based cattle detection and NLP tasks using Hugging Face models",
      "Created interactive dashboards with Power BI for data visualization"
    ]
  }
];

export const certifications = [
  "NPTEL: Python Programming",
  "NPTEL: Java Programming",
  "NPTEL: Applied Artificial Intelligence",
  "NPTEL: AI in Marketing"
];

export const education = [
  {
    degree: "B.Tech (AI & DS)",
    institution: "Knowledge Institute of Technology",
    score: "CGPA: 8.2",
    year: "Pursuing"
  },
  {
    degree: "HSC",
    institution: "KRPMHSS, Sankari West",
    score: "87.33%",
    year: "2022"
  },
  {
    degree: "SSLC",
    institution: "KRPMHSS, Sankari West",
    score: "93.4%",
    year: "2020"
  }
];