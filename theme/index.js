define(function(require, exports, module) {

    var UI = require("ui");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];

    // register the theme: "hidden-header-theme"
    UI.registerTheme({
        "key": "hidden-header-theme",
        "title": "Hidden header Theme",
        "module": moduleId + "/hidden-header-theme/theme.js"
    });

});