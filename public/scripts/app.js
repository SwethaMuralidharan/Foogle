console.log("Sanity Check");

$(document).ready(function(){

  $.ajax({
    method:'GET',
    url:'/api/restaurants',
    success:displayRestaurants,
    error:function(err){
      console.log("Error in getting all restaurants from database",err);
    }
  })

  function displayReviews(arrOfReviews) {

    var answer= arrOfReviews.map(function(review) {
      //return `<p class="space">  ${ review.review_text } - ${ review.username } [${ review.created_at }]</p>`;
      return `
      <div class="row">
        <div class="col-sm-6">
        <p class="space">  ${ review.review_text } - ${ review.username }</p>
        </div>
        <div class="col-sm-3">
        <button type="submit" class="btn btn-primary"> Update </button>
        </div>
        <div class="col-sm-3">
        <button type="submit" class="btn btn-primary"> Delete </button>
        </div>
      </div>
      `
    });
    return answer.join("");
  }

  function displayRestaurants(restaurants){
    for(i=0;i<restaurants.length;i++){

      $("#results").append(`

        <p class="restaurant" data-rest-id=${restaurants[i]._id}>
        <button class="accordion" data-rest-id=${restaurants[i]._id}> ${restaurants[i].name} </button></p>
         <div class="toggle" data-rest-id=${restaurants[i]._id}>

         <p class="space"> Name : ${restaurants[i].name} </p>
         <p class="space"> Cuisine : ${restaurants[i].cuisine} </p>
         <p class="space"> Location : ${restaurants[i].location} </p>
         <p class="space"> Price Range : ${restaurants[i].price_range} </p>
         <p class="space"> Service Time : ${restaurants[i].serviceTime} </p>
         <p class="space"> OperationHours : ${restaurants[i].OperationHours} </p>
         <hr>
         <p class="space"> <b>REVIEWS</b> </p>

         <p class="space">  ${displayReviews(restaurants[i].reviews) } </p>

         <form class="form-inlin addReviewForm" data-rest-id=${restaurants[i]._id}>
             <div class="form-group">

                <textarea rows="1" cols="20" class="input_margin"  name="username">
                  Name
                 </textarea>
                 <textarea rows="4" cols="50" name="review_text">
                 Post your review about this restaurant here.
                 </textarea>
             </div>
             <button type="submit" class="btn btn-primary btnpost">Post a Review</button>
         </form>
          </div>
      `)
    }
  }
  $("#results").on('click',".accordion",function(e){
    $('#results').find('[data-rest-id="' + $(this).attr('data-rest-id') + '"]').fadeIn();
  })

  $("#results").on('submit',".addReviewForm",function(e){
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      method:'POST',
      url:'/api/restaurants/'+$(this).attr('data-rest-id')+'/reviews',
      success:handleNewReview,
      data:$(this).serialize(),
      error:function(err){
        console.log("Error in posting review ", err);
      }
    })
    function handleNewReview(restaurant_info){
      console.log(restaurant_info);
      alert("Thanks for Reviewing!");
      $('textarea').val('');
      displayReviews([restaurant_info.reviews[restaurant_info.reviews.length-1]])
    }

  })

})
