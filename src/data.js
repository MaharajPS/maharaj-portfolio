export const projects = [
  {
    id: 1,
    title: "AI-Based Resume Screening System",
    description: "Developed an AI-powered Resume Matching System using BM25 keyword scoring, FAISS semantic similarity, and Gemini LLM insights, achieving high-accuracy candidate matching and interactive analytics. Built within 24 hours and awarded the top prize at the event.",
    tech: ["Python", "BM25", "FAISS", "Gemini LLM"],
    image: "https://images.unsplash.com/photo-1551650975-87de45978306?w=800",
    award: "🏆 Top Prize Winner",
    github: "#"
  },
  {
    id: 2,
    title: "Face Recognition Attendance System",
    description: "Detect and recognize faces in a classroom and mark attendance accordingly. It uses MTCNN to detect faces and then uses face encodings to recognize faces in the classroom.",
    tech: ["Python", "OpenCV", "MTCNN", "Face Recognition"],
    image: "https://images.unsplash.com/photo-1507145727137-2c0f45c86895?w=800",
    github: "#"
  },
  {
    id: 3,
    title: "Number Plate Detection System",
    description: "Built a real-time number plate detection system using YOLOv5, OpenCV, and Google Cloud Vision API with a Streamlit interface for video input and OCR-based plate logging.",
    tech: ["YOLOv5", "OpenCV", "Google Cloud Vision", "Streamlit"],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
    github: "#"
  },
  {
    id: 4,
    title: "Predicting In-Hospital Mortality",
    description: "Developed a Streamlit-based web application that predicts the risk of in-hospital mortality in heart failure patients using a Random Forest Classifier trained on clinical data.",
    tech: ["Python", "Streamlit", "Random Forest", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    github: "#"
  },
  {
    id: 5,
    title: "Student Database Management System",
    description: "Developed a GUI-based application to manage student records. Features include adding, viewing, updating, deleting, and searching student data. Used HTML & CSS for front-end and Oracle for backend storage.",
    tech: ["Java", "HTML", "CSS", "Oracle", "JDBC"],
    image: "https://images.unsplash.com/photo-1551650975-87de45978306?w=800",
    github: "#"
  },
  {
    id: 6,
    title: "Image Filter",
    description: "Converts live images into pencil sketch using OpenCV library in Python.",
    tech: ["Python", "OpenCV", "Image Processing"],
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800",
    github: "#"
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