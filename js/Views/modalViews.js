var ModalViews = Backbone.View.extend({
    className:"modal",
    attributes:{
        id:"exampleModalLong",
        tabindex : "-1",
        role : "dialog"
    },
    initialize: function(data){
        // console.log(this.model)
        this.template = _.template($(".modal-template").html())
    },
    render: function(){
        var self = this;
        // console.log(this.collection)
        this.$el.html(this.template())
        this.collection.forEach(function(todo){
            var view = new ModalView({model : todo})
            self.$el.find('.modal-body').append(view.render().$el)
        })
        // console.log(this)
        return this
    }
})