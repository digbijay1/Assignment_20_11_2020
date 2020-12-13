var header = document.createElement('header');

var frame1 = document.createElement('div');
frame1.classList.add('frame1');
var userImage = document.createElement('div');
userImage.classList.add('Image');
var username = document.createElement('div');
username.classList.add('name');
const name = document.createTextNode('Brian Dudey');
username.append(name);
frame1.append(userImage, username);
var frame2 = document.createElement('div');
frame2.classList.add('frame2');
var frame3 = document.createElement('div');
frame3.classList.add('frame3');
var details = document.createElement('div');
details.classList.add('details');
var contact = document.createTextNode('no.8, clinton ave, dallas,texas, US. baymax@heroku.com');
details.append(contact);
var br = document.createElement('br');
var hr = document.createElement('hr');
header.append(frame1,frame2, frame3, details, hr);
document.body.append(header);

/*body*/ 
const resume_down = document.createElement('div');
resume_down.classList.add('resumebody');

const heading = document.createElement('div');
heading.classList.add('subhead1');
const subheading = document.createElement('div');
subheading.classList.add('subheading');

const icon = document.createElement('div');
icon.setAttribute('class','fa fa-user iconColor');

subheading.append(icon);
const title = document.createElement('p');
title.setAttribute('class','headingTitle');
title.innerHTML = 'Profile';
const div_1 = document.createElement('div');
div_1.append(heading, subheading, title);
const Text_1 = document.createTextNode("Hello, I am Baymax, I'm a personal healthcare companion. I was developed by tadashi robotics. I can assist human during their hard time. But importantof all is that,I can code");
div_1.append(br,Text_1);
const bodyHalf1 = document.createElement('div');
bodyHalf1.classList.add('bodyHalf1');
bodyHalf1.append(div_1);

const skillsHeading = document.createElement('div');
skillsHeading.classList.add('subhead1');
const skillssubHeading = document.createElement('div');
skillssubHeading.classList.add('heading');

const skillsIcon = document.createElement('i');
skillsIcon.setAttribute('class', 'fa fa-superpowers iconColor');

skillssubHeading.append(skillsIcon);

const skillstitle = document.createElement('p');
skillstitle.setAttribute('class', 'headingTitle');
skillstitle.innerHTML = 'Skills';

const div_2 = document.createElement('div');
div_2.append(skillsHeading, skillssubHeading, skillstitle);

const skillsInputtitle1 = document.createElement('div');
skillsInputtitle1.classList.add('skillsInput');

const skillsInputtitle1Para = document.createElement('b');
skillsInputtitle1Para.innerHTML = 'Technical Skills';
skillsInputtitle1.append(skillsInputtitle1Para);

const skillsInputDiv = document.createElement('div');
skillsInputDiv.append(skillsInputtitle1);
div_2.append(skillsInputDiv);

const tr1_td1Text = document.createTextNode('Javascript');
const tr1_td1 = document.createElement('td');
tr1_td1.append(tr1_td1Text);

const tr1_td2Input = document.createElement('input');
tr1_td2Input.setAttribute('type', 'range');
tr1_td2Input.setAttribute('name', 'js');
tr1_td2Input.setAttribute('id', 'js');
tr1_td2Input.setAttribute('min', '0');
tr1_td2Input.setAttribute('max', '10');
tr1_td2Input.setAttribute('value', '8');

const tr1_td2 = document.createElement('td');
tr1_td2.append(tr1_td2Input);

const tr1 = document.createElement('tr');
tr1.append(tr1_td1, tr1_td2);
//1

//2
const tr2_td1Text = document.createTextNode('CSS');
const tr2_td1 = document.createElement('td');
tr2_td1.append(tr2_td1Text);

const tr2_td2Input = document.createElement('input');
tr2_td2Input.setAttribute('type', 'range');
tr2_td2Input.setAttribute('name', 'js');
tr2_td2Input.setAttribute('id', 'js');
tr2_td2Input.setAttribute('min', '0');
tr2_td2Input.setAttribute('max', '10');
tr2_td2Input.setAttribute('value', '8');

const tr2_td2 = document.createElement('td');
tr2_td2.append(tr2_td2Input);

const tr2 = document.createElement('tr');
tr2.append(tr2_td1, tr2_td2);
//R2 


//3
const tr3_td1Text = document.createTextNode('HTML');
const tr3_td1 = document.createElement('td');
tr3_td1.append(tr3_td1Text);

const tr3_td2Input = document.createElement('input');
tr3_td2Input.setAttribute('type', 'range');
tr3_td2Input.setAttribute('name', 'js');
tr3_td2Input.setAttribute('id', 'js');
tr3_td2Input.setAttribute('min', '0');
tr3_td2Input.setAttribute('max', '10');
tr3_td2Input.setAttribute('value', '6');

const tr3_td2 = document.createElement('td');
tr3_td2.append(tr3_td2Input);

const tr3 = document.createElement('tr');
tr3.append(tr3_td1, tr3_td2);
//3

const techSkillsTable = document.createElement('table');
techSkillsTable.classList.add('skillsTable');
techSkillsTable.append(tr1);
techSkillsTable.append(tr2);
techSkillsTable.append(tr3);

const techSkillsDiv = document.createElement('div');
techSkillsDiv.append(techSkillsTable);
div_2.append(techSkillsDiv);

bodyHalf1.append(div_2);

/*****************/

const worksub = document.createElement('div');
worksub.classList.add('subhead1');
const worksubheading = document.createElement('div');
worksubheading.classList.add('subheading');

