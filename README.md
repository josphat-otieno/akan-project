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
 ##BDD

Inputs
Description
Century (cc)
The century digits of the year the user was born eg 1980 has cc 19
Year (yy)
The year of the century eg 1980 has yy 80
Month (mm)
The month of the year
Day (dd)
The day of the month

outputs
description
Day of the week
The day of the week a person was born e.g Monday
Akan name
The corresponding akan name given to the person



