$(document).ready(function() {
    // AJAX request to fetch data
    $.ajax({
        url: api_url + '/topics',
        method: 'POST', // Ensure the method is POST
        contentType: 'application/json',
        success: function(response) {
            // Clear existing table data
            //$('#tablecontainer1').empty();
            // Loop through the response data and append rows to the table
            $.each(response.topics, function(index, item) { $('#tablecontainer1 tbody').append('<tr><td>' + item._id + '</td><td><a href="/posts.html?id=' + item._id + '">' + item.topic_name + '</a></td><td>Posted by: ' + username + '</td></tr>');
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