<?php
    header("Access-Control-Allow-Origin:*");
    include('./connetdatabase.php');

    $sql='select * from product';
    $res=$mysqli->query($sql);

    $arr=array();
    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }
    $json=json_encode($arr);
    echo($json);
?>