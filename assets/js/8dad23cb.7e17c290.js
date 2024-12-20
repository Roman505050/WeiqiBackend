"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[234],{6799:e=>{e.exports=JSON.parse('{"url":"redocusaurus/plugin-redoc-0.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.1.0","info":{"title":"Weiqi Backend API","description":"Weiqi is a game of strategy and tactics. It is a game for two players, one with black stones and one with white stones. The goal is to surround your opponent\'s stones and capture them. The player with the most territory at the end of the game wins.","version":"0.1.0"},"paths":{"/":{"get":{"summary":"Root","operationId":"root__get","responses":{"200":{"description":"Hello World?","content":{"application/json":{"schema":{}}}}}}},"/hello/{name}":{"get":{"summary":"Say Hello","operationId":"say_hello_hello__name__get","parameters":[{"name":"name","in":"path","required":true,"schema":{"type":"string","title":"Name"}}],"responses":{"200":{"description":"Successful Response","content":{"application/json":{"schema":{}}}},"422":{"description":"Validation Error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/HTTPValidationError"}}}}}}}},"components":{"schemas":{"HTTPValidationError":{"properties":{"detail":{"items":{"$ref":"#/components/schemas/ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError"},"ValidationError":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"}}}}}')}}]);