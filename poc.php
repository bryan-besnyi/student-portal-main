<?php

$spaceId = '9o86qcdcukvy';
$accessToken = 'mIjug-Efzfx0ThZKisCSzElsD9jtzwz2Ay96ePxSYF8';
$environmentId = 'master';
$contentTypeId = 'studentFormItem';

$query = <<<'GRAPHQL'
{
  studentFormItemCollection {
    items {
      sys { id }
      formTitle
      description
      file {
        url
        fileName
        contentType
      }
    }
  }
}
GRAPHQL;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://graphql.contentful.com/content/v1/spaces/{$spaceId}/environments/{$environmentId}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['query' => $query]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer {$accessToken}",
]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);

if (isset($data['data']['studentFormItemCollection']['items'])) {
    foreach ($data['data']['studentFormItemCollection']['items'] as $form) {
        echo "Form ID: " . $form['sys']['id'] . "\n";
        echo "Title: " . $form['formTitle'] . "\n";
        echo "Description: " . $form['description'] . "\n";
        echo "File URL: " . $form['file']['url'] . "\n\n";
    }
} else {
    echo "No forms found\n";
}