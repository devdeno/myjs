<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<script type="text/javascript" src="js/startup.js"></script>
<script type="text/javascript" src="js/originalUrl.js"></script>
<script type="text/javascript" src="js/ebay-import.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/css/main.css">

<link rel="stylesheet" href="css/jquery.toast.min.css">

<link rel="stylesheet" href="css/bootstrap.min.css">

<link rel="stylesheet" href="css/">


<?php include 'WoocommerceAliexpressDropshipping_ShortCodeScriptLoader.php';?>
<?php include 'WoocommerceAliexpressDropshipping_OptionsManager.php';?>
<?php include 'woocommerce-aliexpress-dropshipping.php';?>
<?php include 'WoocommerceAliexpressDropshipping_ShortCodeScriptLoader.php';?>
<?php include 'footer.php';?>


ebay-import


             <div>
                <input class="form-control" type="number" id="productSkueBay" placeholder="paste eBay product Sku" />
            </div>
            <button class="btn btn-primary" style="margin:5px" id="importProductToShopBySkyeBay"> Import eBay product by product sku </button>
            </div>


            <script src="https://kit.fontawesome.com/45abdd2158.js" crossorigin="anonymous"></script>



            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style="padding-top:50px">

                <li class="nav-item active">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="false">AliExpress Import</a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" id="pills-ebay-tab" data-toggle="pill" href="#pills-ebay" role="tab" aria-controls="pills-ebay" aria-selected="true">eBay - import</a>
                </li>


                <li class="nav-item">
                    <a class="nav-link" id="pills-connect-tab" data-toggle="pill" href="#pills-connect" role="tab" aria-controls="pills-connect" aria-selected="false">Connect to store</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-connect-products" data-toggle="pill" href="#pills-products" role="tab" aria-controls="pills-connect" aria-selected="false">Products - wooshark</a>
                </li>

                <!-- <li class="nav-item">
                    <a class="nav-link" id="pills-configuration-tab" data-toggle="pill" href="#pills-configuration" role="tab" aria-controls="pills-configuration" aria-selected="false">Configuration</a>
                </li> -->

                <li class="nav-item">
                    <a class="nav-link" id="pills-advanced-tab" data-toggle="pill" href="#pills-advanced" role="tab" aria-controls="pills-advanced" aria-selected="false">Pro features</a>
                </li>

            </ul>



            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->

            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ////////////////EBAY EBAY///////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->
            <!-- ///////////////////////////////////////////// -->




            <div class="tab-content" id="pills-tabContent">






                <div class="tab-pane fade" id="pills-ebay" role="tabpanel" aria-labelledby="pills-ebay-products">



                    <div style="margin-top:10px; background-color:white" class="alert alert-danger alert-dismissible fade show" role="alert" id="section-2">
                      
                        <!-- <h1 style="text-align:center; padding:10px">Start WordPress Dropshipping buisiness using Wooshark</h1> -->
                        <!-- <h3 style="text-align:center;">Discover Wooshark Dropshipping for AliExpress, ebay, amazon and etsy</h3> -->
                        <!-- <h1 style="font-size:25px; color:black; text-align:right">Get the chrome extension from here  </h1> -->
    

                        <div class="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div class="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from here <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div>

                        <!-- <h4>Free import / month: 50</h4>
                        <h4 id="remaining">Remaining <span class="badge badge-secondary"></span></h4> -->
                    </div>



                    <div class="wrap">


                        <!-- <div class="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div class="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from here <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div> -->






                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import title <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import variations <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import specifications <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import images <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import stock <small style="color:green"></small>
                            </label>
                        </div> -->


                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import Price and sale price<small style="color:green"></small>
                            </label>
                        </div>


                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import Sku and Categories<small style="color:green"></small>
                            </label>
                        </div> -->






                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import and customize description <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>


                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import and customize Reviews and rating <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Use up to 10 stores  <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->


                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Unlimited import <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Bulk import <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->
                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Customize title, price and short description <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->
                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Synchronize stock and price <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Place orders on AliExpress <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>


                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Import and customize reviews images <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->


                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                 customize variations and specifications <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Set up markup price (price formula) <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Edit and select which images to import <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked>
                            <label class="form-check-label" for="defaultCheck2">
                                Choose categories
                            </label>
                        </div>





                        <button id="select-category" style="margin-top:5px" class="btn btn-primary"> Show and select Categories</button>

                        <div class="categories" style="display:none">

                        </div>
                        <!-- </div> -->

                        <!-- <h1>Import products From eBay to store</h1> -->

                        <div style="margin-top:20px;border: 1px solid black;padding: 13px;border-radius: 5px;">
                            <!-- <h3 style=" color:white"> Import products From eBay to store</h3> -->
                            <div class="loader2" style="display:none">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <label for="productSkueBay"> Insert by Sku :</label>
                            <div style="display:flex">
                                <div style="flex:4 1 80%; margin-right:10px">
                                    <input class="form-control" type="number" id="productSkueBay" placeholder="paste eBay product Sku" />
                                </div>
                                <div style="flex: 1 1 20%">
                                    <button class="btn btn-primary" style="width:100%" id="importProductToShopBySkyeBay"> Import</button>
                                </div>
                            </div>


                            <div style="height:30px">
                            </div>
                        </div>

                        <div class="search-form" style="margin-top:20px; border: black solid 1px;padding: 17px;border-radius: 5px;margin-bottom: 25px; margin-top:20px">
                            <label>Search ebay by keyword</label><input placeholder='Search keyword example, shoes, smartphones, etc..' type='text' class="form-control" id="searcheBayKeyword">
                            <button style="margin-top:10px" class="btn btn-success" id="seacheBayProductsButton"> Search eBay Products</button>

                        </div>
                        <div id="ebay-product-search-container" style="display:flex; -justify-content: space-between;flex-wrap:wrap">

                        </div>

                        <nav aria-label="pagination" style="text-align:center;">
                            <ul id="ebay-pagination" class="pagination pagination-lg justify-content-center">
                                <li id="ebay-page-1" class="ebay-page-item"><a class="page-link active active">1</a></li>

                                <!-- <li class="page-item"><a class="page-link" href="#">2</a></li> -->
                                <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                            </ul>
                        </nav>





                    </div>







                </div>





                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->

                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- //////////////ALIEXPRESS/////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->

                <div class="tab-pane active in" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

      


                    <div style="margin-top:10px; background-color:white" class="alert alert-danger alert-dismissible fade show" role="alert" id="section-2">
                                          <!-- <h1 style="text-align:center; padding:10px">Start WordPress Dropshipping buisiness using Wooshark</h1> -->
                        <!-- <h3 style="text-align:center;">Discover Wooshark Dropshipping for AliExpress, ebay, amazon and etsy</h3> -->
                        <!-- <h1 style="font-size:25px; color:black; text-align:right">Get the chrome extension from here  </h1> -->
                        <div class="alert alert-default alert-dismissible fade show" role="alert" id="section-1" style="margin-top:10px; padding-left: 0px; text-align:right;  font-size: 30px;; font-family: fantasy">
                             </div>
                        <!-- <h4>Free import / month: 50</h4>
                        <h4 id="remaining">Remaining <span class="badge badge-secondary"></span></h4> -->

                        <div class="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div class="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from here <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div>


                    </div>



                    <div class="wrap">
                        <!-- <h1>AliExpress</h1> -->

                        <!-- <div class="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div class="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from here <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div> -->











                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import title <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import variations <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import specifications <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import images <small style="color:green"></small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import stock <small style="color:green"></small>
                            </label>
                        </div> -->


                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import Price and sale price<small style="color:green"></small>
                            </label>
                        </div>


                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import Sku and Categories<small style="color:green"></small>
                            </label>
                        </div> -->






                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import and customize description <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>


                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Import and customize Reviews and rating <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Use up to 10 stores  <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->


                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Unlimited import <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Bulk import <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->
                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Customize title, price and short description <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->
                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Synchronize stock and price <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" disabled>
                            <label class="form-check-label" for="defaultCheck1" style="color:grey">
                                Place orders on AliExpress <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>


                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Import and customize reviews images <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->


                        <!-- <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                 customize variations and specifications <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Set up markup price (price formula) <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
                            <label style="color:grey" class="form-check-label" for="defaultCheck2">
                                Edit and select which images to import <small style="color:green">(available on the chrome extension)</small>
                            </label>
                        </div> -->
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked>
                            <label class="form-check-label" for="defaultCheck2">
                                Choose categories
                            </label>
                        </div>








                        <!-- <button id="price-formula" style="margin-top:5px" class="btn btn-primary"> Set </button>
                         <div class="markup" style="display:none">

                        </div> -->

                        <button id="select-category" style="margin-top:5px" class="btn btn-primary"> Show and select Categories</button>

                        <div class="categories" style="display:none">

                        </div>



                        <div style="margin-top:20px; margin-top: 20px;border: 1px solid black;padding: 13px;border-radius: 5px;">
                            <!-- <h3> Import products From AliExpress to store</h3> -->


                            <div class="loader2" style="display:none">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <label for="productSku"> Insert by Sku :</label>
                            <div style="display:flex">
                                <div style="flex:4 1 80%; margin-right:10px">
                                    <input class="form-control" type="number" id="productSku" placeholder="paste AliExpress product Sku" />
                                </div>
                                <div style="flex: 1 1 20%">
                                    <button class="btn btn-primary" style="width:100%" id="importProductToShopBySky"> Import</button>

                                </div>
                            </div>


                            <div style="height:30px">
                            </div>

                            <label for="productUrl"> Insert by Url :</label>
                            <div style="display:flex">
                                <div style="flex: 4 1 80%; margin-right:10px">

                                    <input class="form-control" type="text" id="productUrl" placeholder="paste AliExpress product url" />
                                </div>
                                <div style="flex: 1 1 20%">

                                    <button class="btn btn-primary" style="width:100%" id="importProductToShopByUrl"> Import</button>
                                </div>
                            </div>




                        </div>

                        

                        <div class="search-form" style=" padding:2%;  border: solid 1px grey; margin: 20px 0px ;border-radius: 10px; background-color:white">
                                <h4 style="font-weight:bold">Search by keyword</h4>

                                <div style="display:flex">
                                    <input style="border-radius: 10px; flex: 1 1 83%" placeholder='Search keyword example, shoes, smartphones, etc..' type='text' class="custom-form-control" style="border: 1px solid grey;border-radius: 10px; !important" id="searchKeyword">
                                    <button style="border-radius: 10px; flex: 1 1 17%; margin:0; margin-left:5px;     " class="btn btn-primary" id="seachProductsButton"> Search Products</button>
                                </div>

                                        <h4 style=" margin-top:10px; font-weight:bold">
                                            Price sorting
                                        </h4>
                                        <div style="display:flex">
                                            <div style=" flex: 1 1 50%; padding:10px; margin-top:10px;    color: grey;"> <input type="radio" name="sort" value="orignalPriceUp"> Price ascending<br></div>
                                            <div style="flex: 1 1 50%; padding:10px; margin-top:10px;     color: grey;"><input type="radio" name="sort" value="orignalPriceDown"> Price descending<br></div>
                                        </div>

                                        <h4 style="padding:10px;font-weight:bold">
                                            Preferences
                                        </h4>

                                        <div style="margin-left:10px">
                                            <span style="color: grey;"><input style="padding:10px; margin-top:10px" id="highQualityItems" type="checkbox" /> only high quality Items </span>
                                        </div>


                                        <div style="margin-left:10px">
                                            <span style="color: grey;"><input style="padding:10px; margin-top:10px" id="isFreeShipping" type="checkbox" /> Free shipping</span>
                                        </div>


                                        <div style="margin-left:10px">
                                            <span style="color: grey;"><input style="padding:10px; margin-top:10px" id="isFastDelivery" type="checkbox" /> Fast delivery</span>
                                        </div>

                                        <h4 style="padding:10px;font-weight:bold">
                                            Price
                                        </h4>

                                       

                                        <div style="margin-left:10px">
                                            <span style="color: grey;"><input style="padding:10px; margin-top:10px" id="minPrice" type="number" /> Min price</span>
                                        </div>


                                        <div style="margin-left:10px">
                                            <span style="color: grey;"><input style="padding:10px; margin-top:10px" id="maxPrice" type="number" /> Max price</span>
                                        </div>

                                        <!-- <h4 style="padding:10px;font-weight:bold">
                                            Language
                                        </h4>


                                       


                                            <div style="padding:10px"> <input type="radio" name="language" value="en" checked="checked"> English<br></div>
                                            <div style="padding:10px"><input type="radio" name="language" value="fr"> French<br></div>
                                            <div style="padding:10px"><input type="radio" name="language" value="es"> Spanish<br></div>
                                            <div style="padding:10px"><input type="radio" name="language" value="it"> Italian<br></div>
                                            <div style="padding:10px"><input type="radio" name="language" value="de"> german<br></div> 

                                            <div style="padding:10px"><input type="radio" name="language" value="en" disabled> Other (pt,ru,es,id,it,nl,tr,vi,th,de,ko,ja,ar,pl,he, etc) <small style="color:green">(available on the chrome extension)</small> <br></div>

                             -->

                                    


                            </div>


                        <div id="product-search-container" style="display:flex; -justify-content: space-between;flex-wrap:wrap; border: 1px solid black;border-radius: 8px;">

                        </div>

                        <nav aria-label="pagination" style="text-align:center;">
                            <ul id="pagination" class="pagination pagination-lg justify-content-center">

                            </ul>
                        </nav>





                    </div>




                </div>




                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->




                <div class="tab-pane fade" id="pills-products" role="tabpanel" aria-labelledby="pills-products-products">
                    <div style="margin-top:10px; background-color:white" class="alert alert-danger alert-dismissible fade show" role="alert" id="section-2">
                     
                        <!-- <h1 style="text-align:center; padding:10px">Start WordPress Dropshipping buisiness using Wooshark</h1> -->
                        <!-- <h3 style="text-align:center;">Discover Wooshark Dropshipping for AliExpress, ebay, amazon and etsy</h3> -->
                        <!-- <h1 style="font-size:25px; color:black; text-align:right">Get the chrome extension from here  </h1> -->
                        <div class="alert alert-default alert-dismissible fade show" role="alert" id="section-1" style="margin-top:10px; padding-left: 0px; text-align:right;  font-size: 30px;; font-family: fantasy">
                                      </div>

                        <!-- <h4>Free import / month: 50</h4>
                        <h4 id="remaining">Remaining <span class="badge badge-secondary"></span></h4> -->

                        <div class="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div class="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from here <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div>
                    </div>

                    <table id="products-wooshark" class="table table-striped">
                        <thead>
                            <tr>
                                <th width="10%">image</th>
                                <th width="10%">sku</th>
                                <th width="10%">id</th>
                                <th width="22%">title</th>
                                <th width="12%">link to original page</th>
                                <!-- <th width="12%">Update product price and quantity</th> -->
                                <th width="12%">Import Reviews and rating</th>
                                <!-- <th width="12%">Last updated</th> -->

                            </tr>
                        </thead>

                    </table>


                    <div class="loader2" style="display:none">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <nav aria-label="product-pagination" style="text-align:center;">
                        <ul id="product-pagination" class="pagination pagination-lg justify-content-center">
                            <!-- <li id="product-page-1" class="-product-page-item"><a class="page-link active active">1</a></li> -->

                            <!-- <li class="page-item"><a class="page-link" href="#">2</a></li> -->
                            <!-- <li class="page-item"><a class="page-link" href="#">3</a></li> -->
                        </ul>
                    </nav>



                </div>



                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->
                <!-- ///////////////////////////////////////////// -->





                <!-- ///////////////////////////////////////////// -->


                <div class="tab-pane fade" id="pills-connect" role="tabpanel" aria-labelledby="pills-connect-tab">
                    <div style="margin-top:10px; background-color:white" class="alert alert-danger alert-dismissible fade show" role="alert" id="section-2">
                      
                        <!-- <h1 style="text-align:center; padding:10px">Start WordPress Dropshipping buisiness using Wooshark</h1> -->
                        <!-- <h3 style="text-align:center;">Discover Wooshark Dropshipping for AliExpress, ebay, amazon and etsy</h3> -->
                        <!-- <h1 style="font-size:25px; color:black; text-align:right">Get the chrome extension from here  </h1> -->
                        <div class="alert alert-default alert-dismissible fade show" role="alert" id="section-1" style="margin-top:10px; padding-left: 0px; text-align:right;  font-size: 30px;; font-family: fantasy">
                            <img class="display-block margin-right" width="16" src="<?php echo plugin_dir_url(__FILE__) . 'images/chrome-extension-logo.png'; ?>" alt="chrome extension">

                            <strong>Save time and efforts by getting the chrome extension from here <a targer="_blank" href="https://www.wooshark.com/wooshark-dropshipping"> <i class="fas fa-download fa-1x"></i> </a></strong>
                            <button type="button" class="close" id="close-1" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <!-- <h4>Free import / month: 50</h4>
                        <h4 id="remaining">Remaining <span class="badge badge-secondary"></span></h4> -->

                        <div class="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div class="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from here <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div>
                    </div>

                    <div class="loader" style="display:none; z-index:9999">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>



                    <!-- <button class="btn btn-info" id="displayConnectToStore" style="    font-family: fantasy;background-color; #ddd5d5;  color: white; margin-bottom:5px">Connect to store</button> -->

                    <div id="connect-to-store">

                        <div>
                            <label for="website"> Wordpress url</label>
                            <input class="website form-control" id="website" value="https://libromart.com" type="text" name="website" placeholder="Wordpress url, Must start with http or https" />

                        </div>


                        <div>
                            <label for="key_client"> Your Key client :</label>

                            <input class="key_client form-control" id="key_client" type="text" name="key_client" value="ck_c4a05b823a32ad3e5ed3f13995bf8cfcbeffb9bf" placeholder="Your Key client.." />

                        </div>
                        <div>

                            <label for="sec_client"> Your secret client :</label>

                            <input class="sec_client form-control" id="sec_client" type="text" name="sec_client" value="cs_a4cbcf94a2dd3efb9b28fba15fd57116733583d1" placeholder="Your secret client.." />


                        </div>


                        <button class="btn btn-primary" style="margin-top:5px" id="connectToStore"> Connect to store </button>
                        <button class="btn btn-default" style="margin:5px"><a href="https://youtu.be/OB4D-4QDGAk"> How to generate client key and secret key (video) </a></button>

                        <div id="isConnectedArea" style="width:100%; border: 1 px black; padding:10px; height:30px"></div>


                    </div>





                </div>

                <div class="tab-pane fade" id="pills-advanced" role="tabpanel" aria-labelledby="pills-advanced-tab">
                    <div style="margin-top:10px; background-color:white" class="alert alert-danger alert-dismissible fade show" role="alert" id="section-2">
                       
                        <!-- <h1 style="text-align:center; padding:10px">Start WordPress Dropshipping buisiness using Wooshark</h1> -->
                        <!-- <h1 style="font-size:25px; color:black; text-align:right">Get the chrome extension from here  </h1> -->
     
     
                        <div id="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div id="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from the connect tab <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div>


                    </div>





   



                   
                <div class="tab-pane fade" id="pills-configuration" role="tabpanel" aria-labelledby="pills-configuration-tab">
                    <div style="margin-top:10px; background-color:white" class="alert alert-danger alert-dismissible fade show" role="alert" id="section-2">
                            <!-- <h1 style="text-align:center; padding:10px">Start WordPress Dropshipping buisiness using Wooshark</h1> -->
                        <!-- <h3 style="text-align:center;">Discover Wooshark Dropshipping for AliExpress, ebay, amazon and etsy</h3> -->
                        <!-- <h1 style="font-size:25px; color:black; text-align:right">Get the chrome extension from here  </h1> -->
                       
                           <!-- <h4>Free import / month: 50</h4>
                        <h4 id="remaining">Remaining <span class="badge badge-secondary"></span></h4> -->

                        <div class="connected" style="padding:5px; display:none">

                            <i style="color:green" class="fas fa-wifi fa-3x">
                                <h4>Great, you are now connected to your store and ready to start importing products</h4>
                            </i>

                        </div>


                        <div class="not-connected" style="padding:5px;display:none">

                            <i style="color:red" class="fas fa-wifi fa-3x">
                                <h4>You are not connected to your store, please connect to your store from here <a href="#pills-connect-tab"></a></h4>
                            </i>

                        </div>
                    </div>


                    <div style="padding:5px"> <input type="checkbox" disabled id="isPublish" name="isPublish"> <span for="isPublish">Publish product / save it as a draft <span><br></div>
                    <div style="padding:5px"> <input type="checkbox" disabled id="isSpecification" name="isSpecification"> Import product specification<br></div>
                    <div style="padding:5px"> <input type="checkbox" disabled id="isImages" name="isImages"> Import images<br></div>
                    <div style="padding:5px"> <input type="checkbox" disabled id="isDescription" name="isDescription"> Import description<br></div>






                </div>
            </div>


            <div id="modal-container"> </div>

            <!-- <button type="button" style="margin:10px; "  class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg"> Import reviews to product</button> -->
            <div class="modal fade bd-example-modal-lg" id="myModalReviews" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="z-index:99999">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <button type="button" style="width:25%; margin-top:10px; display:block" class="btn btn-primary" id="addReview" style="width:50%;margin-top:10px"> Add Review</button>

                            <div id="customReviews" style="overflow-y:scroll;height:500px">
                                <table id="table-reviews" class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Review</th>
                                            <th>Username</th>
                                            <th>email</th>
                                            <th>Date creation</th>
                                            <th>Rating</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="confirmReviewInsertion" class="btn btn-primary" data-dismiss="modal">Insert Reviews</button>

                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            
