function CalculateAmount(Index) {
    var Base = parseFloat($("#Base_" + Index).val());
    var Hight = parseFloat($("#Hight_" + Index).val());
    var Quantity = parseFloat($("#Quantity_" + Index).val());
    var Cost = parseFloat($("#CostProductVal_" + Index).val());

    if (Quantity > 0 && Cost > 0) {
        var Amount = 0;
        if (Base > 0 && Hight > 0) {
            var Area = base * hight;
            Amount = parseFloat(Quantity * Cost * Area);
        }
        else {
            Amount = parseFloat(Quantity * Cost);
        }
        $("#AmountProductLF_" + numProduct).html(formatCurrency(Amount));
    }
    else {
        return;
    }
    TotalAmount();
}


function TotalAmount() {
    var Total = 0;
    $("#tblNote .totals").each(function () {
        var Text = $(this).html();
        var ParseAmount = "";
        var Amount = 0;
        if (Text != "-") {
            ParseAmount = Text.replace("$", "").replace(",", "");
            try {
                Amount = parseFloat(ParseAmount);
            } catch (Error) {
                showMessageAJAX(Error, 1, 5000);
            }
            Total += Amount;
        }
        Total += 0;
    });
    $("#Total").html(formatCurrency(Total))
}
