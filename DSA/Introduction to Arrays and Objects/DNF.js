//Consider a scenario in which we have array of 0's and 1's shuffled.
//The problem is to write a function that we can rearrange the data such that all the O's present before 1's.

//Eg = [1,0,1,0,0,1,1,0,1] --> 

//Condition is to not create array and do the rearrangement by reading/accessing by reading/accessing the whole array once

function sortzeroone(nums){
    //logic is to keep one index at start and one at end of the array and keep on checking elements
    //if the combination of elements need to be swapped then do the swapping
    for(let i=0,j=nums.length-1;i<=j;){
        if(nums[i] === 0){
            i++;
        }else if(nums[j] === 1){
            j--;
        }else{
            //go ahead with swapping 
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j]= temp;
            i++;
            j--;
        }
    }
    console.log(nums);
}

sortzeroone([1,0,1,0,0,1,1,0,1]);