function formCheck(){
  // 아이디 유효성검사
  // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능
  var reg = /^[a-zA-Z0-9_]{5,20}$/;
  var userid = document.getElementById("userid");
  if(userid.value==""){
    alert("아이디를 입력하세요.");
    userid.focus();
    return false;
  }
  if(!reg.test(userid.value)){
    alert("아이디를 잘못 입력하였습니다. \n5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
    userid.focus();
    return false;
  }

  // 비밀번호 유효성검사
  // 8~16자 영문 대 소문자, 숫자, 특수문자를 사용 가능
  reg = /^[a-zA-Z0-9_!^@*]{8,16}$/;
  var userpwd = document.getElementById("userpwd");

  if(userpwd.value == ''){
    alert("비밀번호를 입력하세요.");
    userpwd.focus();
    return false;
  }
  if(!reg.test(userpwd.value)){
    alert("비밀번호를 잘못 입력하였습니다. \n8~16자 영문 대 소문자, 숫자, 특수문자(_,!,^,@,*)만 사용 가능합니다.");
    userpwd.focus();
    return false;
  }

  // 비밀번호 재확인 유효성검사
  var secUserpwd = document.getElementById("secUserpwd");
  if(secUserpwd.value == ''){
    alert("비밀번호를 한번더 입력해주세요.");
    secUserpwd.focus();
    return false;
  }
  if(secUserpwd.value != userpwd.value){
    alert("비밀번호가 일치하지 않습니다.");
    secUserpwd.focus();
    return false;
  }

  // 이름
  reg = /^[가-힣]{2,7}$/;
  var username = document.getElementById("username");
  if(username.value == ""){
    alert("이름을 입력하세요.");
    username.focus();
    return false;
  }
  if(!reg.test(username.value)){
    alert("이름을 잘못 입력하였습니다. \n이름은 2~7글자 이내여야합니다.");
    username.focus();
    return false;
  }

  // 전화번호 유효성검사
  reg = /^[0-9]{2,3}[-][0-9]{3,4}[-][0-9]{4}$/;
  var tel = document.getElementById("tel");

  if(tel.value == ''){
    alert("전화번호를 입력하세요.");
    tel.focus();
    return false;
  }
  if(!reg.test(tel.value)){
    alert("전화번호를 잘못 입력했습니다.");
    tel.focus();
    return false;
  }
  return true;
}
