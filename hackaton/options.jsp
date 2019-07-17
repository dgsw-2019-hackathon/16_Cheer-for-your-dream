<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	
	HttpSession s = request.getSession();
	String target = (String)s.getAttribute("value");
%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>설정</title>
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css?family=Jua&display=swap"
	rel="stylesheet">
</head>
<body>
	<div class="options">
		<a href="main.jsp"><img src="../image/back.png"></a> <span
			id="option"> <a href="options.jsp">목표</a> <a id="current">현재
				목표 : <%=target%></a> <br> <br>
		</span>
	</div>
	<hr>
	<div class="target">
		<span>목표 :</span>
		<form action="submit.jsp" method="get">
			<select name="target_option" id="t_op">
				<option value="위로">위로</option>
				<option value="취업">취업</option>
				<option value="연애">연애</option>
				<option value="공부">공부</option>
				<option value="다이어트">다이어트</option>
			</select> <br> <input type="submit" value="확인">
		</form>
	</div>
</body>
</html>