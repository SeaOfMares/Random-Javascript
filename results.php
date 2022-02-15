<html>
    <body>
        <h1>ITeration Results</h1>
        <b> Here are 10 iterations of the formula: <br/>
        y = x<sup>2</sup>

</b>


<p/>
<!-- PHP Calculations start here! -->
<?php
$num = $_POST['data'];
echo "Intial Value of x: " . $num ."<br>";
$temp = $num;
for($i = 1; $i< 11; $i++ ){
    $temp = pow($temp,2);
    echo $i . ". " . $temp . "<br>";
}

    
?>
</body>
</html>
