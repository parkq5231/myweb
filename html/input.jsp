<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--html책 2부-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/input.jsp</title>
</head>

<body>
    <%
        String userName = request.getParameter("user_name");
        String userId = request.getParameter("user_id");
        String userPw=request.getParameter("user_pw");
    %>
</body>
<h1>사용자명: <%=userName%></h1>
<h1>아이디: <%=userId%></h1>
<h1>비번: <%=userPw%></h1>

</html>