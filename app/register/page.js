'use client'

import { useState } from "react";

export default function Register() {
	let [inputId,setInputId] = useState('');
	let [validId,setValidId]=useState(false);

	const idCheck=()=>{
		if(inputId==''){
			alert('아이디를 입력해주세요!');
			return false;
		}
		
		fetch('/api/auth/idcheck',{
			method:'POST',
			body:inputId
		}).then((res)=>{
			if(res.status == 200){
				alert('사용 가능한 아이디입니다!');
				setValidId(true);
			}else if(res.status == 400){
				alert('이미 가입된 아이디입니다!');
				setInputId('');
				setValidId(false);
			}
		})
	}

	const onSubmit = (e)=>{
		e.preventDefault();

		let frm=e.target;
		let name=frm.name.value;
		let id=frm.id.value;
		let password=frm.password.value;

		if(name == '' || name == null || name == undefined){
			alert('이름을 입력하세요!');
			return false;
		}

		if(id == '' || id == null || id == undefined){
			alert('이메일을 입력하세요!');
			return false;
		}

		if(password == '' || password == null || password == undefined){
			alert('비밀번호를 입력하세요!');
			return false;
		}

		// let pwdChk=/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
		// if(!pwdChk.test(password)){
		// 	alert('비밀번호는 영문자, 숫자, 특수문자 조합으로 8~15자리를 사용해야 합니다');
		// 	return false;
		// }

		if(validId == false){
			alert('아이디 중복 체크를 진행해주세요!');
			return false;
		}
		
		fetch('/api/auth/signup',{
			method:'POST',
			body:JSON.stringify({
				name:name,
				id:id,
				password:password
			})
		}).then((res)=>{
			console.log(res);
			if(res.status == 200){
				alert('회원가입이 완료되었습니다!');
				location.href='/';
			}			
		}).catch((error)=>{
			console.log(error);
		})
	}
	
	return (
		<div>
			<form onSubmit={onSubmit} >
				<input name="name" type="text" placeholder="이름" required /> 
				<input name="id" type="text" placeholder="아이디" onKeyUp={(e)=>{setInputId(e.target.value);}} required/>
				<button type="button" onClick={idCheck}>중복확인</button>
				<input name="password" type="password" placeholder="비밀번호" required />
				<button type="submit">가입요청</button>
			</form>
		</div>
	)
  }