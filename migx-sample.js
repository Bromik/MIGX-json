Tabs:
[
{"caption":"Tab Title", "fields": [
{"field":"title","caption":"Name"},
{"field":"description","caption":"Description","inputTVtype":"textarea"},
{"field":"imageTV","caption":"Photo","inputTV":"imageTV"}
]}
]

Table:
[
{"header": "Name", "sortable": "true", "dataIndex": "title"},
{"header": "Photo", "width": "80", "sortable": "false", "dataIndex": "imageTV","renderer": "this.renderImage"}
]

//
[
{"caption":"Info", "fields": [
{"field":"image","caption":"Image","inputTVtype":"image"},
{"field":"title","caption":"Title"}
]}
] 


[
{"header": "Title", "width": "160", "sortable": "true", "dataIndex": "title"},
{"header": "Image", "width": "50", "sortable": "false", "dataIndex": "image","renderer": "this.renderImage"}
]
///
[
{"caption":"Info", "fields": [
{"field":"preficks_name","caption":"R"},
{"field":"title_lat","caption":"R"},
{"field":"title_lng","caption":"R"},
{"field":"image","caption":"Icon","inputTVtype":"iamge"},
{"field":"title_alt","caption":"R"},
{"field":"description","caption":"R","inputTVtype":"textarea"}
]}
] 



[
{"header": "R", "width": "160", "sortable": "true", "dataIndex": "preficks_name"},
{"header": "R", "width": "160", "sortable": "true", "dataIndex": "title_lat"},
{"header": "R", "width": "160", "sortable": "true", "dataIndex": "title_lng"},
{"header": "R", "width": "150", "sortable": "false", "dataIndex": "image","renderer": "this.renderImage"},
{"header": "R", "width": "160", "sortable": "true", "dataIndex": "title_alt"},
{"header": "R", "width": "160", "sortable": "true", "dataIndex": "description"}
]
