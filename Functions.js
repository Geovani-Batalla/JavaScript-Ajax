function GenerateTableRow(Data_Result) {
    var html = '';
    $.each(Data_Result, function (Index, Data) {
        html +=
            '<tr>' +
            '<td>' +
            '<span>' + Data.date + '</span>' +
            '</td>' +
            '<td>' +
            '<a style="color:blue" href="#" onclick="javascript:RedirectToDetail(' + Data.type + ', ' + Data.id + ')" >' + '' + Data.operation + '' +
            '</a>' +
            '</td>' +
            '<td>' +
            '<span> ' + Data.paymentmethod + ' </span>' +
            '</td>' +
            '<td>' +
            '<span> ' + Data.amount + ' </span>' +
            '</td>' +
            '</tr>'
    });
    $('#tbody-dailyCut').append(html);
    $("#ShowModalDailyCut").click();
}


function AddRow(index, Branches) {

    var html = '';
    html +=
        '<tr>' +
        '<td>' +
        '<select class="form-control" id="Selected_Branch_' + index + '" name="Selected_Branch_' + index + '">' +
        '<option value="0">-Selecciona-</option>' +
        '</select>' +
        '</td>' +
        '<td>' +
        '<input class="form-control" type="text" name="Amount_' + index + '" id="Amount_' + index + '" maxlength="9" onkeypress="return ValidateDecimals(event, this)"/>' +
        '</td>' +
        '<td>' +
        '<input type="text" name="Deadline_' + index + '" id="Deadline_' + index + '" class="form-control" required />' +
        '</td>' +
        '<td>' +
        '<textarea id="Expense_Notes_' + index + '" name="Expense_Notes_' + index + '" class="form-control" maxlength="250"></textarea>' +
        '</td>' +
        '<tr/>'
    $('#New-Expense-tbody').append(html);

    var row = $("<option value=' + Branches.Id + ''>' + Branches.Name + '</option>");
    $('#Selected_Branch_' + index + '').append(row)
}


function DeleteLastRow(Index) {
    $("#New-Expense-tbody tr:last-child").remove()
    TOTALNEWROWS -= 1;
    $("#Input_totaNewRows").val(Index);
}


function Autocomplet(result) {

    var jsonSource = [];
    var json = result;

    for (var i = 0; i < json.length; i++) {
        var item = json[i];
        jsonSource.push({
            "value": item.id,
            "label": item.rfc + " - " + item.name,
            "desc": "",
            "icon": ""
        });
    }

    $("#Fiscal_Name").autocomplete({
        minLength: 0,
        source: jsonSource,
        focus: function (event, ui) {
            $(this).val(ui.item.label);
            $("#Fiscal_Id").val(ui.item.value);
            return false;
        },
        select: function (event, ui) {
            $("#Fiscal_Id").val(ui.item.value);
            return false;
        },

    }).autocomplete("instance")._renderItem = function (ul, item) {
        return $("<li>")
            .append("<div>" + item.label + "<br>" + item.desc + "</div>")
            .appendTo(ul);
    };
}

function RedirectToDetail(Id) {
    window.open("/Controller/Action?Id=" + Id);
}

function ChangeStatus(Id, Status) {

    var Restante = parseFloat($('#Remaining').val());
    var IsEnd = $('#IsStepEnd').val();

    if (Restante > 0 && IsEnd != "") {
        $('#showModal').click();
    }

    else if (Restante < 0 && isEnd != "") {
        var conf = confirm("You must edit the order \n ¿You want to edit it now?");
        if (conf) {
            window.location.href = 'Action/?Id=' + Id;
        }
    }
    else {
        window.location.href = 'ChangeStatus/?Id=' + Id + "&NextStatus=" + Status;
    }
}

$(document).ready(function () {
    $('[id^=Phone_Input]').keypress(ValidateDecimals);
});

$(document).ready(function () {
    $("#Selected_Branch").change(function () {
        var Size = $("#Selected_Branch_ Option:Selected").text();
        $("#Branch").val(Size);
        $("#Send").click();
    })
})

function ToggleAreaCheck(index) {
    var Large_Check = '#New_Product_Large_Format_' + index;
    var Area = '#New_Product_Area_' + index;
    var Area_Check = '#New_Product_Check_Area_' + index;

    $("#New_Product_Check_Area_Div_" + index).toggle();
    if (!$(Large_Check).prop('checked')) {
        $(Area_Check).prop("checked", false);
        $(Area).prop('required', false);
        $(Area).css('display', 'none');
    }
}