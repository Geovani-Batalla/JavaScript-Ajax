function ValidateDecimals(e, field) {
    var keycode = (e.which) ? e.which : e.keyCode;
    if (!(keycode == 8 || keycode == 46) && (keycode < 48 || keycode > 57)) {
        return false;
    }
    else {
        var parts = e.srcElement.value.split('.');
        if (parts.length > 1 && keycode == 46)
            return false;
        return true;
    }
}

function TrimInput() {
    var str = $("#Name").val();
    var res = str.split(" ");
    var newR = "";
    for (var i = 0; i < res.length; i++) {
        if (res[i].length > 0) {
            newR += res[i] + ' ';
        }
    }
    newR[newR.length - 1] = '';
    $("#Name").val(newR);
}


function ValidateNumbers(evt) {
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

