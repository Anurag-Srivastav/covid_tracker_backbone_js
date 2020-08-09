var NationalView = Backbone.View.extend({
    tagname:"li",
    initialize: function(data){
        this.template = _.template($(".country-list-template").html())
    },
    events:{
        "click #details": "onClickDetails"
    },
    onClickDetails: function(){
        var view = new CountryModalView({model : this.model})
        $(view.$el).modal('show')
        view.render()
    },
    render: function(){
        // console.log(this.$el)
        this.$el.html(this.template(this.model.toJSON()))
        return this
    }
})
