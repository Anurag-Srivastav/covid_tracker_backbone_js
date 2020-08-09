var ModalView = Backbone.View.extend({
    initialize: function(){
        this.template = _.template($(".single-modal-template").html())
    },
    render: function(){
        this.$el.html(this.template(this.model))
        return this
        // console.log(this.model)
    }
})