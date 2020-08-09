var Router = Backbone.Router.extend({
    routes:{
        "global" : "viewGlobal",
        "national" : "viewNational",
        "local" : "viewLocal"
    },
    viewGlobal : async () => {
        var globalData = new Globaldata();
        await globalData.fetch();
        // console.log(globalData)
        var view = new GlobalView({model: globalData});
        $("#Container").html(view.render().$el)
        $("#global").removeClass("text-light font-weight-bold")
        $("#local").addClass("text-light font-weight-bold")
        $("#national").addClass("text-light font-weight-bold")
        $("#global").addClass("active font-weight-bold")
    },
    viewNational : async () => {
        var countryData = new CountryDataCollection();
        await countryData.fetch();
        // console.log((countryData.models))
        var view = new NationalViews({collection : countryData});
        $("#Container").html(view.render().$el)
        $("#global").addClass("text-light font-weight-bold")
        $("#local").addClass("text-light font-weight-bold")
        $("#national").removeClass("text-light font-weight-bold")
        $("#national").addClass("active font-weight-bold")
    },
    viewLocal : function(){
        var localData = new LocalDataCollection();
        localData.fetch({wait: true, reset: true});
        // console.log(localData)
        var view = new LocalViews({collection : localData});
        $("#Container").html(view.el)
        $("#global").addClass("text-light font-weight-bold")
        $("#local").removeClass("text-light font-weight-bold")
        $("#national").addClass("text-light font-weight-bold")
        $("#local").addClass("active font-weight-bold")
    }
})