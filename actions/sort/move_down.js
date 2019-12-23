define(function(require, exports, module) {

    var Ratchet = require("ratchet/web");
    var Actions = require("ratchet/actions");
    const $ = require("jquery");

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
            if ($('.list-button-sort-selector').text() !== 'Sort order...') {
                alert('List should be sorted by sort order to use arrows');
                return;
            }
            let rows = actionContext.model.rows;
            let rowId = actionContext.selectedId;

            for (let i = 0; i < rows.length; i++) {
                if (rows[i].id === rowId) {
                    if (i < rows.length - 1) {
                        let sort_order = rows[i].sort_order;
                        rows[i].sort_order = rows[i + 1].sort_order;
                        rows[i + 1].sort_order = sort_order;
                        rows[i].update();
                        rows[i + 1].update();
                        $('.list-button-sort-field-sort_order').click();
                        console.log('Moved down ' + rowId);
                    } else {
                        alert ('Item is last already');
                    }
                    break;
                }
            }
        }

    }));

});
