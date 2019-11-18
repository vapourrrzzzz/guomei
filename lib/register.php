<?php

    include('./connetdatabase.php');

    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];
    $email=$_REQUEST['email'];
    $phone=$_REQUEST['phone'];

    $sql="select * from user where user_name='$username'";
    $res=$mysqli->query($sql);
    if($res->num_rows>0){
        echo '{"msg":"0"}';;
        die;
    }

    $sql2="insert into user(user_name,user_password,user_email,user_phone) values ('$username','$password','$email',$phone)";

    $result=$mysqli->query($sql2);
    if($result){
        echo '{"msg":"1"}';
    }

    $mysqli->close();
?>