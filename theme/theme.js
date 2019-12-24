define(function(require, exports, module) {
    require("css!bootstrap/../../css/bootstrap.css");
    require("css!app/../../main.css");

    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];

    require("css!../" + moduleId + "/hidden-header-theme/theme.css");
});