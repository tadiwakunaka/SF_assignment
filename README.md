# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.
Step to run project
1. npm install
2. cd server
3. node server.js
4. ng serve

## GitHub Repository Overview

This repository hosts a chat application developed using the Angular framework.

## Repository Structure
1. **Master Branch:** This branch contains the fundamental components for the application, including the home and login components.
2. **User Components Branch:** The user_components branch comprises components related to users, such as user dashboards for normal users, group admins, and super admins. Additionally, it includes components for functionalities like creating and managing groups.
3. **Global Components Branch:** In this branch, you will find components and services utilized across the application. It also contains a global CSS file used by various components of the application. The services directory within this branch houses services used by the application, including a service for decoding JSON data files.
4. **Server Branch:** The server branch includes code for the server-side of the application, featuring Node.js code and other database-related components serving the application.

## Update Frequency

Commits will be made frequently during the development of this application. Once development on a particular branch is completed, it will be merged with the master branch to maintain a clean master branch free of bugs.

## Data Structure Used

The application employs user arrays to store user data. This data includes information such as usernames, user roles, email addresses, passwords, and more.

## Angular Architecture

Components in the src directory:

1. **Home:** This component contains the code for the home screen of the application and serves as the default loading component.
2. **Login:** The login component handles the processing of user login details and collaborates with the server-side of the application to authenticate user login information.
3. **Group Admin:** The group admin component contains the code for the group admin dashboard, including functionalities granted to group admins.
4. **User Dash:** The user dash component contains code for the user dashboard and its associated functionality.
5. **Super Admin:** This component contains code for the super admin dashboard and its functionality.
6. **Create Groups:** The create group component includes code that allows group admins and super admins to create groups.
7. **Manage Groups:** This component enables group admins and super admins to edit created groups, add or remove users, and perform related actions.

## Services

Users.service: The users service contains functions responsible for retrieving user data from the server or from JSON formatted data.

## Routes Used
The application uses the following routes:

- Login route
- Home route
- UserDash route
- GroupAdmin route
- SuperAdmin route
- ManageGroup route
- CreateGroup route

## Node server files 
- Node server will be stored in server directory
- This directory will api directory , modules directory and www directory for html files
- a server js file will have the server configuration within this directory

## Client and server interactions

Client and server interactions will occur in the following scenarios 

Login scenario

- When client enters login details the details are checked against those in the server side to validate user
- Upon entering valid login details . User role is checked on the server to navigate the user to the dashboard that corresponds with their role

Creating groups 

- When group admins and super admins create a new group there is a communication with the server so as to add new groups and users that belong to that particular group

Managing groups

- There will be a continuous client and server communication in the event of a group admin or super admin making changes to groups  and group channels

Making user changes 

- When the super admin makes changes to user roles there will be a communication with the server side of the application

Rephrased Node server and client interactions:

Node Server File Structure:

- The Node server will be located within the "server" directory.
- Inside this directory, you will find subdirectories such as "api," "modules," and "www," which contain HTML files.
- The server's configuration is defined within a "server.js" file located in this directory.

Interactions Between Client and Server:

Interactions between the client and server occur in various scenarios:

1. **Login Process:**
    - When a client enters their login credentials, the server validates these details against its stored data.
    - If the provided credentials are valid, the server checks the user's role and redirects them to the corresponding dashboard.
2. **Creating Groups:**
    - Group administrators and super administrators communicate with the server to create new groups.
    - This communication includes adding new groups and users associated with the created group.
3. **Managing Groups:**
    - Continuous communication between the client and server takes place when group administrators or super administrators make changes to groups and group channels.
4. **User Role Modifications:**
    - When a super administrator makes changes to user roles, there is a communication process with the server side of the application.
