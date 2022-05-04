<?php
    $goal = $_REQUEST['goal'];
    $star = $_REQUEST['rating'];
    $comment = $_REQUEST['comments'];
    $link =  mysqli_connect("192.18.142.21:3306","team","Team12345678@") or die ("an error has been found: ".mysqli_error());
    $db_selected = mysqli_select_db($link,'beautyspa');
    try {
        if(($star === '4')||($star === '5')) {
            $userID = '1';
            $sql1 = "SELECT username, Phone from Users where user_ID = '$user'";
            $fetch = mysqli_query($link,$sql1);
            $result = mysqli_fetch_array($fetch);
            $username = $result['username'];
            $phone = $result['Phone'];
        }
        else{
            $username = $_REQUEST['name'];
            $phone = $_REQUEST['phone'];
            $password = '123';
            $sql1 = "INSERT INTO Users(username,Phone,Password) VALUES('$username','$phone','$password')";
            $fetch = mysqli_query($link,$sql1);
            $sql2 = "SELECT user_ID from Users where Phone = '$phone'";
            $fetch1 = mysqli_query($link,$sql2);
            $result = mysqli_fetch_array($fetch1);
            $userID = $result['user_ID'];
        }
        $rs = mysqli_query($link,"INSERT INTO Web_review(user_ID, star,comment,image) VALUES('$userID', '$star','$comment','#')");
        header("Location:$goal");
    }
    catch (Exception $e){
        echo $e->getMessage();}

    mysqli_close($link);
?>