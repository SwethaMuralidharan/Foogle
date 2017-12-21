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
        <p class="space">  ${ review.review_text } - ${ review.username } [${ review.updatedAt }]</p>
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
        <button class="accordion" data-rest-id=${restaurants[i]._id} > ${restaurants[i].name}</button></p>
         <div class="toggle" data-rest-id=${restaurants[i]._id}>

         <p class="space"> Name : ${restaurants[i].name} </p>
         <p class="space"> Cuisine : ${restaurants[i].cuisine} </p>
         <p class="space"> Location : ${restaurants[i].location} </p>
         <p class="space"> Price Range : ${restaurants[i].price_range} </p>
         <p class="space"> Service Time : ${restaurants[i].serviceTime} </p>
         <p class="space"> OperationHours : ${restaurants[i].OperationHours} </p>
         <p class="header"> Reviews </p>

         <p class="space">  ${displayReviews(restaurants[i].reviews) } </p>

         <textarea rows="4" cols="50">
          Post your review about this restaurant here.
         </textarea>
         <button type="submit" class="btn btn-primary btnpost"> Post a Review </button>
          </div>
      `)
    }
  }
  $("#results").on('click',".accordion",function(e){
    $('#results').find('[data-rest-id="' + $(this).attr('data-rest-id') + '"]').fadeIn();
  })


})
