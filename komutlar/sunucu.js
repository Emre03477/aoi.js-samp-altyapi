module.exports = {
name:"sunucu",
code:`
$addField[Sunucu Gecikmesi:;$get[ping];true]
$addField[Maksimum Oyuncu Sayısı;$get[max];]
$addField[Oyuncu Sayısı:;$get[oyuncusayisi];true]
$addField[Sunucu İsmi:;$get[sunucuisim];true]
$let[sunucuisim;$jsonRequest[http://sec.byte.rasbyte.net:25633/samp-server-info?ip=$get[ip]&port=$get[port];sunucuIsmi;]]
$let[oyuncusayisi;$jsonRequest[http://sec.byte.rasbyte.net:25633/samp-server-info?ip=$get[ip]&port=$get[port];oyuncuSayisi;]]
$let[max;$jsonRequest[http://sec.byte.rasbyte.net:25633/samp-server-info?ip=$get[ip]&port=$get[port];maksimumOyuncuSayisi;]]
$let[ping;$jsonRequest[http://sec.byte.rasbyte.net:25633/samp-server-info?ip=$get[ip]&port=$get[port];ping;]]
$let[ip;$getVar[ip;main]]
$let[port;$getVar[port;main]]
`}
