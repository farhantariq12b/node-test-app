## Section 1 <br />
#### 1- Explain the difference between an abstract class and an interface.<br />
&nbsp;&nbsp;&nbsp;&nbsp; Abstract classes contains functions with definition/implementation and functions with only declarations. <br/>
&nbsp;&nbsp;&nbsp;&nbsp; Interfaces only contains functions with declarations. Both Interfaces and Abstract classed cannot be instantiate.
#### 2- What is the purpose of getters and setters in a class?<br />
&nbsp;&nbsp;&nbsp;&nbsp; Getter and setter are used to get and set the values of private data members of a class.

## Section 2 Testing <br />
#### 1- Explain the purpose of black box testing.<br />
&nbsp;&nbsp;&nbsp;&nbsp; The purpose of black box testing is to test an application with input and expected output without knowing the internal logic and implementation.
#### 2- In your opinion what are the benefits of test cases?<br />
&nbsp;&nbsp;&nbsp;&nbsp; Test cases provide black box testing of the functionalities to some extent. It provides good quality and reliable code. Also helps to identify the regression of any code change.

## Section 3 - NodeJS specific questions <br />
#### 1- What is an error first callback, and what is the reason for this pattern existing?.<br />
&nbsp;&nbsp;&nbsp;&nbsp; Error first callback is just a function which will only return error or data. In case of error it will be passed in first argument and in case of successful execution the response will be sent in second argument. From the reason for this pattern I am not familiar with this concept.
#### 2- Explain the difference between fs.readSync and fs.read (File System module in Nodejs)?<br />
&nbsp;&nbsp;&nbsp;&nbsp; I am not familiar with this concept. fs.readSync runs synchronously which means that it will run on the main thread of NodeJs and will block the further processing until it gets completed while fs.read runs asynchronously which means it will not block the main thread of Node Js </br> 
#### 3- What tasks do you feel should be done asynchronously??<br />
&nbsp;&nbsp;&nbsp;&nbsp; Any task which will block the main thread should be done asynchronously because NodeJs is single threaded and if main thread is block then all the subsequent requests, processing etc. will block. Like File read/write operations, CPU intensive jobs should be done in asynchronous way 
