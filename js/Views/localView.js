var LocalView = Backbone.View.extend({
    initialize:function(data){
       this.template = _.template($(".states-list-template").html())
    },
    events:{
        "click #details": "onClickDetails"
    },
    onClickDetails: function(){
        var view = new ModalViews({collection : this.model.get('districtData')})
        $(view.el).modal('show')
        view.render()
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()))
        return this;
    }
})