<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("UTF-8");

	String value = request.getParameter("target_option");
	
	HttpSession s = request.getSession();
	s.setAttribute("value", value);
	
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<script>
		alert('저장되었습니다');
		location.href = "options.jsp";
	</script>
</body>
</html>