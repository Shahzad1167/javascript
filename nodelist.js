//when we apply queryselector on dom it give us a particular elemnt 
//but for queryselctorall it give us NODELIST which an collection of all called elemnt
// and we can directly change innerhtml or style of nodelist so
// we apply foreach loop

// same in when we apply document.getelemntByClassName it give us HTML collection
//whic is object like array here we cannot apply style or change /
// either do like ele[0].style   for apply to first elemnt 
// to apply all we can not apply foreach loop on html collection 
// but can apply on nodelist, so what we do first change html collection to array 
// then apply foreach loop