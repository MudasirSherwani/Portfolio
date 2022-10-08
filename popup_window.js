const overlay = document.querySelector('#overlay');
const ProjectDataObjects = [
  {
    pro_Name: 'National Basketball Association',
    pro_Images: 'images/capstion-project.PNG',
    pro_Description: 'This is the Capstone project in Microverse Curriculum Module No.1. It allows users to make a conference page for any event and publish it for advertisement purposes. It is built with HTML, CSS, and JavaScript.',
    pro_Technologies: ['html', 'Bootstrap', 'css', 'Javascript'],
    pro_Live: 'https://mudasirsherwani.github.io/Capstone-Project',
    pro_Source: 'https://github.com/MudasirSherwani/Capstone-Project',
  },
  {
    pro_Name: 'Project#2: Multi-Post Stories',
    pro_Images: 'images/Project_Image.svg',
    pro_Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    pro_Technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    pro_Live: 'https://mudasirsherwani.github.io/Portfolio',
    pro_Source: 'https://github.com/MudasirSherwani/Portfolio',
  },
  {
    pro_Name: 'Project#3: Multi-Post Stories',
    pro_Images: 'images/Project_Image.svg',
    pro_Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    pro_Technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    pro_Live: 'https://mudasirsherwani.github.io/Portfolio',
    pro_Source: 'https://github.com/MudasirSherwani/Portfolio',
  },
  {
    pro_Name: 'Project#4: Multi-Post Stories',
    pro_Images: 'images/Project_Image.svg',
    pro_Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    pro_Technologies: ['html', 'Ruby on rails', 'css', 'Javascript'],
    pro_Live: 'https://mudasirsherwani.github.io/Portfolio',
    pro_Source: 'https://github.com/MudasirSherwani/Portfolio',
  },
];
function GetProjectData(i) {
  document.getElementById('popup-project-heading').innerHTML = ProjectDataObjects[i].pro_Name;
  document.getElementById('popup-project-image').src = ProjectDataObjects[i].pro_Images;
  document.getElementById('popup-project-desc').innerHTML = ProjectDataObjects[i].pro_Description;
  document.getElementById('popup-tech1').innerHTML = ProjectDataObjects[i].pro_Technologies[0];
  document.getElementById('popup-tech2').innerHTML = ProjectDataObjects[i].pro_Technologies[1];
  document.getElementById('popup-tech3').innerHTML = ProjectDataObjects[i].pro_Technologies[2];
  document.getElementById('popup-tech4').innerHTML = ProjectDataObjects[i].pro_Technologies[3];
  document.getElementById('see-live').href = ProjectDataObjects[i].pro_Live;
  document.getElementById('see-source').href = ProjectDataObjects[i].pro_Source;
}
function PopupWindowOn(ProjectId) {
  if (overlay.style.display === 'none') {
    overlay.style.display = 'block';
    GetProjectData(ProjectId - 1);
  }
}
function PopupWindowOff() {
  overlay.style.display = 'none';
}
PopupWindowOn();
PopupWindowOff();