<?php
    header("Access-Control-Allow-Origin:*");
    include('./connetdatabase.php');

    $id=$_REQUEST['id'];

    $sql="select * from product where id=$id";
    $res=$mysqli->query($sql);
    // var_dump($res);
    $arr=array();
    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }
    // var_dump($arr);
    $json=json_encode($arr);
    echo($json);
?>