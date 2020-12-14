<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>html/radio.jsp</title>
        </head>

        <body>
            <%

    String [] userName= request.getParameterValues("subject");
    %>
                <%
        for(String user: userName){  
    %>
                    <h3><%=user%></h3>
                <%
        }
    %>
            </body>

        </html>