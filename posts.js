$(document).ready(function() {
    let parId = getQueryParam("id");
    // AJAX request to fetch data
    $.ajax({
        url: api_url + '/posts',

        method: 'POST', // Ensure the method is POST
        contentType: 'application/json', // Specify the content type
            data: JSON.stringify({
                topic_id: parId
            }),
        success: function(response) {
            // Clear existing table data
            //$('#tablecontainer1').empty();
            // Loop through the response data and append rows to the table
            $.each(response.posts, function(index, item) {
                $('#table-body').append('<tr><td>' + item._id + '</td><td><a href="/post.html?id=' + item._id + '">' + item.title + '</a></td><td>' + item.content + '</td><td>' + username + '</td></tr>');
            });
            

        },
        error: function(xhr, status, error) {
            console.error(xhr.responseText);
            // Handle error if any
        }
    });

});
function getUsernameById(userId) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: api_url + '/getUserById',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ userId: userId }),
            success: function(response) {
                resolve(response);
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
                reject(error);
            }
        });
    });
}