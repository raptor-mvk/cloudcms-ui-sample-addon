define(function(require, exports, module) {

    var Ratchet = require("ratchet/web");
    var Actions = require("ratchet/actions");

    return Actions.register("move-down", Ratchet.AbstractAction.extend({

        defaultConfiguration: function()
        {
            var config = this.base();

            config.title = "Move down";
            config.iconClass = "fa fa-arrow-down";

            return config;
        },

        execute: function(config, actionContext, callback)
        {
            let rows = actionContext.model.rows;
            if (actionContext.selectedItems.length === 0) {
                alert('No item is selected');
            }
            let rowId = actionContext.selectedItems[0].id;

            for (let i = 0; i < rows.length; i++) {
                if (rows[i].id === rowId) {
                    if (i > 0) {
                        let sort_order = rows[i].sort_order;
                        rows[i].sort_order = rows[i - 1].sort_order;
                        rows[i - 1].sort_order = sort_order;
                    } else {
                        alert ('Item is first already');
                    }
                }
            }
        }

    }));

});
