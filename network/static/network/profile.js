document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons
    let unfollowBtn = document.querySelector('#unfollowBtn')
    if (unfollowBtn !== null) {
        unfollowBtn.onmouseover = function () {
            unfollowBtn.value = "Unfollow"
            unfollowBtn.className = "btn btn-outline-danger"
            unfollowBtn.style.backgroundColor = "none"
        }
        unfollowBtn.onmouseout = function () {
            unfollowBtn.value = "Following"
            unfollowBtn.className = "btn following-btn"
            unfollowBtn.style.backgroundColor = "none"
        }
    }

});