function showMessageAJAX(message, type, time) {
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-bottom-right",
        "closeButton": true,
        "progressBar": true,
        "timeOut": time
    };
    switch (type) {
        case 'Error' || '1':
            {
                toastr.error(message);
                break;
            }
        case 'Warning' || '2':
            {
                toastr.warning(message);
                break;
            }
        case 'Information' || '3':
            {
                toastr.info(message);
                break;
            }
        case 'Success' || '4':
            {
                toastr.success(message);
                break;
            }
        default: {
            toastr.info(message);
            break;
        }
    }
}

function BlockKeyboardComplement() {
    $.blockUI({
        message: "Wait a moment...",
        centerY: 0,
        css: { top: '20px', left: '', right: '20px' }
    });
    setTimeout($.unblockUI, 15000);
}

function GoBack() {
    window.history.back();
}

