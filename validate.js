// ����������� ������� �������� ���������.
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

// ����������� ������������ ������� ��������� �����.
function init() {
	var form = document.getElementById("form1")
    //form.userName.onchange = nameOnChange;
	form.userName.addEventListener("change", nameOnChange);
    form.email.addEventListener("change", emailOnChange);
    form.zip.addEventListener("change", zipcodeOnChange);
    form.addEventListener("submit", onsubmitHandler);
}

// ����� �������� �������� � �������� �� ����������� ���������.
function validate(elem, pattern) {
    var res = pattern.test(elem.value);
    if (res === false) {
        elem.className = "invalid";
    } // ��������� CSS ������ 
    else {
        elem.className = "valid";
    }
}

// ����������� ������� ��������� ������ � ����.
function nameOnChange() {
    var pattern = /\S/;
    validate(this, pattern);
}

function emailOnChange() {
    var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    validate(this, pattern);
}

function zipcodeOnChange() {
    var pattern = /\d{5}/;
    validate(this, pattern);
}

// ������� ��� �������� ����� �� ������.
function onsubmitHandler(e) {

    for (var i = 0; i < form1.elements.length; ++i) {
        if (form1.elements[i].type === "text")
            form1.elements[i].className = "valid";
    }

    var invalid = false;

    for (var i = 0; i < form1.elements.length; ++i) {
        var e = form1.elements[i];
        // �������� ���� �������� � ������� ����������� ������� onchange.
        if (e.type == "text" && e.onchange) {
            e.onchange(); // ������ ������� onchanhe
            if (e.className == "invalid") invalid = true;
        }
    }

    if (invalid) {
        alert("�������� ������ ��� ���������� �����.");
        e.preventDefault();
        return false; // ������ �������� �����.
    }
}

