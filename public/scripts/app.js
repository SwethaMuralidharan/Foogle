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

  function displayReviews(restId, arrOfReviews) {

    var answer= arrOfReviews.map(function(review) {
      //return `<p class="space">  ${ review.review_text } - ${ review.username } [${ review.created_at }]</p>`;
      return `
      <div class="row">
        <div class="col-sm-6">
              <p class="space">  ${ review.review_text } - ${ review.username }</p>
              <span class="edit-input" data-review-id=${ review._id }>
                <input type="text" name="review_text" value="${review.review_text}"/>
                <input type="text" name="username" value="${review.username}"/>
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

         <p class="space">  ${displayReviews(restaurants[i]._id, restaurants[i].reviews) } </p>

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


   $("#results").on('click',".btndelete",function(e){
     console.log("delete button clicked for review - id:",$(this).attr('data-review-id'));
     console.log("delete button clicked for review - id:",$(this).attr('data-rest-id'));
     $.ajax({
       method:'DELETE',
       url:'/api/restaurants/'+ $(this).attr('data-rest-id')+'/reviews/'+$(this).attr('data-review-id'),
       success:handleDeleteSuccess,
       error:function(err){
         console.log("Error in deleting review ",err);
       }
     })
   })
   function handleDeleteSuccess(data){
     alert("Review deleted");
   }
   $("#results").on('click',".btnedit",function(e){
     $(".col-sm-6").find('[data-review-id="'+$(this).attr('data-review-id')+'"]').show();
   })

   $("#results").on('click',".edit-review-submit-button",function(){
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

   })
   function handleUpdateSuccess(data){
     
   }
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