const workicon = document.createElement('i');
workicon.setAttribute('class','fa fa-bar-chart iconColor');
worksub.append(workicon);

const worktitle = document.createElement('p');
worktitle.setAttribute('class','headingTitle');
worktitle.innerHTML = 'Work experience';

const div_3 = document.createElement('div');
div_3.append(worksub, worksubheading, worktitle);
bodyHalf1.append(div_3);

const role = document.createElement('div');
const jobrole = document.createTextNode('Event Manager');
role.append(jobrole);
role.classList.add('Style1');

const jobduration = document.createElement('div');
const jobDate1 = document.createTextNode('03/2014 - 02/2017');
jobduration.append(jobDate1);
jobduration.classList.add('Style2');

const job1Div = document.createElement('div');
job1Div.append(role, jobduration);
div_3.append(job1Div);
bodyHalf1.append(div_3);

const job1Company = document.createElement('div');
const job1CompanyNamePara = document.createElement('para');
const job1CompanyName = document.createTextNode('C3 Presents, Washington DC');

job1CompanyNamePara.append(job1CompanyName);
job1Company.append(job1CompanyNamePara);
div_3.append(job1Company);
bodyHalf1.append(div_3);

const job1JdDiv = document.createElement('div');
job1JdDiv.classList.add('jobUlLeft');

const job1JdUL = document.createElement('ul');

const job1JdULli1 = document.createElement('li');
const job1JdULli1Text = document.createTextNode('Lead and Execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.');
job1JdULli1.append(job1JdULli1Text);
job1JdUL.append(job1JdULli1);


const job1JdULli2 = document.createElement('li');
const job1JdULli2Text = document.createTextNode('Brought new bushiest to the organization through relentless networking and stewardship which helped the company wn the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women');
job1JdULli2.append(job1JdULli2Text);
job1JdUL.append(job1JdULli2);

const job1JdULli3 = document.createElement('li');
const job1JdULli3Text = document.createTextNode('Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.');
job1JdULli3.append(job1JdULli3Text);
job1JdUL.append(job1JdULli3);

job1JdDiv.append(job1JdUL);
div_3.append(job1JdDiv);
bodyHalf1.append(div_3);

const bodyHalf2 = document.createElement('div');
bodyHalf2.classList.add('bodyHalf2');

const bodyHalf3 = document.createElement('div');
bodyHalf3.classList.add('bodyHalf3');

const div4 = document.createElement('div');

const educationHeading = document.createElement('div');
educationHeading.classList.add('heading1');
const educationImage = document.createElement('div');
educationImage.classList.add('headingImage');

const educationIcon = document.createElement('i');
educationIcon.setAttribute('class', 'fa fa-graduation-cap iconColor');

educationImage.append(educationIcon);

const educationTitle = document.createElement('p');
educationTitle.setAttribute('class', 'headingTitle');
educationTitle.innerHTML = 'Education';

div4.append(educationHeading, educationImage, educationTitle);
bodyHalf3.append(div4);


const education1TitleDiv = document.createElement('div');
const education1Title = document.createTextNode('Engineering Immersion Program');
education1TitleDiv.append(education1Title);
education1TitleDiv.classList.add('title1Style');


const education1DateDiv = document.createElement('div');
const education1Date = document.createTextNode('11/2018 - 06/2018');
education1DateDiv.append(education1Date);
education1DateDiv.classList.add('title2Style');

const education1Div = document.createElement('div');
education1Div.append(education1TitleDiv, education1DateDiv);
div4.append(education1Div);
bodyHalf3.append(div4);

const  education1Course = document.createElement('div');
const education1CourseNamePara = document.createElement('para');
const education1CourseName = document.createTextNode('Thinkful, Chicago, IL');

education1CourseNamePara.append(education1CourseName);
education1Course.append(education1CourseNamePara);
div4.append(education1Course);
bodyHalf3.append(div4);


const projectDescText = document.createTextNode('Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack.');
div4.append(projectDescText);
bodyHalf3.append(div4);

const education1DescDiv = document.createElement('div');
education1DescDiv.classList.add('jobUlLeft');

const education1DescUL = document.createElement('ul');

const education1DescULli1 = document.createElement('li');
const education1DescULli1Text = document.createTextNode(' Developed a full•stack web application, "RenewU", using React that allows users to explore various aspects of meditation. User\'s progress is stored on a backend created using Node and MongoDB.');
education1DescULli1.append(education1DescULli1Text);
education1DescUL.append(education1DescULli1);


const education1DescULli2 = document.createElement('li');
const education1DescULli2Text = document.createTextNode('Developed a language learning app, \'Foodie Phonetics" using spaced repetition and a Ihked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.');
education1DescULli2.append(education1DescULli2Text);
education1DescUL.append(education1DescULli2);

const education1DescULli3 = document.createElement('li');
const education1DescULli3Text = document.createTextNode('Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and  drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well ¬ developed RESTful API, Geospatial searching, and user authentication with JWT.');
education1DescULli3.append(education1DescULli3Text);
education1DescUL.append(education1DescULli3);

const education1DescULli4 = document.createElement('li');
const education1DescULli4Text = document.createTextNode('Building relationships with key media players.');
education1DescULli4.append(education1DescULli4Text);
education1DescUL.append(education1DescULli4);


education1DescDiv.append(education1DescUL);
div4.append(education1DescDiv);
bodyHalf3.append(div4);

const fullBody = document.createElement('div');

fullBody.append(bodyHalf1, bodyHalf2, bodyHalf3);

fullBody.classList.add('fullBody');
resume_down.append(fullBody);

document.body.append(resume_down);
