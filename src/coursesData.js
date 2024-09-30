const coursesData = [
     {
          id: 1,
          title: "Full Stack Development",
          image: "https://plus.unsplash.com/premium_photo-1661589763483-b30d5f3ae5bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Learn to build web applications using React, Node.js, and more."
     },
     {
          id: 2,
          title: "Data Science",
          image: "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Master data analysis, visualization, and machine learning."
     },
     {
          id: 3,
          title: "Cyber Security",
          image: "https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Learn to protect systems and networks from cyber threats."
     },
     {
          id: 4,
          title: "Career Development",
          image: "https://plus.unsplash.com/premium_photo-1683749805442-dd033af82294?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Enhance your job-seeking skills and career progression."
     },
     {
          id: 5,
          title: "Machine Learning",
          image: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFjaGluZSUyMExlYXJuaW5nfGVufDB8fDB8fHww",
          description: "Discover the fundamentals of machine learning and how to apply them."
     },
     {
          id: 6,
          title: "Mobile App Development",
          image: "https://plus.unsplash.com/premium_photo-1683936163005-a506303344b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Learn how to build mobile applications for iOS and Android."
     },
     {
          id: 7,
          title: "UI/UX Design",
          image: "https://plus.unsplash.com/premium_photo-1661692759400-15aa4e2de6c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Understand the principles of user interface and user experience design."
     },
     {
          id: 8,
          title: "Digital Marketing",
          image: "https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
          description: "Learn strategies for online marketing, SEO, and social media."
     },
     {
          id: 9,
          title: "Cloud Computing",
          image: "https://plus.unsplash.com/premium_photo-1683141114059-aaeaf635dc05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2xvdWQlMjBDb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
          description: "Explore cloud services and how to utilize them effectively."
     },
     {
          id: 10,
          title: "Blockchain Technology",
          image: "https://plus.unsplash.com/premium_photo-1682124857779-5c3a97dd3967?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
          description: "Understand blockchain technology and its applications in various industries."
     },
     {
          id: 11,
          title: "Graphic Design",
          image: "https://plus.unsplash.com/premium_photo-1661284886711-4eaee4fa7771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
          description: "Learn the basics of graphic design using tools like Adobe Photoshop."
     },
     {
          id: 12,
          title: "Data Visualization",
          image: "https://plus.unsplash.com/premium_photo-1682310178386-1d20be620733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RGF0YSUyMFZpc3VhbGl6YXRpb258ZW58MHx8MHx8fDA%3D",
          description: "Learn to create visual representations of data using various tools."
     },
     {
          id: 13,
          title: "DevOps Practices",
          image: "https://images.unsplash.com/photo-1631624210938-539575f92e3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGV2T3BzJTIwUHJhY3RpY2VzfGVufDB8fDB8fHww",
          description: "Understand the principles of DevOps and how to implement them."
     },
     {
          id: 14,
          title: "Artificial Intelligence",
          image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
          description: "Explore the concepts and applications of artificial intelligence."
     },
     {
          id: 15,
          title: "Internet of Things (IoT)",
          image: "https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW50ZXJuZXQlMjBvZiUyMFRoaW5ncyUyMChJb1QpfGVufDB8fDB8fHww",
          description: "Learn how to connect devices and create IoT applications."
     }
];

export default coursesData;
