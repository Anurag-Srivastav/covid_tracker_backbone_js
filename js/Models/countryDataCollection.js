var CountryDataCollection = Backbone.Collection.extend({
    model: CountryData,
    url : "https://coronavirus-19-api.herokuapp.com/countries"
})