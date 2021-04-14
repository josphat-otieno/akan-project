# Project Name
 Akan Naming System
## Description
 This project is about a naming system used in Ghana where depending on their gender, people are given certain name according to the day of the week they were born. This project uses the formula below to get the day of the week;
  Day of the week (d) = (((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) mod 7

 where;
 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )
## About the Author
Name : Josepat Otieno.
The author is a student at Moringa School taking Software Development course.
## Set up instructions
You need to have git installed on your machine. You can install it with the following command in the terminal
`$ sudo apt install git-all`
You can use the following steps to access this project on you machine:
1. Open your terminal and use this command to clone `$ git clone https://github.com/josphat-otieno/akan-project.git`
2. This will clone the repository into your local machine.
3. Open the terminal on your machine and navigate to the root folder of the application  `$cd akan-project`
4. Open index.html on your browser.
5. Here is the live link to the website `https://josphat-otieno.github.io/akan-project/`

## Behaviour Driven Development
<p>Displays a landing page that describes what the project is all about. Displays form for entering date of birth</p>
    <h3>Inputs</h3>
    <p>The user enters:</p>
    <ul>
        <li>Year</li>
        <li>Month</li>
        <li>Day</li>
    </ul>
    <h3>Output</h3>
    <p>Displays a pop screen prompting the user to enter their gender either <strong><em>male</em></strong> or <strong><em>female.</em></strong></p>
    <h3>Output</h3>
    <p>Displays a pop screen alerting the users their date of birth in the format of "mm/dd/yy".</p>
    <p>Displays a pop screen alerting users the <strong><em>day of the week</em></strong> they were born and their respective <strong><em>akan names.</em><strong></p>
    <p> A pop screen appears alerting the user to enter valid values if wrong values are entered or a field is left empty<p>
        
## Technologies used
The following technologies were used in building up the project:
1. HTML
2. Bootstrap
3. JavaScript
4. CSS
5. Git
## Contact Inforamtion
 Phone: +254717878813

 Email address: josephatotieno92@gmail.com

