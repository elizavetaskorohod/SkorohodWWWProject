var fs = require('fs');
var cheerio = require("cheerio");
var axios = require("axios");

//go to website & makes website think that user is accessing dataa instead of axios
async function scrape() {
const axiosResponse = await axios.request({
    method: "GET",
    url: "https://www.speedrun.com/neon_white?h=Rebirth-PC-Movement&x=l_nwle8ood-5dwq1gld-dlo6xzml.21g3poxq",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
})

const $ = cheerio.load(axiosResponse.data);

const element = $(".x-leaderboard-table");

    const sdata = []

    //go to specific part of the website to get specific data, in this case its player username, in game time, date, and platform
    $(".x-leaderboard-table .x-custom-scrollbar-thin .w-full")
        .find("span")
        .each((index, element) => {
            // extracting the data of interest
            const player = $(element).find(".x-username").text()
            const IGT = $(element).find(".x-duration-unit").text()
            const date = $(element).find(".x-timestamp").text()
            const platform = $(element).find(".inline-flex").text()

            const sdata = {
                player: player,
                IGT: IGT,
                date: date,
                platform: platform,
            }

            sdata.push(sdata);
        })


//I think there is an issue with this section of code, but not really sure why
//gets data to go into json file and print result in console
fs.writeFile(JSON.stringify(sdata), function(err){
    if(err) { console.log(err); }
});
console.log(sdata);

//run the scrape function
scrape()
}