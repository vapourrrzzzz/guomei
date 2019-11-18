<?php
        header('content-type:text/html;charset=utf-8');

        //数据库基本信息
        //关联数组
        $mysql_conf=array(
            'host'=>'localhost:3306', //地址和数据库端口号
            'db_user'=>'root', //用户名
            //database
            'db_pass'=>'', //密码
            'db'=>'guomei' //数据库名
        );
    
        //连接数据库
        //数组的访问用 []
        //实例化mysqli对象
        $mysqli=new mysqli($mysql_conf['host'],$mysql_conf['db_user'],$mysql_conf['db_pass']);
    
        // var_dump($mysqli);
        //对象访问方式 ->
        if($mysqli->connect_errno){
            die('连接错误'.$mysqli->connect_errno);
            //终止后面代码的执行并打印
        }
    
        //设置查询字符集
        $mysqli->query("set names utf8");
    
        //选择数据库
        $select_db=$mysqli->select_db($mysql_conf['db']);
    
        //检查数据库是否选择成功
        if(!$select_db){
            die('数据库选择错误'.$mysqli->error);
        }
?>