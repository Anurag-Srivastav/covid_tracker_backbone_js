var GlobalView = Backbone.View.extend({
    initialize: function(data){
        this.template = _.template($(".global-data-template").html())
    },
    render: function(){
        console.log(this.model);
        this.$el.html(this.template(this.model.toJSON()))
        return this;
    }
})