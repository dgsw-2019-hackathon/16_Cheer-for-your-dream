<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	HttpSession s = request.getSession();
	String target = (String) s.getAttribute("value");
%>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>image</title>
<script src="script.js" defer="defer" type="text/javascript"></script>
<style>
#clock {
	float: right;
	margin-right: 50px;
	line-height: 80px;
	color: #666;
	font-size: 50px;
	text-align: center;
}

#image {
	margin-left: 600px;
	margin-top: 170px;
	width: 600px;
	border: 1px;
}

#iframe {
	visibility: hidden;
	display: none
}
</style>
<script src="../JS/jquery.js"></script>
<script>
	var text ="<%=target%>";
</script>
</head>

<body onload="printClock_image();show();">
	<div id="clock"></div>
	<div id="Image">
		<img id="image">
	</div>
	<audio id="iframe" autoplay="autoplay" controls="controls"></audio>
</body>
</html>
