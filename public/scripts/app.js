console.log("Sanity Check");

$(document).ready(function(){

  var allrestaurants = [];

  $.ajax({
    method:'GET',
    url:'/api/restaurants',
    success:handleSuccess,
    error:function(err){
      console.log("Error in getting all restaurants from database",err);
    }
  })

  $("#results").on('click',".accordion",function(e){
    $(this).parent().siblings(".toggle").fadeOut();//hides all other restaurants
    $('#results').find('[data-rest-id="' + $(this).attr('data-rest-id') + '"]').fadeIn();// shows selected restaurant
  })

  $("#results").on('submit',".addReviewForm",function(e){
    console.log($(this).serialize());
    e.preventDefault();
    $.ajax({
      method:'POST',
      url:'/api/restaurants/'+$(this).attr('data-rest-id')+'/reviews',
      success:handleNewReview,
      data:$(this).serialize(),
      error:function(err){
        console.log("Error in posting review ", err);
      }
    })
  })

  $("#results").on('click',".btnedit",function(e){
    $(".col-sm-6").find('[data-review-id="'+$(this).attr('data-review-id')+'"]').show();//shows the span to edit info
    $(this).parent().siblings().find(".space").hide();//hides the existing content shown.
  })

  $("#results").on('click',".btndelete",function(e){
     $.ajax({
       method:'DELETE',
       url:'/api/restaurants/'+ $(this).attr('data-rest-id')+'/reviews/'+$(this).attr('data-review-id'),
       success:handleDeleteSuccess,
       error:function(err){
         console.log("Error in deleting review ",err);
       }
     })
  })

   $("#results").on('click',".edit-review-submit-button",function(){
     //get values from 2 input tags and concatenate to send data
     let value1="review_text=" +$(".col-sm-6").find('[data-review-id="'+$(this).attr('data-review-id')+'"]').find("input")[0].value;
     let value2="username=" + $(".col-sm-6").find('[data-review-id="'+$(this).attr('data-review-id')+'"]').find("input")[1].value;
     newvalues=value1+"&"+value2;
     $.ajax({
       method:'PUT',
       url:'/api/restaurants/'+ $(this).attr('data-rest-id')+'/reviews/'+$(this).attr('data-review-id'),
       data:newvalues,
       success:handleUpdateSuccess,
       error:function(err){
         console.log("update error",err);
       }
     })

     $(".col-sm-6").find('[data-review-id="'+$(this).attr('data-review-id')+'"]').hide();// hides the editable span
     $(this).parent().siblings(".space").show();//shows the updated text
   })


   function handleDeleteSuccess(restaurant_info){
     var res = restaurant_info;
     var restId = res._id;

     // find the restaurant with the correct ID and show reviews except the deleted one.
     for(var index = 0; index < allrestaurants.length; index++) {
       if(allrestaurants[index]._id === restId) {
         allrestaurants[index] = res;
         break;
       }
     }
     displayRestaurants(allrestaurants);
     $('#results').find('[data-rest-id="' + restId + '"]').fadeIn();// shows selected restaurant
   }

   function handleUpdateSuccess(updatedreview){
     var review = updatedreview;
     var reviewID = review._id;
     var restId;
     // find the review with the correct ID and update it with the updated review
     for(var index = 0; index < allrestaurants.length; index++) {
       for(var j=0;j<allrestaurants[index].reviews.length;j++) {
         if(allrestaurants[index].reviews[j]._id === reviewID) {
           restId=allrestaurants[index]._id;
           allrestaurants[index].reviews[j] = review;
           break;
         }
       }
     }
     displayRestaurants(allrestaurants);
     $('#results').find('[data-rest-id="' + restId + '"]').fadeIn();// shows selected restaurant
   }

   function handleNewReview(restaurant_info){
     var res = restaurant_info;
     var restId = res._id;
     // find the restaurant with the correct ID and update it with the new review
     for(var index = 0; index < allrestaurants.length; index++) {
       if(allrestaurants[index]._id === restId) {
         allrestaurants[index] = res;
         break;
       }
     }
     displayRestaurants(allrestaurants);
     $('#results').find('[data-rest-id="' + restId + '"]').fadeIn();// shows selected restaurant
   }

   function displayRestaurants(restaurants){
    $("#results").empty();
    for(i=0;i<restaurants.length;i++){
      $("#results").append(`
        <p class="restaurant" data-rest-id=${restaurants[i]._id}>
        <button class="accordion"  data-rest-id=${restaurants[i]._id}> ${restaurants[i].name}
        </button></p>
         <div class="toggle" data-rest-id=${restaurants[i]._id}>

         <div class="wrapper">
         <button type="button" data-rest-id=${restaurants[i]._id} class="btn btn-light editButton"><i class="far fa-edit fa-lg"></i></button>
         <button type="button" data-rest-id=${restaurants[i]._id} class="btn btn-light deleteButton"><i class="far fa-trash-alt fa-lg"></i></button>
         </div>

         <p class="space"> Name :  ${restaurants[i].name} </p>
         <p class="cuisine"> Cuisine : <b> ${restaurants[i].cuisine} </b> </p>
         <p class="space"> Location : ${restaurants[i].location} </p>
         <p class="space"> Price Range : ${restaurants[i].price_range} </p>
         <p class="space"> Service Time : ${restaurants[i].serviceTime} </p>
         <p class="space"> OperationHours : ${restaurants[i].OperationHours} </p>
         <hr>
         <p class="space"> <b>REVIEWS</b> </p>

         <p class="space">  ${displayReviews(restaurants[i]._id, restaurants[i].reviews) } </p>

         <form class="form-inline addReviewForm" data-rest-id=${restaurants[i]._id}>
         <div class="form-group">
             <textarea name="username" class="name"  placeholder="Name" required></textarea>
             <textarea name = "review_text"  class="comment"  placeholder = "Post your review here for this restaurant" required ></textarea>
             <button type="submit" class="btn btn-primary btnpost">Post a Review</button>
        </div>
         </form>
          </div>
      `)

    }
  }

  function displayReviews(restId, arrOfReviews) {
    var answer= arrOfReviews.map(function(review) {
      return `
      <div class="row">
        <div class="col-sm-6">
              <p class="space">  ${ review.review_text } - ${ review.username }</p>
              <span class="edit-input" data-review-id=${ review._id }>
                <label name="review">ReviewText</label>
                <input type="text" name="review_text" class="inputtag" value="${review.review_text}"/><br>
                <label name="username">  User  name </label>
                <input type="text" name="username" class="inputtag" value="${review.username}"/><br>
                <button class="edit-review-submit-button" data-review-id="${review._id}" data-rest-id=${restId}> Save </button>
              </span>
        </div>
        <div class="col-sm-3">
            <button type="submit" class="btn btn-primary btnedit" data-review-id=${ review._id } data-rest-id=${restId}> Update </button>
        </div>
        <div class="col-sm-3">
            <button type="submit" class="btn btn-primary btndelete" data-review-id=${ review._id } data-rest-id=${restId}> Delete </button>
        </div>
      </div>
      `
    });
    return answer.join("");
  }

  function handleSuccess(json) {
    allrestaurants = json;
    displayRestaurants(allrestaurants);
  }

  $("#txtSearch").on("keyup", function() {
    var value = $("#txtSearch").val().toLowerCase();
    $("#results > p.restaurant").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    if (!this.value) {
      $("#txtSearch").val('');
      displayRestaurants(allrestaurants);
    }
  });

  $("#txtSearchbyCuisine").on("click",function(){
   var value = $("#cuisineSearch").val().toLowerCase();
    for(i=0;i<allrestaurants.length;i++){
      if(allrestaurants[i].cuisine.toLowerCase()==value){
        $("#results > p.restaurant").fadeOut();
        $('#results').find('[data-rest-id="' + allrestaurants[i]._id + '"]').fadeIn();
      }
    }
  })

  $("#cuisineSearch").on("keyup",function(){
    if (!this.value) {
    $("#cuisineSearch").val('');
    displayRestaurants(allrestaurants);
  }
  })

  $("#addnew").on("click",function(){
    $('#NewModal').modal();
  })

  $('#saveRestaurant').on('click', function(e) {
  e.preventDefault();
  var $modal = $('#NewModal');
  var $NameField = $modal.find('#Name');
  var $CuisineField = $modal.find('#Cuisine');
  var $LocationField = $modal.find('#Location');
  var $ServiceTimeField = $modal.find('#ServiceTime');
  var $PriceRangeField = $modal.find('#PriceRange');
  var $OperationHoursField = $modal.find('#OperationHours');

  var postData = {
    name: $NameField.val(),
    location: $LocationField.val(),
    price_range: $PriceRangeField.val(),
    serviceTime: $ServiceTimeField.val(),
    cuisine: $CuisineField.val(),
    OperationHours: $OperationHoursField.val()
  };

  // POST to SERVER
  console.log(postData);
  $.ajax({
    method:'POST',
    url:'/api/restaurants',
    data:postData,
    success:function(data){
      allrestaurants.push(data);
      displayRestaurants(allrestaurants);
    }
  })

  })
  $("#results").on('click',".deleteButton",function(){
    var url='/api/restaurants/'+$(this).attr('data-rest-id');
    console.log(url);
    $.ajax({
      method: 'delete',
      url: '/api/restaurants/'+$(this).attr('data-rest-id'),
      success: deleteRestaurantSuccess,
      error: function(err){
        console.log("Error in deleting restaurant from the database.")
      }
    });
  })
  function deleteRestaurantSuccess(json) {
    var Restaurant = json;
    var RestaurantId = Restaurant._id;
    for(var index = 0; index < allrestaurants.length; index++) {
      if(allrestaurants[index]._id === RestaurantId) {
        allrestaurants.splice(index, 1);
        break;
      }
    }
    displayRestaurants(allrestaurants);
  }
})
