define(function(require, exports, module) {

    var Ratchet = require("ratchet/web");
    var Actions = require("ratchet/actions");
    var $ = require("jquery");

    var OneTeam = require("oneteam");

    return Actions.register("move-up", Ratchet.AbstractAction.extend({

        defaultConfiguration: function()
        {
            var config = this.base();

            config.title = "Move up";
            config.iconClass = "fas fa-arrow-up";

            return config;
        },

        execute: function(config, actionContext, callback)
        {
            var self = this;
            var ratchet = actionContext.ratchet;

            var project = actionContext.observable("project").get();
            var document = actionContext.observable("document").get();

            console.log(actionContext);
        }

    }));

});
