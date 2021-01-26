<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
<div class="header">
    <h1>Bryson Cook's demo page</h1>
    <p>This page is about me (Bryson Cook)</p>
</div>
<br/>
<img class="image" src="brysonProfile.PNG" alt="Bryson Cook">
<br/>
<div class="links">
    <a href="hello-servlet">Hello Servlet</a>
    <br/>
    <a href="test.html">Test page</a>
</div>
</body>
<style>
    .header{
        width: 100%;
        text-align: center;
        background: darkgrey;
        color: white;
        font-size: 30px;
        padding-bottom:5px;
        padding-top:5px;
        /*margin-top:0px;*/
    }
    .image{
       display: block;
        margin-left: auto;
        margin-right: auto;
        width: auto;
    }
    .links{
        color: darkgreen;
        text-align: left;
        font-size: 36px;
        display: inline-block;
        margin: 10px;
    }
    a:hover{
        color:red;
        text-decoration:underline;
    }
</style>
</html>