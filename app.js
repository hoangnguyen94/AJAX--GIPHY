const $searchInput = $( "#search" );
const $gifArea = $( "#gifs" );

// use ajax result to add a gif
function addGif ( gifData )
{
    let numResults = gifData.data.length;
    if ( numResults )
    {
        let randomIdx = Math.floor( Math.random() * numResults );
        let $newCol = $( "<div>", { class: "col-md-4 col-12 mb-4" } );
        let $newGif = $( "<img>", {
            src: gifData.data[ randomIdx ].images.original.url,
            class: "w-100"
        } );
        $newCol.append( $newGif );
        $gifArea.append($newCol)
    }
}
// form submission: clear search box and make ajax request
$( "form" ).on( "submit", async function ( evt )
{
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val( "" );
    const response = await axios.get( "http://api.giphy.com/v1/gifs/search",
        {
            params: {
                q: searchTerm,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" 
            }
        }
    )
    addGif(response.data)
})
// remove gifs
$( "#remove" ).on( "click", function ()
{
    $gifArea.empty();
})
console.log( "Let's get this party started!" );