var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
 loop:true,
  });

  // our Chatbot Development 
  const reviews=[
    {
      id:1,
      name:"Richard Hurkmans",
      job:"Deltacost, Founder",
      image:"images/team/10.jpg",
      text:" 'The mobile app has struggled commercially but, FourthScreen Labs has responded quickly and precisely to any updates or modifications requested, which earned positive results. The team's extensive knowledge was instrumental to the success of the project.'",
      linkedIn:"img/linked_in.png",

    },
    {
      id:2,
      name:"Himanshu Gautam",
      job:"Amar Ujala Group, Business Head",
      image:"images/team/1.jpg",
      text:" 'So far I am very much impressed the kind of work they did on my project. Prompt response to all my mail, what every change suggested to them they did it on time, from my side 5 stars to CNS. ' ",
      linkedIn:"img/linked_in.png",
    },

    {
      id:3,
      name:"Ahmad Haleem ",
      job:"Kwikard, Founder",
      image:"images/team/2.jpg",
      text:" 'Working With CNS Was more fun than business. Their young yet experienced team of designers and developers were quite adept at understanding my project requirements. Their efforts were really reflecting in the final output of application. ' ",
      linkedIn:"img/linked_in.png",
    },
    {
      id:4,
      name:"Dipesh Karania",
      job:"Jet Airways (India) Ltd. ,Manager",
      image:"images/team/3.jpg",
      text:" 'They are stick to their vision i.e. consistently delivering quality solutions. I will thoroughly recommend CNS Web Technologies for mobile app development services.' ",
      linkedIn:"img/linked_in.png",
    },
    {
      id:5,
      name:"Shiv Kumar",
      job:"Spice Labs Pvt. Ltd., Product Manager",
      image:"images/team/4.jpg",
      text:" 'Great company to work with. They deliver a great product.' ",
      linkedIn:"img/linked_in.png",
    },
    {
      id:6,
      name:"Ravi Yadav",
      job:"Taxi For Sure, India Head - Supply",
      image:"images/team/5.jpg",
      text:" 'Been a pleasure working with Chandrakant and the team, prompt response and always delivers quality product, looking forward to working with them in the near future' ",
      linkedIn:"img/linked_in.png",
    },
    {
      id:7,
      name:"Durgesh Saxena",
      job:"Bluechips Microhouse Co. Ltd. , Senior Engineer, Silcon Manufacturer",
      image:"images/team/6.jpg",
      text:" 'Overall our experience in working with CNS has been great. They were able to deliver a complex app design with many intricate functions. We are very happy with the design of our app and the simplicity of its functionality. The UI is very clean which' ",
      linkedIn:"img/linked_in.png",
    },
    {
      id:8,
      name:"Abhinav Mathur",
      job:"News Buzz Pvt Ltd, Founder",
      image:"images/team/7.jpg",
      text:" 'CNS Web Technologies successfully delivered and launched the mobile app on the Google Play Store. The design aspect could improve but, overall, the team exhibited superior personal commitment and attention throughout the project.' ",
      linkedIn:"img/linked_in.png",
    },
    {
    id:9,
    name:"Shubham Saxena",
    job:"Photo Editor, Founder",
    image:"images/team/8.jpg",
    text:" 'CNS Web Technologies delivered the mobile application within the timeframe and exceeded the expected quality requirements. An improvement in the work strategy was needed however, the team demonstrated transparent transactions and guarantee of quality' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:10,
    name:"Jeetendra Singh",
    job:"InSwipes, Founder",
    image:"images/team/9.jpg",
    text:" 'CNS delivered the mobile app in high quality and completed on time and within budget. The app is now live in the App Store and is fully functional. The team demonstrated their dedication and stood to their reputation for being a low-cost and agile' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:11,
    name:"Pankaj Panjwani",
    job:"Mindmates Technologies, Founder",
    image:"images/team/12.jpg",
    text:" 'The platform already has almost 30,000 mobile users. CNS communicated effectively, produced timely results, and demonstrated a good understanding of the technology. The team provided value-added UI designs and delivered a livestreaming feature desp",
  },
  {
    id:12,
    name:"Prashant",
    job:"Appbulous Software Pvt. Ltd., Product Manager",
    image:"images/team/13.jpg",
    text:" 'The app was delivered on time without any deviation from the stated budget. The app has received a satisfactory level of downloads and it has been well rated by users.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:13,
    name:"Pradeep Singh",
    job:"Dotvik Solution, Founder",
    image:"images/team/14.jpg",
    text:" 'They are good, and not every expensive. They provide continuous support and always available.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:14,
    name:"Manesh Gangadharan",
    job:"Bollywood Fab, Founder",
    image:"images/team/15.jpg",
    text:" 'This was our first ever eCommerce project, and after considerable research & discussion, we settled on CNS Web Technologies. The service was professional and efficient at all times. Even at some stages when WE were a little confused or uncertain about' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:15,
    name:"Mona Mathur",
    job:"Million Spark Foundation, Founder",
    image:"images/team/16.jpg",
    text:" 'The client is an educational platform that connects students, teachers and parents allowing them to communicate and to discover, access and share resources needed by the students. CNS Software was involved in developing an Android application framework.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:16,
    name:"Sulekha",
    job:"Nishthashoppe, Founder",
    image:"images/team/16.jpg",
    text:" 'I highly recommend CNS and his team! They've done a great job! Easy to communicate, they were very officiant and helpful with suggestions. Thanks :)' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:17,
    name:"RAGHAV PRAKASH",
    job:"PARISHKAR WORLD, DIRECTOR",
    image:"images/team/16.jpg",
    text:" 'Its being a great experience working with team CNS. The team is exceptionally talented the way they have executed this project and delivered on time.' ",
    linkedIn:"img/linked_in.png",
  },

  {
    id:18,
    name:"Vishvendra Chaudhary",
    job:"Crossahead, Founder",
    image:"images/team/16.jpg",
    text:" 'It was a great time we spent partnering with CNS Web Technologies. They have very amazing workforce and they are very cooperative and office environment is very positive. I am really looking forward to collaborate with them in future.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:19,
    name:"Sachin Kumar",
    job:"Tupelo Life, CTO",
    image:"images/team/16.jpg",
    text:" 'Initially I had doubts about the capability of the CNS Web Technologies, but as we get along and came to know each other's method of working, I was assured of a great app for my project' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:20,
    name:"Sunny Jain",
    job:"Cash gain , Co-Founder",
    image:"images/team/16.jpg",
    text:" 'I was introduced to CNS by one of my friends. As my friend has already experienced working with them, I simply hired CNS for my project. I was highly impressed with their quality and timely delivery of my project.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:21,
    name:"Maruthi Gowda",
    job:"cEdge, Manager",
    image:"images/team/16.jpg",
    text:" 'CNS Web Technologies was very responsive and great to work with. They developed an Android App for me, which had it's challenges, and their team worked through the problems in very timely manner for a great finished product. I would recommend CNS' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:22,
    name:"Kavita Sharma",
    job:"Selfieria, Founder",
    image:"images/team/16.jpg",
    text:" 'The project was executed without any issues, and the application received positive reviews and feedback. CNS assigned an excellent project manager and delivered everything on time while remaining cost competitive.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:23,
    name:"Manoj Tyagi",
    job:"Aashtha TV, G.M. at Aastha Tv",
    image:"images/team/16.jpg",
    text:" 'Very patient and professional team. Gave me a lot of explanation during this project, and happily shared their knowledge and expertise to help me understand the technical concepts. Communicated well, and always very much available.They also took direction' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:24,
    name:"Raj Sharma",
    job:"Tally On Mobile, Owner",
    image:"images/team/16.jpg",
    text:" 'Feedback from both users and the internal team has been positive, demonstrating the quality of the build. The team displayed initiative and made useful suggestions for the products development, though should work on improving their time management.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:25,
    name:"Pradeep Dubey",
    job:"Spice Digital Ltd, Sr. General Manager",
    image:"images/team/16.jpg",
    text:" 'CNS strength is their ability to understand the business value of the software they are developing. Their understanding of the project is highly appreciated. I will highly recommend CNS.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:26,
    name:"Sudhakar Sharma",
    job:"Rudrabhishek Infosystem Pvt Ltd, Manager-GIS Operations",
    image:"images/team/16.jpg",
    text:" 'Fast execution, professional staff, we did a very good project, for sure I will do more projects with CNSin future.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:27,
    name:"Sunil Minglani",
    job:"Stock Market Psychologist, Founder",
    image:"images/team/16.jpg",
    text:" 'I approached CNS to help me design and build my new mobile app and website. The company has experts in different mobile and website development platforms, so you will have a wide range of options to choose from depending on your time and technical constraints. People here are knowledgeable, professional, understanding, and just amazing to work with.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:28,
    name:"Manbir Singh",
    job:"Make My Exam, Founder",
    image:"images/team/16.jpg",
    text:" 'Congratulations, Team CNS! I was overwhelmed by working with you guys. Make my Exam was accomplished extremely well due to your intense commitment to your work.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:29,
    name:"Pramod Maheshwari",
    job:"Careerpoint Kota, CMD",
    image:"images/team/16.jpg",
    text:" 'The level of dedication and maintenance in the company is very high, their team has impelled trending features to my project. I felt very satisfied with their service and the time of delivery it was before the deadline even. The designing strategies were surely matching my purpose that made me happy.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:30,
    name:"B Singh",
    job:"Made Easy, CMD",
    image:"images/team/16.jpg",
    text:" 'I feel glad that I hired CNS for my project. The entire team is very dedicated and supportive. I did not expect this but they delivered my work on time and amazing results beyond my expectations. I am surely satisfied with the rhythm of their workflow.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:31,
    name:"Satish Jalan",
    job:"PARISHKAR WORLD, DIRECTOR",
    image:"images/team/16.jpg",
    text:" 'I put the foundation of my institute with a vision of an easy pathway of efforts toward success and CNS has helped me to bring it true. Their team is really helpful with new ideas and integrations can be done to my project.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:32,
    name:"RAJESH DAWAR",
    job:"SHIV NADAR UNIVERSITY, IT HEAD",
    image:"images/team/16.jpg",
    text:" 'Realistic experience of the project development throughout the process is the thing I got on CNS. I have met numerous IT organizations but the level of satisfaction and support from their team to their clients is surely amazing and unmatchable.' ",
    linkedIn:"img/linked_in.png",
  },
  {
    id:33,
    name:"DR. ROHIT KOHKER",
    job:"VIDYA PRAKASHAN MANDIR ,CTO",
    image:"uploads/client_profile/rohit%20kohker.png",
    text:" 'I was just searching for a company that would provide best results and criterion for my educational business. Then I got to CNS I heared that they are a leading mobile app development company in learning sector and the workforce at organization proved it true.' ",
    linkedIn:"img/linked_in.png",
  },
  ];

  // select items

  const img=document.getElementById("person-img");
  const author=document.getElementById("author");
  const job=document.getElementById("job");
  const infomations=document.getElementById("infomations");
  const link=document.getElementById("linked-InImg");

  const prevBtn=document.querySelector(".prev-btn");
  const nextBtn=document.querySelector(".next-btn");
  
let currentItems=0;

window.addEventListener("DOMContentLoaded",function(){
  showPerson();
});

function showPerson(){
  const item=reviews[currentItems];
  img.src=item.image;
  author.textContent=item.name;
  job.textContent=item.job;
  infomations.textContent=item.text;
 link.textContent=item.linkedIn;

}

// show next person
nextBtn.addEventListener("click",function(){
  currentItems++;
if(currentItems>reviews.length-1){
  currentItems=0;
}

  showPerson();
});


// show prev person
prevBtn.addEventListener("click",function(){
  currentItems--;
if(currentItems<0){
  currentItems=reviews.length-1;
}

  showPerson();
});

// our Chatbot Development 

