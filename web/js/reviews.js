console.log("Loaded ========");

const reviewList = [
  {
    id: 1,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "John Doe",
    job: "Web Developer",
    img: "https://t4.ftcdn.net/jpg/02/91/24/27/360_F_291242770_z3XC7rJB1Mvc5jVMsEY9Dx2xMrX4sxUi.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatum.",
  },
  {
    id: 2,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Alice Smith",
    job: "Graphic Designer",
    img: "./images/review2.jpg",
    review:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 3,
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Bob Johnson",
    job: "Software Engineer",
    img: "./images/review3.jpg",
    review:
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const reviewerName = document.getElementById("reviewer_name");
const reviewerJob = document.getElementById("reviewer_job");
const reviewerText = document.getElementById("reviewer_text");
const reviewerImage = document.getElementById("review_image");
const reviewerprofilePic = document.getElementById("reviewer_profilePic");

let index = 0;

onReviewChange();

setInterval(function() {
  onReviewChange(true);
}, 7000);

function onReviewChange(isForward) {
  if (isForward && index < reviewList.length - 1) {
    ++index;
  } else if (!isForward && index > 0) {
    --index;
  } else {
    index = 0;
  }

  $("#reviewer_name").fadeOut(500, function () {
    $(this).text(reviewList[index].name).fadeIn(500);
  });
  $("#reviewer_job").fadeOut(500, function () {
    $(this).text(reviewList[index].job).fadeIn(500);
  });
  $("#reviewer_text").fadeOut(500, function () {
    $(this).text(reviewList[index].review).fadeIn(500);
  });
  $("#review_image").fadeOut(500, function () {
    $(this).attr("src", reviewList[index].img).fadeIn(500);
  });
  $("#reviewer_profilePic").fadeOut(500, function () {
    $(this).attr("src", reviewList[index].profilePic).fadeIn(500);
  });
}
