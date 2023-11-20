<?php
$vote = $_REQUEST['vote'];

//put into txt file
$filename = "pollresult.txt";
$content = file($filename);

//put content in an array
$array = explode("||", $content[0]);
$as = $array[0];
$bs = $array[1];
$ts = $array[2];

if ($vote == 0) {
  $as = $as + 1;
}
if ($vote == 1) {
  $bs = $bs + 1;
}
if ($vote == 0) {
    $ts = $ts + 1;
  }
  
//insert votes to txt file
//not inserting votes for a reason I cannot fathom
$insertvote = $as."||".$bs."||".$ts;
$fp = fopen($filename,"w");
fputs($fp,$insertvote);
fclose($fp);
?>

<!--shows and calculates results, or is supposed to, tbh don't really know how php works this was a mistake-->
<h2>Result:</h2>
<table>
<tr>
<td>Alfredo Sauce:</td>
<td><?php echo(100*round($as/($bs+$as+$ts),3)); ?>
<?php echo(100*round($as/($bs+$as+$ts),3)); ?>%
</td>
</tr>
<tr>
<td>Barbecue Sauce:</td>
<td><?php echo(100*round($bs/($bs+$as+$ts),3)); ?>
<?php echo(100*round($bs/($bs+$as+$ts),3)); ?>%
</td>
</tr>
<tr>
<td>Tomato Sauce:</td>
<td><?php echo(100*round($ts/($bs+$as+$ts),3)); ?>
<?php echo(100*round($ts/($bs+$as+$ts),3)); ?>%
</td>
</tr>
</table>