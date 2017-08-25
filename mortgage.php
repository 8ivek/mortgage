<?php
$p=700000;//principal
$interest_rate=3;//interest rate.
$years=25;//total years.

$r= ($interest_rate/1200);//interest rate per month.
$n = $years*12;

$top = $r * pow((1+$r), $n);
$bottom = (pow((1+$r),$n))-1;
$m = $p * ($top/$bottom);

echo $m;//monthly mortgage.