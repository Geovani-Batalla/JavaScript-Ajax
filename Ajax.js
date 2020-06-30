function Load_DailyCut(Date) {

    $('#tbody-dailyCut').empty();

    var DateString = "" + Date + "";
    var DateArr = DateString.match(/.{1,2}(.$)?/g);
    var branchId = $("#branches").val();

    $.ajax({
        url: BaseUrl + 'Controller/Action?year=' + DateArr[1] + '&&month=' + DateArr[2] + '&&day=' + DateArr[3] + '&&branchId=' + branchId,
        type: "POST",
        dataType: "json",
        beforeSend: function (a) {
        },
        cache: false,
        async: true,
        success: function (result) {
            try {
                if (result.code == 400) {
                    GenerateTableRow(result.result.dailyCuts);
                }
                else {
                    showMessageAJAX(result.Message, 1, 5000);
                }             
            } catch (Error) {
                showMessageAJAX(Error, 1, 5000);
            } 
        }
    });
}


function Send_Email(PdfBase64, FileNamePdf, XmlBase64, FileNameXml, customerGuid, orderGuid) {

    var PdfTaxData = {
        PdfBase64: PdfBase64,
        FileNamePdf: FileNamePdf,
        XmlBase64: XmlBase64,
        FileNameXml: FileNameXml,
        CustomerGuid: customerGuid,
        OrderGuid: orderGuid
    }

    $.ajax({
        type: "POST",
        url: BaseUrl + "Controller/Action",
        data: PdfTaxData,
        success: function (result) {
            try {
                if (result.code == 400) {
                    window.location.reload();
                }
                else {
                    showMessageAJAX(result.Message, 1, 5000);
                }
            } catch (Error) {
                showMessageAJAX(Error, 1, 5000);
            } 
        }
    });
}


function Load_FiscalData() {
    $.ajax({
        url: BaseUrl + 'Controller/Action',
        type: "GET",
        dataType: "json",
        beforeSend: function (a) {
        },
        cache: false,
        async: true,
        success: function (result) {
            try {
                if (result.code == 400) {
                    Autocomplet(result.result);
                }
                else {
                    showMessageAJAX(result.Message, 1, 5000);
                }
            } catch (Error) {
                showMessageAJAX(Error, 1, 5000);
            } 
        }
    });
}


function Upload_File(element) {

    var formData = new FormData();
    var file = $(element).prop('files')[0];

    formData.append("FileUpload", file);
    $.ajax({
        url: BaseUrl + 'Controller/Action',
        type: "POST",
        dataType: "json",
        data: formData,
        beforeSend: function (a) {
        },
        cache: false,
        contentType: false,
        processData: false,
        async: true,
        success: function (result) {
            try {
                if (result.code == 400) {
                    window.location.reload();
                }
                else {
                    showMessageAJAX(result.Message, 1, 5000);
                }
            } catch (Error) {
                showMessageAJAX(Error, 1, 5000);
            } 
        }
    });
}
