document.querySelector('.open_list1').addEventListener('click', function() {
    toggleBlock('field-for_list1','arrow1');
});
document.querySelector('.open_list2').addEventListener('click', function() {
    toggleBlock('field-for_list2','arrow2');
});
document.querySelector('.open_list3').addEventListener('click', function() {
    toggleBlock('field-for_list3','arrow3');
});
document.querySelector('.open_list4').addEventListener('click', function() {
    toggleBlock('field-for_list4','arrow4');
});



function toggleBlock(props1,props2) {
    let block = document.getElementById(props1);
    let arrow = document.getElementById(props2)
    block.classList.toggle('display');
    arrow.classList.toggle('rotate');
}