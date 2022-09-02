function logFormCheck(){
  var id = document.getElementById("id");
  var pwd = document.getElementById("pwd");

  if(id.value == "" || id.length < 5){
    alert("아이디를 입력하세요.");
    id.focus();
    return false;
  }

  if(pwd.value == "" || pwd.length < 8){
    alert("비밀번호를 입력하세요.");
    pwd.focus();
    return false;
  }
  alert("로그인이 되었습니다!");
  return true;
}
