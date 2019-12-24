define(function(require, exports, module) {

    var Ratchet = require("ratchet/web");
    var Actions = require("ratchet/actions");
    const $ = require("jquery");

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
            if ($('.list-button-sort-selector').text().trim() !== 'Sort order...') {
                alert('List should be sorted by sort order to use arrows');
                return;
            }
            let rows = actionContext.model.rows;
            let rowId = actionContext.selectedId;

            for (let i = 0; i < rows.length; i++) {
                if (rows[i].id === rowId) {
                    if (i > 0) {
                        let sort_order = rows[i].sort_order;
                        rows[i].sort_order = rows[i - 1].sort_order;
                        rows[i - 1].sort_order = sort_order;
                        rows[i].update();
                        rows[i - 1].update();
                        $('.list-button-sort-field-sort_order').click();
                        console.log('Moved up ' + rowId);
                    } else {
                        alert ('Item is first already');
                    }
                    break;
                }
            }
        }

    }));

});
