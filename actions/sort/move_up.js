define(function(require, exports, module) {

    var Ratchet = require("ratchet/web");
    var Actions = require("ratchet/actions");

    return Actions.register("move-up", Ratchet.AbstractAction.extend({

        defaultConfiguration: function()
        {
            var config = this.base();

            config.title = "Move up";
            config.iconClass = "fa fa-arrow-up";

            return config;
        },

        execute: function(config, actionContext, callback)
        {
            let rows = actionContext.model.rows;
            if (actionContext.selectedItems.length === 0) {
                alert('No item is selected');
            }
            let rowId = actionContext.selectedItems[0].id;
            console.log(rowId);

            for (let i = 0; i < rows.length; i++) {
                if (rows[i].id === rowId) {
                    console.log(rows[i].sort_order);
                    if (i > 0) {
                        let sort_order = rows[i].sort_order;
                        rows[i].sort_order = rows[i - 1].sort_order;
                        rows[i - 1].sort_order = sort_order;
                        console.log(rows[i]);
                        console.log(rows[i-1]);
                    } else {
                        alert ('Item is first already');
                    }
                    break;
                }
            }
        }

    }));

});
