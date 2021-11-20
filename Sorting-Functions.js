//Standard Sorting function
function bubble_sort(nums){
    var temp = 0;
    for(let i = 0; i < nums.length;++i){
        for( let k = 0; k <nums.length-1;++k){
            if (nums[k] > nums[k+1]){
                temp = nums[k+1]
                nums[k+1] = nums[k]
                nums[k] = temp
            }
        }
    }
    return nums
}
//Cocktail Sort is similiar to bubble sort
//The only difference is that it goes forward and then backwards
function Cocktail_sort(nums){
    var temp = 0;
    var swapped = true;
    while (swapped){
        swapped = false;
        for(let i = 0; i<nums.length-1;++i){
            if (nums[i] > nums[i+1]){
                temp = nums[i+1]
                nums[i+1] = nums[k]
                nums[i] = temp;
                swapped = true;
            }
        }
        for(let k = nums.length-1;k>=0;--k){
            if(nums[k] < nums[k-1]){
                temp = nums[k-1]
                nums[k-1] = nums[k]
                nums[k] = temp
                swapped = true;
            }
        }
    }
    return nums
}
//QuickSort sorts the array by splitting the array into smaller and larger values
//A pivot is a number that will be used to determine what's smaller and larger
//One of the best practice of selecting the pivot is to choose the middle of the array
function Quick_Sort(nums){
    if (nums.length == 1 || nums.length == 0){
        return nums
    }
    var left = []
    var right = []
    var pivot = Math.round(nums.length/2)-1;
    for(let i =0; i < nums.length;++i){
        if(nums[i] <= nums[pivot]){
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }
    return Quick_Sort(left).concat(Quick_Sort(right))
}
function Get_Digit(num,count){
    var x = num % Math.pow(10,count);
    var y = x/ Math.pow(10,count-1);
    return Math.floor(y)
}
function Prefix_Sum(nums){
    for(let i = 1; i< nums.length;++i){
        nums[i] = nums[i] + nums[i-1];
    }
    return nums;
}
function Highest_Digit(nums){
    var largest = 0;
    for(let i = 0; i < nums.length;++i){
        largest = largest*(largest>nums[i]) + nums[i]*(nums[i]>= largest);
    }

    return largest.toString().length;
}
//Radix sort is a sorting algorithm that doesn't compare any elements
//It sorts values by looking at the digits and putting them where they belong
//Fastest sort when used by really large arrays
function Radix_Sort(nums){
    var buckets =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    var new_nums = Array.from(nums);
    var count = 1;
    var digit = 0;
    var idx = 0;
    var stop = Highest_Digit(nums);
    //Counting the digits that appear in the array
    while (count <= stop){
        for(let i = 0; i< nums.length; ++i){
            digit = Get_Digit(nums[i],count);
            buckets[digit] +=1;
        }
        //Prefix Sum is to get the index for the new_nums array
        Prefix_Sum(buckets);
        //Getting the digits and index and placing them into the corresponding new_nums
        for(let k = nums.length-1; k>=0; --k){
            digit = Get_Digit(nums[k],count);
            buckets[digit]-=1
            idx = buckets[digit];
            new_nums[idx] = nums[k];
        }
        //nums will equal new_nums and resetting the buckets to count the digits again
        nums = Array.from(new_nums);
        buckets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        count+=1
    }
    return nums;
}