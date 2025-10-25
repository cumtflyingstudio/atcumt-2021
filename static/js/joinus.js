var InfoName = document.getElementById("info-name");
var InfoPho = document.getElementById("info-pho");
var InfoId = document.getElementById("info-id");
var InfoProfess = document.getElementById("info-profess");
var InfoCls = document.getElementById("info-cls");
var InfoEmail = document.getElementById("info-email");
var obj = document.getElementsByName("theGroup"); // 获取多选框数组
var InfoPower = document.getElementById("info-power");
var arr = []; // 获取多选框的值

InfoName.oninput = function () {
    InfoName.setCustomValidity('');
    isname();
};
InfoPho.oninput = function () {
    InfoPho.setCustomValidity('');
    isphone();
};
InfoId.oninput = function () {
    InfoId.setCustomValidity('');
    isid();
};
InfoProfess.onchange = function () {
    InfoProfess.setCustomValidity('');
    InfoProfess.style.color = 'black';
    isprofess();
};
InfoCls.onchange = function () {
    InfoCls.setCustomValidity('');
    InfoCls.style.color = 'black';
    isclass();
};
InfoEmail.oninput = function () {
    InfoEmail.setCustomValidity('');
    isemail();
};


function isname() {
    var na = /[\u4e00-\u9fa5]/;
    var name = InfoName.value;

    if (name == '' || name == null) {
        InfoName.setCustomValidity('姓名不能为空');
        return false;
    } else if (!na.test(name)) {
        InfoName.setCustomValidity('请正确输入姓名，2至4个汉字');
        return false;
    } else {
        return true;
    }
}

function isphone() {
    var ph = /^1[34578]\d{9}$/;
    var pho = InfoPho.value;

    if (pho == '' || pho == null) {
        InfoPho.setCustomValidity('电话不能为空');
        return false;
    } else if (!ph.test(pho)) {
        InfoPho.setCustomValidity('请正确输入11位电话号码，固话请加区号');
        return false;
    } else {
        return true;
    }
}

function isid() {
    var s_id = InfoId.value;

    if (s_id == '' || s_id == null) {
        InfoId.setCustomValidity('学号不能为空');
        return false;
    } else {
        return true;
    }
}

function isprofess() {
    if (InfoProfess.selectedIndex == 0) {
        InfoProfess.setCustomValidity('请选择专业！');
        return false;
    } else {
        return true;
    }
}

function isclass() {
    if (InfoCls.selectedIndex == 0) {
        InfoCls.setCustomValidity('请选择年级！');
        return false;
    } else {
        return true;
    }
}

function isemail() {
    var em = /^\w+@\w+\.\w+$/;
    var email = InfoEmail.value;
    if (email == '' || email == null) {
        InfoEmail.setCustomValidity('邮箱不能为空');
        return false;
    } else if (!em.test(email)) {
        InfoEmail.setCustomValidity('请正确输入邮箱');
        return false;
    } else {
        return true;
    }
}

function isgroup() {
    var objLen = obj.length;
    arr = [];
    for (var i = 0; i < objLen; i++) {
        if (obj[i].checked == true) {
            arr.push(obj[i].value);
        }
    }

    if (arr.length == 0) {
        alert("请至少选择一个组");
        return false;
    } else if (arr.length > 2) {
        arr = [];//数组置空
        alert("请不要选择超过两个组");
        return false;
    } else {
        return true;
    }
}

$("form").submit(function (e) {
    var flagname = isname();
    var flagphone = isphone();
    var flagprofess = isprofess();
    var flagclass = isclass();
    var flagemail = isemail();
    var flaggroup = isgroup();
    var flagid = isid();

    if (flagname == true && flagphone == true && flagprofess == true && flagclass == true &&
        flagemail == true && flaggroup == true && flagid == true) {
        var data = {
            InfoName: InfoName.value,
            InfoPho: InfoPho.value,
            InfoId: InfoId.value,
            InfoProfess: InfoProfess.options[InfoProfess.selectedIndex].value,
            InfoCls: InfoCls.options[InfoCls.selectedIndex].value,
            InfoEmail: InfoEmail.value,
            InfoGroup: arr,
            InfoPower: InfoPower.value
        };
        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: "https://homeapi.atcumt.com/joinus",
            data: JSON.stringify(data),
            dataType: "json",
            complete: function (res) {
                if (res.responseJSON.msg) {
                    alert(res.responseJSON.msg);
                }
                else {
                    alert("服务端发生错误")
                }
                document.getElementById("joinus").style.display = "none";
                document.getElementById("submit_success").style.display = "block";
                setTimeout("window.location.href='https://atcumt.com/'", 1000);
            }
        });
        e.preventDefault();
    } else {
        return false;
    }
})