<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>html/ex04.jsp</title>
        </head>
        <body>
            <%
            String gender=request.getParameter("subject1");


    String[] resultAll=request.getParameterValues("subject");
    %>
                <%
        for(String result : resultAll){
    %>
                    <h3><%=result%></h3>
                <% 
        }
    %>
    
            </body>
            <h3>성별: <%=gender%></h3>            
        </html>