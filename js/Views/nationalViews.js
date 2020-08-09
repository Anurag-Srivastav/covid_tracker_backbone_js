const NationalViews = Backbone.View.extend({
    tagname:"ul",
    initialize: function(data){
        // this.collection.on("reset",this.render,this)
    },
    render: function(){
        var self = this;
        // console.log("collection",this.collection)
        var c=0;
        this.collection.each(function(localdata){
            if(c!=0){
                var view = new NationalView({model:localdata})
                self.$el.append(view.render().$el)
            }
            c=1;
        })
        return this;
    }
})