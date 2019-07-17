<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>main</title>
<script src="script.js" defer="defer" type="text/javascript"></script>
<style>
#clock {
	width: 600px;
	height: 250px;
	margin: auto;
	margin-top: 220px;
	line-height: 100px;
	color: #666;
	font-size: 100px;
	text-align: center;
}
</style>
</head>

<body onload="printClock()">
	<a href="options.jsp"><img src="../image/setting.png" width="80px"></a>
	<div onclick="location.href='image.jsp'">
		<div id="clock"></div>
		<form action="image.jsp">
			<input type="submit" value="테스트">
		</form>
	</div>

</body>

</html>
