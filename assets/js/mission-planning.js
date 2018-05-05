<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset='utf-8' />
    <title>Plan</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.41.0/mapbox-gl.css' rel='stylesheet' />
    <link rel="shortcut icon" type="image/x-icon" href="./images/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/source-sans-pro.css" />
    <link rel="stylesheet" type="text/css" href="./css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="./css/ionicons.min.css">
    <link rel="stylesheet" type="text/css" href="./css/AdminLTE.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/_all-skins.css" />
    <link rel="stylesheet" type="text/css" href="./css/animate.css" />
    <link rel="stylesheet" type="text/css" href="./css/mapstyle.css" />
    <link rel="stylesheet" type="text/css" href="./css/style.css" />

</head>

<body class="hold-transition skin-real-dark layout-top-nav">
    
    <div class="wrapper">
        <header class="main-header">
            <nav class="navbar navbar-static-top">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#"><img src="./images/itu_rover_white.png" alt="ITU Rover Team" style="box-sizing: border-box;
                                                                                                                       width: 60px"></a>
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                            <i class="fa fa-bars"></i>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li><a href="index.html">DASHBOARD</a> </li>
                            <li class="active"><a>PLAN <span class="sr-only">(current)</span></a></li>

                            <li><a href="camera_yedek.html">Camera</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
             
        </header>
   


    <div class="content-wrapper">
        <div class="container-fluid">
            <section class="content">
                <div class="row">
                    <div id='map' class="map-bg"></div>
                </div>
                <div class="row">
                    <!-- Global Info -->
                    <div class="col-md-12">
                        <div class="btn-group">
                            <button type="button" class="btn btn-default btn-flat" id="go-to-rover">GO TO ROVER</button>
                             <button type="button" class="btn btn-default btn-flat" id="add-rover">ADD ROVER</button>
                            <button type="button" class="btn btn-default btn-flat toggle-btn" id="focus-on-rover">FOCUS ON ROVER</button>
                            <button type="button" class="btn btn-default btn-flat toggle-btn" id="edit-markers">EDIT MARKERS</button>
                            <div class="btn-group">
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                          <span class="caret"></span>
                        </button>
                                <ul class="dropdown-menu">
                                    <li class="bg-green"><a style="color:white" id="map-online">Online</a></li>
                                    <li class="bg-yellow"><a id="map-offline-1">Offline(İtu Maslak 1)</a></li>
                                    <li class="bg-yellow"><a id="map-offline-2">Offline(Utah 1)</a></li>
                                    <li class="bg-yellow"><a id="map-offline-3">Offline(Utah 2)</a></li>
                                    <li class="bg-yellow"><a id="map-offline-4">Offline(Isparta)</a></li>
                                </ul>
                            </div>

                        </div>

                        <div class="col-md-4 pull-right">
                            <div class="input-group" id="marker-adder">
                                <span class="input-group-addon bg-gray">lat:</span>
                                <input type="text" class="form-control" placeholder="Latitude" id="addMarkLat">
                                <span class="input-group-addon bg-gray">lng:</span>
                                <input type="text" class="form-control" placeholder="Longtitude" id="addMarkLng">
                                <span class="input-group-btn">
                                <button type="button" class="btn btn-default bg-purple" id="addMarkBtn">Add</button>
                            </span>
                            </div>
                        </div>

                        <div class="col-md-3 ">
                            <div class="input-group" id="go-on-map">
                                <span class="input-group-addon bg-gray">lat:</span>
                                <input type="text" class="form-control" placeholder="Latitude">
                                <span class="input-group-addon bg-gray">lng:</span>
                                <input type="text" class="form-control" placeholder="Longtitude">
                                <span class="input-group-btn">
                                <button type="button" class="btn btn-danger">GO</button>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="padding-top:20px" id="edit-controls">
                    <div class="btn-group-vertical">
                        <button type="button" class="btn btn-default btn-lg bg-grey  toggle-btn" id="add-marker"><span class="fa fa-plus"></span></button>
                        <button type="button" class="btn btn-default bg-grey btn-lg toggle-btn" id="move-marker"><span class="fa fa-arrows"></span></button>
                        <button type="button" class="btn btn-default bg-grey btn-lg toggle-btn" id="remove-marker"><span class="fa fa-trash"></span></button>
                        <br>
                        <br>
                        <button type="button" class="btn btn-default btn-lg bg-red" id="remove-all-markers"><span class="fa fa-trash"></span></button>
                        <br>

                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-2 pull-left">
                        <div class="box box-danger bg-gray " id="convert_section">
                            <div class="box-header with-border">
                                <h3 class="box-title">Converter</h3>
                                <div class="box-tools pull-right">
                                      <button type="button" class="btn open.btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>
                                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
                                </div>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="box-body" style="display: none;">
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">°</label>

                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="deg" placeholder="Degrees">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPassword3" class="col-sm-2 control-label">"</label>

                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="min" placeholder="Minutes">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-sm-2 control-label">'</label>

                                        <div class="col-sm-10">
                                            <input type="number" class="form-control" id="sec" placeholder="Seconds">
                                        </div>
                                    </div>


                                    <!-- /.box-body -->
                                    <div class="box-footer bg-gray">

                                        <input type="button" value="convert" onclick="converter()" id="convert" class="btn btn-info pull-right bg-red" onload="longitude" />
                                        <p>Longitude/Latitude: <span id="outputLong"></span></p>

                                        <div class="form-group">
                                            <label for="inputPassword3" class="col-sm-2 control-label">Longitude <br>
                                                            /Latitude</label>

                                            <div class="col-sm-10">
                                                <input type="number" class="form-control" id="long" placeholder="Longitude">
                                                <p> <span id="outputDeg">°</span>
                                                    <p>" <span id="outputMin"></span></p>
                                                    <p>' <span id="outputSec"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>



                        </div>

                    </div>
                </div>

            </section>

        </div>
        



    </div>
    </div>
    <script type="text/javascript" src="./js/external/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="./js/mission-planning.js"></script>
    <script type="text/javascript" src="./js/external/bootstrap.min.js"></script>
    <script type="text/javascript" src="./js/external/eventemitter2.min.js"></script>
    <script type="text/javascript" src="./js/external/app.min.js"></script>
    <script type="text/javascript" src="./js/ui-customizations.js"></script>
    <script type="text/javascript" src="./js/external/roslib.min.js"></script>
    <script src="./js/map-operations.js" type="text/javascript"></script>
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.41.0/mapbox-gl.js'></script>
    <script src="./js/mission-planning.js" type="text/javascript"></script>
</body>

</html>