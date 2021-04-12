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

## BDD
<table>
         <tr>
             <th>Inputs</th>
             <th>Descriptio</th>
         </tr>
         <tr>
             <td>Century (cc)</td>
             <td>The century digits of the year the user was born eg 1980 has cc 19</td>
         </tr>
         <tr>
             <td>Year (yy)</td>
             <td>The year of the century eg 1980 has yy 80</td>
         </tr>
         <tr>
             <td>Month (mm)</td>
             <td>The month of the year</td>
         </tr>
         <tr>
             <td>Day (dd)</td>
             <td>The day of the month</td>
         </tr>
     </table><br>
     <table>
         <tr>
          <th>Outputs</th>
          <th>Description</th>
        </tr>
        <tr>
            <td>Day of the week</td>
            <td>The day of the week a person was born e.g Monday</td>
        </tr>
        <tr>
            <td>Akan name</td>
            <td>The corresponding akan name given to the person
            </td>
        </tr>
     </table>

## Technologies used
The following technologies were used in building up the project:
1. HTML
2. Bootstrap
3. JavaScript
4. CSS
## Contact Inforamtion
 Phone: +254717878813
 Email address: josephatotieno92@gmail.com

