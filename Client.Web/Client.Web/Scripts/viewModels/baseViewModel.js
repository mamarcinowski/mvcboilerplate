$(function () {
    var Model = function () {
        var self = this;

        self.value = ko.observable(''),
        self.values = ko.observableArray()
    };

    Model.prototype = {
        showModal: function () {
            $('#theModal').modal('show');
        },
        processValue: function () {
            var self = this;
            console.log(self.value());
        }
    };

    var model = new Model();

    $(function () {
        ko.applyBindings(model);
    });
}());