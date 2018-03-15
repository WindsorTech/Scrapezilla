// Making a request call for nhl.com's homepage
request("https://www.nhl.com/", function(error, response, html) {

  // Load the body of the HTML into cheerio
  var $ = cheerio.load(html);

  // Empty array to save our scraped data
  var result = [];

  // With cheerio, find each h4-tag with the class "headline-link"
  $("h4.headline-link").each(function(i, element) {

    // Save the text of the h4-tag as "title"
    var title = $(this).text();

    // Find the h4 tag's parent a-tag, and save it's href value as "link"
    var link = $(element).parent().attr("href");

    // For each h4-tag, make an object with data we scraped and push it to the result array
    result.push({
      title: title,
      link: link
    });

  });

  // After the program scans each h4.headline-link, log the result
  console.log(html);
});

//=============================================================//
//=============================================================//

// Run request to grab the HTML from awwards's clean website section
request("http://www.awwwards.com/websites/clean/", function(error, response, html) {

  // Load the HTML into cheerio
  var $ = cheerio.load(html);

  // Make an empty array for saving our scraped info
  var result = [];

  // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
  $("figure.site").each(function(i, element) {

    /* Cheerio's find method will "find" the first matching child element in a parent.
     *    We start at the current element, then "find" its first child a-tag.
     *    Then, we "find" the lone child img-tag in that a-tag.
     *    Then, .attr grabs the imgs src value.
     * So: <figure>  ->  <a>  ->  <img src="link">  ->  "link"  */
    var imgLink = $(element).find("a").find("img").attr("src");

    // Push the image's URL (saved to the imgLink var) into the result array
    result.push({ Link: imgLink });
  });

  // With each link scraped, log the result to the console
  console.log(result);
});

//===========================================================//
//===========================================================//
//===========================================================//


