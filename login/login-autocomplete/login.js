var btn = document.getElementById('btn');
btn.onclick = function(){
    $.ajax({
        url : 'user-info.json',
        type : 'post',
        dataType : 'json',
        data : {
            name : '',
            password : ''
        },
        success : function(res){
            console.log(res);
            location.href = 'home.html';
        },
        error : function(){
            alert('ajax error');
        }
    })
    return false;
}
