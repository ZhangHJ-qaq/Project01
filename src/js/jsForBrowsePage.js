$(function () {
    let China = ['Shanghai', 'Kunming', 'Beijing', 'Yantai'];
    let Japan = ['Tokyo', 'Osaka', 'Kamakura'];
    let Italy = ['Roma', 'Milan', 'Venice', 'Florence'];
    let America = ['New York', 'San Francisco', 'Washington'];

    $("#countryFilter").on("change", function () {
        if ($("#countryFilter").val() === "1") {
            addCitiesToCityFilter(China);
        } else if ($("#countryFilter").val() === "3") {
            addCitiesToCityFilter(Japan);
        } else if ($("#countryFilter").val() === "2") {
            addCitiesToCityFilter(Italy);
        } else if ($("#countryFilter").val() === "4") {
            addCitiesToCityFilter(America);
        }
        else if($("#countryFilter").val()==="0"){
            let cityFilter=$("#cityFilter");
            cityFilter.empty();
            cityFilter.append($("<option>Filter by Cites</option>"));
        }
    })
});

function addCitiesToCityFilter(country) {
    let cityFilter=$("#cityFilter");
    cityFilter.empty();
    cityFilter.append($("<option>Filter by Cites</option>"));
    for (let i = 0; i <= country.length - 1; i++) {
        cityFilter.append($("<option>"+country[i]+"</option>"))
    }
}