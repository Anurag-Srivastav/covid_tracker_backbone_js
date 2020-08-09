var Globaldata = Backbone.Model.extend({
    defaults:{
        cases: 0,
        deaths: 0,
        active: 0,
        recovered: 0
    },
    urlRoot : "https://coronavirus-19-api.herokuapp.com/all"
})