const convert=require('xml-js');
const request=require('request');

const HOST = 'http://www.kopis.or.kr/openApi/restful'
const SERVICE_KEY = '9146e9127b3b48c2bc814ac574bbb024';

let today=new Date();
let year=today.getFullYear();
let s_month=today.getMonth()+1<10?'0'+(today.getMonth()+1):(today.getMonth()+1).toString();
let e_month=today.getMonth()+1<10?'0'+(today.getMonth()+2):(today.getMonth()+2).toString();
let date=today.getDate()+1<10?'0'+today.getDate():(today.getDate()+1).toString();
let stdate=year+s_month+date;
let eddate=year+e_month+date;

let requestUrl=`${HOST}/pblprfr?service=${SERVICE_KEY}&stdate=${stdate}&eddate=${eddate}&rows=10&cpage=1`;


export default async function handler(req,res){
	if(req.method=='GET'){
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