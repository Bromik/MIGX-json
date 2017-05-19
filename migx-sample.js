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
