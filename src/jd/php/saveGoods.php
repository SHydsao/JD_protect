<?php
	header("Content-Type:text/html;charset=utf-8");
	//1、接受客户端的数据（用户输入的数据）
	$goodsId   = $_REQUEST['goodsId'];
	$goodsName = $_REQUEST['goodsName'];
	$typeId = $_REQUEST['typeId'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$goodsCount = $_REQUEST['goodsCount'];
	$goodsDesc = $_REQUEST['goodsDesc'];
	$goodsImg  = $_REQUEST['goodsImg'];
	$beiyong1  = $_REQUEST['beiyong1'];
	$beiyong2  = $_REQUEST['beiyong2'];
	$beiyong3  = $_REQUEST['beiyong3'];
	$beiyong4  = $_REQUEST['beiyong4'];
	$beiyong5  = $_REQUEST['beiyong5'];
	$beiyong6  = $_REQUEST['beiyong6'];
	$beiyong7  = $_REQUEST['beiyong7'];
	$beiyong8  = $_REQUEST['beiyong8'];
	$beiyong9  = $_REQUEST['beiyong9'];
	$beiyong10 = $_REQUEST['beiyong10'];
	$beiyong11 = $_REQUEST['beiyong11'];
	$beiyong12 = $_REQUEST['beiyong12'];
	$beiyong13 = $_REQUEST['beiyong13'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysqli_connect("localhost","root","123456","jd");
	if(!$conn){
		die("数据库连接失败：".mysqli_error());
	}
	
	//2）、选择数据库（找目的地）
/* 	if(!mysqli_select_db("jd",$conn)){
		die("数据库选择失败".mysqli_error());
	}; */
	
	//3）、传输数据（过桥）
	$sqlstr = "insert into goodsInfo values('".$goodsId."','".$goodsName."','".$typeId."'
	,'".$goodsPrice."','".$goodsCount."','".$goodsDesc."','".$goodsImg."'
	,'".$beiyong1."','".$beiyong2."','".$beiyong3."','".$beiyong4."'
	,'".$beiyong5."','".$beiyong6."','".$beiyong7."','".$beiyong8."'
	,'".$beiyong9."','".$beiyong10."','".$beiyong11."','".$beiyong12."','".$beiyong13."')";
	

	$count = mysqli_query($conn,$sqlstr);
	if(!$count){
		die('插入失败！'.mysqli_error());
	}
	//4）、关闭连接（拆桥）
	mysqli_close($conn);
	
	//3、给客户端返回（响应）一个注册成功！
	if($count>0){
		 echo "保存成功,<a href='addGoods.html'>继续添加</a>";
	}
	
?>