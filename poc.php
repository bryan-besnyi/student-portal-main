<?php

$spaceId = '9o86qcdcukvy';
$accessToken = 'mIjug-Efzfx0ThZKisCSzElsD9jtzwz2Ay96ePxSYF8';
$environmentId = 'master';
$contentTypeId = 'studentFormItem';
$departmentId = 'financialAid';

$url = "https://cdn.contentful.com/spaces/{$spaceId}/environments/{$environmentId}/entries?access_token={$accessToken}&content_type={$contentTypeId}";

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec($ch);

curl_close($ch);

$data = json_decode($response, true);

if (!empty($data['items'])) {
    var_dump($result['items'][0]);
} else {
    echo "No forms found.";
}