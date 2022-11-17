window.onload = function () {
    UrunListele();
};

function UrunListele() {

    var url = "https://api.akilliticaretim.com/api/Product/ListProducts/0";

    var GUID = readCookie("GUID");
    var authorizationToken = readCookie("Token");

    $.ajax({
        type: "GET",
        headers: { "GUID": GUID, "Authorization": authorizationToken },
        contentType: "application/json",
        url: url,
        success: function (result) {

            if (result.status) {

                var el = $("#tblProducts");
                el.html("");
                var html_products =
                    `<thead class="thead-dark">
                <tr>
                <th>PROD DETAIL</th>
                <th>KEY</th>
                <th>ID</th>
                <th>NAME</th>
                <th>STOCK CODE</th>
                <th>STOCK</th>
                <th>PRICE</th>
                <th>PRICE VAT</th>
                <th>STOCK TYPE</th>
                <th>CURRENCY</th>
                <th>TOTALROW</th>
                <th>KDV</th>
                <th>LIST PRICE</th>
                <th>LIST PRICE VAT</th>
                <th>UNIT INCREMENT</th>
                <th>DISCOUNT RATE</th>
                <th>IS IN FAVORITE</th>
                <th>MAX SALE UNIT</th>
                <th>MIN SALE UNIT</th>
                <th>IN CART QTY</th>
                <th>PROD IMAGES</th>
                </tr></thead>`;

                $.each(result.data, function (i, v) {

                    html_products +=
                        `<tr>
                        <td><input type="button" class="btn btn-success btn-hover center" value="Ürün Detayı" onclick="javascript:GetProductDetail(${v.id});"/></td>
                        <td id="key_${v.id}">${v.key}</td>
                        <td id="id_${v.id}">${v.id}</td>
                        <td id="name_${v.id}">${v.name}</td>
                        <td id="stockCode_${v.id}">${v.stockCode}</td>
                        <td id="stock_${v.id}">${v.stock}</td>
                        <td id="price_${v.id}">${v.price}</td>
                        <td id="priceVat_${v.id}">${v.priceVat}</td>
                        <td id="stockType_${v.id}">${v.stockType}</td>
                        <td id="currency_${v.id}">${v.currency}</td>
                        <td id="totalRow_${v.id}">${v.totalRow}</td>
                        <td id="kdv_${v.id}">${v.kdv}</td>
                        <td id="listPrice_${v.id}">${v.listPrice}</td>
                        <td id="listPriceVat_${v.id}">${v.listPriceVat}</td>
                        <td id="unitIncrement_${v.id}">${v.unitIncrement}</td>
                        <td id="discountRate_${v.id}">${v.discountRate}</td>
                        <td id="isInFavorite_${v.id}">${v.isInFavorite}</td>
                        <td id="maxSaleUnit_${v.id}">${v.maxSaleUnit}</td>
                        <td id="minSaleUnit_${v.id}">${v.minSaleUnit}</td>
                        <td id="inCartQty_${v.id}">${v.inCartQty}</td>
                        <td id="prodImages_${v.id}">${v.prodImages}</td>
                        </tr>`;
                });

                el.html(html_products);
            } else {
                alert("DURUM FALSE GELDİ");
            }
        },
        error: function (xhr) {
            alert("API Hatalı İstek: " + xhr.responseText);
        }

    });
}
function GetProductDetail(rowID) {

    
    var name = $("#name_" + rowID).text();
    var stockCode = $("#stockCode_" + rowID).text();
    var stock = $("#stock_" + rowID).text();
    var price = $("#price_" + rowID).text();

    $("#productDetailID").val(rowID);
    $("#txtName").val(name);
    $("#txtStockCode").val(stockCode);
    $("#txtStock").val(stock);
    $("#txtPrice").val(price);

    ProductDetailModal('show');


}
function ClearProductDetailModal() {
    $("#productDetailID").val("");
    $("#txtName").val("");
    $("#txtStockCode").val("");
    $("#txtStock").val("");
    $("#txtPrice").val("");
    ProductDetailModal('hide')
}
function ProductDetailModal(prop) {
    $('#mdlProductDetail').modal(prop);
}
function UpdateProduct() {
    alert("UpdateProduct fonksiyonu çalıştı ve FormCollection dan değerlerimizi alıp api ile kaydedilebilir durumdadır.Bu alan kodlanmadı");
}