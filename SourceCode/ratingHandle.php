<?php
    $goal = $_REQUEST['goal'];
    $star = $_REQUEST['rating'];
    $comment = $_REQUEST['comments'];
    $link =  mysqli_connect("192.18.142.21:3306","team","Team12345678@") or die ("an error has been found: ".mysqli_error());
    $db_selected = mysqli_select_db($link,'beautyspa');
    if(($star === '4')||($star === '5')) {
        $user = '1';
        $sql1 = "SELECT username, Phone from Users where user_ID = '$user'";
        $fetch = mysqli_query($link,$sql1);
        $result = mysqli_fetch_array($fetch);
        $username = $result['username'];
        $phone = $result['Phone'];
    }
    else{
        $username = $_REQUEST['name'];
        $phone = $_REQUEST['phone'];
        $user = $phone;
        $password = '123';
        $sql1 = "INSERT INTO Users(user_ID,username,Phone,Password) VALUES('$user','$username','$phone','$password')";
        $fetch = mysqli_query($link,$sql1);
    }
    $rs = mysqli_query($link,"INSERT INTO Web_review(user_id,star,comment,image) VALUES('$user','$star','$comment','#')");
    header("Location:$goal");
    mysqli_free_result($fetch);
    mysqli_free_result($rs);
    mysqli_close($link);
?>