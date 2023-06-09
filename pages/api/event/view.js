const convert=require('xml-js');
const request=require('request');

const HOST = 'http://www.kopis.or.kr/openApi/restful'
const SERVICE_KEY = '9146e9127b3b48c2bc814ac574bbb024';

export default async function handler(req,res){
	//json -> object 전환
	req.body=JSON.parse(req.body);

	let requestUrl=`${HOST}/pblprfr/${req.body.id}?service=${SERVICE_KEY}`;
	if(req.method=='POST'){
		request.get(requestUrl,(err,response,body)=>{
			if(err){
				console.log(`err=>${err}`);
			}else{
				if(response.statusCode == 200){
					let result = body;
					let xmlToJson = convert.xml2json(result,{compact:true, spaces:4});
					res.status(200).json(xmlToJson);
				}
			}
		})
	}
	
}