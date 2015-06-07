// function bubbleSort(arr) {

// 	this.totalSwaps = 0;
// 	// this.comparisons = 0;

// 	console.log(arr);

// 		do {
// 			var localSwap = 0;
// 			for (var i = 0; i < arr.length; i++) {

// 				// this.comparisons++;

// 				if (arr[i] > arr[i+1]) {
// 					var nextItem = arr[i+1];
// 					arr[i+1] = arr[i];
// 					arr[i] = nextItem;
// 					// localSwap++;
// 					localSwap++;

// 					// console.log(arr);
// 					// console.log("swaps", localSwap);
// 				}
// 			}
// 			this.totalSwaps += localSwap;
// 			// console.log(this.totalSwaps);
// 		} while (localSwap !== 0);

// 	return arr;
// }		

// function merge(firstHalf, secondHalf) {

// 	var mergedArray = [];
// 	var leftCount = 0;
// 	var rightCount = 0;;

// 	while(firstHalf.length && secondHalf.length){
// 		if(firstHalf[0] < secondHalf[0]) mergedArray.push(firstHalf.shift());
// 		else mergedArray.push(secondHalf.shift());
// 	};

// 	if(firstHalf.length === 0 && secondHalf>0){
// 		mergedArray = mergedArray.concat(secondHalf);
// 	} else {
// 		mergedArray = mergedArray.concat(firstHalf);
// 	}
// 	console.log(mergedArray);
// 	return mergedArray;
// }


// function split(arr){
// 	var middle = Math.ceil(arr.length/2);
// 	var newArray=[];
// 	newArray[0]=arr.slice(0,middle);
// 	newArray[1]=arr.slice(middle);
// 	return newArray;
// }

// function mergeSort(array) {

// 	// base case
// 	if (array.length <= 1) {
// 		return array;
// 	}

// 	var left = split(array)[0];
// 	var right = split(array)[1];
		
// 	left = mergeSort(left)
//     right = mergeSort(right)


// 	return merge(left, right);

// }

//Answer
function bubbleSort(arr){
	if(!arr.length) return arr;
	var swap=function(i,j){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]]=temp;
	};

	var swapsPerformedOnLastRunThrough, i, l=arr.length;

	while(swapsPerformedOnLastRunThrough !==0){
		for(i=0;i<l-1;i++){
			if(arr[i]>arr[i+1]){
				swap(i,i+1);
				swapsPerformedOnLastRunThrough++;
			}
		}
	}
	return arr;
}

function merge(left,right){
	var merged=[];
	while(left.length ||right.length){
		if(!left.length){
			return merged.concat(right);

		}else if (!right.length){
			return merged.concat(left);

		}else{
		if(left[0]<right[0]){
			merged.push(left.shift());
		}else{
			merged.push(right.shift());
		}
	}
	}

}

function split(arr){
	if(!arr.length) return [];
	if(arr.length===1)return [arr,[]]
		var halfwayIndex=Math.floor(arr.length/2);
	return[arr.slice(0,halfwayIndex),arr.slice(halfwayIndex)];

}

function mergeSort(arr){
	if(arr.length<=1) return arr;
	var arrHalved=split(arr);
	var left=arrHalved[0];
	var right=arrHalved[1];

	var leftSorted=mergeSort(left);
	var rightSorted=mergeSort(right);
	return merge(leftSorted,rightSorted);
}
// a lot faster than bubble sort.


//ex.of native sort
// ['some array items'].sort(function (a,b){
// 	return b-a;
// 	}





























