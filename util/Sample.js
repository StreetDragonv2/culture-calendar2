const convert=require('xml-js');
const request=require('request');

const HOST = 'http://www.kopis.or.kr/openApi/restful'
const SERVICE_KEY = '9146e9127b3b48c2bc814ac574bbb024';

let requestUrl=`${HOST}/pblprfr?service=${SERVICE_KEY}&stdate=20160101&eddate=20160630&rows=10&cpage=1`;

export default function Sample(){
    request.get(requestUrl,(err,res,body)=>{
        if(err){
            console.log(`err=>${err}`);
        }else{
            if(res.statusCode == 200){
                let result = body;
                //console.log(`body data => ${result}`);
                let xmlToJson = convert.xml2json(result,{compact:true, spaces:4});
                //console.log(`xml to json => ${xmlToJson}`);
                //console.log(JSON.parse(xmlToJson).response);
            }
        }
    })
    
    return(
        <div>휴~</div>
    )
}