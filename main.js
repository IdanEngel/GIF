

const fetch = () => {
    $("#container").empty()
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${$("input").val()}&api_key=BJCOWqEn78RZVRcVrAcc8yUH5xmKaJ3u&limit=10`,
        success: function (data) {
            console.log(data)
            for (let i in data.data) {
                $("#container").append(`<iframe src="${data.data[i].embed_url}">`)
            }
        }
    })
}