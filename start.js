//import { jQuery } from './jquery.toast.min.js';

var hostname = "https://wooshark.website";
var wooshark_params = null;

function getImages(e) {
    return e;
}





function handleServerResponse(e, t, o) {
    if (200 === e) {
        try {
            updateIsAllowed(),
                getIsAllowedToImport(),
                displayToast("Product " + t + "  imported successfully", "green");
        } catch (e) {
            displayToast("exception during import", "red");
        }
        jQuery(".loader2").css({
            display: "none"
        });
    }

}

function importProducts() {

}


function getProductId(e) {
    var t = e.indexOf(".html");
    return e.substring(0, t).match(/\d+/)[0];
}



function displayPaginationSection(e, t) {
    let o = Math.ceil(e / 20);
    o > 20 && (o = 20);
    for (var r = 1; r < o + 1; r++)
        r == t ?
        jQuery(
            ' <li style="color:red" id="product-page-' +
            r +
            '" class="product-page-item"><a style="color:red" class="page-link">' +
            r +
            "</a></li>"
        ).appendTo("#product-pagination") :
        jQuery(
            ' <li id="product-page-' +
            r +
            '" class="product-page-item"><a class="page-link">' +
            r +
            "</a></li>"
        ).appendTo("#product-pagination");
    jQuery('.nav-item a[id="pills-connect-products"]').html(
        'products <span class="badge badge-light">' + e + "</span>"
    );
}

let numberOfimportedProducts = 1;

function getProductsCount() {

}


//loaders
function startLoading(e) {
    e || (e = "loader2"),
        jQuery("." + e).css({
            display: "block",
            position: "fixed",
            "z-index": 9999,
            top: "50px",
            right: "50px",
            "border-radius": "35px",
            "background-color": "black"
        });
}

function stopLoading(e) {
    e || (e = "loader2"), jQuery("." + e).css({
        display: "none"
    });
}



function searchProducts(e) {
    jQuery("#pagination").empty(),
        jQuery("#pagination").show(),
        jQuery("#product-search-container").empty();
    var t = jQuery('input[name="language"]:checked')[0] ?
        jQuery('input[name="language"]:checked')[0].value :
        "en";
    searchByKeyWord(jQuery("#searchKeyword").val(), t, e);
}
jQuery(document).on("click", ".page-item", function (e) {
    var t = 1;
    try {
        t = parseInt(jQuery(this)[0].innerText);
    } catch (e) {
        (t = 1),
        displayToast();
    }
    searchProducts(t);
});


var index = 0;

function displayToast(e, t) {

}


//search pagination
function displayPAginationForSearchByKeyword(productsCounts, highlightedIndex) {
    var numberOfPage = Math.round(productsCounts / 40);
    if (numberOfPage > 17) {
        numberOfPage = 17;
    }
    for (var i = 1; i < numberOfPage; i++) {
        if (i == highlightedIndex) {
            jQuery(
                ' <li style="color:red" id="page-' +
                i +
                '" class="page-item"><a style="color:red" class="page-link">' +
                i +
                "</a></li>"
            ).appendTo("#pagination");
        } else {
            jQuery(
                ' <li id="page-' +
                i +
                '" class="page-item"><a class="page-link">' +
                i +
                "</a></li>"
            ).appendTo("#pagination");
        }
    }
}

function getSelectedLanguage() {
    return jQuery('input[name="language"]:checked')[0] ?
        jQuery('input[name="language"]:checked')[0].value :
        "en";
}

//search

