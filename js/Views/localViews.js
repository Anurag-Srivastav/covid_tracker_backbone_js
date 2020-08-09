var LocalViews = Backbone.View.extend({  
    initialize : function(data){
        this.collection.on("reset",this.render,this)
    },
    render: function(){
        var self = this;
        // console.log(this.collection)
        // console.log(this.$el)
        this.collection.each(function(localdata){
            var view = new LocalView({model:localdata})
            self.$el.append(view.render().$el)
        })
        return this;
    }
})