function searchByKeyWord(s, ttt, pageNo) {
    jQuery("#product-pagination").empty();
    startLoading();
    let searchKeyword = jQuery("#searchKeyword").val();
    let sort = jQuery('input[name="sort"]:checked')[0] ?
        jQuery('input[name="sort"]:checked')[0].value :
        "";
    let highQualityItems = jQuery("#highQualityItems").prop("checked");
    let isFreeShipping = jQuery("#isFreeShipping").prop("checked");
    let isFastDelivery = jQuery("#isFastDelivery").prop("checked");
    let minxPrice = jQuery("#minPrice").val();
    let maxPrice = jQuery("#maxPrice").val();
    let country = "US";

    let language = getSelectedLanguage();
    if (language && language == "fr") {
        country = "FR";
    }
    if (language && language == "es") {
        country = "ES";
    }
    if (language && language == "it") {
        country = "IT";
    }
    if (language && language == "de") {
        country = "DE";
    }
    // let language = 'en_us'
    let currency = jQuery('input[name="currency"]:checked')[0] ?
        jQuery('input[name="currency"]:checked')[0].value :
        "";

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            var responseWoocomerce = xmlhttp.status;
            if (responseWoocomerce === 200) {
                try {
                    data = JSON.parse(xmlhttp.response).data;
                    // console.log(data);

                    try {
                        var jsonData = JSON.parse(data);
                        var products = jsonData.result.products;
                        // console.log(jsonData.result.products);
                        products.forEach(function (item) {
                            jQuery(
                                '<div class="card text-center" style="flex: 1 1 20%; margin:30px;border-radius: 10px; padding:50px">' +
                                '  <div class="card-body">' +
                                '<h5 class="card-title"> ' +
                                item.productTitle.substring(0, 70) +
                                "</h5>" +
                                '<img src="' +
                                item.imageUrl +
                                '" width="150"  height="150"></img>' +
                                '<div>Sale Price: <p class="card-text" style="color:red">' +
                                item.salePrice +
                                "</div></p>" +
                                'Sku: <p class="card-text" id="sku" ">' +
                                item.productId +
                                "</p>" +
                                "<div>" +
                                '<div><a  style="width:80%" id="importToShopBulk" class="importToS btn btn-primary">Import to shop</a></div>' +
                                // '<div><a  style="width:80%; margin-top:5px"" id="addToWaitingList" class=" btn btn-primary">Add to waiting list</a></div>' +
                                '<div><a target="_blank" style="width:80%; margin-top:5px" href="' +
                                item.productUrl +
                                '" class="btn btn-primary">Product url</a></div>' +
                                "</div>" +
                                "</div>" +
                                "</div>"
                            ).appendTo("#product-search-container");
                        });
                        displayPAginationForSearchByKeyword(
                            jsonData.result.totalResults,
                            pageNo
                        );

                        jQuery(".loader2").css({
                            display: "none"
                        });

                        // if (products && products.length) {
                        //     var listOfSkus = products.map(function(item) {
                        //         return item.productId;
                        //     });
                        //     getAlreadyImportedProducts(listOfSkus);
                        // }
                    } catch (e) {
                        displayToast("Empty result for this search keyword", "red");
                        jQuery(".loader2").css({
                            display: "none"
                        });
                        displayPAginationForSearchByKeyword(1000, pageNo);
                    }
                } catch (e) {
                    jQuery(".loader2").css({
                        display: "none"
                    });
                    displayPAginationForSearchByKeyword(1000, pageNo);
                }
            } else {
                displayToast(
                    "Error while getting results, please try again, if issue persist, please contact wooshark support ",
                    "red"
                );

                jQuery(".loader2").css({
                    display: "none"
                });
                displayPAginationForSearchByKeyword(1000, pageNo);
            }
        }
    };

    xmlhttp.open("POST", hostname + ":8002/searchAliExpressProductNewApi", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(
        JSON.stringify({
            searchKeyword: searchKeyword,
            pageNo: pageNo,
            language: language,
            country: country,
            sort: sort,
            highQualityItems: highQualityItems,
            currency: currency,
            isFreeShipping: isFreeShipping,
            isFastDelivery: isFastDelivery,
            priceMinMax: {
                min: minxPrice,
                max: maxPrice
            }
        })
    );
}


jQuery(document).on("click", "#seachProductsButton", function (e) {
    searchProducts(1);
})


jQuery(document).ready(function () {
    searchByKeyWord("", "en", 1),
        getProductsCount(),
        getIsAllowedToImport(),
        jQuery('.nav-item a[id="pills-advanced-tab"]').html(
            jQuery('.nav-item a[id="pills-advanced-tab"]').text() +
            '<span   class="badge badge-light"> <i class="fas fa-star"></i> </span>'
        ),
        jQuery("#remaining").text(
            "Imported products: " + localStorage.getItem("totalImportItems") || 1
        ),
        restore_options();
});






///others 


function getIsAllowedToImport() {
    // jQuery.ajax({
    //     url: wooshark_params.ajaxurl,
    //     type: "POST",
    //     dataType: "JSON",
    //     data: {
    //         action: "isAllowed-to-push"
    //     },
    //     success: function (e) {
    //         console.log("you can", e),
    //             e && parseInt(e)
    //     },
    //     error: function (e) {},
    //     complete: function () {}
    // });
}


function restore_options() {
    var e, t, o;
    (e = localStorage.getItem("website")),
    (t = localStorage.getItem("key_client")),
    (o = localStorage.getItem("sec_client"))
    // (document.getElementsByClassName("website")[0].value = e || ""),
    // (document.getElementsByClassName("key_client")[0].value = t || ""),
    // (document.getElementsByClassName("sec_client")[0].value = o || ""),
    e && t && o ?
        connectToStore() :
        (jQuery(".not-connected").show(),
            jQuery(".connected").hide(),
            jQuery('.nav-item a[id="pills-connect-tab"]').css({
                "background-color": "red"
            }),
            jQuery('.nav-item a[id="pills-connect-tab"]').css({
                color: "white"
            }));
}
